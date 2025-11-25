import Footer from "@/component/layout/Footer";
import NavBar from "@/component/layout/NavBar";
import GridBackground from "@/component/ui/GridBackground";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const siteConfig = {
    name: "Jessy David",
    title: "Jessy David | Développeur Web Full-Stack",
    description:
        "Développeur Web Full-Stack passionné, spécialisé en React, Next.js et Node.js. Création de sites web modernes, applications web performantes et solutions digitales sur mesure.",
    url: "https://jessy-david.dev",
    ogImage: "https://jessy-david.dev/og-image.jpg",
    author: "Jessy David",
    keywords: [
        "développeur web",
        "développeur full-stack",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "création site web",
        "freelance",
        "France",
        "portfolio",
        "Jessy David",
    ],
    twitterHandle: "@jessydavid",
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,

    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: "/",
        languages: {
            "fr-FR": "/",
        },
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Portfolio Développeur Web`,
                type: "image/jpeg",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        creator: siteConfig.twitterHandle,
        images: [siteConfig.ogImage],
    },

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    manifest: "/site.webmanifest",

    category: "technology",

    verification: {
        google: "ton-code-google-search-console",
    },

    other: {
        "msapplication-TileColor": "#0f172a",
        "theme-color": "#0f172a",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: "dark",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            inLanguage: "fr-FR",
        },
        {
            "@type": "Person",
            "@id": `${siteConfig.url}/#person`,
            name: siteConfig.name,
            url: siteConfig.url,
            image: siteConfig.ogImage,
            jobTitle: "Développeur Web Full-Stack",
            description: siteConfig.description,
            sameAs: [
                "https://github.com/jessydavid-dev",
                "https://linkedin.com/in/jessy-david",
                "https://twitter.com/jessydavid",
            ],
            knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "JavaScript",
                "Tailwind CSS",
                "PostgreSQL",
                "MongoDB",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": `${siteConfig.url}/#profilepage`,
            url: siteConfig.url,
            name: `Portfolio de ${siteConfig.name}`,
            description: siteConfig.description,
            mainEntity: { "@id": `${siteConfig.url}/#person` },
            inLanguage: "fr-FR",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                <link
                    rel="dns-prefetch"
                    href="https://www.google-analytics.com"
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <GridBackground variant="light" />
                <NavBar />
                <main id="main-content" className="relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
