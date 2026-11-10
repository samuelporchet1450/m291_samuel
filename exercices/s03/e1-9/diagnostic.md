# Diagnostic — setlist e1-9

| # | Piège | Symptôme | Correctif |
| :-: | :--- | :--- | :--- |
| 1 | **dragover sans `preventDefault()`** | Curseur « interdit », l'événement `drop` ne part jamais | Écouteur `dragover` qui appelle `e.preventDefault()` |
| 2 | **Clé différente** : `setData("text/id")` / `getData("text/plain")` | La console affiche `dépôt, id reçu :` vide | Même clé `"text/plain"` des deux côtés |
| 3 (bonus) | `e.target` peut être le `<span>` survolé, pas le `<li>` | Le morceau s'insère *dans* une ligne | `e.target.closest("li")` + `liste.insertBefore(...)` |

Contre-épreuve : glisser le 3e morceau (DJ Vallée) en 1re position → il prend sa place. Ordre final visé : 18:00, 19:00, 20:10, 21:40, 22:30. ✅
