# s01–s02 · GitHub & écosystème IA

## 1. GitHub : le classeur unique
**Problème de départ :** `site-final.html`, `site-final-v2-lucas.html`, `site-final-definitif-v3.html`… personne ne sait quelle version est la bonne. → Il faut **un seul dossier versionné**.

| Mot | Définition (1 phrase) | Analogie |
| :--- | :--- | :--- |
| **Repo** (dépôt) | Le dossier du projet hébergé sur GitHub, avec tout son historique. | Le classeur partagé de l'équipe |
| **Commit** | Une version nommée : « le projet à cet instant, et voici ce qui a changé ». | « Nommer la version » dans Google Docs |
| **Push / Sync** | Envoyer ses commits de l'ordi vers GitHub. | Poster la lettre |
| **Clone** | Télécharger une copie complète du repo sur un ordi. | Photocopier le classeur |
| **GitHub Pages** | Le service qui sert `index.html` comme un vrai site. | La vitrine du magasin |

### Les 2 endroits
```
 ORDINATEUR (local)                         GITHUB (distant)
 VS Code ── Stage (+) ── Commit ── Sync ──▶  repo m291-prenom ──▶ Pages : pseudo.github.io/m291-prenom/
            ◀──────────────── Clone ────────
```
- Modifier un fichier = **seulement** sur l'ordi. GitHub ne voit rien tant qu'il n'y a pas **commit + push**.
- Dans VS Code (Source Control) : **+** (stage) → message → **Commit** → **Sync Changes**.
- Dans ce cours : **jamais de terminal**, uniquement les interfaces graphiques.

### Pièges classiques
- **Public ≠ publié.** Un repo public se *consulte*, mais n'est un *site* qu'avec Pages activé (Settings → Pages → `main` / `(root)`).
- Pages cherche **`index.html` à la racine**, en minuscules. Dans un sous-dossier → rien.
- Repo public → **aucune donnée perso** : nom de famille, téléphone, adresse, carte d'étudiant, photo de visage.

### Bon message de commit — règle des 3 V
**Verbe** d'action · **Visible** (ce qui change) · **Vrai** (exactement ce qui a été fait).
- ✅ `Corrige le compteur qui ne mettait pas l'affichage à jour`
- ❌ `ok`, `update`, `fix`, `wiiip`, `version finale vendredi`

## 2. Markdown
| Écrit | Rendu |
| :--- | :--- |
| `# Titre` | grand titre (un seul par document) |
| `## Section` | sous-titre |
| `**gras**` | **gras** |
| `*italique*` | *italique* |
| `- élément` | puce |
| `[texte](url)` | lien |

Le `.md` reste du texte ; c'est l'**aperçu** (Preview, `Ctrl+K V`) qui dessine le rendu. Markdown sert aussi à **transporter le contexte d'une IA à l'autre** (le brief).

## 3. L'IA : tokens, quotas, kit
- **Token** = une « bouchée » de texte que l'IA lit ou écrit (≈ une syllabe). Les quotas gratuits comptent des tokens/messages.
- **Fenêtre de contexte** = la mémoire de travail de l'IA. Coller 500 lignes pour une petite question la sature et brûle le quota.
- **Quota épuisé → on change d'outil. On ne paie jamais.** D'où le **kit IA** : plusieurs outils (Copilot, Claude, ChatGPT, Gemini…).
- **GitHub Education** : demande à faire tôt (adresse scolaire + carte d'apprenti) ; on travaille sans attendre la réponse.

### Le prompt en 4 piliers
1. **Rôle** — « Tu es intégrateur web senior, HTML accessible et CSS moderne. »
2. **Contenu** — les vrais textes, sans laisser l'IA inventer.
3. **Contraintes** — ce qui est interdit : « zéro framework, zéro bibliothèque, CSS à variables ».
4. **Format** — « rends un bloc HTML puis un bloc CSS, sans bavardage ».

Autre formulation vue au cours (quiz) : **contexte · précision · demander l'explication**.

### Pourquoi demander l'explication ?
Sans elle, tu ne peux pas **raconter** la modification (à un camarade, au prof, à l'entretien). Et dans Cursor / Copilot : on **lit le diff avant d'accepter** (rouge = enlevé, vert = ajouté).

### « change le bouton » → que se passe-t-il ?
L'IA invente : une page entière, un framework, ou modifie le mauvais bouton. → Nommer l'élément (`#magic`), le changement exact et les interdits.

## ✋ Teste-toi
1. Quelle est la différence entre commit et push ?
2. J'ai un nouvel ordi : je fais quoi pour récupérer le projet ?
3. Mon repo est public mais `pseudo.github.io/m291-prenom/` affiche 404. Deux causes possibles ?
4. Réécris le commit `modif css` selon les 3 V.
5. Cite les 4 piliers d'un prompt.
6. Quota Claude épuisé en plein cours : que fais-tu ?

<details><summary>Réponses</summary>

1. Commit = enregistrer une version nommée **en local** ; push = **l'envoyer** sur GitHub.
2. Un **clone**.
3. Pages pas activé (Settings → Pages) ; pas d'`index.html` à la racine (ou mal nommé, ex. `Index.html`). (Ou : attendre 1–3 min après l'activation.)
4. Ex. `Harmonise les couleurs du menu avec les variables CSS`.
5. Rôle, contenu, contraintes, format.
6. Je bascule sur l'outil suivant de mon kit, avec mon `brief.md`. Je ne paie pas.
</details>
