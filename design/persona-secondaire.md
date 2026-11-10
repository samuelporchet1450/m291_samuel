# Persona secondaire antagoniste & matrice d'inclusion (s05-av2)

## Fiche d'identité
| Dimension | Détail |
| :--- | :--- |
| **Prénom et âge** | **Jean-Luc**, 64 ans, chauffeur de bus TPF à Fribourg, bientôt à la retraite |
| **Pourquoi il utilise Red Line** | Son petit-fils lui a envoyé le lien pour « trouver de la musique calme » pendant ses pauses |
| **Appareil** | Tablette 10 pouces le soir, parfois le smartphone de sa femme ; lunettes de lecture |
| **Contraintes visuelles** | Presbytie (petits textes difficiles), sensibilité à l'éblouissement, distingue mal le rouge foncé du noir |
| **Contraintes motrices** | Doigts moins précis : les petites cibles et le glisser-déposer sont pénibles |
| **Contraintes cognitives** | Peu à l'aise avec les icônes sans texte et les interfaces « créatives » ; veut savoir où il est |
| **Phrase typique** | *« C'est joli, mais je sais pas sur quoi appuyer. »* |

## 4 zones de conflit avec Noah (persona principal)
| # | Noah veut… | Jean-Luc a besoin de… | Arbitrage unifié |
| :-: | :--- | :--- | :--- |
| 1 | Une carte à glisser, ludique et rapide | Ne pas devoir faire un geste précis de glisser | La carte reste, **mais** on ajoute des boutons « humeurs rapides » (Calme, Nuit, Énergie…) et le pilotage aux flèches. Le glisser devient une option, pas la seule voie. |
| 2 | Une ambiance graphique, couleur acide qui claque | Un contraste fort sans éblouissement | Texte encre `#0d0d0d` sur papier `#f7f7f5` (≈ 18:1), fond cassé (pas blanc pur) contre l'éblouissement. L'acide `#d4ff3a` n'est **jamais** seul porteur d'info ni couleur de texte : toujours un libellé en encre dessus. |
| 3 | Une interface dense, icônes ▶ ⏮ ⏭ | Des libellés compréhensibles | Icônes + `aria-label`, et texte visible sur les actions principales (« ▶ Lire »). Corps 16 px min, zoom 200 % sans casse. |
| 4 | Aller vite, peu de texte | Savoir où il est et revenir en arrière | Titre d'écran toujours visible, bouton « ← Retour à la carte » textuel, page active indiquée. |

## Matrice de conformité (eCH-0059 ≈ WCAG 2.1 AA)
La norme suisse **eCH-0059** (accessibilité des sites de l'administration) reprend les critères **WCAG 2.1 niveau AA**.

| Critère WCAG | Exigence | Application dans Red Line |
| :--- | :--- | :--- |
| 1.1.1 Contenu non textuel | Alternative textuelle | `alt` sur les pochettes, `aria-label` sur les icônes |
| 1.4.1 Utilisation de la couleur | Pas d'info par la couleur seule | Humeur écrite en toutes lettres, erreurs = icône + texte |
| 1.4.3 Contraste minimum | 4.5:1 texte, 3:1 gros texte | Palette vérifiée (voir `design/tokens.css`) |
| 1.4.4 Redimensionnement | Zoom 200 % sans perte | Unités `rem`, pas de hauteur fixe sur le texte |
| 2.1.1 Clavier | Tout utilisable au clavier | Carte en `role="slider"` + flèches, boutons natifs |
| 2.4.7 Focus visible | Focus toujours visible | `:focus-visible { outline: 3px solid var(--c-focus) }` |
| 2.5.5 Taille de la cible (AAA, visé) | ≥ 44 × 44 px | `--tap-min: 2.75rem` sur boutons et cartes |
| 3.3.1 Identification des erreurs | Erreur décrite en texte | Message sous le champ + `aria-invalid` |

**Conclusion :** concevoir pour Jean-Luc ne gêne pas Noah : des cibles plus grandes et des libellés clairs le rendent aussi plus rapide dans le train, à une main.
