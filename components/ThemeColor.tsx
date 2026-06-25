"use client";

// Importamos las librerias
import { useTheme } from "next-themes";
import { useEffect } from "react";

// Definimos el componente auxiliar
export function ThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    const color = theme === "dark" ? "#0D1117" : "#F9F7F4";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, [theme]);

  return null;
}