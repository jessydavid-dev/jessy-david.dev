"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Rocket, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <section
            id="about"
            className="py-20 bg-slate-50 relative overflow-hidden"
        >
            {/* Grid Background subtil */}
            <div className="absolute inset-0 bg-grid-slate-200/50 mask-[linear-gradient(to_bottom,white,transparent)]"></div>

            <div
                ref={ref}
                className="container mx-auto px-4 max-w-7xl relative z-10"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        À propos de moi
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Développeur web créatif, combinant frontend et backend
                        pour des solutions digitales impactantes
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-12 gap-4">
                    {/* Large card - Présentation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
                    >
                        <Sparkles className="w-12 h-12 mb-4 opacity-80" />
                        <h3 className="text-3xl font-bold mb-4">
                            Créateur d&apos;expériences digitales
                        </h3>
                        <p className="text-lg text-blue-50 leading-relaxed mb-4">
                            Passionné par le développement web, je crée des
                            applications modernes, performantes et élégantes.
                            Mon objectif est de transformer des idées en
                            solutions digitales innovantes.
                        </p>
                        <p className="text-lg text-blue-50 leading-relaxed">
                            Avec une expertise en développement full-stack, je
                            maîtrise aussi bien le front-end que le back-end, me
                            permettant de concevoir des projets de A à Z.
                        </p>
                    </motion.div>

                    {/* Small cards - Stats/Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-4 bg-white rounded-3xl p-6 shadow-lg border border-slate-200"
                    >
                        <Code2 className="w-10 h-10 mb-3 text-blue-600" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                            Code Propre
                        </h4>
                        <p className="text-slate-600">
                            Architecture scalable et maintenable
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-4 bg-white rounded-3xl p-6 shadow-lg border border-slate-200"
                    >
                        <Rocket className="w-10 h-10 mb-3 text-purple-600" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                            Performance
                        </h4>
                        <p className="text-slate-600">
                            Applications ultra-rapides et optimisées
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-4 bg-white rounded-3xl p-6 shadow-lg border border-slate-200"
                    >
                        <Zap className="w-10 h-10 mb-3 text-yellow-500" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                            Innovation
                        </h4>
                        <p className="text-slate-600">
                            Technologies modernes et best practices
                        </p>
                    </motion.div>

                    {/* Technologies grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="md:col-span-4 bg-slate-900 rounded-3xl p-8 shadow-2xl"
                    >
                        <h4 className="text-xl font-bold text-white mb-6">
                            Stack Technique
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="bg-slate-800 rounded-lg p-3 text-center text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
