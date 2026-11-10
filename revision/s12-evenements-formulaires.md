# s12 · Événements, recherche & formulaires

## 1. L'idée
Plus de page qui clignote et remonte en haut : l'interface se met à jour **sous les yeux** de l'utilisateur, à chaque frappe ou clic.

## 2. La pile de référence ne bouge jamais ⭐
```js
let tousLesLieux = [];        // la collection complète (remplie par fetch) — JAMAIS écrasée
// à chaque frappe : une copie filtrée temporaire
const resultats = tousLesLieux.filter(function (lieu) {
  return lieu.titre.toLowerCase().includes(motCle);
});
afficherLieux(resultats);
```
- **`.filter()`** renvoie un **nouveau** tableau avec les éléments pour lesquels la fonction répond `true`. L'original reste intact.
- `.toLowerCase()` + `.trim()` : la recherche ignore majuscules et espaces.
- `"".includes("")` → `true` : texte effacé = toute la liste réapparaît.

## 3. Les événements à connaître
| Événement | Quand | Usage |
| :--- | :--- | :--- |
| `click` | clic / Entrée sur un bouton | filtres par boutons |
| `input` | **à chaque frappe** dans un champ | recherche en direct |
| `change` | valeur validée (select, checkbox) | tri, case à cocher |
| `submit` | envoi d'un formulaire | validation |

Analogie pour `input` (même logique que la « sonnette » de la s03) : **une sonnette qui sonne à chaque lettre tapée** — à chaque coup, la recette (le filtre) se relance.

## 4. Formulaire : `submit` + `preventDefault()` ⭐
```js
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();        // empêche le rechargement : la saisie et l'état restent
  const nom = champNom.value.trim();
  if (nom.length < 3) {
    erreurNom.textContent = "Le nom doit comporter au moins 3 caractères.";
    erreurNom.hidden = false;
    champNom.setAttribute("aria-invalid", "true");
    champNom.focus();
    return;
  }
  confirmation.hidden = false;
});
```
- Par défaut, `submit` **envoie le formulaire et recharge la page** → tout est perdu. `preventDefault()` annule ce comportement.
- Écouter **`submit`** (pas `click` sur le bouton) : ça marche aussi avec la touche Entrée.

## 5. Messages d'erreur soignés — pourquoi pas `alert` ? ⭐
`alert()` **bloque** toute la page, n'est **pas dans la page** (il disparaît dès qu'on clique OK, on oublie ce qu'il disait), n'est **pas lié au champ** et n'est **pas soigné** visuellement.
→ Un message **sous le champ concerné**, en texte clair qui dit **comment corriger**, + icône (pas la couleur seule) + `aria-invalid` / `aria-describedby`.

**Pourquoi la validation JS ne suffit pas :** elle tourne dans le navigateur de l'utilisateur, qui peut la contourner (la désactiver, modifier la page) → un vrai serveur doit **toujours** revérifier.

## 6. Compteur et état vide
- Afficher « 4 playlists » (retour d'état).
- `xyz999` → « Aucun résultat ne correspond… » sans planter, avec une piste (« Essaie calme, nuit »).

## 7. Avancé
- **Debounce** : attendre ~300 ms après la dernière frappe avant de filtrer (`clearTimeout` + `setTimeout`) → moins de calculs sur mobile.
- **Filtres croisés** : un objet `criteres = { texte, tag, prixMax }` et une fonction qui teste les 3 avec `&&`.

## ✋ Teste-toi
1. Pourquoi ne jamais modifier `tousLesLieux` en filtrant ?
2. La page se recharge quand je clique « Envoyer ». Deux vérifications ?
3. Donne 2 raisons pour lesquelles `alert` est un mauvais message d'erreur.

<details><summary>Réponses</summary>

1. Sinon les fiches filtrées sont perdues : en effaçant la recherche, on ne pourrait plus réafficher la liste complète.
2. Que j'écoute bien `"submit"` (pas `"click"`) et que la première ligne appelle `event.preventDefault()`.
3. Ça bloque la page ; ce n'est pas dans la page (ni à côté du champ) ; ce n'est pas soigné / pas accessible.
</details>
