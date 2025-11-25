"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface GridBackgroundProps {
    variant?: "dark" | "light";
}

export default function GridBackground({
    variant = "light",
}: GridBackgroundProps) {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, 400, 800], [1, 0.4, 0.2]);

    const y = useTransform(scrollY, [0, 1000], [0, 100]);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                opacity,
                y,
                backgroundImage:
                    variant === "dark"
                        ? "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)"
                        : "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
                backgroundSize: "100px 100px",
            }}
        />
    );
}
