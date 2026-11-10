# Matrice éthique, coûts & confidentialité des outils IA (s02-av2)

> Les conditions changent souvent : vérifier la page « Privacy / Data usage » de chaque outil avant usage pro. État vérifié de mémoire, novembre 2026 — à recontrôler.

| Axe | GitHub Copilot (Free / Education) | Claude (Free) | ChatGPT (Free) |
| :--- | :--- | :--- | :--- |
| **Coût / quotas** | Gratuit avec GitHub Education ; version Free limitée en complétions et messages / mois | Gratuit avec limite de messages sur une fenêtre de quelques heures | Gratuit avec limite sur le modèle le plus puissant, puis modèle plus léger |
| **Entraînement sur mes données** | Paramétrable dans les réglages GitHub (désactiver l'usage pour l'amélioration du produit) | Réglage de confidentialité dans le compte : choisir de ne pas autoriser l'usage pour l'entraînement | Réglage « Améliorer le modèle pour tous » à désactiver |
| **Hébergement des données** | Serveurs Microsoft/GitHub (principalement USA) | Serveurs cloud (principalement USA) | Serveurs cloud (principalement USA) |
| **Modèle économique** | Abonnement Pro / Business | Abonnements Pro / Team / Entreprise + API | Abonnements Plus / Team / Entreprise + API |
| **Quota épuisé → contournement** | Passer sur Claude/ChatGPT web | Passer sur ChatGPT ou Gemini | Passer sur Gemini ou Claude |

## Ce que dit la loi (Suisse)
- **nLPD** (en vigueur depuis le 1.9.2023) : envoyer des données personnelles à un service à l'étranger = transfert de données → il faut une base légale / l'accord du client.
- Côté UE : **RGPD**, même logique.

## 3 règles d'hygiène pour un studio multimédia romand
1. **Jamais de données personnelles réelles ni de secrets** (clés d'API, mots de passe, code client sous NDA) dans un chat IA grand public. On anonymise ou on invente.
2. **Désactiver l'entraînement** sur ses données dans chaque outil dès la création du compte, et le noter dans `kit-ia.md`.
3. **Tracer** : chaque code issu d'une IA est relu, testé, et mentionné dans le journal IA du README (outil + prompt + corrections manuelles).
