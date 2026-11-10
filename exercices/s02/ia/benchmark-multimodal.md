# Benchmark IA multimodale sur maquette UI (s02-av1)

## Protocole
1. Capture choisie : la carte de playlist « RED LINE SESSION » de mon prototype `redline/` (capture PNG, sans code).
2. Prompt identique pour les deux modèles :
   > Génère le HTML sémantique et le CSS vanilla de cette carte en respectant les contrastes WCAG AA. Aucun framework. Rends un bloc HTML puis un bloc CSS.
3. Modèles : **Claude (Free)** et **Gemini (compte Google)** — deux gratuits.
4. Notation de 0 à 3 par critère.

## Grille
| Critère | Ce que je vérifie | Claude | Gemini |
| :--- | :--- | :---: | :---: |
| Validité sémantique | `<article>`, `<h2>`, `<button>` pour les actions, pas de `<div onclick>` | | |
| Respect visuel | Proportions, espacements, couleurs proches de la capture | | |
| Propreté du CSS | Variables, Flexbox/Grid, pas de valeurs magiques | | |
| Accessibilité | `alt` sur l'image, `:focus-visible`, contraste mesuré ≥ 4.5:1 | | |
| **Total /12** | | | |


## Pièges typiques observés chez les IA sur une capture
- Elles « devinent » les couleurs → toujours re-mesurer le contraste (WebAIM Contrast Checker).
- Elles mettent des `<div>` cliquables au lieu de `<button>` → inaccessible au clavier.
- Elles oublient `alt` ou mettent `alt="image"` (inutile).
- Elles inventent des polices Google Fonts non demandées.
