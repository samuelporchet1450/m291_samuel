# Note 3 — Entretien (15–20 min) : préparation sur Red Line

Tu montres le site, tu expliques un morceau de code, on te demande « et si vous ajoutiez… ». Les réponses ci-dessous sont basées sur l'app [`app/`](../app) — **reformule-les avec tes mots**, l'oral est sans filet.

## Fiche d'architecture (à recopier sur la fiche du prof)
| | |
| :--- | :--- |
| **Nom** | Red Line — playlists par humeur |
| **URL Pages** | `https://samuelporchet1450.github.io/m291_samuel/app/` (après activation de Pages) |
| **Repo** | `github.com/samuelporchet1450/m291_samuel` |
| `index.html` sert à | la **structure** : en-tête, recherche + puces d'humeur, zone `#etat`, conteneur `#liste-cartes`, formulaire, `<dialog>` de détail |
| `style.css` sert à | l'**apparence** : tokens dans `:root`, grille 1/2/3 colonnes, cartes, micro-interactions, `prefers-reduced-motion` |
| `app.js` sert à | le **comportement** : `fetch`, `afficherLieux`, filtres, tri, fiche détail, validation du formulaire |
| `data.json` contient | 30 fiches : `id`, `titre`, `humeur`, `energie`, `luminosite`, `description`, `tags`, `morceaux`, `minutes`, `nouveau` |

**Trajet des données :** `data.json` → **fetch** → **`.json()`** (pile de fiches dans `tousLesLieux`) → **`afficherLieux()`** (`createElement` + boucle) → **écran**.

**3 micro-interactions :** (1) la carte s'élève au survol / focus · (2) les cartes apparaissent en fondu décalé après un filtre · (3) le bouton s'enfonce au clic (classe `.pris` 300 ms). *(+ squelettes pendant le chargement.)*

**Écarts maquette → code :** gris secondaire foncé (`#8c8c88` → `#5f5f5b`) pour passer AA ; la carte des humeurs « à glisser » remplacée dans l'app finale par des **puces d'humeur** + tri par énergie (plus simple au doigt et au clavier, cf. persona Jean-Luc) ; fiche détail en `<dialog>` au lieu d'un écran séparé.

---

## Les 15 questions types
**1. Montrez le trajet d'une fiche, du JSON jusqu'à la carte.**
Ouvrir `data.json` → la fiche `id: 1`. Dans `app.js`, `chargerPlaylists()` : `fetch("data.json")` demande le fichier, `reponse.json()` le transforme en pile, je la range dans `tousLesLieux`, puis `appliquerFiltres()` appelle `afficherLieux()` qui crée un `<article class="carte">` par fiche avec `createElement` et y met `playlist.titre` avec `textContent`. Preuve : je change le titre dans `data.json`, je recharge, la carte change sans toucher au HTML.

**2. Où sont vos design tokens ? Changez `--c-acide` : que se passe-t-il ?**
Dans `:root` en haut de `style.css`. Tout ce qui utilise `var(--c-acide)` change d'un coup : boutons, puces actives, badge « Nouveau », logo. Une ligne au lieu de dix.

**3. Pourquoi `await` ici ?** (dans mon code c'est `.then`, même idée)
`fetch` est asynchrone : le fichier met du temps à arriver. `await` / `.then` disent « attends la réponse avant de continuer », sinon j'essaierais d'afficher des fiches qui ne sont pas encore là.

**4. Que se passe-t-il si `data.json` est introuvable ?**
`reponse.ok` est faux (404) → je lance une erreur → le `.catch` affiche « Impossible de charger les playlists. Vérifie ta connexion… » dans `#etat`, et l'erreur précise va dans la console. La page ne reste pas blanche.

**5. Montrez le filtre. Quelle analogie pour `input` ?**
`champRecherche.addEventListener("input", …)` : une sonnette qui sonne à chaque lettre. À chaque fois, `tousLesLieux.filter(correspond)` garde les fiches dont le titre, l'humeur ou un tag contient le mot. La pile d'origine n'est jamais modifiée. (Avec un debounce de 250 ms pour ne pas recalculer à chaque lettre.)

**6. Pourquoi `preventDefault` sur le submit ?**
Par défaut, envoyer un formulaire recharge la page : la saisie et l'état seraient perdus. `preventDefault()` annule ça, je valide en JS et j'affiche les erreurs sans recharger.

**7. Pourquoi la validation JS ne suffit pas ?**
Elle tourne dans le navigateur de l'utilisateur, qui peut la contourner ; un vrai serveur doit toujours revérifier les données.

**8. Où est le message d'erreur ? Pourquoi pas `alert` ?**
Sous chaque champ (`<p id="erreur-titre">`), relié par `aria-describedby`, avec une icône ⚠ et `aria-invalid`. `alert` bloque la page, disparaît au clic, n'est pas à côté du champ et n'est pas soigné.

**9. Cette fonction : boîte, machine ou déclencheur ?**
Exemple parlant — `validerChamp(champ)` : une **machine** (entrée : un champ → sortie : un message d'erreur ou `""`). `criteres` est une **boîte**. `formulaire.addEventListener("submit", …)` est le **déclencheur**.

**10. Quel écart avec la maquette, et pourquoi ?** → voir « Écarts » ci-dessus (contraste, puces au lieu de la carte à glisser).

**11. Un commit parlant et un moins bon ?**
Parlant : `Ajoute la recherche par humeur sur la page d'accueil` (verbe, visible, vrai). Moins bon : `test modif` ou `Update static-server.ps1` → on ne sait pas ce qui a changé ni pourquoi.

**12. Un prompt du journal IA : qu'avez-vous corrigé à la main ?**
À préparer avec **tes vrais prompts** (voir README → Journal IA). Exemple de structure : « J'ai demandé à Claude d'adapter `afficherLieux` à ma carte ; il a utilisé `innerHTML` → je l'ai remplacé par `createElement` + `textContent`. »

**13. Et si on ajoutait un mode sombre ?**
Grâce aux variables : un bloc `@media (prefers-color-scheme: dark) { :root { --c-fond: #0a0a0c; --c-encre: #f3efe8; … } }` (déjà prévu dans `design/piste-hybride.md`), puis revérifier les contrastes. Aucun composant à réécrire.

**14. Et si Noah n'avait que la 3G ? Qu'est-ce qui casse ?**
Rien ne casse : `data.json` met plus de temps, les squelettes et « Chargement des playlists… » s'affichent pendant l'attente. Si la connexion tombe, le `.catch` affiche le message d'erreur. Le fichier est léger (texte seulement, pas d'images).

**15. Si je retire cette animation, la personne perd-elle une info ?**
Non : chaque animation double une info déjà présente (la puce active a aussi un ✓, le nombre de résultats est écrit dans `#etat`). Et avec `prefers-reduced-motion`, elles sont déjà toutes coupées.

---

## « Et si vous ajoutiez… » — idées prêtes
- **Favoris** : un bouton ♡ par carte, la liste d'`id` dans `localStorage`, filtre « Mes favoris ».
- **Tri par luminosité** : une `<option>` de plus + une ligne `sort` (l'étiquette `luminosite` existe déjà, en nombre).
- **Autocomplétion** : le composant combobox de `exercices/s13/combobox-accessible.html`, branché sur les titres.
