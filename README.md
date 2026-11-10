# M291 — Samuel
Je suis Sam, j'ai 105 kilos bench et je suis **médiamaticien** en 3e année.

## Ce que je veux apprendre
- des techniques sur **Photoshop**
- perfectionner ma capacité à m'exprimer envers l'**IA**
- faire de **bons sites**

## Mon projet : Red Line
Une appli pour trouver une **playlist selon son humeur** : on choisit comment on se sent, Red Line trouve la musique.
- App (s09–s13) : [`app/`](app) · Brief : [`brief.md`](brief.md) · Dossier design (note 1) : [`design/`](design)
- Prototypes des 3 directions artistiques : [`redline/`](redline) et [`Redline-backups/`](Redline-backups)

## Déploiement Web
- Site en ligne : [Consulter mon profil public](https://samuelporchet1450.github.io/m291_samuel/)
- App Red Line : [samuelporchet1450.github.io/m291_samuel/app/](https://samuelporchet1450.github.io/m291_samuel/app/)
- Exercices en ligne : [samuelporchet1450.github.io/m291_samuel/exercices/](https://samuelporchet1450.github.io/m291_samuel/exercices/)

## Classeur
| Dossier | Contenu |
| :--- | :--- |
| [`exercices/`](exercices) | Tous les exercices, semaine par semaine (s01 → s13) |
| [`design/`](design) | Roast, persona, flow, wireframes, critique, audits d'accessibilité |
| [`app/`](app) | Le projet Red Line : `index.html`, `style.css`, `app.js`, `data.json` |
| [`revision/`](revision) | Fiches de révision de la théorie + tests blancs (note 2) + préparation de l'entretien (note 3) |

## Comment me trouver
- GitHub : samuelporchet1450

## Mes sites préférés
- [youtube](https://www.youtube.com)
- [pinterest](https://www.pinterest.com)
- [purestream](https://www.purestream.club)

## Un film que j'aime
J'aime *Fight Club* pour son histoire intense, son ambiance sombre et sa réflexion sur la société et l'identité.

## Journal d'Assistance IA (Note 3)
1. **Exercices s01–s13, dossier design, app et révision.** Outil : **Claude (Claude Code)**. Prompt : « Réalise et publie tous les exercices du dossier (s01, s02…), puis fais un dossier de révision avec la théorie. » Anomalie détectée : les cartes ne s'élevaient pas au survol, parce que l'animation d'apparition (`animation-fill-mode: both`) bloquait le `transform`. Correction : passage à `backwards`.
2. **Recherche et cartes (s11–s12).** Outil : Claude. Le code de la fiche e3-4 construisait les cartes avec `innerHTML`. Anomalie : une fiche contenant `<` casserait la carte, et la s11 interdit `innerHTML`. Correction : `createElement` + `textContent` dans `afficherLieux`.
3. **Débogage (s03 et s13).** Outil : Claude. Anomalies : dans la setlist, `e.target` visait le `<span>` survolé et pas la ligne `<li>`, d'où la correction en `e.target.closest("li")`. Le fichier de départ e3-6 était abîmé (des commandes collées après `</html>`) : la liste de villes et le JS cachés dedans ont été récupérés.

---
_Environnement de travail local configuré avec succès dans Visual Studio Code._
