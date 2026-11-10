# s11 · Afficher ses fiches avec fetch

## 1. L'idée
Comme l'écran des départs en gare : il **demande** les horaires à un ordinateur central, **reçoit** une liste, en fait une ligne par train. S'il n'y a pas de réponse, il affiche « Informations momentanément indisponibles » — pas une liste vide.

## 2. Les mots
- **Serveur** : programme qui donne des fichiers quand on les demande (GitHub Pages, Live Server).
- **fetch** : demander un fichier → **requête** ; ce qui revient → **réponse**.
- **Code de statut** : **200** = voici le fichier · **404** = n'existe pas · (304 = copie du cache).
- **Asynchrone** : la réponse arrive **plus tard** ; la page ne l'attend pas.
- **`.then`** : « quand la réponse sera arrivée, fais ceci ». **`.catch`** : « si quelque chose a échoué plus haut, fais ceci ».
- **Promesse** : ce que `fetch` rend tout de suite ; elle se tient (`.then`) ou échoue (`.catch`).

## 3. Les 3 temps ⭐
```js
fetch("data.json")                         // 1. DEMANDER le fichier
  .then(function (reponse) {
    if (!reponse.ok) {                     //    404 n'est PAS une erreur pour fetch : on vérifie
      throw new Error("Fichier introuvable : code " + reponse.status);
    }
    return reponse.json();                 // 2. LIRE : texte → pile de fiches
  })
  .then(function (donnees) {
    tousLesLieux = donnees;                // 3. RANGER puis MONTRER
    afficherLieux(tousLesLieux);           //    createElement + boucle → les cartes
  })
  .catch(function (erreur) {
    console.error(erreur);                 // pour toi
    zoneEtat.textContent = "Impossible de charger les lieux."; // pour l'utilisateur
  });
```

### La même chose avec `await` (c'est ce qui sort au test !)
```js
async function charger() {
  try {
    const reponse = await fetch("data.json");   // (2) demander le fichier
    const donnees = await reponse.json();       // (1) transformer le texte en pile de fiches
    afficherLieux(donnees);                     // (3) fabriquer les cartes (createElement + boucle)
  } catch (erreur) { /* message d'erreur */ }
}
```
**`await` = attendre la réponse** avant de passer à la ligne suivante (sans bloquer la page).

## 4. Les 4 états ⭐
| État | Quand | Ce qu'on montre |
| :--- | :--- | :--- |
| **Chargement** | entre la demande et la réponse | « Chargement des lieux… » (ou squelettes) |
| **Affichée** | fiches arrivées | les cartes, sans message |
| **Erreur** | fichier absent (404) ou cassé | « Impossible de charger… » |
| **Vide** | fichier arrivé, `[]` | « Aucun lieu pour le moment. » |

Le message va dans `<p id="etat" role="status">` → annoncé par les lecteurs d'écran.
Sans `.catch`, en cas d'erreur, « Chargement… » **reste pour toujours** → la personne croit que ça charge encore.

## 5. Diagnostiquer (onglet Réseau, F12)
| Symptôme | Cause |
| :--- | :--- |
| Adresse `file://`, aucune carte | ouvert en double-clic → `fetch` bloqué. Ouvrir avec **Live Server** (`http://127.0.0.1:5500`) |
| Réseau : `data.json` **404** | nom ou emplacement faux (à côté de `index.html`, minuscules) |
| Réseau **200** mais console `SyntaxError` | le fichier est arrivé mais le **JSON est cassé** (virgule, guillemet) |
| Carte avec un trou / `undefined`, aucune erreur | étiquette écrite différemment (`"Nom"` vs `"nom"`) — l'erreur muette |
| `Cannot read properties of null` | `getElementById` ne trouve pas l'id |

## 6. Bonnes pratiques
- `createElement` + `textContent`, **pas `innerHTML`** (une fiche contenant `<` casserait la carte / risque d'injection).
- On charge **une fois** dans `tousLesLieux`, et la recherche (s12) filtre cette pile — on ne redemande pas le fichier à chaque lettre.
- Preuve que ça marche : changer une fiche dans `data.json` → la carte change **sans toucher au HTML**.

## ✋ Teste-toi
1. Double-clic sur `index.html`, `file://`, pas de carte. Que fais-tu ?
2. Réseau : 404. Que vérifies-tu ?
3. Réseau 200, console SyntaxError : où est le problème ?
4. Pourquoi « Chargement… » ne suffit pas sans `.catch` ?
5. Relie : `await fetch(...)`, `await reponse.json()`, `createElement + boucle` ↔ (1) transformer en pile, (2) demander, (3) fabriquer les cartes.

<details><summary>Réponses</summary>

1. J'ouvre avec Live Server (adresse http://127.0.0.1…).
2. Le nom du fichier dans `fetch` et qu'il est bien à côté de `index.html`.
3. Dans le contenu de `data.json` (JSON invalide).
4. En cas d'erreur, le message resterait affiché pour toujours ; personne ne saurait que ça a échoué.
5. fetch → 2 · json() → 1 · createElement → 3.
</details>
