// components/ThemeColor.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeColor() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const color = resolvedTheme === "dark" ? "#0D1117" : "#F9F7F4";

    let meta = document.querySelector('meta[name="theme-color"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", color);
  }, [resolvedTheme]);

  return null;
}