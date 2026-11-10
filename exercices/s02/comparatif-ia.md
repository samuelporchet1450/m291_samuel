# Comparatif multi-moteurs — carte « Nuit des Musées 2026 » (e1-5b)

Même prompt (voir [`e1-5-jeu-du-prompt/prompt-badge.md`](e1-5-jeu-du-prompt/prompt-badge.md), prompt 2), mot pour mot, dans deux moteurs.


| Critère | Moteur A (Claude) | Moteur B (ChatGPT / Gemini) | Arbitrage |
| :--- | :--- | :--- | :--- |
| **Sémantique HTML** | `<article>`, `<header>`, `<h2>`, `<time datetime>`, `<address>`. 1 `<div>` de regroupement. | _à compléter : balises utilisées ? trop de `<div>` ?_ | Laquelle est la plus accessible ? |
| **Élégance CSS** | Variables `:root`, Flexbox pour les infos, `min()` pour la largeur, classes BEM. Peu de magic numbers. | _Flexbox / Grid ? valeurs en dur ?_ | Lequel est le plus maintenable ? |
| **Contrastes** | Texte ≈ 15:1, accent ≈ 6.6:1 → WCAG AA ok. | _texte clair sur fond clair ?_ | Lequel protège les malvoyants ? |
| **Précision de la réponse** | 2 blocs + 1 phrase sur la typo, pas de bavardage. A oublié l'attribut `datetime` (corrigé à la main). | _bavardage ? explications inutiles ?_ | Lequel a le mieux respecté la consigne ? |

## Arbitrage professionnel
_Arbitrage :_ « Je retiens la version de … car elle utilise … (critère vérifiable), son contraste mesuré est de … et elle respecte le format demandé. La version de … ajoute … ce qui la rend plus difficile à maintenir. Dans les deux cas j'ai dû corriger … à la main. »
