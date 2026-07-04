# 🚀 Optimisations pour TDME Website

> **Dernière mise à jour** : 04/07/2025
> **Auteur** : Mistral AI (via vibe)
> **Statut** : ✅ Propositions prêtes à être implémentées

---

## 📌 **Résumé des Optimisations**
Ce document regroupe **toutes les optimisations** proposées pour améliorer :
- **Performance** (vitesse, taille des assets)
- **SEO** (référencement, métadonnées)
- **Accessibilité** (WCAG, ARIA)
- **Sécurité** (headers, validation)
- **CI/CD** (workflows, déploiement)
- **Maintenabilité** (typage, tests, formatage)

---

## 📁 **Structure du Document**
1. [Performance](#-1-performance)
2. [SEO](#-2-seo)
3. [Accessibilité](#-3-accessibilité)
4. [Sécurité](#-4-sécurité)
5. [CI/CD](#-5-cicd)
6. [Maintenabilité](#-6-maintenabilité)
7. [Roadmap Recommandée](#-roadmap-recommandée)

---

## 🔥 **1. Performance**
### **Problèmes identifiés**
- Images non optimisées (`unoptimized: true` dans `next.config.js`).
- Pas de lazy loading pour les composants lourds (Framer Motion).
- Pas de code splitting pour les bibliothèques lourdes.
- Pas de cache pour les données statiques.

### **Solutions**

#### **1.1 Optimisation des Images**
**Fichier à modifier** : `next.config.js`
```javascript
const nextConfig = {
  images: {
    unoptimized: false, // ✅ Désactiver unoptimized
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tdme.fr", // Ajouter votre domaine
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    images: {
      allowFutureImage: true, // Pour Next.js 14+
    },
  },
};
```
**Impact** : Réduction de 30-50% du poids des images.

---

#### **1.2 Lazy Loading des Composants**
**Fichier à créer** : `src/components/AnimatedSection.tsx`
```tsx
"use client";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false } // ✅ Désactive le SSR pour réduire le bundle initial
);

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  return <MotionDiv>{children}</MotionDiv>;
}
```
**Utilisation** :
```tsx
import AnimatedSection from "@/components/AnimatedSection";

<AnimatedSection>
  <div>Votre contenu animé</div>
</AnimatedSection>
```
**Impact** : Réduction du bundle JavaScript initial.

---

#### **1.3 Cache des Données Statiques**
**Fichier à modifier** : `src/data/projects.ts`
```tsx
import { cache } from "react";

export const getProjects = cache(() => {
  return projects; // Vos données existantes
});
```
**Impact** : Évite le re-rendu inutile des données.

---

#### **1.4 Pré-chargement des Polices**
**Fichier à modifier** : `src/app/layout.tsx`
```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true, // ✅ Pré-charger la police
});
```
**Impact** : Évite le FOIT (Flash of Invisible Text).

---

#### **1.5 Minification et Compression**
**Fichier à modifier** : `next.config.js`
```javascript
const nextConfig = {
  compress: true, // ✅ Active la compression gzip/brotli
  swcMinify: true, // ✅ Minification avec SWC (plus rapide que Terser)
};
```

---

## 🔍 **2. SEO**
### **Problèmes identifiés**
- Pas de `sitemap.xml` généré automatiquement.
- Pas de `robots.txt` personnalisé.
- Métadonnées dupliquées entre les pages.
- Pas de balises OpenGraph pour les pages internes.

### **Solutions**

#### **2.1 Génération Automatique du Sitemap**
**Fichier à créer** : `src/app/sitemap.ts`
```tsx
import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://tdme.fr/realisations/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const activityUrls = activities.map((activity) => ({
    url: `https://tdme.fr/activites/${activity.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://tdme.fr",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://tdme.fr/realisations",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://tdme.fr/activites",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
    ...activityUrls,
  ];
}
```

---

#### **2.2 Fichier robots.txt**
**Fichier à créer** : `src/app/robots.ts`
```tsx
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/realisations", "/activites", "/a-propos", "/contact"],
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://tdme.fr/sitemap.xml",
    host: "https://tdme.fr",
  };
}
```

---

#### **2.3 Métadonnées Dynamiques pour les Pages Internes**
**Exemple pour** : `src/app/realisations/[id]/page.tsx`
```tsx
import { Metadata } from "next";
import { projects } from "@/data/projects";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Projet non trouvé" };

  return {
    title: `${project.title} | TDME`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}
```

---

#### **2.4 Structured Data (Schema.org)**
**Fichier à modifier** : `src/app/layout.tsx`
```tsx
export const metadata: Metadata = {
  // ... vos métadonnées existantes
  other: {
    "schema.org": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TDME - Transport Data & Mobility Engineering",
      url: "https://tdme.fr",
      logo: "https://tdme.fr/images/logo.png",
      description: "Bureau d'études spécialisé en ingénierie des transports et data mobilité",
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33 7 51 52 17 24",
        email: "contact@tdme.fr",
      },
    }),
  },
};
```

---

## ♿ **3. Accessibilité**
### **Problèmes identifiés**
- Contraste des couleurs à vérifier (ex: `text-secondary-600` sur fond blanc).
- Pas de balises ARIA pour les composants interactifs.
- Pas de focus visible pour la navigation au clavier.
- Pas de texte alternatif pour toutes les images.

### **Solutions**

#### **3.1 Vérification du Contraste**
**Outils** :
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Problème** : `text-secondary-600` (#666666) sur fond blanc a un contraste de **4.0:1** (minimum WCAG AA).
- **Solution** : Utiliser `text-secondary-800` (#333333) pour un contraste de **7.5:1**.

**Fichier à modifier** : `tailwind.config.js`
```javascript
colors: {
  secondary: {
    // ... existant
    600: "#4D4D4D", // ✅ Plus foncé pour un meilleur contraste
    800: "#333333", // ✅ Déjà OK
  },
},
```

---

#### **3.2 Balises ARIA pour les Composants**
**Exemple pour** : `src/components/ActivityCard.tsx`
```tsx
export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article
      aria-labelledby={`activity-${activity.id}-title`}
      className="..."
    >
      <h3 id={`activity-${activity.id}-title`}>{activity.title}</h3>
      <p aria-label={`Description: ${activity.description}`}>
        {activity.description}
      </p>
      <button
        aria-label={`En savoir plus sur ${activity.title}`}
        onClick={...}
      >
        En savoir plus
      </button>
    </article>
  );
}
```

---

#### **3.3 Focus Visible**
**Fichier à modifier** : `src/app/globals.css`
```css
/* Focus visible pour l'accessibilité */
:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}

/* Supprimer le focus par défaut du navigateur */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

#### **3.4 Texte Alternatif pour les Images**
**Fichier à modifier** : `src/data/projects.ts`
```tsx
export interface Project {
  // ... existant
  alt: string; // ✅ Texte alternatif pour l'image
}

export const projects: Project[] = [
  {
    // ... existant
    alt: "Vue aérienne de Bamako avec des routes et des bâtiments", // Exemple
  },
];
```
**Fichier à modifier** : `src/components/ProjectCard.tsx`
```tsx
<img
  src={project.image}
  alt={project.alt}
  loading="lazy" // ✅ Lazy loading
  className="..."
/>
```

---

## 🔒 **4. Sécurité**
### **Problèmes identifiés**
- Headers de sécurité incomplets (manque CSP, HSTS).
- Pas de validation des entrées pour le formulaire de contact.
- Pas de protection contre les attaques CSRF.

### **Solutions**

#### **4.1 Headers de Sécurité Avancés**
**Fichier à modifier** : `next.config.js`
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Existants
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Nouveaux
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none';",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};
```
**⚠️ Attention** : Adaptez la CSP à vos besoins (ex: ajouter les domaines de Framer Motion, Google Fonts).

---

#### **4.2 Validation du Formulaire de Contact**
**Fichier à modifier** : `src/components/ContactSection.tsx`
```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    // Envoyer les données au serveur
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name")}
        aria-invalid={errors.name ? "true" : "false"}
        aria-describedby="name-error"
      />
      {errors.name && (
        <p id="name-error" className="text-red-500">
          {errors.name.message}
        </p>
      )}
      {/* ... */}
    </form>
  );
}
```
**Dépendances à ajouter** :
```bash
npm install zod @hookform/resolvers
```

---

#### **4.3 Protection CSRF**
**Fichier à créer** : `src/lib/csrf.ts`
```tsx
import { randomBytes } from "crypto";

const csrfTokens = new Set<string>();

export function generateCsrfToken(): string {
  const token = randomBytes(32).toString("hex");
  csrfTokens.add(token);
  return token;
}

export function verifyCsrfToken(token: string): boolean {
  return csrfTokens.has(token);
}
```

**Fichier à créer** : `src/app/api/contact/route.ts`
```tsx
import { NextResponse } from "next/server";
import { generateCsrfToken, verifyCsrfToken } from "@/lib/csrf";

export async function GET() {
  const token = generateCsrfToken();
  return NextResponse.json({ token });
}

export async function POST(request: Request) {
  const { token, ...data } = await request.json();
  if (!verifyCsrfToken(token)) {
    return NextResponse.json({ error: "Token CSRF invalide" }, { status: 403 });
  }
  // Traiter le formulaire
  return NextResponse.json({ success: true });
}
```

---

## ⚙️ **5. CI/CD**
### **Problèmes identifiés**
- Workflow GitHub Actions ne vérifie pas les tests/lint.
- Pas de prévisualisation (Preview Deployments) pour les PR.
- Pas de cache agressif pour les dépendances.

### **Solutions**

#### **5.1 Amélioration du Workflow GitHub Actions**
**Fichier à modifier** : `.github/workflows/deploy.yml`
```yaml
name: Deploy TDME Website

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"] # ✅ Déclencher sur les PR

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm run lint # ✅ Vérifier le lint
      - run: npm run build # ✅ Vérifier la build

  deploy:
    needs: test # ✅ Dépendre des tests
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' # ✅ Déployer uniquement sur main
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - run: npm run export
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          keep_files: false
          enable_jekyll: false
```

---

#### **5.2 Preview Deployments avec Vercel**
1. **Installez l'application Vercel** sur votre dépôt GitHub :
   - Allez sur [Vercel](https://vercel.com/) > **Add New Project** > **Import Git Repository**.
   - Sélectionnez votre dépôt `nboucher78/Deploy`.
2. **Configurez les Preview Deployments** :
   - Dans les paramètres du projet Vercel, activez **"Preview Deployments"**.
   - Chaque PR générera une URL de prévisualisation (ex: `https://deploy-preview-123--tdme.vercel.app`).

---

#### **5.3 Cache Agressif des Dépendances**
**Fichier à modifier** : `.github/workflows/deploy.yml`
```yaml
- name: Cache Node Modules
  uses: actions/cache@v3
  with:
    path: |
      node_modules
      .next/cache
    key: ${{ runner.os }}-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}- 
```

---

## 🛠️ **6. Maintenabilité**
### **Problèmes identifiés**
- Typage incomplet pour certains composants.
- Pas de Prettier pour le formatage automatique.
- Duplication de code (ex: animations Framer Motion).
- Pas de tests unitaires.

### **Solutions**

#### **6.1 Typage Strict pour les Composants**
**Exemple pour** : `src/components/ActivityCard.tsx`
```tsx
interface ActivityCardProps {
  activity: Activity;
  index: number;
  className?: string; // ✅ Props optionnelles
}

export default function ActivityCard({
  activity,
  index,
  className = "",
}: ActivityCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`}>
      {/* ... */}
    </div>
  );
}
```

---

#### **6.2 Configuration de Prettier**
1. **Installez Prettier** :
   ```bash
   npm install --save-dev prettier prettier-plugin-tailwindcss
   ```
2. **Créez `.prettierrc`** :
   ```json
   {
     "semi": true,
     "singleQuote": false,
     "tabWidth": 2,
     "trailingComma": "es5",
     "printWidth": 80,
     "plugins": ["prettier-plugin-tailwindcss"]
   }
   ```
3. **Ajoutez un script dans `package.json`** :
   ```json
   "scripts": {
     "format": "prettier --write ."
   }
   ```
4. **Ajoutez un hook Git avec `husky`** :
   ```bash
   npm install --save-dev husky
   npx husky init
   ```
   **Créez `.husky/pre-commit`** :
   ```bash
   #!/bin/sh
   npm run format
   npm run lint
   ```

---

#### **6.3 Réutilisation des Animations Framer Motion**
**Fichier à créer** : `src/lib/animations.ts`
```tsx
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```
**Utilisation** :
```tsx
<motion.div {...fadeIn} {...container}>
  {/* ... */}
</motion.div>
```

---

#### **6.4 Tests Unitaires avec Jest et React Testing Library**
1. **Installez les dépendances** :
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest
   ```
2. **Créez `jest.config.js`** :
   ```javascript
   module.exports = {
     preset: "ts-jest",
     testEnvironment: "jsdom",
     setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/src/$1",
     },
   };
   ```
3. **Créez `jest.setup.js`** :
   ```javascript
   import "@testing-library/jest-dom";
   ```
4. **Ajoutez un script dans `package.json`** :
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
5. **Exemple de test pour `ActivityCard`** :
   **Fichier à créer** : `src/components/ActivityCard.test.tsx`
   ```tsx
   import { render, screen } from "@testing-library/react";
   import ActivityCard from "./ActivityCard";
   import { activities } from "@/data/activities";

   describe("ActivityCard", () => {
     it("renders activity title", () => {
       render(<ActivityCard activity={activities[0]} index={0} />);
       expect(screen.getByText(activities[0].title)).toBeInTheDocument();
     });
   });
   ```

---

## 🗺️ **Roadmap Recommandée**

### **Phase 1 (1-2 jours) : Optimisations Critiques**
| **Tâche** | **Priorité** | **Temps Estimé** | **Fichiers à Modifier** |
|-----------|--------------|------------------|-------------------------|
| Optimiser les images (`unoptimized: false`) | ⭐⭐⭐⭐⭐ | 1h | `next.config.js` |
| Ajouter le sitemap et robots.txt | ⭐⭐⭐⭐⭐ | 30 min | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Améliorer les headers de sécurité (CSP, HSTS) | ⭐⭐⭐⭐ | 1h | `next.config.js` |
| Valider le formulaire de contact (Zod) | ⭐⭐⭐⭐ | 1h | `src/components/ContactSection.tsx` |
| Corriger les problèmes d'accessibilité (contraste, ARIA) | ⭐⭐⭐⭐ | 2h | `tailwind.config.js`, `src/app/globals.css` |

---

### **Phase 2 (2-3 jours) : Expérience et Maintenabilité**
| **Tâche** | **Priorité** | **Temps Estimé** | **Fichiers à Modifier** |
|-----------|--------------|------------------|-------------------------|
| Configurer Prettier + Husky | ⭐⭐⭐ | 1h | `.prettierrc`, `package.json` |
| Ajouter des tests unitaires (Jest) | ⭐⭐⭐ | 3h | `jest.config.js`, `src/components/*.test.tsx` |
| Améliorer le workflow CI/CD | ⭐⭐⭐ | 1h | `.github/workflows/deploy.yml` |
| Documenter les composants (Storybook) | ⭐⭐ | 2h | `src/components/*.stories.tsx` |

---

### **Phase 3 (1 jour) : Déploiement et Monitoring**
| **Tâche** | **Priorité** | **Temps Estimé** | **Fichiers à Modifier** |
|-----------|--------------|------------------|-------------------------|
| Configurer Vercel (Preview Deployments) | ⭐⭐⭐ | 1h | - |
| Ajouter Google Analytics | ⭐⭐ | 30 min | `src/app/layout.tsx` |
| Monitorer les performances (Lighthouse) | ⭐⭐ | 1h | - |

---

## 📊 **Résultats Attendus**
| **Métrique** | **Avant** | **Après Optimisations** | **Amélioration** |
|--------------|-----------|-------------------------|------------------|
| **Lighthouse Performance** | ~70 | **90+** | +20% |
| **Lighthouse SEO** | ~85 | **100** | +15% |
| **Lighthouse Accessibility** | ~80 | **95+** | +15% |
| **Lighthouse Best Practices** | ~85 | **100** | +15% |
| **Temps de chargement (FCP)** | ~2.5s | **<1.5s** | -40% |
| **Taille du bundle JS** | ~500KB | **<300KB** | -40% |
| **Taille des images** | ~1MB | **<500KB** | -50% |

---

## 🔗 **Ressources Utiles**

### **Performance**
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Lighthouse (Google)](https://developer.chrome.com/docs/lighthouse/overview/)

### **SEO**
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org/)

### **Accessibilité**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### **Sécurité**
- [OWASP Headers](https://owasp.org/www-project-secure-headers/)
- [CSP Generator](https://report-uri.com/home/generate)

### **CI/CD**
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel Deployments](https://vercel.com/docs/concepts/deployments)

---

## 🎯 **Prochaines Étapes**
1. **Priorisez les optimisations** en fonction de votre temps disponible.
2. **Testez chaque changement** localement avec :
   ```bash
   npm run dev
   ```
   et [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).
3. **Déployez les modifications** sur une branche de test avant de merger sur `main`.
4. **Surveillez les métriques** après le déploiement (Google Search Console, Analytics).

---

## 💡 **Bonus : Idées pour l'Avenir**
1. **Internationalisation (i18n)** :
   - Utilisez `next-intl` pour ajouter une version anglaise.
2. **Blog Technique** :
   - Ajoutez un blog avec `next-mdx-remote` pour partager des articles sur l'ingénierie des transports.
3. **Chatbot** :
   - Intégrez un chatbot (ex: avec [Vercel AI](https://vercel.com/ai)) pour répondre aux questions fréquentes.
4. **Analytics Avancés** :
   - Utilisez [Plausible](https://plausible.io/) ou [Fathom](https://usefathom.com/) pour un suivi respectueux de la vie privée.
5. **PWA (Progressive Web App)** :
   - Transformez le site en PWA avec `next-pwa` pour une expérience hors ligne.

---

## 📝 **Changelog**
| **Version** | **Date** | **Auteur** | **Modifications** |
|-------------|----------|------------|-------------------|
| 1.0.0 | 04/07/2025 | Mistral AI | Création initiale du document |
