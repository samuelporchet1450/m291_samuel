# Carnet de prédictions — e1-6

Protocole : lire → écrire la prédiction → cliquer **Lancer** → comparer.

## Extrait 1 — Afficher
**Prédiction :** Je prévois que l'écran affichera « Bonjour la classe » dans le cadre orange et que la console contiendra `extrait 1 : texte affiché`.
**Réel :** identique ✅
**Pourquoi :** `textContent = "…"` remplace le texte de l'élément `#out1` (le « … » disparaît).

## Extrait 2 — Calculer
**Prédiction :** Je prévois que l'écran affichera `7` et que la console contiendra `extrait 2 : 7`.
**Réel :** identique ✅
**Pourquoi :** `a` et `b` sont des **nombres** (pas de guillemets) → `+` additionne. Avec `"4" + "3"` on aurait eu `43` (concaténation).

## Extrait 3 — Compter
**Prédiction :** l'écran affichera `3`, la console `extrait 3 : 3`.
**Réel :** identique ✅
**Pourquoi :** `.length` donne le **nombre d'éléments** du tableau, pas leur contenu.

## Extrait 4 — Condition
**Prédiction :** l'écran affichera `suffisant`, la console `extrait 4 : suffisant`.
**Réel :** identique ✅
**Pourquoi :** `5 >= 4` est vrai → on entre dans le `if`, le `else` est sauté.

## Extrait 5 — Boucle simple
**Prédiction :** l'écran affichera `1 2 3 ` (avec un espace à la fin), la console `extrait 5 : 1 2 3 `.
**Réel :** identique ✅
**Pourquoi :** la boucle tourne pour i = 1, 2, 3 (`i <= 3`) ; à chaque tour on **colle** `i + " "` au message. `message` commence vide (`""`), donc c'est du texte.

## Extrait 6 — Clic
**Prédiction :** au départ `0` ; à chaque clic le nombre monte de 1 (1, 2, 3…) et la console note `extrait 6 : 1`, `extrait 6 : 2`…
**Réel :** identique ✅
**Pourquoi :** `let n = 0` est déclaré **hors** de la fonction → il garde sa valeur entre les clics. La fonction ne s'exécute **que** lors d'un clic (écouteur d'événement), et elle recopie `n` dans l'écran à chaque fois.

## Bilan
6/6 prédictions exactes. Piège à retenir : si `n` était déclaré **dans** la fonction, il repartirait à 0 à chaque clic et l'écran resterait bloqué à 1.
Console (F12) : aucune erreur.
