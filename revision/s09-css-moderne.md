# s09 · CSS moderne : variables, Flexbox, Grid

## 1. Trois outils, trois analogies
| Outil | Analogie | Quand |
| :--- | :--- | :--- |
| **Variables CSS** `--nom` | des **pots de peinture étiquetés** | toute la charte (couleurs, espacements, rayons) dans `:root` |
| **Flexbox** `display: flex` | une **étagère** (1 axe) | aligner sur une ligne : nav, rangée de badges, centrer un bouton |
| **Grid** `display: grid` | un **damier** (2 axes) | grandes zones, grille de cartes |

## 2. Variables (design tokens)
```css
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-accent: #0284c7;
  --space-2: 16px;
  --radius-card: 12px;
}
body { background: var(--color-bg); color: var(--color-text); }
```
**Pourquoi :** changer l'accent = **1 ligne** dans `:root` au lieu de 87 remplacements. (Question d'entretien : « Changez `--accent`, que se passe-t-il ? » → tout ce qui utilise `var(--accent)` change d'un coup.)

Règles de charte : palette **60-30-10** (fond / secondaire / accent), espacements en **base 8 px**, échelle typo en `rem`.

## 3. Grid responsive, mobile first
```css
.cartes-grille {
  display: grid;
  grid-template-columns: 1fr;          /* mobile : 1 colonne */
  gap: var(--space-2);
}
@media (min-width: 768px) {            /* ≥ tablette : on ENRICHIT */
  .cartes-grille { grid-template-columns: repeat(2, 1fr); }
}
```
- **Mobile first** = styles de base pour le téléphone, puis `min-width` pour élargir. (Pas `max-width`.)
- Alternative sans media query : `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`
- `gap` gère l'espace entre éléments (mieux que des marges sur chaque enfant).
- `<meta name="viewport" content="width=device-width, initial-scale=1">` obligatoire, sinon le mobile affiche une page de bureau rétrécie.

## 4. HTML sémantique
`<header>` `<nav>` `<main>` `<section>` `<article>` `<aside>` `<footer>`, un seul `<h1>`, titres sans saut (h1 → h2 → h3), `<button>` pour une action, `<a href>` pour aller ailleurs. Pas de `<div onclick>`.

## 5. Avancé
- **Container queries** : la carte s'adapte à la largeur de **son conteneur** (`container-type: inline-size` + `@container (min-width: 400px)`), pas à celle de l'écran.
- **`:has()`** : styler un parent selon un enfant, sans JS → `.carte:has(.toggle-favori:checked) { … }`.

## Si ça bloque
| Symptôme | Cause probable |
| :--- | :--- |
| Aucun style | `<link rel="stylesheet" href="style.css">` manquant ou mal nommé |
| 1 seule colonne sur grand écran | `display: flex` au lieu de `grid`, ou `max-width` au lieu de `min-width` |
| Pas d'espace entre cartes | variable de `gap` non définie dans `:root` |
| Débordement horizontal sur mobile | meta viewport absente, largeur fixe en px |

**Contre-épreuve :** DevTools mode responsive (`Ctrl+Shift+M`), glisser de 360 à 1200 px : aucune barre de défilement horizontale.

## ✋ Teste-toi
1. Flexbox ou Grid pour une barre de navigation ? Pour une grille de 12 cartes ?
2. Pourquoi les variables CSS ?
3. Que fait `@media (min-width: 768px)` ?

<details><summary>Réponses</summary>

1. Flexbox (1 axe) ; Grid (2 axes).
2. Une seule source de vérité : on change une valeur une fois, elle s'applique partout.
3. Applique les règles à l'intérieur seulement si l'écran fait au moins 768 px de large (on enrichit la version mobile).
</details>
