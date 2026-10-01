# RESET — Et si les solutions existaient déjà ailleurs ?

Plateforme de réflexion citoyenne et d'analyse comparative internationale des politiques publiques.
Version 1 : identité, fondations, accueil, méthode, à propos.

## Lancer le projet

Prérequis : Node.js 20 ou plus.

```bash
npm install
npm run dev        # développement : http://localhost:3000
npm run build      # compilation de production
npm start          # serveur de production
npm run lint       # contrôle ESLint
npx tsc --noEmit   # contrôle TypeScript strict
```

Variable d'environnement (facultative tant que le domaine n'est pas choisi) :
`NEXT_PUBLIC_SITE_URL=https://domaine-definitif.fr` (utilisée pour le sitemap, robots.txt et Open Graph).

## Architecture

```
content/dossiers/        Futurs articles MDX (V2) + modèle _modele.mdx (jamais publié)
src/app/                 Pages (App Router)
  page.tsx               Accueil
  methode/ a-propos/     Pages éditoriales V1
  dossiers/ monde/ comparer/   Pages d'attente honnêtes (sans faux contenu)
  mentions-legales/ confidentialite/   Gabarits, champs « À compléter »
  sitemap.ts robots.ts icon.svg not-found.tsx
src/components/
  layout/                En-tête (menu mobile), pied de page, logo
  home/                  Sections de l'accueil
  ui/                    Container, PageHeader, Prose, ButtonLink, ToFill
src/config/site.ts       Nom, signature, navigation, URL
src/data/                Thématiques, pays, méthode, principes éditoriaux
src/lib/content/         Modèle de contenu (types) et registre des dossiers
```

Les contenus éditoriaux (thématiques, pays, étapes, principes) sont séparés du code dans `src/data/`.
Le registre `src/lib/content/articles.ts` est vide : seuls les dossiers au statut `publie` sont exposés,
les brouillons ne sortent jamais. Dès qu'un dossier est publié, l'accueil bascule automatiquement
du bloc « Premier terrain d'étude : le Japon » vers la liste des derniers dossiers.

## Identité

Palette, polices (Manrope + Inter, auto-hébergées via @fontsource, aucune requête à Google)
et tokens : `src/app/globals.css`. Signature graphique : le point corail du logo « RESET. ».
Pas de mode sombre (prévu plus tard comme option).
