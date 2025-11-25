"use client";

import { ReactNode } from "react";

interface GlowButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export default function GlowButton({
    href,
    children,
    variant = "primary",
}: GlowButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    if (variant === "primary") {
        return (
            <a
                href={href}
                onClick={handleClick}
                className="relative inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group cursor-pointer"
            >
                <span className="flex items-center justify-center space-x-2 relative z-10">
                    <span>{children}</span>
                </span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-purple-500/20 to-indigo-500/20"></span>
            </a>
        );
    }

    // Variante secondaire (bleu)
    return (
        <a
            href={href}
            onClick={handleClick}
            className="relative inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(59,130,246,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(59,130,246,0.4)] group cursor-pointer"
        >
            <span className="flex items-center justify-center space-x-2 relative z-10">
                <span>{children}</span>
            </span>
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-blue-500/20 to-cyan-500/20"></span>
        </a>
    );
}
