"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { motion, useInView } from "framer-motion";
import {
    AlertCircle,
    CheckCircle2,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Send,
    Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "contact@jessy-david.dev",
        href: "mailto:contact@jessy-david.dev",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@jessydavid",
        href: "https://github.com/jessydavid-dev",
        color: "from-slate-700 to-slate-900",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Jessy David",
        href: "https://linkedin.com/in/jessy-david",
        color: "from-blue-600 to-blue-800",
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [captchaToken, setCaptchaToken] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        setIsSubmitting(true);
        setError("");
        setIsSubmitted(false);

        if (!captchaToken) {
            setError("Veuillez valider le captcha");
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData(form);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            captchaToken,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Erreur lors de l'envoi");
            }

            const result = await response.json();
            console.log("Succès:", result);

            setIsSubmitted(true);
            form.reset();
            setCaptchaToken("");
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            console.error("Erreur:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Impossible d'envoyer le message."
            );
            setCaptchaToken("");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-slate-900 relative overflow-hidden"
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            ></div>

            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-slate-300">
                            Entrons en contact
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contactez-moi
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Un projet en tête ? Une question ? N&apos;hésitez pas à
                        me contacter
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Colonne de gauche - Méthodes de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Cartes de contact */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                    className="block group"
                                >
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`p-3 bg-linear-to-br ${method.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <method.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-semibold text-slate-400 mb-1">
                                                    {method.label}
                                                </h3>
                                                <p className="text-white font-semibold">
                                                    {method.value}
                                                </p>
                                            </div>
                                            <Send className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Informations complémentaires */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
                        >
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h3 className="text-white font-semibold mb-2">
                                        Disponibilité
                                    </h3>
                                    <p className="text-slate-400">
                                        Actuellement disponible pour vos
                                        projets.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Colonne de droite - Formulaire de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-slate-300 mb-2"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Votre Nom et Prénom"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-slate-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-slate-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Parlez-moi de votre projet..."
                                    ></textarea>
                                </div>

                                {/* Cloudflare Turnstile */}
                                <div className="flex justify-center">
                                    <Turnstile
                                        siteKey={
                                            process.env
                                                .NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                                            ""
                                        }
                                        onSuccess={(token) =>
                                            setCaptchaToken(token)
                                        }
                                        onError={() => setCaptchaToken("")}
                                        onExpire={() => setCaptchaToken("")}
                                        options={{
                                            theme: "dark",
                                            size: "normal",
                                        }}
                                    />
                                </div>

                                {/* Message d'erreur */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                {/* Message de succès */}
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm"
                                    >
                                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                                        <span>
                                            Message envoyé avec succès ! Je vous
                                            répondrai bientôt.
                                        </span>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={
                                        isSubmitting ||
                                        isSubmitted ||
                                        !captchaToken
                                    }
                                    className="w-full relative group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative px-8 py-3 text-white font-semibold flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Envoi en cours...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                Message envoyé !
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                Envoyer le message
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
