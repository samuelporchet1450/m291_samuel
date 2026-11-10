# Comparatif multi-moteurs — carte « Nuit des Musées 2026 » (e1-5b)

Même prompt (voir [`e1-5-jeu-du-prompt/prompt-badge.md`](e1-5-jeu-du-prompt/prompt-badge.md), prompt 2), mot pour mot, dans deux moteurs.

- **Moteur A — Claude** : [`composant-badge.html`](e1-5-jeu-du-prompt/composant-badge.html)
- **Moteur B — ChatGPT** : [`moteur-b/index.html`](e1-5-jeu-du-prompt/moteur-b/index.html) + [`moteur-b/style.css`](e1-5-jeu-du-prompt/moteur-b/style.css)

| Critère | Moteur A (Claude) | Moteur B (ChatGPT) | Arbitrage |
| :--- | :--- | :--- | :--- |
| **Sémantique HTML** | `<article>`, `<header>`, `<h2>`, `<time datetime>`, `<address>`. 1 `<div>` de regroupement. | `<main>`, `<article>`, `<header>`, `<section>`, `<footer>`, `<address>`, `<time>`, `<h1>` + `<h2>` pour chaque info. 3 `<div class="event-info">` de regroupement. `datetime="18:00"` sans date. | **B** : structure plus complète, avec un intertitre `<h2>` par information, ce qui aide la navigation au lecteur d'écran. **A** a un `datetime` plus précis (date + heure). |
| **Élégance CSS** | Variables `:root`, Flexbox pour les infos, `min()` pour la largeur, classes BEM. Peu de magic numbers. | **Aucune variable CSS** : la couleur `#795b3e` est répétée 2 fois, `#dedbd4` 3 fois. Beaucoup de valeurs en dur (48, 30, 26, 18, 14 px…) hors d'une échelle de 8. Grid pour les infos, `clamp()` pour le titre. Media query `max-width` (desktop first). | **A** est plus maintenable : changer l'accent = 1 ligne dans `:root`. Dans B, il faut chercher chaque occurrence. |
| **Contrastes** | Texte ≈ 15:1, accent ≈ 6.6:1 → WCAG AA ok. | Texte `#252525` sur blanc ≈ 15:1, accent `#795b3e` ≈ 6.2:1, gris `#555` ≈ 7.5:1 → WCAG AA ok. Les intertitres en 0.75rem (12 px) restent petits. | **Égalité** sur les contrastes. Léger avantage à **A** pour la taille des textes. |
| **Précision de la réponse** | 2 blocs + 1 phrase sur la typo, pas de bavardage. A oublié l'attribut `datetime` (corrigé à la main). | 2 blocs + 1 phrase sur la typo, format respecté. **A ajouté du contenu non demandé** : « ÉVÉNEMENT CULTUREL », le sous-titre « Une nuit pour découvrir la culture autrement. » et le pied « LAUSANNE · 2026 ». | **A** respecte mieux la consigne : le prompt imposait le contenu exact. B a improvisé du texte. |

## Arbitrage professionnel
Je retiens la version de **Claude (A)**, parce qu'elle respecte strictement le contenu imposé et centralise ses couleurs dans des variables CSS : changer l'accent se fait en une ligne. Les contrastes sont conformes WCAG AA dans les deux cas (≈ 15:1 pour le texte, ≈ 6:1 pour l'accent). La version de **ChatGPT (B)** a une meilleure structure sémantique (un `<h2>` par information) mais ajoute trois textes que personne n'a demandés et répète ses couleurs en dur, ce qui la rend plus difficile à maintenir. Idée à reprendre de B dans une prochaine version de A : les intertitres « Lieu / Horaires / Tarif ».
