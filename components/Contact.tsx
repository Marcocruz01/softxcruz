// Importamos las librerias
import { Instagram } from "@vectoricons/atlas-icons-react";
import Link from "next/link";

// Social links
const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Marcocruz01",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/marco-cruz-908492205/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/marco_cruz_/",
        icon: (
            <Instagram className="size-4" />
        ),
    },
];

// Definimos el componente Contact
export default function Contact() {
    return (
        <section id="contact" className="px-4 md:px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Top — header full width */}
                <div className="flex flex-col items-start justify-between gap-6 pb-10 border-b border-line">
                    <div>
                        <p className="bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent font-medium text-xs uppercase">
                            Contact
                        </p>
                        <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Let&apos;s build something<br />together
                        </h2>
                    </div>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-xl">
                        Do you have a project in mind or want to automate your business? I&apos;m always open to new opportunities and interesting conversations.
                    </p>
                </div>

                {/* Bottom — form + info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-line">

                    {/* Left — form */}
                    <form className="flex flex-col gap-6 py-10 md:pr-12">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-stone-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="hello@example.com"
                                className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-stone-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-stone-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-100 text-sm font-medium text-zinc-100 dark:text-zinc-900 hover:opacity-80 transition-opacity w-fit"
                        >
                            Send message →
                        </button>
                    </form>

                    {/* Right — info */}
                    <div className="flex flex-col gap-8 py-10 md:pl-12">

                        {/* Email */}
                        <div className="flex flex-col gap-2 pb-8 border-b border-line">
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                Email
                            </span>
                            <a
                                href="mailto:softxcruz@gmail.com"
                                className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                softxcruz@gmail.com
                            </a>
                            <a
                                href="mailto:marc01cruz2001@gmail.com"
                                className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                marc01cruz2001@gmail.com
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col gap-3 pb-8 border-b border-line">
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                Socials
                            </span>
                            <div className="flex flex-col gap-3">
                                {socials.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                    >
                                        <span className="flex items-center gap-3">
                                            {social.icon}
                                            {social.label}
                                        </span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <span className="relative inline-flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Available for new projects
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}