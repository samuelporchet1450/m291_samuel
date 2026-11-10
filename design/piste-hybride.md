# Piste hybride V3 + V1 (s07-av1)

## Ce qu'on prend à chaque piste
| Composant | Source | Raison |
| :--- | :--- | :--- |
| Structure, grille, traits 1.5 px, carte des humeurs | **V3 Mood map** | Lisibilité, cohérence, tâche n°1 au centre |
| Typo : Inter Tight (texte) + JetBrains Mono (chiffres : BPM, durée) | **V3** | 2 familles max, le mono uniquement pour les données |
| Couleur d'accent unique « tu es ici » | **V3** (acide) | Un seul sens = loi de similarité respectée |
| Ambiance nocturne, accent rouge | **V1 Sombre néon** | Thème du soir via `prefers-color-scheme: dark` |
| Arrondis | Compromis | V1 = 14 px, V3 = 0 px → **6 px** sur les cartes, 999 px sur les puces |

## Feuille de style de compromis
```css
:root {
  --bg: #f7f7f5;
  --surface: #ffffff;
  --ink: #0d0d0d;
  --ink-soft: #5f5f5b;    /* corrigé : 6:1 */
  --accent-bg: #d4ff3a;   /* fond uniquement */
  --accent-ink: #0d0d0d;  /* texte posé sur l'accent */
  --error: #b91c1c;
  --line: 1.5px solid var(--ink);
  --radius: 6px;
  --f-sans: "Inter Tight", "Helvetica Neue", Arial, sans-serif;
  --f-mono: "JetBrains Mono", ui-monospace, monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0a0a0c;         /* repris de V1 */
    --surface: #141417;
    --ink: #f3efe8;        /* 17:1 */
    --ink-soft: #a1a1a6;   /* 7.6:1 */
    --accent-bg: #ff2a40;  /* rouge V1, en fond */
    --accent-ink: #0a0a0c; /* 5.3:1 */
    --error: #fca5a5;
  }
}
```

## Contrôle de cohérence
- [x] **Palette** : un fond, une encre, une encre douce, un accent, une erreur — dans les deux thèmes, mêmes noms de variables (le CSS des composants ne change pas).
- [x] **Typographie** : 2 familles, rôles fixes (sans = texte, mono = chiffres).
- [x] **Arrondis** : une seule valeur `--radius` pour toutes les cartes et boutons.
- [x] **Contrastes** : tous ≥ 4.5:1 dans les deux thèmes (vérifiés WebAIM).
