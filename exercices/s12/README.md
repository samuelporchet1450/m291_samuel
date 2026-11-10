# Semaine 12 — Événements et formulaire

| Fiche | Livrable | Statut |
| :--- | :--- | :--- |
| e3-4 Recherche + formulaire | [`app/`](../../app) : recherche `input` + `.filter()`, puces d'humeur, case « nouveautés », tri ; formulaire « Proposer une playlist » avec `submit` + `event.preventDefault()`, erreurs sous chaque champ (pas d'`alert`), focus sur le 1er champ invalide | ✅ |
| s12-av1 Debounce | [`debounce.js`](debounce.js) (+ utilisé dans `app/app.js`, 250 ms) | ✅ |
| s12-av2 Filtres croisés | [`filtres-croises.js`](filtres-croises.js) + démo [`filtres-croises.html`](filtres-croises.html) | ✅ |

Différences volontaires avec le code de la fiche e3-4 : pas d'`innerHTML` (la s11 l'interdit : une fiche contenant `<` casserait la carte) → `createElement` + `textContent`.
