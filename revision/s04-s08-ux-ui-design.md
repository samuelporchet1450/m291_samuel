# s04–s08 · UX / UI, conception & accessibilité

## 1. UX ≠ UI
- **UI** (User Interface) = ce qu'on **voit** : couleurs, typo, boutons.
- **UX** (User Experience) = ce qu'on **vit** : est-ce que j'arrive à faire ma tâche facilement ?
- Une belle vitrine avec une caisse introuvable = UI soignée, **UX ratée**. → *Décider avant de décorer.*

## 2. La grille des 5 critères ⭐ (à savoir par cœur pour le test)
| Critère | Question | Indicateur objectif |
| :--- | :--- | :--- |
| **1. Lisibilité** | Se lit sans effort ? | corps **16 px**, `line-height` 1.5–1.6, hiérarchie de titres |
| **2. Navigation** | Je sais où je suis et où aller ? | page active marquée, fil d'Ariane, titres sans saut |
| **3. Feedback** | L'interface répond à chaque action ? | `:hover`, curseur pointeur, état de chargement, message de succès/erreur |
| **4. Cohérence** | Même rôle = même apparence ? | une seule famille de boutons, espacements en **base 8 px** |
| **5. Accessibilité** | Perceptible par tous ? | contraste **≥ 4,5:1** (WCAG AA), clavier, `alt` |

**Moyen mnémotechnique :** **L**a **N**uit **F**ait **C**hanter l'**A**ccordéon → Lisibilité, Navigation, Feedback, Cohérence, Accessibilité.

Critiquer = **règle mesurable + correction chiffrée**. Jamais « c'est moche ».
> ❌ « Le texte est bof » → ✅ « Texte `#888` sur blanc = 3,5:1 < 4,5:1 ; passer à `#1f2937` (15:1). »

## 3. Hiérarchie visuelle — « une page = un message »
- **Niveau 1** (immédiat) : le H1 et l'action principale.
- **Niveau 2** (scannable) : sous-titres, infos clés.
- **Niveau 3** (détail) : texte courant, liens.
- **Si tous les titres ont la même taille** → plus de hiérarchie : l'œil ne sait pas où commencer, rien n'est prioritaire (cf. « mur de texte »).

**Tests rapides :** test des **2 secondes** (« de quoi parle la page, quelle est l'action ? ») · test des **niveaux de gris** (si l'info disparaît, tu confonds couleur et contraste).

## 4. Gestalt & Nielsen (avancé)
- **Proximité** : ce qui est proche est perçu comme lié → un libellé doit être plus près de *son* champ que du champ voisin.
- **Similarité** : ce qui se ressemble est perçu comme du même groupe → une couleur réservée aux éléments cliquables.
- **Figure / fond**, **région commune** (une carte = un groupe).
- **Nielsen** (10 heuristiques), les plus utiles : visibilité de l'état du système · prévention des erreurs · cohérence et standards · reconnaître plutôt que se souvenir · aider à corriger les erreurs.

## 5. Persona → Flow → Brief
| Outil | Rôle | Contenu |
| :--- | :--- | :--- |
| **Persona** | pour **qui** on conçoit | prénom, âge, situation, appareil, objectif, phrase typique, ce qui le fait fermer l'onglet, 3 faits utiles pour le design |
| **User flow** | le **chemin** pour réussir une tâche | 4 jalons : **entrée → recherche/filtre → détail/décision → confirmation** (feedback) |
| **Brief** | le **contrat** en Markdown | contexte, persona, fonctionnalités (MVP), écrans, ambiance, palette, contraintes, interdits |

- Test de l'**impasse** : un écran sans retour possible ? une action sans réponse visuelle ? Tâche en ≤ 4 clics ?
- Prévoir les **cas limites** : recherche vide, réseau coupé, erreur de formulaire.
- **Pitch** = problème · solution · promesse, en 3 phrases.

## 6. Wireframes (s06)
- **Basse fidélité** : noir, blanc, gris. Image = rectangle barré d'une croix. Pas de couleur → on valide la **structure** avant les « rideaux ».
- **Mobile first** (360–390 px) : force à garder l'essentiel ; ce qui marche à une main dans le tram marche sur grand écran, l'inverse non.
- Zones : **en-tête · zone d'appel (titre + filtre) · contenu (cartes) · barre d'action**.
- Cibles tactiles **≥ 44–48 px**.
- Test du **feutre épais** : si ça ne tient pas au feutre moyen, c'est trop chargé.
- Desktop : grille **12 colonnes**, contenu max ~1200 px centré.

## 7. Trois designs (s07)
Explorer **3 directions opposées** avant de choisir (sinon 40 h perdues si le client n'aime pas) :
- **A — Éditoriale** : serif, blanc cassé, sobre.
- **B — Chaleureuse** : arrondis, tons terreux, typo ronde.
- **C — Moderne / pragmatique** : sans-serif, contrastes tranchés, accent vif.

Même structure (wireframe), seule la DA change. **Choisir avec une grille** (5 critères, ou matrice pondérée) — jamais au goût.

## 8. Accessibilité & tests (s08)
**WCAG 2.2 AA** — 4 principes **POUR** : **P**erceptible · **O**pérable (utilisable) · **U** compréhensible · **R**obuste.
En Suisse : norme **eCH-0059** (≈ WCAG AA).

| Règle | Seuil |
| :--- | :--- |
| Contraste texte normal | **≥ 4,5:1** |
| Grand texte (≥ 24 px ou 19 px gras) | ≥ 3:1 |
| Bordures de champs, icônes, focus | ≥ 3:1 |
| Cible tactile | ≥ 24 × 24 px (idéal 44–48) |
| Focus clavier | toujours visible (jamais `outline: none` seul) |
| Couleur | **jamais seule** porteuse d'info (daltonisme ≈ 8 % des hommes) → + icône / texte |
| Images | `alt` utile (ou `alt=""` si décorative) |

**Test sans souris :** Tab / Shift+Tab / Entrée / Espace — tout doit être atteignable avec un focus visible.

**Test utilisateur silencieux :** une consigne, un chrono, **silence absolu** (on ne guide pas, on ne justifie pas). On note hésitations, citations (« think aloud »), temps. C'est **l'interface** qui est testée, pas la personne.

## ✋ Teste-toi
1. Cite les 5 critères de la grille.
2. Seuil de contraste texte/fond ?
3. Pourquoi des wireframes sans couleur ?
4. Les 4 étapes d'un user flow ?
5. Un message d'erreur en rouge seul : quel problème ?
6. Que veut dire POUR ?

<details><summary>Réponses</summary>

1. Lisibilité, navigation, feedback, cohérence, accessibilité.
2. 4,5:1 (WCAG AA).
3. Pour valider la structure et le parcours avant de débattre des couleurs.
4. Entrée, recherche/filtre, détail/décision, confirmation.
5. Invisible pour un daltonien ; il faut doubler par une icône et un texte explicite.
6. Perceptible, Opérable (utilisable), Compréhensible, Robuste.
</details>
