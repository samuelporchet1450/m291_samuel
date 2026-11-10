# Audit daltonisme & basse vision — Red Line V3 (s08-av1)

**Méthode :** DevTools Chrome → ⋮ → *More tools* → **Rendering** → *Emulate vision deficiencies* : Deutéranopie, Protanopie, Tritanopie, Vision floue.

| Élément | Info portée | Deutéranopie (vert) | Protanopie (rouge) | Tritanopie (bleu-jaune) | Vision floue | Correctif |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Point « toi » sur la carte | Position actuelle | ✅ noir, reste visible | ✅ | ✅ | ✅ gros disque | — |
| Humeur active (fond acide `#d4ff3a`) | « Sélectionné » | ⚠️ l'acide devient jaune pâle, proche du fond | ⚠️ idem | ❌ l'acide tire vers le rose/gris clair, quasi invisible | ⚠️ | Ajouter un **✓** + texte en gras + bordure 2 px encre sur l'élément actif |
| Message d'erreur (rouge `#b91c1c`) | Saisie invalide | ⚠️ rouge → brun foncé, lu comme du texte normal | ⚠️ | ✅ | ✅ | Icône ⚠ + mot « Erreur : » + bordure épaisse du champ |
| Bouton ▶ / ⏸ | Lecture en cours | ✅ forme différente | ✅ | ✅ | ⚠️ icônes petites | Icône 24 px min + `aria-label` « Lire » / « Pause » |
| Écart (distance d'humeur) dans la liste | Plus ou moins proche | — (chiffre) | — | — | ✅ | Déjà en texte (« Écart 0.12 ») ✅ |

## Règle appliquée
Toute info en couleur est **doublée** par une forme (✓, ⚠, bordure), un texte ou une position. On peut tester en passant la page en **niveaux de gris** : si on comprend encore tout, c'est bon.
