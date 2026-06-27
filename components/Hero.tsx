"use client";

// Importamos las librerias
import { ArrowRight } from "@vectoricons/atlas-icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Palabras
const words = ["React.js", "Next.js", "TypeScript", "Tailwind css", "Node.js", "Express", "Prisma ORM"];

// Badges
const techs = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", iconDark: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000", iconDark: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/000000", iconDark: "https://cdn.simpleicons.org/prisma/ffffff" },
];

// Definimos el Hero component
export default function Hero() {
    // Current word index
    const [index, setIndex] = useState(0);
    // Visible characters
    const [displayed, setDisplayed] = useState("");
    // Deleting mode
    const [deleting, setDeleting] = useState(false);
    // Marquee paused
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const current = words[index];

        if (!deleting && displayed.length < current.length) {
            // Typing
            const timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length + 1));
            }, 130);
            return () => clearTimeout(timeout);
        }

        if (!deleting && displayed.length === current.length) {
            // Pause before deleting
            const timeout = setTimeout(() => setDeleting(true), 1800);
            return () => clearTimeout(timeout);
        }

        if (deleting && displayed.length > 0) {
            // Deleting
            const timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length - 1));
            }, 70);
            return () => clearTimeout(timeout);
        }

        if (deleting && displayed.length === 0) {
            // Next word — CORRECCIÓN DE LINT: Envolver el set en una macrotarea diferida
            const timeout = setTimeout(() => {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }, 0);
            return () => clearTimeout(timeout);
        }
    }, [displayed, deleting, index]);

    return (
        <section id="top" className="px-4 md:px-6 py-20 md:py-28">
            {/* Header main */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-900 dark:text-zinc-200">
                <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>status --check</span>
                <span className="text-muted">→</span>
                <span>available for new projects</span>
            </div>
            {/* TItle - Job */}
            <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
                Frontend dev
            </h1>
            {/* paragraph */}
            <p className="text-5xl md:text-7xl max-w-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
                I build systems people actually use.
            </p>
            <p className="text-5xl md:text-7xl font-bold tracking-tight mt-5">
                <span className="bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent">
                    {displayed}
                </span>
                <span className="animate-pulse text-orange-400">|</span>
            </p>
            {/* description */}
            <p className="mt-6 text-base text-zinc-400 max-w-xl">
                I bridge the gap between robust engineering and exceptional UX—building thoroughly tested, high-performance web applications.
            </p>
            {/* Buttons to contact */}
            <div className="mt-8 flex items-center gap-4">
                <Link
                    href="#projects"
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900/5 dark:hover:bg-zinc-500/10 transition-colors"
                >
                    View projects
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRight size={15} className="text-zinc-900 dark:text-zinc-100" />
                    </span>
                </Link>

                <Link
                    href="#contact"
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-4"
                >
                    Contact me
                </Link>
            </div>
            {/* Tech badges — marquee */}
            <div
                className="mt-10 overflow-hidden group"
                style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className="flex w-max gap-2 animate-marquee group-hover:[animation-play-state:paused]"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap transition-colors hover:bg-zinc-900/8 hover:text-zinc-900 dark:hover:bg-zinc-100/8 dark:hover:text-zinc-100 cursor-pointer"
                        >
                            {tech.iconDark ? (
                                <>
                                    <img src={tech.icon} alt={tech.name} className="size-3.5 dark:hidden" />
                                    <img src={tech.iconDark} alt={tech.name} className="size-3.5 hidden dark:block" />
                                </>
                            ) : (
                                <img src={tech.icon} alt={tech.name} className="size-3.5" />
                            )}
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}