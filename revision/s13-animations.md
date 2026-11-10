# s13 · Micro-interactions & animations accessibles

## 1. L'idée
Une animation ne **décore** pas : elle **confirme une action**, **guide l'attention** ou **adoucit un changement d'état**. Un site où tout tourne et clignote donne le vertige → on ferme l'onglet.

## 2. Les 3 règles ⭐
| Règle | Valeur |
| :--- | :--- |
| **Durée** | **150–250 ms** pour une transition d'interface. > 350 ms = lourd, lent. |
| **Propriétés** | animer **`transform`** et **`opacity`** uniquement. Pas `width`, `height`, `top`, `margin` (recalcul de la mise en page → saccades). |
| **Accessibilité** | respecter **`prefers-reduced-motion`** : certaines personnes ont nausées / migraines. |

## 3. Le code type
```css
.carte {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.carte:hover,
.carte:focus-within {               /* aussi au clavier ! */
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Règle obligatoire */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
  }
}
```

| Outil | Pour quoi |
| :--- | :--- |
| `transition` | passer d'un état A à un état B (survol, focus, classe ajoutée) |
| `@keyframes` + `animation` | une séquence autonome (apparition en fondu, squelette qui pulse) |
| classe ajoutée en JS 300 ms | feedback de clic (`.pris` → `scale(0.97)`) |

## 4. Exemples de micro-interactions utiles (projet : il en faut 3)
1. **Élévation** d'une carte au survol / focus → « c'est cliquable ».
2. **Apparition en fondu** des cartes filtrées → on voit que la liste a changé.
3. **Feedback de clic** sur un bouton → « ton clic est pris en compte ».
4. **Squelettes** qui pulsent pendant le chargement → état « chargement » visible.

Question d'entretien : « Si je retire cette animation, la personne perd-elle une info ? » → une bonne micro-interaction **double** une info (ex. l'état actif a aussi un ✓) : sans animation, rien n'est perdu, c'est juste moins fluide.

## 5. Vérifier
DevTools → **Rendering** → *Emulate CSS media feature prefers-reduced-motion* → `reduce` : les mouvements disparaissent, l'état change net, sans saut.

## 6. Avancé
- **View Transitions** : `document.startViewTransition(() => rendre())` anime le passage d'un état du DOM à l'autre ; prévoir le repli `if (!document.startViewTransition)`.
- **Combobox ARIA** : `role="combobox"`, `aria-expanded`, `aria-activedescendant`, liste `role="listbox"` d'éléments `role="option"` + `aria-selected` ; ↓ ↑ Entrée Échap.

## ✋ Teste-toi
1. Durée idéale d'une transition ?
2. Quelles propriétés animer ?
3. Que fait `prefers-reduced-motion: reduce` dans le code du cours ?

<details><summary>Réponses</summary>

1. 150–250 ms.
2. `transform` et `opacity`.
3. Coupe toutes les transitions et animations pour les personnes qui ont demandé moins de mouvement dans leur système.
</details>
