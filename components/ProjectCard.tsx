// Importamos las librerias
import { ArrowUpRightCircle } from "@vectoricons/atlas-icons-react";

// Definimos los props
type ProjectCardProps = {
    status: "completed" | "in progress" | "archived";
    title: string;
    description: string;
    techs: string[];
    image: string;
    href?: string;
}

// Status del proyecto
const statusConfig = {
    "completed": { label: "Completed", class: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    "in progress": { label: "In progress", class: "bg-signal/10 text-signal" },
    "archived": { label: "Archived", class: "bg-zinc-500/10 text-zinc-500" },
};

// Definimos el ProjectCard componente
export default function ProjectCard({ status, title, description, techs, image, href }: ProjectCardProps) {
    // Estado del proyecto
    const statusProject = statusConfig[status];

    return (
        <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
            {/* Image */}
            <div className="overflow-hidden h-48 bg-zinc-50 dark:bg-zinc-800/50">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                {/* Status + title */}
                <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusProject.class}`}>
                        {statusProject.label}
                    </span>
                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <ArrowUpRightCircle size={16} className="text-zinc-900 dark:text-zinc-100" />
                        </a>
                    )}
                </div>

                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {techs.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full border border-line text-zinc-500 dark:text-zinc-400 hover:bg-zinc-500/10 cursor-pointer"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
