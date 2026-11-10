# Auto-audit eCH-0059 (≈ WCAG 2.1 AA) — Red Line (s08-av2)

Page auditée : `redline/index.html` (direction V3).
**eCH-0059** = standard suisse d'accessibilité (administrations et mandats publics), aligné sur **WCAG 2.1 niveau AA**.

| Critère | Exigence | État | Constat | Correctif appliqué / prévu |
| :--- | :--- | :-: | :--- | :--- |
| **1.1.1** Contenu non textuel | Toute image utile a un `alt`, les images décoratives `alt=""` | ⚠️ Partiellement | Les SVG d'icônes du lecteur n'ont pas toutes un nom accessible | `aria-label` sur chaque bouton icône (« Précédent », « Lire », « Suivant »), `aria-hidden="true"` sur les SVG décoratifs |
| **1.4.3** Contraste minimal | 4.5:1 texte, 3:1 grand texte | ❌ → ✅ | Gris secondaire `#8c8c88` = 3.2:1 | Remplacé par `#5f5f5b` = 6.0:1 ; acide jamais en texte |
| **2.1.1** Clavier | Tout faisable sans souris | ✅ | La carte est un `role="slider"` avec `tabindex="0"` et pilotage aux flèches | Vérifier que chaque carte de playlist est un `<a>` ou `<button>` (pas un `<div>` cliquable) |
| **2.4.7** Focus visible | Indicateur de focus visible | ⚠️ | Focus par défaut du navigateur, peu visible sur l'acide | `:focus-visible { outline: 3px solid #0d0d0d; outline-offset: 3px }` |
| **3.3.1** Identification des erreurs | Erreur décrite en texte | N/A → à faire | Le formulaire « Proposer une playlist » n'existe pas encore (s12) | Message sous le champ + icône + `aria-invalid` + `aria-describedby` |

**Bilan :** 1 conforme, 3 à corriger (corrections définies), 1 non applicable pour l'instant. Re-audit prévu en s14 sur l'app en ligne.
