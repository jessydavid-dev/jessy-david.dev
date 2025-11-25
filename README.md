```markdown
# 🚀 jessy-david.dev

Mon portfolio personnel de développeur web, construit avec Next.js 15 et les dernières technologies modernes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Fonctionnalités

-   ⚡ **Next.js 16** - App Router & Server Components
-   🎨 **Tailwind CSS** - Design moderne et responsive
-   📧 **Formulaire de contact** - API Route intégrée
-   🗺️ **Sitemap dynamique** - SEO optimisé
-   🌐 **PWA Ready** - Manifest & icônes inclus
-   🔥 **Animations fluides** - Effets visuels modernes

## 🏗️ Structure du projet
```

├── app/
│ ├── api/contact/ # API de contact
│ ├── globals.css # Styles globaux
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Page d'accueil
│ └── sitemap.ts # Sitemap dynamique
├── component/
│ ├── layout/ # NavBar, Footer
│ ├── sections/ # Hero, About, Skills, Projects, Contact
│ └── ui/ # Composants réutilisables
├── config/
│ └── site.ts # Configuration du site
└── public/ # Assets statiques & favicons

````

## 🚀 Installation

```bash
# Cloner le repo
git clone git@github.com:jessydavid-dev/jessy-david.dev.git

# Accéder au dossier
cd jessy-david.dev

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
````

## 💻 Développement

```bash
# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Lancer en production
pnpm start
```

## ⚙️ Variables d'environnement

Créer un fichier `.env.local` :

```env
# Configuration SMTP Mailcow
SMTP_HOST=mail.google.com
SMTP_PORT=587
SMTP_USER=contact@google.com
SMTP_PASSWORD=super_mot_de_passe
SMTP_FROM=Contact Portfolio <contact@google.com>
EMAIL_TO=contact@google.com

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=clé_api
TURNSTILE_SECRET_KEY=clé_api_secret
```

## 📦 Technologies utilisées

| Catégorie       | Technologies         |
| --------------- | -------------------- |
| Framework       | Next.js 16, React 19 |
| Langage         | TypeScript           |
| Styling         | Tailwind CSS         |
| Déploiement     | Coolify              |
| Package Manager | pnpm                 |

## 📄 License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Jessy David**

-   Website: [jessy-david.dev](https://jessy-david.dev)
-   GitHub: [@jessydavid-dev](https://github.com/jessydavid-dev)
-   Email: contact@jessy-david.dev

---

<p align="center">
  Fait avec ❤️ et 🍵
</p>
```
