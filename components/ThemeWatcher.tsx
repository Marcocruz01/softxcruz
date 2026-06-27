"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeWatcher() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        // Buscamos si ya existe la etiqueta meta en el HTML
        let meta = document.querySelector('meta[name="theme-color"]');

        // Si no existe, la creamos
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'theme-color');
            document.head.appendChild(meta);
        }

        // Definimos los mismos colores que tenías antes
        const color = resolvedTheme === 'dark' ? '#0D1117' : '#F9F7F4';
        meta.setAttribute('content', color);
    }, [resolvedTheme]);

    return null; // Este componente no renderiza nada visual, solo ejecuta lógica
}