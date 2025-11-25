"use client";

// Importation des composants et hooks nécessaires
import SmoothLink from "@/component/ui/SmoothLink";
import { AnimatePresence, motion } from "framer-motion";
import {
    Code2,
    FolderKanban,
    Home,
    LucideIcon,
    Mail,
    Menu,
    User,
    X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Interface définissant la structure d'un lien de navigation
interface NavLink {
    href: string;
    label: string;
    icon: LucideIcon;
}

// Configuration des liens de navigation avec leurs icônes
const navLinks: NavLink[] = [
    { href: "#home", label: "Accueil", icon: Home },
    { href: "#about", label: "À propos", icon: User },
    { href: "#skills", label: "Compétences", icon: Code2 },
    { href: "#projects", label: "Projets", icon: FolderKanban },
    { href: "#contact", label: "Contact", icon: Mail },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // Effet pour gérer le scroll et détecter la section active
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.href.replace("#", ""));

            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effet pour bloquer le scroll du body quand le menu mobile est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
                    : "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo et nom - lien vers l'accueil */}
                    <SmoothLink
                        href="#home"
                        className="relative group flex items-center gap-3"
                        onClick={handleLinkClick}
                    >
                        {/* Conteneur du logo avec effet hover */}
                        <div className="relative p-1.5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 group-hover:border-blue-500/50 group-hover:bg-slate-700/50 transition-all duration-300">
                            <Image
                                src="/logo.webp"
                                width={500}
                                height={500}
                                className="w-8 h-8 rounded-lg object-cover"
                                alt="Logo Jessy David"
                            />
                        </div>
                        {/* Nom avec effet de soulignement au hover */}
                        <div>
                            <span className="text-xl font-bold text-white">
                                Jessy David
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                        </div>
                    </SmoothLink>

                    {/* Navigation pc - cachée sur mobile */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection === link.href.replace("#", "");
                            const Icon = link.icon;
                            return (
                                <SmoothLink
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                                >
                                    {/* Icône et label du lien */}
                                    <span
                                        className={`flex items-center gap-2 ${
                                            isActive
                                                ? "text-white"
                                                : "text-slate-400 group-hover:text-white"
                                        } transition-colors`}
                                    >
                                        <Icon
                                            className={`w-4 h-4 ${
                                                isActive
                                                    ? "text-blue-400"
                                                    : "text-slate-500 group-hover:text-blue-400"
                                            } transition-colors`}
                                        />
                                        {link.label}
                                    </span>
                                    {/* Indicateur animé de la section active */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </SmoothLink>
                            );
                        })}
                    </div>

                    {/* Bouton hamburger pour mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={isOpen ? "open" : "closed"}
                            className="w-6 h-6 flex items-center justify-center"
                        >
                            {/* Affiche X si ouvert, sinon affiche Menu */}
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Menu mobile avec animations */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay sombre derrière le menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Panneau du menu mobile coulissant depuis la droite */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-slate-950 border-l border-slate-700 md:hidden shadow-2xl z-50"
                        >
                            {/* Dégradé décoratif en haut du menu */}
                            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

                            {/* Bouton de fermeture du menu */}
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all z-10"
                                aria-label="Fermer le menu"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            {/* Contenu du menu mobile */}
                            <div className="flex flex-col h-full pt-20 px-6 relative">
                                <nav className="flex-1 space-y-3">
                                    {/* Boucle sur les liens avec animation décalée */}
                                    {navLinks.map((link, index) => {
                                        const isActive =
                                            activeSection ===
                                            link.href.replace("#", "");
                                        const Icon = link.icon;
                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                {/* Lien de navigation mobile */}
                                                <SmoothLink
                                                    href={link.href}
                                                    onClick={handleLinkClick}
                                                    className={`group block px-5 py-4 rounded-xl font-semibold transition-all ${
                                                        isActive
                                                            ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                                                            : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600"
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            {/* Conteneur de l'icône */}
                                                            <div
                                                                className={`p-2 rounded-lg ${
                                                                    isActive
                                                                        ? "bg-white/20"
                                                                        : "bg-slate-700/50 group-hover:bg-slate-600/50"
                                                                } transition-colors`}
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${
                                                                        isActive
                                                                            ? "text-white"
                                                                            : "text-blue-400"
                                                                    }`}
                                                                />
                                                            </div>
                                                            <span>
                                                                {link.label}
                                                            </span>
                                                        </div>
                                                        {/* Indicateur de section active */}
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{
                                                                    scale: 0,
                                                                }}
                                                                animate={{
                                                                    scale: 1,
                                                                }}
                                                                className="w-2 h-2 bg-white rounded-full"
                                                            />
                                                        )}
                                                    </div>
                                                </SmoothLink>
                                            </motion.div>
                                        );
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
