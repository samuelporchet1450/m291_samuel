/* s03-av2 — Refactorisation « spaghetti » → État / Rendu / Événements
   Exemple : petit panier de billets de concert.

   AVANT (extrait typique d'un fichier monolithique) :
     document.getElementById("ajout-adulte").onclick = function () {
       var t = parseInt(document.getElementById("total").innerText);
       t = t + 25;
       document.getElementById("total").innerText = t;            // le DOM sert de mémoire !
       document.getElementById("liste").innerHTML += "<li>Adulte</li>";
       if (t > 100) document.getElementById("msg").style.display = "block";
     };
     ... même chose copiée-collée pour « enfant », « étudiant », « vider »…

   Problèmes : la vérité est stockée dans le HTML, le calcul est dupliqué,
   chaque bouton modifie l'écran à sa façon → bugs de désynchronisation (cf. e1-7, e1-8).
*/

// ─── 1. ÉTAT (STATE) : la seule source de vérité ────────────────────────
const TARIFS = { adulte: 25, etudiant: 15, enfant: 10 };
const SEUIL_REDUCTION = 100;

const state = {
  billets: [] // ex. ["adulte", "enfant"]
};

// ─── 2. LOGIQUE PURE (calculs, aucun DOM) ───────────────────────────────
function calculerTotal(billets) {
  const brut = billets.reduce(function (somme, type) {
    return somme + TARIFS[type];
  }, 0);
  return brut > SEUIL_REDUCTION ? Math.round(brut * 0.9) : brut;
}

// ─── 3. RENDU (RENDER) : l'écran est recalculé depuis l'état ─────────────
const els = {
  liste: document.getElementById("liste"),
  total: document.getElementById("total"),
  message: document.getElementById("message")
};

function render() {
  els.liste.innerHTML = "";
  state.billets.forEach(function (type, index) {
    const li = document.createElement("li");
    li.textContent = type + " — " + TARIFS[type] + " CHF ";
    const retirer = document.createElement("button");
    retirer.type = "button";
    retirer.textContent = "Retirer";
    retirer.dataset.index = index;
    retirer.setAttribute("aria-label", "Retirer le billet " + type);
    li.appendChild(retirer);
    els.liste.appendChild(li);
  });

  const total = calculerTotal(state.billets);
  els.total.textContent = total + " CHF";
  els.message.hidden = total <= SEUIL_REDUCTION * 0.9;
}

// ─── 4. ÉVÉNEMENTS (HANDLERS) : modifient l'état, puis appellent render() ─
function ajouterBillet(type) {
  state.billets.push(type);
  render();
}

function retirerBillet(index) {
  state.billets.splice(index, 1);
  render();
}

function viderPanier() {
  state.billets = [];
  render();
}

// Délégation : un seul écouteur pour tous les boutons d'ajout
document.getElementById("ajouts").addEventListener("click", function (event) {
  const bouton = event.target.closest("button[data-type]");
  if (bouton) ajouterBillet(bouton.dataset.type);
});

els.liste.addEventListener("click", function (event) {
  const bouton = event.target.closest("button[data-index]");
  if (bouton) retirerBillet(Number(bouton.dataset.index));
});

document.getElementById("vider").addEventListener("click", viderPanier);

// Premier affichage
render();
