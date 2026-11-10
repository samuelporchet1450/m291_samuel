# s10 · JSON : ranger le contenu

## 1. L'idée
On sépare **le contenu** (les données, dans `data.json`) de **la page** (HTML/CSS/JS qui les affiche). Une nouvelle fiche = une nouvelle carte, sans toucher au HTML.
Analogie : le transfert de contacts entre téléphones marche parce que **chaque contact a les mêmes cases avec les mêmes noms**.

## 2. Les 4 mots (+ termes techniques)
| Mot du cours | Terme technique | S'écrit |
| :--- | :--- | :--- |
| **Fiche** | objet | `{ … }` |
| **Étiquette** | clé | `"nom"` — **toujours** guillemets doubles |
| **Valeur** | valeur | voir ci-dessous |
| **Pile** | tableau | `[ fiche, fiche, … ]` |
| Étiquette + valeur | **propriété** | `"pages": 96` |

### Les 3 sortes de valeurs
| Sorte | Exemple | Règle |
| :--- | :--- | :--- |
| texte | `"Café de la Gare"` | guillemets **doubles** |
| nombre | `2`, `12.50` | **sans** guillemets, point décimal |
| vrai/faux (booléen) | `true`, `false` | **sans** guillemets, **minuscules** |
| (avancé) liste | `["calme", "wifi"]` | |
| (avancé) vide | `null` | |

```json
[
  { "id": 1, "nom": "Café de la Gare", "ouvert": true,  "bruit": 2 },
  { "id": 2, "nom": "Salle 204",       "ouvert": false, "bruit": 1 }
]
```

## 3. Les 3 règles qui cassent un fichier ⭐
1. **Guillemets doubles** autour de chaque étiquette et de chaque texte. `'` ne compte pas.
2. **Virgules** entre deux lignes et entre deux fiches — **jamais après la dernière**.
3. **Ce qui s'ouvre se ferme** : chaque `{` a son `}`, chaque `[` a son `]`.
(+ `true`/`false` en minuscules.) Une seule faute → **tout** le fichier est refusé, aucune carte ne s'affiche.

## 4. Valide ≠ cohérent
- **Valide** = respecte l'écriture JSON (un programme peut le lire).
- **Cohérent** = toutes les fiches ont **les mêmes étiquettes** avec **la même sorte** de valeur.
- Valide mais faux : `"pirx": 350` (faute de frappe → prix introuvable), `"vendu": "false"` (texte non vide = **vrai** pour JS → objet affiché vendu), `"duree": "1 h 52"` (texte → ne se trie pas ; écrire `112` minutes), `"prix": "25 francs"` (ne se trie pas).

## 5. Trouver les étiquettes : la méthode en 6 questions
1. À quoi sert l'app ? 2. Qu'est-ce qu'on **affiche** ? 3. Sur quoi on **filtre** ? 4. Sur quoi on **trie** (→ nombre) ? 5. Quelle **sorte** pour chaque valeur ? 6. Qu'est-ce qui est **unique** (→ `id`) ?
Une étiquette qui ne sert ni à afficher, ni à filtrer, ni à trier **n'entre pas** (sauf `id`). Noms en **camelCase** sans accent : `prixMois`, `dateRetour`.
Pourquoi un `id` ? Deux fiches peuvent avoir le même nom (deux « Violon 3/4 »), jamais le même id.

## 6. Vérifier
- VS Code : vague rouge ; la vraie faute est souvent **juste avant** (virgule de la ligne précédente).
- `controle-json.html` (hors-ligne) : rouge = invalide, jaune = valide mais incohérent / fiche seule, **vert** = « Valide : N fiches, toutes avec les mêmes étiquettes ».
- Jamais de données personnelles dans un validateur en ligne.
- L'IA ajoute des étiquettes « au cas où », écrit `"true"`, colle des ```` ``` ```` → c'est **toi** qui contrôles.

## ✋ Teste-toi — trouve les 3 fautes
```json
[
  { nom: "Café", "ouvert": true, },
  { "nom": 'Salle', "ouvert": false }
]
```
<details><summary>Réponses</summary>

1. `nom` sans guillemets doubles → `"nom"`.
2. Virgule en trop après `true` (dernière propriété de la fiche) → `"ouvert": true }`.
3. `'Salle'` en apostrophes → `"Salle"`.
</details>

Et : `{ "a": 1, }` → faute = **virgule finale**.
