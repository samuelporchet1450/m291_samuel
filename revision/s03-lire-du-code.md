# s03 · Lire du code & diagnostiquer

> Au test (note 2) : **prédire la sortie** de petits extraits et **expliquer un extrait « IA »**. Sans IA, sans exécuter.

## 1. Les 3 piliers de l'interaction
| Pilier | Analogie | Exemple |
| :--- | :--- | :--- |
| **Variable** | une **boîte étiquetée** : le nom reste, le contenu change | `let total = 0;` |
| **Fonction** | une **machine** : entrée (paramètres) → traitement → sortie (`return`) | `function double(n) { return n + n; }` |
| **Événement** | un **déclencheur** / une **sonnette** : « quand X arrive sur Y, lance Z » | `bouton.addEventListener("click", ...)` |

```
 clic humain ─▶ addEventListener("click") ─▶ calcul / variable modifiée ─▶ mise à jour du DOM (textContent)
```

## 2. Lire dans l'ordre
- Le code s'exécute **de haut en bas, une ligne après l'autre**.
- Une fonction dans un écouteur **ne s'exécute qu'au clic**, pas au chargement.
- `let n = 0` **hors** de la fonction → garde sa valeur entre les clics. **Dans** la fonction → repart à 0 à chaque fois.

## 3. Mémoire ≠ écran (le bug n°1 de l'IA)
```js
let n = 0;
bouton.addEventListener("click", function () {
  n = n + 1;                 // la boîte change…
  console.log(n);            // …la console le prouve…
});                          // …mais l'écran reste à 0 !
```
Il manque la **passerelle** : `document.getElementById("affiche").textContent = n;`
→ L'écran **ne change jamais tout seul**. Pas d'erreur rouge ≠ ça marche. C'est une « hallucination douce ».

## 4. La console (F12) = le carnet de bord
- Le public ne la voit pas : c'est pour **toi**.
- Texte normal = `console.log`, **jaune** = avertissement, **rouge** = erreur avec fichier + numéro de ligne.
- Sonde : `console.log("Valeur :", maVariable);` pour voir l'état interne.

## 5. Les pièges à reconnaître
| Code | Résultat | Pourquoi |
| :--- | :--- | :--- |
| `4 + 3` | `7` | deux nombres → addition |
| `0 + "6"` | `"06"` | un texte → **concaténation** (on colle) |
| `"06" + "4"` | `"064"` | idem |
| `["pomme","poire","kiwi"].length` | `3` | nombre d'éléments, pas leur contenu |
| `"PALEO" === "paleo"` | `false` | `===` compare **strictement**, majuscules comprises → `.toUpperCase()` |
| `if ("false")` | **vrai** | tout texte non vide compte comme vrai |
| Vider l'écran sans `total = 0` | l'écran dit 0, la mémoire non | il faut remettre la **mémoire** à zéro puis réafficher |
| Boucle `for (let i = 1; i <= 3; i++) msg = msg + i + " "` | `"1 2 3 "` | 3 tours, on colle |

### Drag & drop (setlist)
1. Sans `e.preventDefault()` sur **`dragover`**, le navigateur **interdit** le dépôt → `drop` ne part jamais.
2. `setData("text/id")` mais `getData("text/plain")` → clé différente → donnée vide.

### Scope (avancé)
`var` dans une boucle = **une seule** variable partagée → tous les boutons disent « Bouton 4 ». `let` crée une variable **par tour**. On n'utilise plus `var` : `const` par défaut, `let` si ça change.

## 6. Bonne attitude face à l'IA
L'IA réécrit toute la page pour corriger un compteur ? **Refuser** : on veut l'explication et **le plus petit changement**.

---

## Corrigé commenté du quiz e1-10 (à lire APRÈS l'avoir fait)
| # | Question (résumé) | Réponse |
| :-: | :--- | :--- |
| 1 | GitHub sert surtout à… | garder le projet avec des **versions nommées** |
| 2 | Un commit, c'est… | une version nommée + ce qui a changé |
| 3 | Pour que GitHub voie un fichier modifié… | **commit puis push** (Sync) |
| 4 | Projet sur un nouvel ordi | **clone** |
| 5 | Repo public = site ? | **Non** : public ≠ publié, Pages sert `index.html` à une autre adresse |
| 6 | Commit « ok » ? | Non : ne dit pas ce qui a changé |
| 7 | `# Titre` devient… | un **grand titre** |
| 8 | Cloner / commiter / pousser dans l'atelier | en **cliquant** (github.com ou Source Control) |
| 9 | Pages cherche… | **`index.html` à la racine** |
| 10 | Pas dans un repo public | nom de l'école, photo de visage, téléphone, carte d'étudiant |
| 11 | Un token (IA) | une **bouchée de texte** lue/écrite par l'IA |
| 12 | Quota épuisé | **changer d'outil**, ne jamais payer |
| 13 | 3 règles d'un prompt | **contexte, précision, demander l'explication** |
| 14 | « change le bouton » seul | l'IA invente une page, un framework ou le mauvais bouton |
| 15 | Pourquoi demander l'explication | pour pouvoir **raconter** la modification |
| 16 | Un bon `.md` sert à… | **transporter le contexte** d'un outil IA à l'autre |
| 17 | Rouge/vert dans Cursor | **lire avant d'accepter** : rouge = enlevé, vert = ajouté |
| 18 | Pourquoi plusieurs outils | un seul quota ne tient pas le semestre |
| 19 | GitHub Education | demande à lancer tôt, sans attendre le oui pour travailler |
| 20 | Compteur IA, seule la console bouge | hallucination douce : le calcul est juste, la vitrine n'est pas au courant |
| 21 | `score` +1 +1 | **2** |
| 22 | `double(4)` | **8** |
| 23 | Sonnette (clic) | chaque clic relance la recette, le nombre **monte** |
| 24 | À quoi sert F12 | **carnet de bord** : messages et erreurs |
| 25 | `fruits.length` | **3** |
| 26 | Compteur reste à 0 | la boîte change, **personne ne recopie** sa valeur à l'écran |
| 27 | Frites `total + "6"` | **06 CHF** |
| 28 | PALEO vs paleo | **non** : comparaison stricte |
| 29 | Dépôt bloqué | **`preventDefault` sur `dragover`** |
| 30 | L'IA réécrit toute la page | **refuser** : explication + plus petit changement |

## ✋ Teste-toi (sans exécuter)
```js
let a = 2;
let b = a + 3;          // A. b = ?
let t = "5" + 1;        // B. t = ?
let n = 10;
let texte;
if (n > 20) { texte = "grand"; } else { texte = "petit"; }   // C. texte = ?
```
D. Dans l'extrait du §3 : la boîte `n` change-t-elle ? L'écran change-t-il tout seul ? Pourquoi ?

<details><summary>Réponses</summary>

A. `5` · B. `"51"` (texte) · C. `"petit"` (10 n'est pas > 20) · D. Oui la boîte change ; non l'écran ne change pas tout seul, car aucune ligne ne recopie `n` dans le DOM (`textContent`).
</details>
