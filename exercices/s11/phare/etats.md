# Les quatre états de Phare

Tests faits dans Chrome, page servie en local (http://localhost). Les messages « réseau » sont ceux réellement observés ; avec Live Server, le 404 renvoie une page HTML, d'où un message qui commence par `Unexpected token '<'`.

| Test | Ce que montre la page | Ce que dit la console | Onglet Réseau : fichier et code |
| --- | --- | --- | --- |
| 1. `data.json`, réseau lent (3G) | « Chargement des lieux... » pendant ~2 s, puis les 30 cartes et le message disparaît | rien | `data.json` · **200** (temps ≈ 2 s en 3G) |
| 2. `data-absent.json`, sans `.catch` | « Chargement des lieux... » **reste affiché pour toujours**, aucune carte | `Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON` | `data-absent.json` · **404** |
| 3. `data-absent.json`, avec `.catch` | « Impossible de charger les lieux. Rechargez la page dans un moment. » | `SyntaxError: Unexpected token '<' …` (en rouge, via `console.error`) — ne dit pas que le fichier manque | `data-absent.json` · **404** |
| 4. `data-absent.json`, avec le contrôle `reponse.ok` | Même phrase qu'au test 3 | `Error: Fichier introuvable : code 404` → clair, on sait quoi chercher | `data-absent.json` · **404** |
| 5. `casse.json` | « Impossible de charger les lieux… » | `SyntaxError: Expected double-quoted property name in JSON at position 673 (line 28 column 3)` | `casse.json` · **200** |
| 6. `vide.json`, avant le contrôle de la liste vide | Page vide : ni carte, ni message (le « Chargement » a été effacé) | rien | `vide.json` · **200** |

## Deux questions

1. Dans quel test l'onglet Réseau dit-il `200` alors que la page échoue ? Pourquoi ?

   Réponse : au **test 5 (`casse.json`)**. Le serveur a bien trouvé et envoyé le fichier (200 = « voici le fichier »), mais son contenu n'est pas du JSON valide : c'est `.json()` qui échoue en le lisant (virgule en trop avant la ligne 28). Le réseau marche, c'est le fichier qui est cassé.

2. Au test 2, que devient le message « Chargement des lieux… » ? Qu'est-ce que la personne qui attend en conclut ?

   Réponse : il **reste affiché indéfiniment**, car aucune ligne ne le remplace en cas d'erreur. La personne croit que ça charge encore (réseau lent) et attend, ou pense que le site est cassé. D'où le `.catch` qui remplace le message par une phrase d'erreur.

**Avancé — l'erreur muette :** renommer `"nom"` en `"Nom"` dans la 1re fiche → la page affiche une carte **sans titre**, la console ne dit **rien**, le Réseau dit 200. C'est l'erreur la plus difficile à trouver : rien ne « plante », la donnée manque juste.
