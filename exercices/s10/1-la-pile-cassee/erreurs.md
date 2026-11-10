# Relevé des fautes — brocante.json

| Ligne | Ce qui était écrit | Correction | Règle |
| --- | --- | --- | --- |
| 4 | `'objet': "Lampe…"` | `"objet": "Lampe…"` | Les étiquettes s'écrivent entre **guillemets doubles**. Les apostrophes `'` sont interdites en JSON. |
| 12 | `prix: 280` | `"prix": 280` | Une étiquette est **toujours** entre guillemets doubles, même si c'est un seul mot. |
| 21 | `"etat": "Bon",` (puis `}`) | `"etat": "Bon"` | **Pas de virgule après la dernière propriété** d'une fiche (l'outil signale la ligne 22, celle du `}`). |
| 27 | `"vendu": False` | `"vendu": false` | Vrai/faux s'écrit **en minuscules** : `true` / `false`. |
| 29 | `}` (fiche 4) puis `{` (fiche 5) | `},` | Les fiches d'une pile sont **séparées par une virgule** (l'outil s'arrête ligne 30, au `{` inattendu). |
| 33 | `"pirx": 350` | `"prix": 350` | *Cohérence* : toutes les fiches ont **les mêmes étiquettes**. Faute de frappe → la page ne trouvera pas le prix du vélo (affichera `undefined`). |
| 41 | `"vendu": "false"` | `"vendu": false` | *Cohérence* : un vrai/faux s'écrit **sans guillemets**. `"false"` est un texte non vide, et en JavaScript tout texte non vide compte comme **vrai** → `if (fiche.vendu)` afficherait les jumelles comme **vendues**. |

Les 5 premières fautes rendent le fichier **invalide** (rouge). Les 2 dernières le laissent **valide mais incohérent** (jaune).
