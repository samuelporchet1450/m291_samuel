# Note 2 — Test théorique : entraînement

**Format réel :** 45 min · **sans IA, sans téléphone** · 36 points · note = total ÷ 6 (30/36 → 5,0 · 24/36 → 4,0 · 18/36 → 3,0).
**5 blocs :** 1. Prédire la sortie (9) · 2. Trois erreurs JSON (6) · 3. Relier fetch (6) · 4. Expliquer un extrait « IA » (6) · 5. UX (9).

---

## A. L'entraînement à blanc du prof (20 min) — corrigé
| # | Question | Réponse |
| :-: | :--- | :--- |
| 1 | `let x = 1; x = x + 1;` — que vaut `x` ? | **2** |
| 2 | Une faute dans `{ "a": 1, }` ? | la **virgule finale** (après la dernière propriété) |
| 3 | À quoi sert `await` dans `await fetch(...)` ? | **attendre la réponse** avant de passer à la suite |
| 4 | 3 des 5 critères de la grille UX | lisibilité, navigation, feedback, cohérence, accessibilité |
| 5 | Pourquoi `alert` est un mauvais message d'erreur ? | ça **bloque**, ce n'est **pas dans la page**, ce n'est **pas soigné** |

---

## B. Test blanc n°1 — format complet (45 min, 36 pts)
*Fais-le sur papier, chrono, puis corrige-toi.*

### 1. Prédire la sortie (3 × 3 pts)
```js
// A
let a = 4;
let b = a * 2;
b = b - 1;
// Que contient b ?

// B
let villes = ["Nyon", "Vevey", "Sion", "Bulle"];
// Que vaut villes.length ?

// C
let note = 3.5;
let texte;
if (note >= 4) { texte = "suffisant"; }
else { texte = "insuffisant"; }
// Que contient texte ?
```

### 2. Trois erreurs dans ce JSON (6 pts)
```json
[
  { "titre": "Brume du Jura", "nouveau": True },
  { "titre": "Pluie sur Ouchy" "nouveau": false },
  { 'titre': "Dernier train", "nouveau": false }
]
```

### 3. Reliez fetch (6 pts)
| Bloc | Rôle (n°) |
| :--- | :--- |
| `await fetch("data.json")` | |
| `await reponse.json()` | |
| `createElement` + boucle | |

Rôles : (1) transformer le texte en pile de fiches · (2) demander le fichier · (3) fabriquer les cartes à l'écran

### 4. Expliquer un extrait « IA » (6 pts)
```js
let total = 0;
bouton.addEventListener("click", function () {
  total = total + "5";
  console.log(total);
});
```
a) Quelle analogie pour `addEventListener` ?
b) Après 2 clics, que contient `total` ?
c) L'écran change-t-il tout seul ? Pourquoi ?

### 5. UX (3 × 3 pts)
a) Citez les 5 critères de la grille du cours.
b) Seuil de contraste texte / fond exigé dans ce cours ?
c) « Une page = un message » : quel défaut si tous les titres ont la même taille ?

<details><summary><b>Corrigé test n°1</b></summary>

1. A. **7** (4×2 = 8, puis 8−1) · B. **4** · C. **"insuffisant"** (3,5 n'est pas ≥ 4)
2. (1) `True` → **`true`** en minuscules · (2) **virgule manquante** entre `"Pluie sur Ouchy"` et `"nouveau"` · (3) `'titre'` → **guillemets doubles** `"titre"`
3. fetch → **2** · json() → **1** · createElement → **3**
4. a) Une **sonnette / un déclencheur** : quand on clique, la recette se lance. b) **"055"** — `"5"` est un texte, `+` **colle** : `0 + "5"` = `"05"`, puis `"05" + "5"` = `"055"`. c) **Non** : aucune ligne ne recopie `total` dans la page (`textContent`) ; seule la console change.
5. a) Lisibilité, navigation, feedback, cohérence, accessibilité. b) **4,5:1**. c) **Plus de hiérarchie** : l'œil ne sait pas quoi lire en premier, aucun message n'est prioritaire.
</details>

---

## C. Test blanc n°2 (45 min, 36 pts)

### 1. Prédire la sortie (3 × 3 pts)
```js
// A
let message = "";
for (let i = 1; i <= 3; i = i + 1) {
  message = message + i;
}
// Que contient message ?

// B
function triple(n) { return n * 3; }
let r = triple(5);
// Que contient r ?

// C
let code = "Paleo";
let ok = (code === "PALEO");
// Que vaut ok ?
```

### 2. Trois erreurs dans ce JSON (6 pts)
```json
[
  { "id": 1, "nom": "Violon 3/4", "prix": 25 },
  { "id": 2, "nom": 'Flûte', prix: 30 },
  { "id": 3, "nom": "Batterie", "prix": 40, }
]
```
*(Bonus : ce fichier a aussi un problème de cohérence si on écrit `"prix": "40"` — lequel ?)*

### 3. Remettez dans l'ordre (6 pts)
Ordre d'exécution : `afficherLieux(donnees)` · `fetch("data.json")` · `reponse.json()` — et où va le message « Impossible de charger » ?

### 4. Expliquer (6 pts)
```js
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  if (champ.value.trim() === "") {
    erreur.textContent = "Écris ton prénom.";
  }
});
```
a) Que se passerait-il **sans** `event.preventDefault()` ?
b) Pourquoi écrire l'erreur dans `erreur.textContent` plutôt qu'avec `alert` ?
c) Que fait `.trim()` ?

### 5. UX (3 × 3 pts)
a) Que veut dire « mobile first » ?
b) Une erreur signalée seulement en rouge : quel problème d'accessibilité ? Correction ?
c) Durée conseillée d'une micro-animation, et quelle règle CSS pour les personnes sensibles au mouvement ?

<details><summary><b>Corrigé test n°2</b></summary>

1. A. **"123"** (texte vide + nombres → on colle) · B. **15** · C. **false** (`===` est strict, majuscules différentes)
2. (1) `'Flûte'` en apostrophes → `"Flûte"` · (2) `prix` sans guillemets → `"prix"` · (3) **virgule en trop** après `40`. Bonus : `"40"` serait **valide mais incohérent** (texte au lieu de nombre → le tri par prix ne marche plus).
3. `fetch("data.json")` → `reponse.json()` → `afficherLieux(donnees)` ; le message d'erreur va dans le **`.catch`** (ou le `catch` du `try`).
4. a) La page **se recharge**, la saisie est perdue. b) `alert` bloque, n'est pas dans la page ni à côté du champ, pas soigné ; le texte sous le champ reste visible pendant la correction. c) Enlève les **espaces** au début et à la fin (« ␣␣ » compte comme vide).
5. a) Concevoir d'abord pour le téléphone (360–390 px), puis élargir avec des `min-width`. b) Invisible pour un daltonien → ajouter **icône + texte** explicite. c) **150–250 ms** ; `@media (prefers-reduced-motion: reduce) { … transition: none; animation: none; }`.
</details>
