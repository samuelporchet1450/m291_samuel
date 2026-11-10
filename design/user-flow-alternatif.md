# User flow alternatif — cas limites (s05-av1)

Le chemin parfait (voir [`user-flow.md`](user-flow.md)) n'arrive jamais tout seul. Voici les 3 rattrapages prévus dans Red Line.

## Cas 1 — Recherche sans résultat (empty state)
| Étape | Ce que voit Noah | Échappatoire |
| :--- | :--- | :--- |
| Il tape « reggaeton » | La liste « Ta sélection » se vide | — |
| Empty state | Icône loupe + *« Aucune humeur ne correspond à « reggaeton ». Essaie « calme », « colère » ou « nuit ». »* | Les 3 mots sont des boutons qui relancent la recherche |
| | Bouton « Effacer la recherche » | Revient à la sélection de la carte |

Règles : jamais une zone blanche muette ; on répète le mot tapé (il voit s'il a fait une faute) ; on propose une action.

## Cas 2 — Coupure réseau / `data.json` introuvable (404)
| Étape | Ce que voit Noah | Échappatoire |
| :--- | :--- | :--- |
| Ouverture de l'app | Squelettes de cartes grisés + *« Chargement des playlists… »* (`aria-live="polite"`) | — |
| `fetch` échoue (tunnel, 404) | Bandeau rouge erreur + icône : *« Impossible de charger les playlists. Vérifie ta connexion. »* | Bouton « Réessayer » qui relance le `fetch` |
| Toujours en échec | Le message reste, la carte des humeurs reste visible (désactivée) | Pas d'écran blanc, pas d'erreur technique (« TypeError ») affichée |

Côté code : `if (!reponse.ok) throw new Error(...)` puis `catch` → afficher l'état erreur.

## Cas 3 — Erreur dans le formulaire « Proposer une playlist »
| Étape | Ce que voit Noah | Échappatoire |
| :--- | :--- | :--- |
| Il envoie sans titre | **La page ne se recharge pas** (`event.preventDefault()`), ses saisies restent | — |
| Validation | Sous le champ Titre : *« Donne un titre à ta playlist (3 caractères minimum). »* en rouge `#b91c1c` + icône ⚠, champ bordé, `aria-invalid="true"`, focus placé sur le champ | Il corrige directement |
| Il corrige | Le message disparaît dès que le champ est valide (événement `input`) | — |
| Envoi valide | *« Merci ! Ta playlist « … » a été proposée. »* + formulaire vidé | Lien « Retour à la carte » |

## Récapitulatif des 4 états à prévoir pour chaque liste
**Chargement · Vide · Erreur · Succès** (on en reparle en s11).
