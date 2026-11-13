# CampusShare — TP Next.js & SEO (ISIG-Goma)

Site vitrine pédagogique pour le projet de location et de partage de matériel informatique entre étudiants à Goma (RDC). Adaptation du **Guide_TP_NextJS_SEO_ISIGFORM.pdf** au sujet CampusShare.

## 1. Prérequis
- Node.js récent (>=20.9 ; version LTS recommandée)
- VS Code, Git, GitHub

## 2. Exécution locale (PowerShell)
Décompressez l'archive et ouvrez ce dossier dans VS Code.

```powershell
node -v
npm -v
npm install
npm run dev
```

Ouvrir http://localhost:3000, puis tester :
- http://localhost:3000/sitemap.xml
- http://localhost:3000/robots.txt

Pour vérifier la compilation :

```powershell
npm run build
```

Si PowerShell bloque `npm.ps1`, lancez `npm.cmd install` / `npm.cmd run dev` (ou configurez la politique d'exécution de votre compte après en avoir compris les implications).

## 3. GitHub
Créer sur github.com un dépôt **vide** appelé `campusshare-nextjs` (sans README initial), puis dans le terminal :

```powershell
git init
git add .
git commit -m "Création du site CampusShare en Next.js"
git branch -M main
git remote add origin https://github.com/VOTRE_COMPTE/campusshare-nextjs.git
git push -u origin main
```

Remplacer `VOTRE_COMPTE`. Ne jamais publier de mots de passe ni de fichiers `.env.local`.

## 4. Déployer sur Vercel
1. Aller sur https://vercel.com/new et se connecter avec GitHub.
2. Importer le dépôt `campusshare-nextjs`.
3. Vérifier **Framework Preset: Next.js** et **Root Directory: ./**.
4. Cliquer sur **Deploy**.
5. Copier l'URL HTTPS réelle de Vercel.
6. Dans **Vercel > Project > Settings > Environment Variables**, définir `NEXT_PUBLIC_SITE_URL` avec l'URL réelle **sans slash final**, exemple `https://campusshare-goma.vercel.app` si ce domaine vous a effectivement été attribué.
7. Relancer le déploiement (ou pousser un nouveau commit) afin de générer les métadonnées, URL canonique, sitemap et robots.txt avec la bonne adresse.
8. Vérifier les URL publiques `/`, `/sitemap.xml` et `/robots.txt`.

**Ne pas utiliser** `https://locmateriel.gt.tc/` comme URL canonique du site Next.js, sauf si vous migrez réellement ce domaine vers Vercel. Le site WordPress et le site Next.js sont deux sites distincts tant qu'aucune migration n'a eu lieu.

## 5. Google Search Console
1. Ajouter une **nouvelle propriété Préfixe d'URL** pour le domaine exact attribué par Vercel.
2. Copier la valeur `content` de la balise de vérification HTML.
3. Sur Vercel, définir la variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` avec cette valeur ; redéployer.
4. Vérifier l'URL publique dans le code source, puis cliquer sur **Valider** dans Search Console.
5. Dans **Indexation > Sitemaps**, soumettre `sitemap.xml`.
6. Inspecter l'URL de l'accueil et, si le test en direct l'autorise, demander l'indexation.

## 6. Google Analytics 4
1. Dans https://analytics.google.com/, créer un **flux Web** pour le nouveau domaine Vercel (ou ajouter ce flux à une propriété existante seulement si c'est volontaire).
2. Copier l'ID de mesure `G-...`.
3. Définir `NEXT_PUBLIC_GA_ID=G-...` dans les variables Vercel puis redéployer.
4. Vérifier **Rapports > Temps réel** en visitant le site sans bloqueur et dans le respect du consentement applicable.

Le composant Google Analytics ne charge **rien** si `NEXT_PUBLIC_GA_ID` est absent. N'ajoutez pas une deuxième balise manuelle. La collecte réelle doit respecter les règles de confidentialité applicables et les choix de consentement.

## 7. PageSpeed Insights
- Aller sur https://pagespeed.web.dev/ et saisir l'URL HTTPS de Vercel.
- Relever les scores Mobile puis Ordinateur : Performance, Accessibilité, Bonnes pratiques, SEO.
- Noter les métriques (LCP, INP, CLS si disponibles) et deux pistes d'amélioration.

## État du projet et limites
- ✅ Une page responsive, navigation, catégories, filtre de démonstration, explications et contact.
- ✅ SEO : `metadata` avec canonical et Open Graph, sitemap et robots dynamiques.
- ✅ Variables préparées pour la vérification Search Console et GA4.
- ⚠️ **Aucun backend de réservation**, aucun paiement, aucune base de données ; les trois équipements sont **fictifs**.
- ⚠️ Le lien de contact ouvre le client e-mail et n'envoie pas de message via serveur.
- ⚠️ Aucun domaine public n'a été attribué tant que le projet n'a pas été déployé sur le compte Vercel du propriétaire.
