# Audit de la caisse du Paléo — e1-8

Version d'origine : [`caisse-avant.html`](caisse-avant.html) · Version corrigée : [`caisse.html`](caisse.html)

## Les 4 scénarios (page rechargée entre chaque)

| N° | Actions | Ma prédiction (avant de cliquer) | Comportement réel (version d'origine) |
| :-: | :--- | :--- | :--- |
| 1 | Frites | `06 CHF` : `total` vaut 0 (nombre) mais on lui ajoute `"6"` (texte) → concaténation | `06 CHF` ✅ |
| 2 | Frites puis Boisson | `064 CHF` : `"06" + "4"` colle le texte | `064 CHF` ✅ |
| 3 | Frites, tape `PALEO`, Appliquer | Rien ne change, reste `06 CHF` : le script compare avec `"paleo"` en minuscules | `06 CHF`, la console montre `code tapé : "PALEO"` ✅ |
| 4 | Frites, Vider, Frites | L'écran montre `0 CHF` après Vider, puis `066 CHF` au 2e Frites, car la mémoire n'a pas été remise à 0 | `066 CHF` ✅ |

## Les 3 anomalies expliquées

1. **Type Number vs String.** `"6"` entre guillemets est une chaîne (String). En JavaScript, `0 + "6"` ne fait pas d'addition : dès qu'un des deux côtés est du texte, `+` **colle** (concaténation) → `"06"`. Il faut une **conversion arithmétique** : écrire `6` sans guillemets (ou `Number("6")`).
2. **Comparaison stricte sensible à la casse.** `===` compare caractère par caractère : `"PALEO" === "paleo"` est `false`. L'affiche dit PALEO, le code attend paleo. Correctif : normaliser la saisie avec `.trim().toUpperCase()` et comparer à `"PALEO"`.
3. **Mémoire interne non réinitialisée.** Le bouton Vider efface seulement l'**affichage** (DOM) mais pas la variable `total` en mémoire. L'écran ment : il dit 0 alors que `total` vaut encore `"06"`. Correctif : `total = 0;` puis `montrer();` pour que l'écran recopie la mémoire.

## Après correctif
Scénario 1 → `6 CHF` · 2 → `10 CHF` · 3 → `0 CHF` · 4 → `6 CHF`. ✅

> Le bloc `<pre>` de la page affiche le script corrigé (commentaires « Corrigé »). L'original reste dans `caisse-avant.html`.
