# Semaine 13 — Animations (et note 2)

| Fiche | Livrable | Statut |
| :--- | :--- | :--- |
| e3-5 Micro-interactions | [`app/style.css`](../../app/style.css) : (1) élévation des cartes au survol/focus, (2) apparition décalée des cartes, (3) feedback de clic `.pris` 300 ms, (4) squelettes de chargement, + fiche en `<dialog>` qui apparaît ; durées ≤ 200–350 ms ; `prefers-reduced-motion` coupe tout | ✅ |
| e3-6 Autocomplétion (avancé) | [`combobox-accessible.html`](combobox-accessible.html) | ✅ testé : « lau » → Lausanne / Lauterbrunnen, ↓ + Entrée, Échap |
| s13-av1 Combobox WAI-ARIA | même fichier (`role="combobox"`, `aria-expanded`, `aria-activedescendant`, `role="listbox"/"option"`, `aria-selected`) | ✅ |
| s13-av2 View Transitions | [`view-transitions.html`](view-transitions.html) | ✅ (repli sans animation si non supporté) |

Note : le fichier de départ `e3-6/depart/index.html` est abîmé (des commandes `cat << 'EOF'` ont été collées après `</html>`). J'ai repris la liste de villes et le JS de départ qui y étaient cachés.

Test théorique (note 2, **sans IA**) : voir [`revision/`](../../revision).
