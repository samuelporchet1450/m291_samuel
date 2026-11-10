# Matrice de décision multicritère pondérée (s07-av2)

## Coefficients
| Critère | Poids | Pourquoi ce poids |
| :--- | :-: | :--- |
| Lisibilité | ×3 | Noah lit dans un train, en mouvement, à une main |
| Accessibilité | ×3 | WCAG AA est une exigence du brief (et de la note) |
| Fidélité au pitch | ×2 | « choisir par humeur, vite » doit se sentir au premier regard |
| Facilité d'intégration | ×2 | 4 semaines de code, vanilla CSS |
| **Total des poids** | **10** | Score max = 5 × 10 = **50** |

## Notes justifiées (1 à 5)
| Critère (poids) | V1 Sombre néon | V2 Riso zine | V3 Mood map |
| :--- | :-: | :-: | :-: |
| Lisibilité (×3) | 4 — contraste 17:1, mais reflets de jour | 2 — mono partout, grain | 5 — 18:1, hiérarchie nette |
| Accessibilité (×3) | 3 — gris 5.6:1 ok, rouge seul signal | 2 — rose 2.6:1, jaune illisible | 4 — gris à corriger (3.2:1 → 6:1) |
| Fidélité au pitch (×2) | 5 — ambiance nuit/route | 3 — fanzine, pas « humeur » | 4 — la carte des humeurs est le héros |
| Facilité d'intégration (×2) | 3 — halos, glows, 3 polices web | 2 — textures, trames, 6 couleurs | 4 — traits, 2 polices, 1 accent |

## Calcul
| Piste | Lisibilité | Accessibilité | Pitch | Intégration | **Score /50** | **%** |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: |
| V1 | 4×3 = 12 | 3×3 = 9 | 5×2 = 10 | 3×2 = 6 | **37** | 74 % |
| V2 | 2×3 = 6 | 2×3 = 6 | 3×2 = 6 | 2×2 = 4 | **22** | 44 % |
| V3 | 5×3 = 15 | 4×3 = 12 | 4×2 = 8 | 4×2 = 8 | **43** | 86 % |

## Synthèse
V3 l'emporte avec **43/50**, soit 6 points d'avance sur V1. L'écart se fait sur les deux critères pondérés ×3 (lisibilité +3, accessibilité +3) : même si V1 colle mieux à l'ambiance du pitch (+2), cela ne compense pas. V2 est éliminée (22/50), elle échoue sur les contrastes. Décision : **V3**, enrichie du thème sombre de V1 pour le soir (voir [`piste-hybride.md`](piste-hybride.md)).
