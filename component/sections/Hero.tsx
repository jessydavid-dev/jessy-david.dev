"use client";

import GlowButton from "@/component/ui/GlowButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <section
            id="home"
            ref={ref}
            className="min-h-screen flex items-center justify-center relative bg-slate-900"
        >
            {/* Grid Background animée */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                }}
            ></motion.div>

            {/* Content */}
            <motion.div
                className="container mx-auto px-4 text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 30,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Bonjour👋, je suis{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
                        Jessy
                    </span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Développeur Full Stack | Créateur d&apos;expériences web
                </motion.p>

                <motion.div
                    className="flex gap-4 justify-center flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <GlowButton href="#projects" variant="secondary">
                        Voir mes projets
                    </GlowButton>

                    <GlowButton href="#contact" variant="primary">
                        Me contacter
                    </GlowButton>
                </motion.div>
                <motion.cite
                    className="block text-slate-400 italic mt-8 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    C&apos;est une bonne situation ça, développeur Full Stack ?
                </motion.cite>
            </motion.div>
        </section>
    );
}
