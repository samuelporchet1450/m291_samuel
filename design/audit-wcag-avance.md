# Audit d'accessibilité avancé WCAG 2.2 AA (e2-8)

## Composant audité
```html
<div style="background:#f8fafc; padding:20px;">
  <label style="color:#94a3b8; font-size:14px;">Votre adresse courriel</label>
  <input type="text" style="border:1px solid #e2e8f0; background:#ffffff; outline:none; padding:4px 6px;">
  <span style="color:#ef4444; font-size:12px;">Erreur</span>
  <button style="background:#e0e7ff; color:#6366f1; border:none; padding:4px 8px; font-size:12px; cursor:pointer;">Valider</button>
</div>
```

## Relevé des non-conformités
| # | Critère | Mesure | Verdict | Explication |
| :-: | :--- | :--- | :-: | :--- |
| 1 | **1.4.3 Contraste (texte)** | Label `#94a3b8` sur `#f8fafc` = **2.5:1** (seuil 4.5:1) | ❌ | Texte de 14 px trop pâle. En plus le `<label>` n'a pas de `for` : il n'est pas relié au champ (clic sur le label inutile, lecteur d'écran muet). |
| 2 | **2.4.7 / 2.4.13 Focus visible** | `outline: none` sans remplacement | ❌ | Au clavier (Tab), on ne voit plus quel champ est actif : l'utilisateur tape « dans le vide ». Barrière totale pour qui ne peut pas utiliser une souris. |
| 3 | **1.4.11 Contraste non textuel** | Bordure `#e2e8f0` sur `#ffffff` = **1.2:1** (seuil 3:1) | ❌ | On ne voit pas les limites du champ. |
| 4 | **2.5.8 Taille de cible** | Bouton ≈ **58 × 22 px** (12 px × 1.2 + 2×4 px de padding) | ❌ | Hauteur < 24 px (minimum AA), très loin des 44–48 px recommandés pour le pouce. Texte `#6366f1` sur `#e0e7ff` = 3.6:1 en 12 px → échec 1.4.3 aussi. |
| 5 | **1.4.1 Couleur seule / 3.3.1 Identification des erreurs** | « Erreur » en `#ef4444` (3.6:1), 12 px | ❌ | Pour un daltonien rouge-vert, c'est juste un mot gris. Et « Erreur » ne dit pas *quoi* corriger. Pas d'`aria-invalid`, pas de lien `aria-describedby` avec le champ. |
| + | `type="text"` pour un email | — | ⚠️ | `type="email"` + `autocomplete="email"` : bon clavier mobile + saisie automatique. |

## Refactorisation conforme
```html
<form class="champ-form" novalidate>
  <div class="champ">
    <label for="courriel" class="champ__label">Votre adresse courriel</label>
    <input id="courriel" name="courriel" type="email" autocomplete="email" required
           class="champ__input" aria-invalid="true" aria-describedby="courriel-erreur">
    <p id="courriel-erreur" class="champ__erreur">
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="currentColor"/><rect x="7" y="3.5" width="2" height="6" fill="#fff"/><rect x="7" y="11" width="2" height="2" fill="#fff"/></svg>
      Erreur : l'adresse doit contenir un « @ » (ex. nom@exemple.ch).
    </p>
  </div>
  <button type="submit" class="bouton">Valider</button>
</form>
```
```css
:root {
  --c-fond: #f8fafc;
  --c-texte: #0f172a;      /* 17:1 */
  --c-label: #334155;      /* 10:1 */
  --c-bordure: #64748b;    /* 4.6:1 contre blanc → ≥ 3:1 ✅ */
  --c-focus: #1d4ed8;      /* 6.3:1 */
  --c-erreur: #b91c1c;     /* 6.2:1 */
  --c-primaire: #3730a3;   /* blanc dessus : 10:1 */
  --cible-min: 2.75rem;    /* 44 px */
}
.champ-form { background: var(--c-fond); padding: 1.25rem; display: grid; gap: 1rem; }
.champ { display: grid; gap: 0.375rem; }
.champ__label { color: var(--c-label); font-size: 1rem; font-weight: 600; }
.champ__input { min-height: var(--cible-min); padding: 0.5rem 0.75rem; font-size: 1rem; border: 2px solid var(--c-bordure); border-radius: 0.375rem; background: #fff; color: var(--c-texte); }
.champ__input:focus-visible { outline: 3px solid var(--c-focus); outline-offset: 2px; }
.champ__input[aria-invalid="true"] { border-color: var(--c-erreur); border-width: 3px; }
.champ__erreur { display: flex; align-items: center; gap: 0.375rem; margin: 0; color: var(--c-erreur); font-size: 0.9375rem; font-weight: 600; }
.bouton { min-height: var(--cible-min); min-width: var(--cible-min); padding: 0.625rem 1.25rem; font-size: 1rem; font-weight: 700; color: #fff; background: var(--c-primaire); border: 0; border-radius: 0.375rem; cursor: pointer; justify-self: start; }
.bouton:focus-visible { outline: 3px solid var(--c-focus); outline-offset: 3px; }
```

## Contre-épreuve (3 modes)
| Mode | Résultat attendu |
| :--- | :--- |
| Pipette / WebAIM | Label 10:1, bordure 4.6:1, erreur 6.2:1, bouton 10:1 ✅ |
| Clavier (Tab) | Contour bleu 3 px visible sur le champ puis sur le bouton ✅ |
| Lighthouse (Accessibilité) | Plus d'alerte « contraste » ni « label manquant » |
