# Mes cartes

## La carte
`article.carte`

## Ce qu'elle montre
| Texte écrit à la main (s09) | Étiquette de `data.json` qui le remplace | Élément et classe |
| --- | --- | --- |
| « Nuit blanche » | `humeur` | `p.carte__humeur` |
| « Red Line Session » | `titre` | `h3.carte__titre` |
| « 12 morceaux · 48 min » | `morceaux` + `minutes` | `p.carte__meta` |
| « Énergie 42 % » + jauge | `energie` | `p.carte__jauge` (`span` + `meter`) |
| bouton « Voir la playlist » | `id` (dans `data-id`) | `button.bouton.carte__bouton` |

## Les étiquettes vrai ou faux
| Étiquette | Si `true` : texte, classe | Si `false` : texte, classe |
| --- | --- | --- |
| `nouveau` | « Nouveau », `p.carte__nouveau` | rien (pas d'élément) |

## Le conteneur
`<div id="liste-cartes" class="grille">`, avec juste au-dessus `<p id="etat" class="etat" role="status">`.
