# Contact sans téléphone (avancé)

| Essai | Ce que dit l'outil | Ce que la page affiche avec `fiche.telephone` |
| --- | --- | --- |
| `"telephone": null` | Valide, type « vide (null) » pour cette fiche → types mélangés texte/null | `null` → il faut tester `if (fiche.telephone)` |
| `"telephone": ""` | Valide et cohérent (texte partout) | rien (texte vide) → **le plus simple à afficher** |
| étiquette supprimée | Jaune : « l'étiquette telephone manque » | `undefined` affiché si on ne teste pas |

**Choix :** `""` pour l'affichage simple, ou `null` + un test `if` si on veut écrire « pas de téléphone ».
