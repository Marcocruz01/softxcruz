// Importamos las librerias
import Link from "next/link";
import { ArrowLeft } from "@vectoricons/atlas-icons-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// Definimos el componente ProjectPage
export default function ProjectsPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
                {/* Back button */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">
                        <ArrowLeft size={15} color="#71717a" />
                    </span>
                    Back to home
                </Link>

                {/* Header */}
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    All projects
                </h1>
                <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
                    Here you'll find every project I've worked on — personal, client, and experimental. Each one built with the same attention to detail.
                </p>

                {/* Project cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </main>
        </>
    );
}