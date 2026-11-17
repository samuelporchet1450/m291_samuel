# Semaine 12 — Événements et formulaire

| Fiche | Livrable | Statut |
| :--- | :--- | :--- |
| 1 La recherche de Phare | [`1-la-recherche-de-phare/`](1-la-recherche-de-phare) : champ de recherche (`input` + `.filter()`, nom ou quartier), message « Aucun lieu… », bouton « Ouvert maintenant » combiné avec `&&` | ✅ |
| 2 Proposer un lieu | [`2-proposer-un-lieu/`](2-proposer-un-lieu) : formulaire `submit` + `preventDefault()`, lecture avec `FormData`, 2 règles dont les erreurs s'affichent dans `#erreurs` (sans `alert`), nouvelle carte ajoutée en tête avec `unshift` | ✅ |
| e3-4 Recherche + formulaire | [`app/`](../../app) : recherche `input` + `.filter()`, puces d'humeur, case « nouveautés », tri ; formulaire « Proposer une playlist » avec `submit` + `event.preventDefault()`, erreurs sous chaque champ (pas d'`alert`), focus sur le 1er champ invalide | ✅ |
| s12-av1 Debounce | [`debounce.js`](debounce.js) (+ utilisé dans `app/app.js`, 250 ms) | ✅ |
| s12-av2 Filtres croisés | [`filtres-croises.js`](filtres-croises.js) + démo [`filtres-croises.html`](filtres-croises.html) | ✅ |

Différences volontaires avec le code de la fiche e3-4 : pas d'`innerHTML` (la s11 l'interdit : une fiche contenant `<` casserait la carte) → `createElement` + `textContent`.
