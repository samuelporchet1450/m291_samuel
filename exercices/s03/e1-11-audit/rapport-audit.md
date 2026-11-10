# Rapport d'audit — dépôt du festival de théâtre d'Yverdon (e1-11)

## Volet A — Historique Git (règle des 3 V : Verbe, Visible, Vrai)

| Commit | Message d'origine | Problème | Message réécrit |
| :--- | :--- | :--- | :--- |
| a1b2c3d | `modif css` | Pas de verbe précis, on ne sait pas quoi | `Harmonise les couleurs du menu avec les variables CSS du thème` |
| d4e5f6a | `ça marche enfin` | Émotion, pas d'information | `Corrige l'envoi du formulaire d'inscription qui rechargeait la page` |
| 7b8c9d0 | `ajout bouton` | Quel bouton ? où ? | `Ajoute le bouton « Réserver » sur les cartes du programme` |
| 1f2e3d4 | `wiiip` | Aucun sens | `Ajoute la structure HTML de la page Programme (contenu provisoire)` |
| 5a6b7c8 | `version finale vendredi` | Faux (il y aura d'autres versions), date inutile (Git la stocke déjà) | `Harmonise les textes du programme 2026 avant la mise en ligne` |

## Volet B — Refactorisation sémantique

```html
<header class="site-header">
  <p class="logo">Festival Yverdon</p>
  <nav aria-label="Navigation principale">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="programme.html" aria-current="page">Programme</a></li>
    </ul>
  </nav>
</header>
<main>
  <h1>Programme 2026</h1>
  <article class="spectacle">
    <h2>Roméo et Juliette</h2>
    <p>Représentation exceptionnelle au Château.</p>
  </article>
</main>
```
Ce qui a changé :
- `onclick="location.href=…"` sur des `<div>` → vrais liens `<a href>` : focusables au clavier, annoncés par les lecteurs d'écran, clic-droit « ouvrir dans un onglet » possible, zéro JavaScript.
- `<div class="big-text">` → `<h1>` ; `card-title` → `<h2>` : hiérarchie de titres sans saut.
- La carte devient un `<article>` (contenu autonome), la zone principale un `<main>`.
- Le logo est un `<p>` (pas un 2e `<h1>`). Le `<div class="site-box">` englobant est supprimé (inutile).

Fichier validable : [`refactorisation.html`](refactorisation.html) (W3C validator : 0 erreur).

## Volet C — Diagnostic du formulaire
Un `<button type="submit">` dans un `<form>` déclenche l'événement `submit`, dont le comportement **par défaut** est d'envoyer le formulaire et de **recharger la page** (ou de naviguer vers `action`). Au rechargement, tout l'état JavaScript et la saisie de l'utilisateur disparaissent : c'est pour ça que le formulaire « perd » ce qui a été tapé. En écoutant `submit` et en appelant `event.preventDefault()`, on annule ce comportement par défaut : la page reste, on peut valider les champs en JS et afficher un message d'erreur à côté du champ, sans rien perdre.
