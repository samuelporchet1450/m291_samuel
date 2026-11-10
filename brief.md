# Brief de Conception — Red Line

## 1. Contexte & Problématique
Les jeunes en formation en Suisse romande écoutent de la musique pendant leurs trajets et le soir. Quand ils savent *comment ils se sentent* mais pas *quoi écouter*, les applis de streaming les noient sous les genres et les recommandations opaques. Red Line propose de choisir sa musique par **humeur**, sur une carte à deux axes, en deux gestes et sans compte.

## 2. Profil de l'Utilisateur Cible (Persona)
- **Prénom & Âge :** Noah, 19 ans, apprenti polymécanicien (détail : [`design/persona.md`](design/persona.md))
- **Contexte d'utilisation :** train et soirée, smartphone 390 px tenu à une main, réseau parfois instable
- **Besoins clés :** rapidité (playlist en < 30 s), contraste fort, libellés en émotions, zéro inscription

## 3. Fonctionnalités Essentielles (Périmètre MVP)
1. Affichage des playlists sous forme de cartes (données JSON chargées avec `fetch`, 30 entrées).
2. Carte des humeurs + recherche dynamique par mot-clé (humeur, tag, titre).
3. Consultation d'une fiche détaillée (description, morceaux, énergie / luminosité).
4. Formulaire « Proposer une playlist » validé sans rechargement, messages d'erreur sous les champs (pas d'`alert`).
5. 3 micro-interactions (survol de carte, bouton ▶/⏸, apparition de la sélection).

## 4. Écrans
| Écran | On y voit | On peut y faire | Bouton principal |
| :--- | :--- | :--- | :--- |
| **1 — Accueil / Carte** | Barre de recherche, carte des humeurs avec un point déplaçable, valeurs (Énergie %, Luminosité %, humeur proche), liste « Ta sélection » | Glisser le point (doigt, souris, flèches clavier), chercher un mot | « Ouvrir la playlist → » |
| **2 — Détail playlist** | Titre en 3 mots, humeur, description, mini-carte, stats (BPM moyen, durée), liste des morceaux | Lire un morceau, revenir à la carte | « ▶ Lire » |
| **3 — Proposer une playlist** | Formulaire : titre, humeur (liste), énergie et luminosité (curseurs), 3 tags | Remplir, corriger les erreurs | « Envoyer la proposition » |
| *Lecteur (barre fixe)* | Titre, artiste, temps, progression | Précédent, ▶/⏸, suivant | ▶/⏸ |

## 5. Ambiance visuelle
**Graphique, précise, vivante** — comme une carte de métro imprimée : fond papier clair, traits noirs nets, une seule couleur acide qui signale « tu es ici ».
*(Mise à jour s07 : direction V3 « Mood map » retenue, voir [`design/critique.md`](design/critique.md). Le brief initial partait sur une ambiance nocturne rouge néon = V1.)*

## 6. Palette (V3 retenue)
- **Fond :** blanc papier `#f7f7f5`
- **Texte :** encre `#0d0d0d` (≈ 18:1)
- **Texte secondaire :** gris foncé `#5f5f5b` (≈ 6:1 — le gris `#8c8c88` d'origine ne passait pas AA)
- **Accent :** vert acide `#d4ff3a`, **uniquement en fond** derrière du texte encre (jamais du texte acide sur clair : 1.1:1)
- **Attention / erreur :** rouge `#b91c1c` + icône + texte

## 7. Contraintes Techniques & Ergonomiques
- **Approche :** Mobile First (largeur de référence 390 px), puis tablette 768 px et desktop 1200 px.
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables (Flexbox, Grid), JavaScript natif sans bibliothèque.
- **Accessibilité :** contraste WCAG AA (≥ 4,5:1), navigation clavier complète (la carte est un `role="slider"` pilotable aux flèches), focus visible, `prefers-reduced-motion` respecté.
- **Hébergement :** GitHub Pages.

## 8. Interdits
- Pas de Bootstrap, pas de React, pas de Sass, pas de compte obligatoire pour consulter.
- Pas de vrai fichier audio protégé par le droit d'auteur (lecteur simulé, artistes inventés).
- Pas d'`alert()` pour les erreurs, pas d'information portée par la couleur seule.
