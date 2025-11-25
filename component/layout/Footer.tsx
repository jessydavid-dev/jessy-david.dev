import { siteConfig } from "@/config/site";
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

export default function Footer() {
    return (
        <footer className="relative z-10 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo et nom du site - lien vers l'accueil */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg">
                            <Image
                                src="/logo.webp"
                                width={500}
                                height={500}
                                className="w-12 h-12"
                                alt="Image de profile"
                            />
                        </div>
                        <span className="text-lg font-bold text-white">
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Icônes des réseaux sociaux */}
                    <div className="flex items-center gap-2">
                        {socials.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 group"
                                aria-label={item.name}
                            >
                                <item.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright avec année dynamique */}
                    <p className="text-slate-500 text-sm flex items-center gap-1.5">
                        &copy; {new Date().getFullYear()} • Fait avec
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                        par Jessy DAVID
                    </p>
                </div>
            </div>
        </footer>
    );
}
