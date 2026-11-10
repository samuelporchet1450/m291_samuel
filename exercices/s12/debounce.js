// s12-av1 — Anti-rebond (debounce)
//
// Problème : l'événement "input" part à CHAQUE touche. Taper « mélancolie »
// (10 lettres) relance 10 fois le filtre et le rendu des cartes.
// Solution : attendre que la personne ARRÊTE de taper pendant `attenteMs`.
//
// Comment ça marche :
//   - setTimeout(action, 300) programme l'action dans 300 ms et rend un numéro de minuteur.
//   - clearTimeout(numero) annule ce minuteur s'il n'est pas encore parti.
//   - À chaque frappe, on ANNULE le minuteur précédent et on en relance un neuf.
//   - Seule la dernière frappe « survit » : l'action part 300 ms après elle.

function debounce(action, attenteMs) {
  let minuteur = null; // gardé en mémoire entre les appels (closure, cf. s03-av1)

  return function (...args) {
    clearTimeout(minuteur);
    minuteur = setTimeout(function () {
      action(...args);
    }, attenteMs);
  };
}

// ---- Branchement sur le champ de recherche ----
// (dans l'app Red Line : voir app/app.js, attente 250 ms)
//
// const champ = document.getElementById("recherche");
// let compteurAppels = 0;
//
// function filtrer() {
//   compteurAppels++;
//   console.log("filtre lancé", compteurAppels, "fois, texte :", champ.value);
//   // ... tousLesLieux.filter(...) puis afficherLieux(...)
// }
//
// champ.addEventListener("input", debounce(filtrer, 300));
//
// Test : tapez « mélancolie » vite → la console n'affiche qu'UNE ligne.
// Sans debounce : 10 lignes.
