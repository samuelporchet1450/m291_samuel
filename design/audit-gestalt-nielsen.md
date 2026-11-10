# Audit Gestalt & Nielsen (s04-av2)

Pages auditées : `03-silence.html` et `04-carnaval.html` (captures du roast e2-1).

## Anomalie 1 — Formulaire « Créer un compte » (03-silence)
**Constat :** les libellés « Email » et « Mot de passe » sont collés au champ dans le même `<p>`, sans `<label>`, et le bouton « ok » est presque invisible.

| Grille | Diagnostic |
| :--- | :--- |
| **Gestalt — Proximité** | Les éléments proches sont perçus comme liés. Ici les paragraphes ont la même marge au-dessus et en dessous : le libellé n'est pas plus proche de *son* champ que du champ précédent. → Libellé au-dessus du champ avec 4–8 px d'écart, 24 px entre deux couples libellé/champ. |
| **Nielsen #1 — Visibilité de l'état du système** | Après clic, rien : l'utilisateur ne sait pas si le compte est créé. → Message « Compte créé » ou erreur sous le champ, bouton en état « Envoi… ». |
| **Nielsen #5 — Prévention des erreurs** | Champ email non typé (`<input>`), pas de règle affichée pour le mot de passe. → `type="email"`, `required`, consigne visible « 8 caractères minimum » *avant* la saisie. |
| **Nielsen #4 — Cohérence et standards** | « ok » n'est pas le libellé standard d'un bouton d'inscription. → « Créer mon compte ». |

## Anomalie 2 — Prix promo signalés uniquement en couleur (04-carnaval)
**Constat :** « Les articles en promo sont en rouge, les normaux en vert. Rien d'autre ne le dit. »

| Grille | Diagnostic |
| :--- | :--- |
| **Gestalt — Similarité** | Des éléments qui se ressemblent sont perçus comme du même groupe. Ici les liens, boutons, prix et titres utilisent les mêmes couleurs saturées : impossible de distinguer « cliquable » de « décoratif ». → Une seule couleur réservée aux éléments interactifs. |
| **Gestalt — Figure / fond** | Vert `#0f0` sur jaune `#ff0` (1.3:1) : la figure ne se détache pas du fond. |
| **Nielsen #6 — Reconnaître plutôt que se souvenir** | L'utilisateur doit mémoriser le code rouge = promo. → Badge texte « PROMO », prix barré. |
| **Nielsen #8 — Esthétique et design minimaliste** | 4 polices, 6 couleurs : chaque élément crie, rien n'est prioritaire. |
| **WCAG 1.4.1** | L'information ne doit pas être transmise par la couleur seule (daltonisme rouge/vert ≈ 8 % des hommes). |

## Rappel : les 10 heuristiques de Nielsen
1. Visibilité de l'état du système · 2. Correspondance système / monde réel · 3. Contrôle et liberté (annuler) · 4. Cohérence et standards · 5. Prévention des erreurs · 6. Reconnaître plutôt que se souvenir · 7. Flexibilité et efficacité · 8. Esthétique et minimalisme · 9. Aider à reconnaître, diagnostiquer et corriger les erreurs · 10. Aide et documentation.

## Lois de Gestalt utiles
Proximité · Similarité · Continuité · Clôture · Figure/fond · Région commune (une carte = un groupe).
