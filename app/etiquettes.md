# Mes étiquettes

Projet : **Red Line** (playlists par humeur)

| Étiquette | Écran du brief qui l'affiche | Sert à (afficher, filtrer, trier) | Sorte de valeur | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | `1` |
| `titre` | Liste, Détail | afficher, filtrer (recherche) | texte | non | `"Red Line Session"` |
| `humeur` | Liste, Détail | afficher, filtrer (puces) | texte (liste fixe, minuscules) | non | `"calme"` · `"nuit blanche"` · `"mélancolie"` · `"nostalgie"` · `"euphorie"` · `"colère froide"` |
| `energie` | Liste, Détail | afficher, trier | nombre (0–100) | non | `42` |
| `luminosite` | Détail | afficher (position sur la carte des humeurs) | nombre (0–100) | non | `32` |
| `description` | Détail | afficher | texte | non | `"Autoroutes vides…"` |
| `tags` | Détail | afficher, filtrer (recherche) | liste de textes | non | `["nuit", "route"]` |
| `morceaux` | Liste, Détail | afficher | nombre | non | `12` |
| `minutes` | Liste, Détail | afficher, trier | nombre (minutes) | non | `48` |
| `nouveau` | Liste (badge) | afficher, filtrer | vrai/faux | non | `true` |

Contrôle : `data.json` → 30 fiches, mêmes étiquettes, `nouveau` = 8 `true` / 22 `false`.
