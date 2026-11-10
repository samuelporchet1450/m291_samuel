# Diagnostic — compteur e1-7

| Étape | Constat |
| :--- | :--- |
| Symptôme | 10 clics → l'écran reste à `0`. Aucune erreur rouge dans la console. |
| Sonde | `console.log("Valeur en mémoire :", n)` → 1, 2, 3… : la **logique est saine**. |
| Cause | Il manque la **passerelle** mémoire → affichage : le code change `n` mais ne dit jamais au DOM de se repeindre. |
| Correctif | `document.getElementById("affiche").textContent = n;` dans l'écouteur, après `n = n + 1`. |
| Contre-épreuve | 5 clics → `5` affiché. ✅ |

**À retenir :** une variable (mémoire) et un texte à l'écran (DOM) sont deux choses différentes. Pas d'erreur ≠ ça marche. C'est une « hallucination douce » de l'IA.
