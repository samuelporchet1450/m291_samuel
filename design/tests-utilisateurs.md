# Tests utilisateurs — Red Line (e2-7)

> ✏️ **À faire en classe avec un·e camarade.** Le protocole, la fiche et les mesures de contraste sont prêts ; les observations doivent venir d'un vrai test (je ne les invente pas).

## Protocole
- **Support testé :** wireframes `design/wireframes/` + maquette V3 (`redline/index.html`) sur téléphone.
- **Scénario (1 phrase) :** « Tu rentres crevé du travail, trouve une playlist calme pour la nuit et lance-la. »
- **Durée :** chronomètre 5 minutes max.
- **Règles de l'observateur :** silence absolu, on ne guide pas la main, on ne justifie rien. C'est l'interface qui est testée, pas la personne.
- **Think aloud :** demander au testeur de penser à voix haute.

## Fiche d'observation (e2-7)
| Champ | Réponse |
| :--- | :--- |
| App testée | Red Line (maquette V3) |
| Testeur | _prénom du camarade_ |
| Observateur | Sam |
| Tâche donnée | Trouver une playlist calme pour la nuit et la lancer |
| **Test 5 secondes** — « C'est une appli pour… » | _phrase exacte du testeur_ |
| Écart avec l'intention | _ex. : a compris « appli météo » à cause des axes_ |
| **Test de localisation** — consigne : « Montrez où vous tapoteriez pour : **lancer la playlist la plus calme** » | |
| Le doigt est allé au bon contrôle | oui / non / à côté |
| Hésitation | _durée, où le regard s'est perdu_ |
| Dit à voix haute | _citations_ |
| J'ai aidé | oui / non |
| Temps total de la tâche | _mm:ss_ |

## Mesures de contraste (WebAIM Contrast Checker)
| Élément | Couleurs | Ratio mesuré | Seuil | Verdict |
| :--- | :--- | :-: | :-: | :-: |
| Bouton principal « Ouvrir la playlist → » | encre `#0d0d0d` sur acide `#d4ff3a` | **16.8:1** | 4.5:1 | ✅ |
| Texte courant | `#0d0d0d` sur `#f7f7f5` | **18.1:1** | 4.5:1 | ✅ |
| Texte secondaire (V3 d'origine) | `#8c8c88` sur `#f7f7f5` | **3.2:1** | 4.5:1 | ❌ |
| Texte secondaire (corrigé) | `#5f5f5b` sur `#f7f7f5` | **6.0:1** | 4.5:1 | ✅ |
| Acide utilisé comme texte | `#d4ff3a` sur `#f7f7f5` | **1.1:1** | 4.5:1 | ❌ interdit |

## Test clavier (sans souris)
- [ ] Tab atteint la recherche, le point de la carte, chaque carte, le bouton Lire, le lecteur
- [ ] Les flèches déplacent le point de la carte
- [ ] Le focus est visible partout
- [ ] Entrée ouvre une playlist

## 2 correctifs prioritaires (à confirmer après le test)
| # | Avant | Après (prévu) | Pourquoi |
| :-: | :--- | :--- | :--- |
| 1 | Texte secondaire `#8c8c88` (3.2:1) | `#5f5f5b` (6.0:1) | Mesure : échec AA |
| 2 | _friction observée pendant le test_ | _correctif_ | _citation / hésitation observée_ |
