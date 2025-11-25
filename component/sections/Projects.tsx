"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
    {
        title: "Portfolio",
        description:
            "Portfolio moderne et interactif avec animations fluides et design épuré.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "/",
        github: "https://github.com/jessydavid-dev/jessy-david.dev",
    },
    {
        title: "ultralion.xyz",
        description:
            "Portfolio professionnel et moderne pour UltraLion avec design épuré et optimisé.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://ultralion.xyz",
    },
    {
        title: "Radio Box",
        description:
            "Bot Discord permettant d'écouter des web radios dans un salon vocal avec interface intuitive.",
        tags: ["Discord.js", "JavaScript", "Prisma"],
        link: "https://radio-box.app",
    },
    {
        title: "QuantumCraft Studios",
        description:
            "Plateforme d'hébergement de serveurs de jeux avec panel d'administration complet.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://quantumcraft-studios.com",
    },
    {
        title: "bôba là",
        description:
            "Application web de fidélité client avec système de points.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://fidelite.boba-la.fr",
        collaborators: [
            {
                name: "Philippe",
                github: "https://github.com/PHlLlPPE",
                avatar: "https://github.com/PHlLlPPE.png",
            },
        ],
    },
];

export default function Projects() {
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
            id="projects"
            className="py-20 bg-slate-50 relative overflow-hidden"
        >
            <div
                ref={ref}
                className="container mx-auto px-4 max-w-6xl relative z-10"
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
                        Mes Projets
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Une sélection de mes réalisations récentes
                    </p>
                </motion.div>

                {/* Projects Grid - 2 colonnes */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-xl border border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-lg overflow-hidden">
                                {/* Card content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Collaborators */}
                                    {project.collaborators &&
                                        project.collaborators.length > 0 && (
                                            <div className="mb-6 pb-6 border-b border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    {project.collaborators.map(
                                                        (collab, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={
                                                                    collab.github
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="group/collab flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                                            >
                                                                <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 group-hover/collab:border-slate-900 transition-colors">
                                                                    <Image
                                                                        src={
                                                                            collab.avatar
                                                                        }
                                                                        alt={
                                                                            collab.name
                                                                        }
                                                                        width={
                                                                            24
                                                                        }
                                                                        height={
                                                                            24
                                                                        }
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                                <span className="text-xs font-medium">
                                                                    {
                                                                        collab.name
                                                                    }
                                                                </span>
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target={
                                                project.link.startsWith("/")
                                                    ? "_self"
                                                    : "_blank"
                                            }
                                            rel={
                                                project.link.startsWith("/")
                                                    ? ""
                                                    : "noopener noreferrer"
                                            }
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors group/btn"
                                        >
                                            <span>Voir</span>
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </a>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center p-2 border border-slate-200 hover:border-slate-900 rounded-lg transition-colors group/github"
                                                title="GitHub"
                                            >
                                                <Github className="w-4 h-4 text-slate-600 group-hover/github:text-slate-900" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
