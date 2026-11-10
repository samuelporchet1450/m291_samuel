# Mini design system — tokens (s04-av1)

Fichier : [`tokens.css`](tokens.css)

## Échelle d'espacement (rythme 8 px)
| Token | Valeur | Usage type |
| :--- | :--- | :--- |
| `--space-0` | 4 px | Écart icône ↔ texte |
| `--space-1` | 8 px | Padding d'un badge, écart entre éléments liés |
| `--space-2` | 16 px | Padding d'un bouton / d'une carte mobile, marge latérale mobile |
| `--space-3` | 24 px | Écart entre cartes |
| `--space-4` | 32 px | Écart entre sections |
| `--space-5` / `--space-6` | 48 / 64 px | Respiration de grandes sections (desktop) |

## Échelle typographique
12 · 14 · **16** · 20 · 24 · 32 px → `--font-xs` à `--font-2xl`. Corps de texte jamais sous 16 px.

## 3 règles d'usage
1. **Pas de valeur hors échelle.** Aucun `13px`, `17px`, `22px` : on prend le token le plus proche. Si aucun ne va, c'est le design qui doit changer, pas l'échelle.
2. **Padding (intérieur) < margin/gap (extérieur).** Ce qui est *dans* un composant est plus serré que l'écart *entre* composants (loi de proximité : on voit les groupes). Ex. carte : `padding: var(--space-2)`, grille : `gap: var(--space-3)`.
3. **Espacements entre éléments avec `gap`, pas avec des marges sur chaque enfant.** Une grille/flex avec `gap` évite les marges qui s'additionnent ou débordent sur le dernier élément.
