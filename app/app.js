// =========================================================
// Red Line — app.js
// s11 : fetch + 4 états (chargement, affichée, erreur, vide)
// s12 : recherche (input), filtres, tri, formulaire (submit + preventDefault)
// s13 : micro-interactions (feedback de clic, fiche en <dialog>)
// Pas de module, pas de bibliothèque, pas d'innerHTML.
// =========================================================

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");

// La pile de toutes les fiches. Vide tant que data.json n'est pas arrivé.
let tousLesLieux = [];

// L'état des filtres (s12-av2 : filtres croisés)
const criteres = {
  texte: "",
  humeur: "toutes",
  nouveauSeulement: false,
  tri: "id"
};

// ---------- Affichage des cartes ----------
function afficherLieux(liste) {
  conteneur.textContent = "";

  liste.forEach(function (playlist, index) {
    const carte = document.createElement("article");
    carte.className = "carte";
    carte.style.setProperty("--i", index); // décalage de l'apparition

    const humeur = document.createElement("p");
    humeur.className = "carte__humeur";
    humeur.textContent = playlist.humeur;

    const titre = document.createElement("h3");
    titre.className = "carte__titre";
    titre.textContent = playlist.titre;

    const meta = document.createElement("p");
    meta.className = "carte__meta";
    meta.textContent = playlist.morceaux + " morceaux · " + playlist.minutes + " min";

    const jauge = creerJauge("Énergie", playlist.energie);

    carte.append(humeur, titre, meta, jauge);

    if (playlist.nouveau) {
      const badge = document.createElement("p");
      badge.className = "carte__nouveau";
      badge.textContent = "Nouveau";
      carte.append(badge);
    }

    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "bouton carte__bouton";
    bouton.textContent = "Voir la playlist";
    bouton.dataset.id = playlist.id;
    bouton.setAttribute("aria-label", "Voir la playlist " + playlist.titre);
    carte.append(bouton);

    conteneur.append(carte);
  });
}

function creerJauge(libelle, valeur) {
  const ligne = document.createElement("p");
  ligne.className = "carte__jauge";
  const texte = document.createElement("span");
  texte.textContent = libelle + " " + valeur + " %";
  const barre = document.createElement("meter");
  barre.min = 0;
  barre.max = 100;
  barre.value = valeur;
  barre.setAttribute("aria-hidden", "true"); // le texte donne déjà la valeur
  ligne.append(texte, barre);
  return ligne;
}

// ---------- Chargement (s11) ----------
function montrerSquelettes() {
  conteneur.textContent = "";
  for (let i = 0; i < 6; i++) {
    const s = document.createElement("div");
    s.className = "squelette";
    s.setAttribute("aria-hidden", "true");
    conteneur.append(s);
  }
}

function chargerPlaylists() {
  zoneEtat.className = "etat";
  zoneEtat.textContent = "Chargement des playlists…";
  montrerSquelettes();

  fetch("data.json")
    .then(function (reponse) {
      if (!reponse.ok) {
        throw new Error("Fichier introuvable : code " + reponse.status);
      }
      return reponse.json();
    })
    .then(function (donnees) {
      zoneEtat.textContent = "";
      tousLesLieux = donnees;
      if (tousLesLieux.length === 0) {
        conteneur.textContent = "";
        zoneEtat.textContent = "Aucune playlist pour le moment.";
        return;
      }
      appliquerFiltres();
    })
    .catch(function (erreur) {
      console.error(erreur);
      conteneur.textContent = "";
      zoneEtat.className = "etat etat--erreur";
      zoneEtat.textContent = "Impossible de charger les playlists. Vérifie ta connexion et recharge la page.";
    });
}

// ---------- Recherche, filtres, tri (s12) ----------
function correspond(playlist) {
  const texte = criteres.texte;
  const dansTexte =
    texte === "" ||
    playlist.titre.toLowerCase().includes(texte) ||
    playlist.humeur.toLowerCase().includes(texte) ||
    playlist.tags.some(function (tag) { return tag.toLowerCase().includes(texte); });
  const bonneHumeur = criteres.humeur === "toutes" || playlist.humeur === criteres.humeur;
  const nouveauOk = !criteres.nouveauSeulement || playlist.nouveau;
  return dansTexte && bonneHumeur && nouveauOk;
}

function trier(liste) {
  const copie = liste.slice(); // on ne modifie jamais tousLesLieux
  if (criteres.tri === "energie-desc") copie.sort(function (a, b) { return b.energie - a.energie; });
  if (criteres.tri === "energie-asc") copie.sort(function (a, b) { return a.energie - b.energie; });
  if (criteres.tri === "minutes-asc") copie.sort(function (a, b) { return a.minutes - b.minutes; });
  return copie;
}

function appliquerFiltres() {
  const resultats = trier(tousLesLieux.filter(correspond));
  afficherLieux(resultats);

  if (resultats.length === 0) {
    zoneEtat.className = "etat";
    zoneEtat.textContent = "Aucune playlist ne correspond. Essaie « calme », « nuit » ou « piano ».";
  } else {
    zoneEtat.className = "etat";
    zoneEtat.textContent = resultats.length + " playlist" + (resultats.length > 1 ? "s" : "");
  }
}

// s12-av1 : anti-rebond, le filtre attend 250 ms après la dernière frappe
function debounce(action, attenteMs) {
  let minuteur;
  return function () {
    const args = arguments;
    clearTimeout(minuteur);
    minuteur = setTimeout(function () { action.apply(null, args); }, attenteMs);
  };
}

const champRecherche = document.getElementById("recherche");
champRecherche.addEventListener("input", debounce(function () {
  criteres.texte = champRecherche.value.toLowerCase().trim();
  appliquerFiltres();
}, 250));

document.getElementById("humeurs").addEventListener("click", function (event) {
  const puce = event.target.closest(".puce");
  if (!puce) return;
  document.querySelectorAll(".puce").forEach(function (p) {
    p.setAttribute("aria-pressed", String(p === puce));
  });
  criteres.humeur = puce.dataset.humeur;
  appliquerFiltres();
});

document.getElementById("filtre-nouveau").addEventListener("change", function (event) {
  criteres.nouveauSeulement = event.target.checked;
  appliquerFiltres();
});

document.getElementById("tri").addEventListener("change", function (event) {
  criteres.tri = event.target.value;
  appliquerFiltres();
});

// ---------- Fiche détaillée ----------
const dialogue = document.getElementById("detail");
let boutonOrigine = null;

conteneur.addEventListener("click", function (event) {
  const bouton = event.target.closest(".carte__bouton");
  if (!bouton) return;
  const playlist = tousLesLieux.find(function (p) { return p.id === Number(bouton.dataset.id); });
  if (!playlist) return;
  boutonOrigine = bouton;
  ouvrirDetail(playlist);
});

function ouvrirDetail(playlist) {
  document.getElementById("detail-humeur").textContent = playlist.humeur;
  document.getElementById("detail-titre").textContent = playlist.titre;
  document.getElementById("detail-description").textContent = playlist.description;
  document.getElementById("detail-energie").textContent = playlist.energie + " %";
  document.getElementById("detail-luminosite").textContent = playlist.luminosite + " %";
  document.getElementById("detail-morceaux").textContent = playlist.morceaux;
  document.getElementById("detail-minutes").textContent = playlist.minutes + " min";
  document.getElementById("detail-tags").textContent = playlist.tags.map(function (t) { return "#" + t; }).join("  ");
  const lire = document.getElementById("detail-lire");
  lire.textContent = "▶ Lire";
  lire.setAttribute("aria-pressed", "false");
  dialogue.showModal();
}

document.getElementById("detail-fermer").addEventListener("click", function () {
  dialogue.close();
});
dialogue.addEventListener("click", function (event) {
  if (event.target === dialogue) dialogue.close(); // clic sur le fond
});
dialogue.addEventListener("close", function () {
  if (boutonOrigine) boutonOrigine.focus(); // le focus revient à la carte
});

// Lecteur simulé : ▶ / ⏸ (micro-interaction)
document.getElementById("detail-lire").addEventListener("click", function (event) {
  const bouton = event.currentTarget;
  const enLecture = bouton.getAttribute("aria-pressed") === "true";
  bouton.setAttribute("aria-pressed", String(!enLecture));
  bouton.textContent = enLecture ? "▶ Lire" : "⏸ Pause";
});

// s13 : feedback de clic sur tous les boutons (classe 300 ms)
document.addEventListener("click", function (event) {
  const bouton = event.target.closest(".bouton");
  if (!bouton) return;
  bouton.classList.add("pris");
  setTimeout(function () { bouton.classList.remove("pris"); }, 300);
});

// ---------- Formulaire (s12) ----------
const formulaire = document.getElementById("form-proposition");
const champEnergie = document.getElementById("champ-energie");
champEnergie.addEventListener("input", function () {
  document.getElementById("valeur-energie").textContent = champEnergie.value;
});

function montrerErreur(champ, message) {
  const zone = document.getElementById(champ.getAttribute("aria-describedby"));
  if (message) {
    champ.setAttribute("aria-invalid", "true");
    zone.textContent = message;
    zone.hidden = false;
  } else {
    champ.removeAttribute("aria-invalid");
    zone.textContent = "";
    zone.hidden = true;
  }
}

function validerChamp(champ) {
  const valeur = champ.value.trim();
  if (champ.id === "champ-titre") {
    return valeur.length < 3 ? "Donne un titre à ta playlist (3 caractères minimum)." : "";
  }
  if (champ.id === "champ-humeur") {
    return valeur === "" ? "Choisis une humeur dans la liste." : "";
  }
  if (champ.id === "champ-tags") {
    const tags = valeur.split(",").map(function (t) { return t.trim(); }).filter(Boolean);
    if (tags.length === 0) return "Ajoute au moins un mot-clé.";
    if (tags.length > 3) return "3 mots-clés maximum (tu en as " + tags.length + ").";
  }
  return "";
}

const champsAValider = ["champ-titre", "champ-humeur", "champ-tags"].map(function (id) {
  return document.getElementById(id);
});

// L'erreur disparaît dès que le champ devient valide
champsAValider.forEach(function (champ) {
  champ.addEventListener("input", function () {
    if (champ.getAttribute("aria-invalid") === "true") montrerErreur(champ, validerChamp(champ));
  });
});

formulaire.addEventListener("submit", function (event) {
  event.preventDefault(); // la page ne se recharge pas, la saisie reste

  let premierInvalide = null;
  champsAValider.forEach(function (champ) {
    const message = validerChamp(champ);
    montrerErreur(champ, message);
    if (message && !premierInvalide) premierInvalide = champ;
  });

  const confirmation = document.getElementById("confirmation");
  if (premierInvalide) {
    confirmation.hidden = true;
    premierInvalide.focus();
    return;
  }

  const titre = document.getElementById("champ-titre").value.trim();
  const nouvelle = {
    id: tousLesLieux.reduce(function (max, p) { return Math.max(max, p.id); }, 0) + 1,
    titre: titre,
    humeur: document.getElementById("champ-humeur").value,
    energie: Number(champEnergie.value),
    luminosite: 50,
    description: "Playlist proposée depuis le formulaire.",
    tags: document.getElementById("champ-tags").value.split(",").map(function (t) { return t.trim(); }).filter(Boolean),
    morceaux: 0,
    minutes: 0,
    nouveau: true
  };
  tousLesLieux.unshift(nouvelle); // en mémoire seulement (pas de serveur)
  appliquerFiltres();

  confirmation.textContent = "Merci ! Ta playlist « " + titre + " » a été ajoutée en tête de la sélection.";
  confirmation.hidden = false;
  formulaire.reset();
  document.getElementById("valeur-energie").textContent = "50";
});

// ---------- Démarrage ----------
chargerPlaylists();
