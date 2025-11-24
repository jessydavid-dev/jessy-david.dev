import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio · Jessy David",
    description: "Portfolio de Jessy David",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased">{children}</body>
        </html>
    );
}
