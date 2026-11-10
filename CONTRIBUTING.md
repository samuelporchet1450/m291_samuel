# Charte de contribution — m291_samuel (s01-av2)

## 1. Messages de commit : la règle des 3 V
Chaque message est **Verbe** (commence par un verbe d'action), **Visible** (dit ce qui change à l'écran ou dans le dépôt), **Vrai** (décrit exactement le changement, pas plus).

Trois verbes obligatoires en tête de message :

| Verbe | Quand | Exemple |
| :--- | :--- | :--- |
| **Ajoute** | Nouveau fichier, nouvelle fonctionnalité | `Ajoute la recherche par humeur sur la page d'accueil` |
| **Corrige** | Réparation d'un bug | `Corrige le compteur qui ne mettait pas l'affichage à jour` |
| **Harmonise** | Nettoyage, cohérence, renommage | `Harmonise les couleurs des cartes avec les variables CSS` |

Interdits : `update`, `fix`, `ok`, `test`, `wip`, `version finale`.

## 2. Structure des dossiers
```
m291_samuel/
├── index.html          page de profil (GitHub Pages)
├── README.md           présentation + journal IA
├── design/             persona, flow, brief, wireframes, 3 designs
├── depart/             fichiers fournis par l'enseignant·e, jamais modifiés
├── images/             images optimisées (noms en minuscules, sans espaces)
├── exercices/sNN/      un dossier par semaine
└── redline/            le projet
```
Noms de fichiers : minuscules, tirets, pas d'accents ni d'espaces (`carte-playlist.html`).

## 3. Vie privée et secrets
- **Interdit** de pousser une clé d'API, un mot de passe, un token (même « juste pour tester »).
- **Interdit** de publier des données personnelles : nom de famille complet, téléphone, adresse, photos de camarades sans accord.
- Les données de test sont **inventées** (personas, fiches JSON).
- En cas d'erreur : supprimer le fichier ne suffit pas (l'historique le garde) → prévenir l'enseignant·e et révoquer la clé.

## 4. Rythme
Un commit à chaque fin de cours, via Source Control (VS Code) ou github.com.
