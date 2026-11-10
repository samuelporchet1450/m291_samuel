# Les propriétés de disque.json

| Étiquette | Valeur | Sorte de valeur (texte, nombre, vrai/faux) |
| --- | --- | --- |
| `id` | `1` | nombre |
| `titre` | `"Lumières du Léman"` | texte |
| `artiste` | `"Les Voix du Jorat"` | texte |
| `annee` | `2019` | nombre |
| `morceaux` | `11` | nombre |
| `vinyle` | `true` | vrai/faux |

**Pourquoi `"duree": "1 h 52"` est valide mais ne trie pas :** c'est un texte ; un programme compare les textes lettre par lettre (`"1 h 35"` < `"1 h 52"` marche par hasard, mais `"58 min"` passerait après `"1 h 52"`). Avec `"duree": 112` (minutes, nombre), le tri est numérique et fiable.
