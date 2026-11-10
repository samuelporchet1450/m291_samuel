# Auto-audit eCH-0059 (≈ WCAG 2.1 AA) — Red Line (s08-av2)

Pages auditées : `redline/index.html` (maquette V3), puis l'app finale `app/index.html` après correctifs.
**eCH-0059** = standard suisse d'accessibilité (administrations et mandats publics), aligné sur **WCAG 2.1 niveau AA**.

| Critère | Exigence | État | Constat | Correctif appliqué / prévu |
| :--- | :--- | :-: | :--- | :--- |
| **1.1.1** Contenu non textuel | Toute image utile a un `alt`, les images décoratives `alt=""` | ✅ (app finale) | Pas d'image informative ; chaque bouton de carte a un `aria-label` (« Voir la playlist … »), le ✕ a « Fermer la fiche » | `aria-label` sur chaque bouton icône (« Précédent », « Lire », « Suivant »), `aria-hidden="true"` sur les SVG décoratifs |
| **1.4.3** Contraste minimal | 4.5:1 texte, 3:1 grand texte | ❌ → ✅ | Gris secondaire `#8c8c88` = 3.2:1 | Remplacé par `#5f5f5b` = 6.0:1 ; acide jamais en texte |
| **2.1.1** Clavier | Tout faisable sans souris | ✅ | La carte est un `role="slider"` avec `tabindex="0"` et pilotage aux flèches | Vérifié : 48 éléments focusables, tous natifs (`<a>`, `<button>`, `<input>`, `<select>`), aucun `<div>` cliquable |
| **2.4.7** Focus visible | Indicateur de focus visible | ✅ (app finale) | Avant : focus par défaut peu visible sur l'acide. Après : contour 3 px encre, vérifié au clavier | `:focus-visible { outline: 3px solid #0d0d0d; outline-offset: 3px }` |
| **3.3.1** Identification des erreurs | Erreur décrite en texte | ✅ (app finale) | Formulaire « Proposer une playlist » : message sous chaque champ + icône ⚠ + `aria-invalid` + `aria-describedby`, focus sur le 1er champ invalide | Message sous le champ + icône + `aria-invalid` + `aria-describedby` |

**Bilan après correctifs (app finale `app/`) :** 5 critères sur 5 conformes. Contraste corrigé (`#5f5f5b`), focus visible, clavier complet et erreurs de formulaire identifiées vérifiés le 10.11.2026.
