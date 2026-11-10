# États & transitions — 4 micro-interactions clés (s06-av2)

## 1. Carte de playlist : défaut → survol (`:hover`)
| État | Rendu | CSS prévu |
| :--- | :--- | :--- |
| Défaut | Carte bordure 1.5 px encre, fond blanc | `border: var(--line)` |
| Survol (souris) | La carte monte de 4 px, ombre douce, le titre se souligne | `transform: translateY(-4px); box-shadow: 0 8px 0 var(--c-texte); transition: transform 150ms ease-out` |
| Pressé (doigt) | Légère descente, retour immédiat | `:active { transform: translateY(0) scale(.98) }` |

Pas d'effet de survol indispensable : sur mobile il n'existe pas → toute info doit être visible sans survol.

## 2. Focus clavier accessible (`:focus-visible`)
| État | Rendu |
| :--- | :--- |
| Focus clavier sur carte / bouton / point de la carte | Contour **3 px encre + 3 px d'écart** (`outline: 3px solid var(--c-focus); outline-offset: 3px`), toujours visible sur fond clair *et* sur l'acide |
| Focus souris | Rien de plus (`:focus-visible` ne s'active qu'au clavier) |

Interdit : `outline: none` sans remplacement.

## 3. Point de la carte des humeurs (slider)
| État | Rendu |
| :--- | :--- |
| Repos | Disque noir 28 px, halo acide |
| Glisser / flèches | Les valeurs Énergie / Luminosité se mettent à jour en direct, la liste « Ta sélection » se réordonne (fondu 150 ms) |
| Relâché | `aria-valuenow` mis à jour, le lecteur d'écran annonce « Humeur proche : Nuit blanche » (`aria-live="polite"`) |

## 4. Volet de détail en superposition (overlay) — desktop
```
┌──────────────── page assombrie (fond rgba(13,13,13,.5)) ───────────────┐
│                                   ┌─────────── volet 480 px ─────────┐ │
│   (grille de cartes, inerte)      │ ✕ Fermer                         │ │
│                                   │ RED LINE SESSION                 │ │
│                                   │ Nuit blanche · 4 morceaux        │ │
│                                   │ [ ▶ Lire ]                       │ │
│                                   │ 01 Another Day, Slowed   4:12    │ │
│                                   └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```
| Moment | Comportement |
| :--- | :--- |
| Ouverture | Volet glisse depuis la droite (`translateX(100%) → 0`, 200 ms), focus déplacé sur le titre du volet |
| Ouvert | Élément `<dialog>` ouvert avec `showModal()` → fond inerte, `Échap` ferme |
| Fermeture | ✕, `Échap` ou clic sur le fond ; le focus revient sur la carte qui avait ouvert le volet |
| Mobile | Pas de volet : la fiche est un écran plein (wireframe 03) |

Toutes les animations sont coupées si `prefers-reduced-motion: reduce`.
