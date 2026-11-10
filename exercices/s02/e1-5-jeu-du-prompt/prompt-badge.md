# Prompt calibré — méthode des 4 piliers (e1-5)

## Prompt 1 : le bouton « magic » (fichier de départ)
> **Rôle** : Tu es intégrateur web senior spécialisé en HTML5 accessible et CSS moderne.
> **Contenu** : Dans mon fichier `index.html`, il y a un bouton `<button type="button" id="magic">Cliquez-moi</button>` gris (`#d9d0c3`). Au clic, il doit passer en bleu pétrole `#0f4c5c` avec un texte blanc ; au clic suivant il revient gris (bascule).
> **Contraintes** : JavaScript vanilla uniquement, aucun framework, aucune bibliothèque. Ne modifie pas le CSS existant de `body`, `main`, `h1`. Utilise une classe CSS `.actif` + `classList.toggle`, pas de style inline. Garde un contraste WCAG AA. Le bouton doit garder un focus visible au clavier.
> **Format** : Rends uniquement un bloc CSS (la règle `.actif`) et un bloc `<script>` à coller avant `</body>`. Pas d'explication.

## Prompt 2 : la carte d'événement culturel (consigne de la fiche)
> **Rôle** : Vous agissez en tant qu'intégrateur web senior. Rédige le code d'une carte d'événement culturel responsive.
> **Contenu obligatoire** :
> - Titre : « Nuit des Musées 2026 »
> - Lieu : « Plateforme 10, Lausanne »
> - Horaires : « Samedi 18h00 - 02h00 »
> - Tarif : « Entrée libre avec pass culturel »
>
> **Contraintes techniques strictes** :
> - Utilise exclusivement du HTML5 sémantique (`<article>`, `<header>`, `<time>`, `<address>`).
> - Utilise du CSS moderne avec classes explicites, palette sobre et accessible (WCAG AA).
> - Aucun framework, aucune bibliothèque externe, aucune balise `<table>`.
>
> **Format** : Fournis le code séparé en deux blocs distincts (HTML puis CSS), accompagné d'une phrase expliquant le choix typographique.

## Observation critique du résultat (composant-badge.html)
| Question | Constat |
| :--- | :--- |
| Balises sémantiques justes ? | Oui : `<article>` pour la carte, `<header>` + `<h2>` pour le titre, `<time datetime>` pour l'horaire, `<address>` pour le lieu. Une seule `<div>` (pastille de tarif → remplacée par `<p>`). |
| Contraste suffisant ? | Texte `#1f2937` sur `#ffffff` ≈ 15:1 ; accent `#9a3412` sur `#fff7ed` ≈ 6.6:1 → AA ok. |
| Contraintes respectées ? | Zéro framework, zéro JS, zéro `<table>`, variables CSS présentes. |
| Correction manuelle | J'ai ajouté `datetime="2026-09-26T18:00"` sur `<time>` (oublié) et retiré une `<div>` inutile. |

Choix typographique : une police système sans-serif (lisible, zéro chargement) et un titre en graisse 800 pour la hiérarchie, les infos pratiques en taille normale.
