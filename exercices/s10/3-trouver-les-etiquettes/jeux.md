# Ludothèque (avancé)

| Étiquette | Sert à | Sorte | Pourquoi |
| --- | --- | --- | --- |
| `id` | distinguer | nombre | unique |
| `nom` | afficher | texte | |
| `joueursMin` / `joueursMax` | filtrer « jouable à 5 » | nombre | jouable à 5 ⇔ `joueursMin <= 5 && joueursMax >= 5` |
| `ageMin` | filtrer « dès 8 ans » | nombre | `ageMin <= 8` |
| `minutes` | trier par durée | nombre | tri numérique |
| `disponible` | filtrer | vrai/faux | |
