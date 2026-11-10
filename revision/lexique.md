# Lexique express

Une phrase par mot (d'après le lexique du cours). Si tu sais dire chaque ligne sans regarder, tu es prêt.

## GitHub & outils
| Mot | En une phrase |
| :--- | :--- |
| repo / dépôt | Dossier du projet sur GitHub, avec tout son historique. |
| commit | Version nommée du projet à un instant T, avec un message qui dit ce qui a changé. |
| push | Envoi des commits locaux vers GitHub. |
| clone | Copie d'un dépôt GitHub sur l'ordinateur. |
| local / distant | Local = sur l'ordi ; distant = sur GitHub. |
| GitHub Pages | Service gratuit qui publie un site à partir des fichiers d'un repo. |
| Markdown | Texte structuré avec `#`, `**gras**`, `-` listes ; fichiers `.md`. |
| DevTools | Outils du navigateur (F12) : inspecter, console, réseau. |
| console | Fenêtre des DevTools où JS affiche messages et erreurs (le carnet de bord). |
| Lighthouse | Audit automatique de Chrome : perf, accessibilité, bonnes pratiques. |

## IA
| Mot | En une phrase |
| :--- | :--- |
| prompt | Consigne donnée à une IA ; plus elle est claire, meilleur est le résultat. |
| token | Bouchée de texte lue ou écrite par l'IA. |
| contexte | Tout ce que l'IA a « sous les yeux » : fichiers, brief, conversation. |
| quota | Usage gratuit limité ; épuisé = on change d'outil, on ne paie pas. |
| hallucination | Quand l'IA invente une info ou du code qui a l'air juste mais qui est faux. |
| journal IA | Liste, dans le README, des prompts marquants et des corrections faites à la main. |

## Design
| Mot | En une phrase |
| :--- | :--- |
| UX / UI | UX = l'expérience vécue (j'arrive à faire ma tâche) ; UI = ce qu'on voit. |
| persona | Portrait fictif mais réaliste d'un utilisateur type. |
| user flow | Chemin d'un utilisateur, écran par écran, pour accomplir une tâche. |
| brief | Document qui décrit précisément ce qu'on veut (pour soi, l'équipe ou l'IA). |
| wireframe | Schéma en gris des écrans, sans couleur, pour valider la structure. |
| maquette (mockup) | Image réaliste de l'interface, presque comme le vrai site. |
| prototype | Version cliquable approximative pour tester l'idée. |
| hiérarchie visuelle | Ce que l'œil voit en 1er, 2e, 3e. Une page = un message. |
| contraste | Écart de clarté texte/fond ; minimum 4,5:1. |
| design token | Petite variable de design (couleur, taille, police) réutilisée partout. |
| feedback | Réponse visible de l'interface : « c'est cliqué », « ça charge », « erreur ». |
| micro-interaction | Petit mouvement utile : hover, fondu, feedback de bouton, skeleton. |
| mobile first | Concevoir d'abord pour le téléphone, puis élargir. |
| MVP | Version minimale qui marche : juste l'essentiel. |
| accessibilité | Capacité d'un site à être utilisé par tout le monde, y compris avec un handicap. |
| alt | Phrase qui décrit une image pour qui ne la voit pas. |

## HTML / CSS
| Mot | En une phrase |
| :--- | :--- |
| balise | Mot-clé HTML entre `<` `>` qui donne un rôle à un morceau de page. |
| classe CSS | Étiquette mise sur plusieurs éléments pour leur donner le même style. |
| flexbox | Aligner des éléments sur une ligne ou une colonne (l'étagère). |
| grid | Poser les éléments sur une grille lignes × colonnes (le damier). |
| media query | « Si l'écran est plus large que X, change le style. » |
| breakpoint | Largeur où le design change (ex. 768 px). |
| padding / margin | Padding = coussin intérieur ; margin = espace autour. |
| hover | État d'un élément quand la souris passe dessus. |
| keyframes | Étapes nommées d'une animation CSS (0 %, 50 %, 100 %). |

## JavaScript
| Mot | En une phrase |
| :--- | :--- |
| variable | Boîte étiquetée qui contient une valeur. |
| fonction | Machine à qui l'on donne quelque chose et qui rend un résultat. |
| événement | Quelque chose qui arrive : clic, saisie, envoi de formulaire. |
| addEventListener | « Quand cet événement arrive, lance cette fonction. » (la sonnette) |
| DOM | L'arbre de la page en mémoire, que JS peut modifier. |
| textContent | Lire ou changer le texte visible d'un élément. |
| createElement | Fabriquer un nouvel élément HTML en mémoire, puis l'afficher. |
| querySelector | Trouver un élément à partir d'un sélecteur CSS. |
| chaîne (string) | Suite de caractères : un mot, une phrase. |
| booléen | Valeur à deux états : `true` / `false`. |
| preventDefault | Empêche le comportement par défaut (recharger la page, refuser un dépôt). |
| dataTransfer | La sacoche du glisser-déposer : on y dépose un id au départ, on le relit à l'arrivée. |
| JSON | Format texte pour ranger des données comme une pile de fiches. |
| objet | Une fiche : des paires étiquette → valeur. |
| fetch | Demander des données à une adresse (fichier ou API). |
| asynchrone | On demande, on attend, puis on continue — sans bloquer la page. |
| await | « Attends que cette demande soit finie avant de continuer. » |
| API / endpoint | Guichet d'un service qui répond avec des données / son adresse précise. |
| état de chargement | Message ou animation « patiente, les données arrivent ». |
| FormData | Récupérer d'un coup toutes les valeurs d'un formulaire. |
| framework / librairie | Kit de code tout prêt (React, Bootstrap…). On n'en utilise pas ici. |
