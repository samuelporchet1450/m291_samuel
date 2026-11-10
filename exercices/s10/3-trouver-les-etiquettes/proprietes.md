# Les étiquettes de la location d'instruments

**Q1 — À quoi sert l'application ?** Permettre aux élèves de trouver un instrument à louer au mois, disponible, dans leur famille d'instruments, au meilleur prix.

| Étiquette | Écran | Sert à (afficher, filtrer, trier) | Sorte de valeur | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | **oui** | `1` |
| `nom` | Liste | afficher | texte | non | `"Violon 3/4"` |
| `famille` | Liste | afficher, filtrer | texte (liste fixe) | non | `"cordes"` · `"vents"` · `"percussions"` |
| `prixMois` | Liste | afficher, trier | nombre (CHF) | non | `25` |
| `disponible` | aucun (sert au filtre seulement) | filtrer | vrai/faux | non | `true` |
| `taille` | Détail | afficher | texte (liste fixe) | non | `"enfant"` · `"adulte"` |
| `description` | Détail | afficher | texte | non | `"Avec étui et archet."` |

**Pourquoi le nom ne suffit pas :** il y a deux « Violon 3/4 » (un disponible, un déjà loué) ; sans `id` différent, la page ne saurait pas lequel ouvrir ou louer.

**Suggestion de l'IA que j'ai refusée, et pourquoi :** l'IA proposait `"image"` (URL d'une photo) et `"dateAchat"`. Refusées : le mini-brief ne demande d'afficher ni photo ni date d'achat, et on ne filtre ni ne trie dessus (questions 2, 3, 4 → non).

**Binôme :** « Afficher seulement les cordes disponibles, triées par prix ? » → **oui** : `famille` (cordes), `disponible` (disponibles), `prixMois` en nombre (tri).
