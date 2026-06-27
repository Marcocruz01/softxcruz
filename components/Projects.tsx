"use client";

// Importamos las librerias
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { ArrowRight } from "@vectoricons/atlas-icons-react";

// Initial projects to show on homepage
const INITIAL_COUNT = 4;

// Definimos el componente Projects
export default function Projects() {
    return (
        <section id="projects" className="px-4 md:px-6 py-20">
            <p className="uppercase tracking-widest text-xs bg-linear-to-r from-orange-500 to-amber-400 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent font-medium">
                Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-200">
                Projects I'm proud of — built with intention, shipped with care.
            </h2>
            <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
                Full stack development from day one. All projects here encompass the backend, the frontend, and even the smallest resource and detail receive time and effort.
            </p>
            {/* Project card */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(0, INITIAL_COUNT).map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            {/* View all projects link */}
            <div className="mt-8 flex justify-center">
                <Link
                    href="/projects"
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-900/5 dark:hover:bg-zinc-500/10 transition-colors"
                >
                    View all projects
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRight size={15} color="#71717a" />
                    </span>
                </Link>
            </div>
        </section>
    )
}
