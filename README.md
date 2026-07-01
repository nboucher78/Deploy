# TDME Website

Site web professionnel pour **TDME - Transport Data & Mobility Engineering**, un bureau d'études spécialisé en ingénierie des transports et data mobilité.

## 🚀 Fonctionnalités

- **Design moderne** inspiré des couleurs Bouygues Construction
- **Responsive** : Adapté mobile, tablette et desktop
- **Animations fluides** avec Framer Motion
- **SEO optimisé** avec Next.js
- **Filtres dynamiques** pour les réalisations
- **Formulaire de contact** fonctionnel
- **Déploiement automatique** sur GitHub Pages

## 🛠 Technologies

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **UI** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Formulaires** : [React Hook Form](https://react-hook-form.com/)
- **Langage** : TypeScript

## 📁 Structure du projet

```
nboucher78/Deploy/
├── src/
│   ├── app/                  # Pages et layout
│   │   ├── globals.css       # Styles globaux
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── activites/        # Page Activités
│   │   ├── realisations/     # Page Réalisations
│   │   ├── a-propos/         # Page À propos
│   │   └── contact/          # Page Contact
│   ├── components/           # Composants réutilisables
│   └── data/                 # Données (activités, projets, etc.)
├── public/                  # Fichiers statiques
│   └── images/               # Images du site
└── .github/workflows/       # Workflows CI/CD
    └── deploy.yml            # Déploiement GitHub Pages
```

## 🏗 Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/nboucher78/Deploy.git
   cd Deploy
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build et Export

Pour générer une version statique du site :

```bash
npm run build
npm run export
```

Le site sera généré dans le dossier `out/`.

## 🚀 Déploiement

### Sur GitHub Pages

Le site est configuré pour se déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

1. Activer GitHub Pages dans les paramètres du dépôt
2. Sélectionner la branche `gh-pages` et le dossier `/ (root)`

### Sur Vercel (recommandé)

1. Importer le dépôt sur [Vercel](https://vercel.com/)
2. Configurer le projet Next.js
3. Déployer

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: '#0066CC', // Bleu Bouygues
  },
  secondary: {
    50: '#F5F5F5', // Gris clair
    800: '#333333', // Gris foncé
  },
}
```

### Contenu

- **Activités** : Modifier `src/data/activities.ts`
- **Projets** : Modifier `src/data/projects.ts`
- **Statistiques** : Modifier `src/data/stats.ts`
- **Partenaires** : Modifier `src/data/partners.ts`

### Images

Placer les images dans `public/images/` et mettre à jour les chemins dans les fichiers de données.

## 📞 Contact

Pour toute question ou demande de personnalisation :

- **Email** : contact@tdme.fr
- **Téléphone** : +33 7 51 52 17 24
- **Site web** : [https://tdme.fr](https://tdme.fr)

## 📄 Licence

Ce projet est propriétaire de TDME - Transport Data & Mobility Engineering.
