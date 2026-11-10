// s12-av2 — Moteur de filtres croisés : texte ET tag ET prix maximum
// Démo : filtres-croises.html (données de lieux romands inventées)

const lieux = [
  { id: 1, titre: "Bains des Pâquis", commune: "Genève", tag: "lac", prix: 2 },
  { id: 2, titre: "Plage de Vidy", commune: "Lausanne", tag: "lac", prix: 0 },
  { id: 3, titre: "Château de Grandson", commune: "Grandson", tag: "patrimoine", prix: 15 },
  { id: 4, titre: "Musée de l'horlogerie", commune: "Le Locle", tag: "patrimoine", prix: 18 },
  { id: 5, titre: "Pinte du Lavaux", commune: "Chexbres", tag: "table", prix: 42 },
  { id: 6, titre: "Buvette du lac de Joux", commune: "Le Pont", tag: "lac", prix: 25 },
  { id: 7, titre: "Café du Marché", commune: "Fribourg", tag: "table", prix: 19 },
  { id: 8, titre: "Fondation Gianadda", commune: "Martigny", tag: "patrimoine", prix: 22 }
];

// 1. UN seul objet d'état pour les 3 critères
const criteres = { texte: "", tag: "tous", prixMax: 50 };

// 2. Le prédicat : vrai seulement si les 3 conditions sont vraies (&&)
function itemCorrespondAuxCriteres(item) {
  const texteOk =
    criteres.texte === "" ||
    item.titre.toLowerCase().includes(criteres.texte) ||
    item.commune.toLowerCase().includes(criteres.texte);
  const tagOk = criteres.tag === "tous" || item.tag === criteres.tag;
  const prixOk = item.prix <= criteres.prixMax;
  return texteOk && tagOk && prixOk;
}

// 3. Le rendu (createElement + textContent, pas d'innerHTML)
function afficher(liste) {
  const conteneur = document.getElementById("resultats");
  const compteur = document.getElementById("compteur");
  conteneur.textContent = "";
  compteur.textContent = liste.length + " résultat" + (liste.length > 1 ? "s" : "");
  if (liste.length === 0) {
    const vide = document.createElement("li");
    vide.textContent = "Aucun lieu ne correspond à ces 3 critères. Élargis le prix ou change de catégorie.";
    conteneur.append(vide);
    return;
  }
  liste.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item.titre + " — " + item.commune + " · " + item.tag + " · " + item.prix + " CHF";
    conteneur.append(li);
  });
}

function rafraichir() {
  afficher(lieux.filter(itemCorrespondAuxCriteres));
}

// 4. Trois écouteurs, chacun ne modifie QUE son critère, puis tout est recalculé
document.getElementById("f-texte").addEventListener("input", function (e) {
  criteres.texte = e.target.value.toLowerCase().trim();
  rafraichir();
});
document.getElementById("f-tag").addEventListener("change", function (e) {
  criteres.tag = e.target.value;
  rafraichir();
});
document.getElementById("f-prix").addEventListener("input", function (e) {
  criteres.prixMax = Number(e.target.value); // le curseur donne du TEXTE → Number()
  document.getElementById("f-prix-valeur").textContent = criteres.prixMax;
  rafraichir();
});

rafraichir();
