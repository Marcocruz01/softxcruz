// Definimos el tipado
export type Project = {
    status: "completed" | "in progress" | "archived";
    title: string;
    description: string;
    techs: string[];
    image: string;
    href?: string;
}

// Datos de los proyectos
export const projects: Project[] = [
    {
        status: "completed",
        title: "Techsy - Carrito de compras",
        description: "Tienda en linea que simula compras de productos de la marca Apple. Su principal funcion es el manejo de estados globales, contextAPI + Reducer y una interfaz interactiva.",
        techs: ["React.js", "TypeScript", "Tailwind CSS", "ContextAPI", "Reducer"],
        image: "/techsy.png",
        href: "https://techsy-mc.netlify.app/",
    },
];