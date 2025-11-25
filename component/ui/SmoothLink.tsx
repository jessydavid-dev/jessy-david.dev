"use client";

import { ReactNode } from "react";

interface SmoothLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function SmoothLink({
    href,
    children,
    className,
    onClick,
}: SmoothLinkProps) {
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

        if (onClick) {
            onClick();
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
