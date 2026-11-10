# Rapport d'analyse — scope & closure (s03-av1)

**Symptôme :** les 4 boutons affichent « Bouton 4 / 5 cliqué » quel que soit le bouton.

**Reproduction :** ouvrir [`debogage-scope.html`](debogage-scope.html), cliquer Filtre 1 → la console dit `i = 4`.

**Cause :**
- `var` a une portée de **fonction** (ou globale) → il n'y a qu'**une seule** variable `i` pour toute la boucle.
- Les fonctions d'écoute ne s'exécutent **qu'au clic**, bien après la fin de la boucle. À ce moment, `i` vaut la valeur qui a arrêté la boucle : `4`.
- Une **closure**, c'est une fonction qui garde un lien vers les variables de l'endroit où elle a été créée. Les 4 fonctions gardent un lien vers le **même** `i`.

**Correctif 1 — `let` :** `let` a une portée de **bloc** ; à chaque tour, JavaScript crée un nouveau `j`. Chaque fonction garde son propre `j` (0, 1, 2, 3).

**Correctif 2 — `forEach` + `event.currentTarget` :** plus de compteur partagé ; on lit l'info (`data-filtre`) directement sur le bouton qui a reçu le clic. `currentTarget` = l'élément qui porte l'écouteur (≠ `target` qui peut être un enfant).

**Règle :** en JavaScript moderne, on n'utilise plus `var` : `const` par défaut, `let` si la valeur change.
