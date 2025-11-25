"use client";

import { motion, useInView } from "framer-motion";
import {
    Code2,
    Layers,
    Server,
    Sparkles,
    TrendingUp,
    Wrench,
} from "lucide-react";
import { useRef } from "react";

const skills = {
    frontend: {
        category: "Frontend",
        icon: Code2,
        color: "from-blue-500 to-cyan-500",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Bootstrap",
            "HTML/CSS",
        ],
    },
    backend: {
        category: "Backend",
        icon: Server,
        color: "from-purple-500 to-pink-500",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    },
    tools: {
        category: "Outils",
        icon: Wrench,
        color: "from-orange-500 to-red-500",
        items: [
            "Github",
            "Docker",
            "VS Code",
            "Linux",
            "Cloudflare",
            "Proxmox",
        ],
    },
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            id="skills"
            className="py-20 bg-white relative overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-4">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-700">
                            Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Compétences & Technologies
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Un ensemble de technologies modernes maîtrisées pour
                        créer des applications web performantes et innovantes
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
                >
                    {/* Frontend - Large card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-7 group"
                    >
                        <div className="relative h-full bg-linear-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            {/* Decorative circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <skills.frontend.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">
                                        {skills.frontend.category}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {skills.frontend.items.map((item) => (
                                        <div
                                            key={item}
                                            className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white font-semibold hover:bg-white/30 transition-colors cursor-default"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend - Medium card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-5 group"
                    >
                        <div className="relative h-full bg-linear-to-br from-purple-500 to-pink-500 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <skills.backend.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">
                                        {skills.backend.category}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {skills.backend.items.map((item) => (
                                        <div
                                            key={item}
                                            className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center text-white font-semibold hover:bg-white/30 transition-colors cursor-default"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tools - Medium card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-5 group"
                    >
                        <div className="relative h-full bg-linear-to-br from-orange-500 to-red-500 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <skills.tools.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">
                                        {skills.tools.category}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {skills.tools.items.map((item) => (
                                        <div
                                            key={item}
                                            className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center text-white font-semibold hover:bg-white/30 transition-colors cursor-default"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Additional info card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-7 group"
                    >
                        <div className="relative h-full bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Layers className="w-8 h-8 text-blue-400" />
                                        <h3 className="text-2xl font-bold text-white">
                                            Stack Full-Stack
                                        </h3>
                                    </div>
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>

                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Une expertise complète du développement web
                                    moderne, du design à la mise en production.
                                </p>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                        <div className="text-3xl font-bold text-blue-400 mb-1">
                                            3+
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Années d&apos;expérience
                                        </div>
                                    </div>
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                        <div className="text-3xl font-bold text-purple-400 mb-1">
                                            15+
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Projets réalisés
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
