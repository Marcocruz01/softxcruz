// Definimos el tipado
export type Project = {
    status: "completed" | "in progress" | "archived";
    title: string;
    description: string;
    techs: string[];
    image: string;
    href?: string;
}

// Datos
export const projects: Project[] = [
    {
        status: "completed",
        title: "BrewKoffee - Sistema de órdenes",
        description: "Sistema de gestión de órdenes para cafeterías, con panel de administración y seguimiento en tiempo real para los meseros y el cocinero.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "MVC", "Prisma", "Node.js", "PostgreSQL"],
        image: "/brewkoffee.png",
        href: "#",
    },
    {
        status: "completed",
        title: "SleekDev - Administrador financiero",
        description: "Panel moderno todo en uno para administrar tareas, proeyctos, actividades, listas de tareas pendientes, ingresos, gastos y ahorros en un solo lugar.",
        techs: ["React.js", "TypeScript", "Tailwind CSS", "MVC", "Node.js", "MongoDB"],
        image: "/sleekdev.png",
        href: "https://sleekdev-mc.netlify.app",
    }, 
    {
        status: "completed",
        title: "Techsy - Carrito de compras",
        description: "Tienda en linea que simula compras de productos de la marca Apple. Su principal funcion es el manejo de estados globales, contextAPI + Reducer y una interfaz interactiva.",
        techs: ["React.js", "TypeScript", "Tailwind CSS", "ContextAPI", "Reducer"],
        image: "/techsy.png",
        href: "https://techsy-mc.netlify.app/",
    },
];