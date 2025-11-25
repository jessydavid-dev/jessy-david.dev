"use client";

import { siteConfig } from "@/config/site";
import { motion, type Variants } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
    { name: "GitHub", href: "https://github.com/jessydavid-dev", icon: Github },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/jessy-david",
        icon: Linkedin,
    },
    { name: "Email", href: "mailto:contact@jessy-david.dev", icon: Mail },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Footer() {
    return (
        <footer className="relative z-10 overflow-hidden">
            <div className="relative bg-slate-900/95 backdrop-blur-xl">
                {/* Background orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 py-10 relative">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        {/* Logo */}
                        <motion.div variants={itemVariants}>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                    <Image
                                        src="/logo.webp"
                                        width={56}
                                        height={56}
                                        className="relative w-14 h-14 rounded-xl ring-2 ring-white/10"
                                        alt="Logo"
                                    />
                                </motion.div>
                                <span className="text-xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                    {siteConfig.name}
                                </span>
                            </Link>
                        </motion.div>

                        {/* Social icons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="flex items-center gap-3">
                                {socials.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2.5 bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/50 hover:bg-linear-to-br hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl transition-all duration-300 group"
                                        aria-label={item.name}
                                    >
                                        <item.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="text-slate-500 text-sm"
                            >
                                Propulsé par{" "}
                                <Link
                                    href="https://quantumcraft-studios.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-blue-400 hover:text-purple-400 transition-colors"
                                >
                                    QuantumCraft Studios
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Copyright */}
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-500 text-sm flex items-center gap-2 flex-wrap"
                        >
                            &copy; {new Date().getFullYear()} • Fait avec
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            par{" "}
                            <span className="font-medium bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Jessy DAVID
                            </span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
