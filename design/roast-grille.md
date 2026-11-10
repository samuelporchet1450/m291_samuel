# Grille de roast — e2-1

**Nom :** Sam · **Date :** semaine 4
**Barème :** 1 = cassé · 3 = moyen · 5 = ça va

| Capture | Lisibilité | Navigation | Feedback | Cohérence | Accessibilité | Phrase précise |
| :--- | :-: | :-: | :-: | :-: | :-: | :--- |
| 01 mur de texte | 1 | 2 | 2 | 2 | 1 | Tous les textes (h1, h2, p, liens) sont en 11 px, gris `#888` sur blanc (3.5:1) et affichés en ligne : aucune hiérarchie. |
| 02 labyrinthe | 3 | 1 | 2 | 1 | 2 | L'action principale est cachée derrière 6 niveaux (« Menu > Espace > Plus > Options > Avancé > Liste ») et aucun bouton n'est visible. |
| 03 silence | 3 | 3 | 1 | 2 | 1 | Le bouton « ok » a un texte `#ddd` sur fond `#ddd` (1:1, invisible) et le clic ne produit aucune réponse. |
| 04 carnaval | 1 | 2 | 2 | 1 | 1 | 4 polices et 6 couleurs saturées ; le texte vert `#0f0` sur jaune `#ff0` a un contraste de 1.3:1 et le prix promo n'est signalé que par la couleur. |

## Constats et recommandations mesurables

### 01 — Mur de texte
- **Lisibilité (1)** : `h1, h2, p { font-size: 11px; display: inline }` écrase la hiérarchie ; le titre fait 3 lignes.
  → H1 à 32 px (2rem) graisse 700, H2 à 24 px, texte à 16 px, `line-height: 1.5`, `display: block` ; titre H1 réduit à 8 mots maximum.
- **Navigation (2)** : 8 liens collés (6 px d'écart), pas de page active, « Login » et « Cart » mélangés aux rubriques.
  → Liens espacés de 16 px, zone cliquable ≥ 44×44 px, page active soulignée + `aria-current="page"`, Login/Panier groupés à droite.
- **Feedback (2)** : aucun état `:hover`/`:focus`. → Soulignement au survol, `outline: 3px` au focus clavier.
- **Cohérence (2)** : police Times en 11 px partout, marge 8 px fixe. → Une police sans-serif système, espacements multiples de 8 px.
- **Accessibilité (1)** : `#888` sur blanc = 3.5:1 (< 4.5:1 exigé en AA) ; liens « Cliquez ici ici ici » sans sens hors contexte.
  → Texte `#1f2937` (≈ 15:1) ; libellés de liens explicites (« Lire l'article sur les chats du quartier »).

### 02 — Labyrinthe
- **Lisibilité (3)** : texte correct en Arial, mais consigne en 13 px décalée à 40 % de la largeur. → 16 px, colonne centrée `max-width: 65ch`.
- **Navigation (1)** : chemin de 6 clics, liens « menu · espace · plus » sans destination claire, « Aide? » isolé en `position:absolute` à 70 %.
  → Bouton principal visible au-dessus de la ligne de flottaison, en 1 clic ; menu en haut avec libellés métier ; fil d'Ariane.
- **Feedback (2)** : aucun état actif. → Page courante marquée, survol visible.
- **Cohérence (1)** : positionnements arbitraires (`left:70%`, `margin: 80px 0 0 40%`). → Grille simple (header / main) en Flexbox, marges 8/16/24 px.
- **Accessibilité (2)** : ordre visuel ≠ ordre du code (« Aide » positionné en absolu). → Supprimer le `position:absolute`, ordre DOM = ordre visuel.

### 03 — Silence
- **Lisibilité (3)** : titre clair, mais mention légale en 11 px `#ccc`. → 14 px minimum, `#4b5563`.
- **Navigation (3)** : page simple, pas de retour possible. → Lien « J'ai déjà un compte ».
- **Feedback (1)** : clic sans aucun effet, pas de `:hover`, pas de message de succès ni d'erreur.
  → État survol (fond plus foncé), état « Envoi… » désactivé, message de confirmation ou d'erreur sous le champ concerné.
- **Cohérence (2)** : bouton « ok » minuscule (4×8 px de padding). → Bouton 44 px de haut, libellé d'action « Créer mon compte ».
- **Accessibilité (1)** : bouton `#ddd` sur `#ddd` = 1:1, champs sans `<label for>`, mention `#ccc` = 1.6:1.
  → Bouton fond `#0f172a` texte blanc (≈ 17:1), `<label for="email">`, `type="email"`, `autocomplete`.

### 04 — Carnaval
- **Lisibilité (1)** : Comic Sans + Impact + Georgia + Courier. → 1 police pour les titres, 1 pour le texte (max 2).
- **Navigation (2)** : liens/boutons « CLICK », « BUY », « info » en 11 px Courier. → Libellés français explicites, 16 px.
- **Feedback (2)** : aucun état. → `:hover` et `:focus-visible`.
- **Cohérence (1)** : 6 couleurs saturées sans rôle (`#ff0`, `#0f0`, `red`, `blue`, `magenta`, `green`).
  → Palette de 1 couleur primaire + 1 accent + neutres ; règle 60-30-10.
- **Accessibilité (1)** : `#0f0` sur `#ff0` = 1.3:1 ; jaune sur magenta = 2.9:1 ; l'info « promo » n'est donnée que par la couleur (interdit WCAG 1.4.1).
  → Texte `#111827` sur fond `#fefce8` ; badge texte « PROMO −30 % » + prix barré `<del>`.

## La pire, pour la présentation
**Capture n° 03** parce que c'est la seule qui **bloque complètement** l'utilisateur : le bouton est invisible (contraste 1:1) **et** ne répond pas. Les autres sont pénibles ; celle-ci empêche la tâche (créer un compte). En plus, « en cliquant vous acceptez tout » est quasi illisible (1.6:1) : c'est un dark pattern.
