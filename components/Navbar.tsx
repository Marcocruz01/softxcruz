"use client";

// Importamos las librerias
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/links";
import { ThemeSwitch } from "@/components/ThemeSwitch";

// Definimos el componente Navbar
export default function Navbar() {
  // Estado para el menu hamburguesa
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 bg-ink/50 backdrop-blur-lg transition-colors ${open ? "border-b-0" : "border-b border-line/60"}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <Link href="#top" className="text-lg md:text-base font-medium text-zinc-900 dark:text-zinc-200">
          soft
          <span className="bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent font-normal">
            X
          </span>
          cruz
        </Link>

        {/* Links — desktop */}
        <ul className="hidden gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-900/5 dark:hover:bg-zinc-500/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          {/* Theme switch */}
          <ThemeSwitch />

          {/* Botón hamburguesa — mobile */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="sm:hidden text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative size-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`absolute inset-0 size-6 transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`absolute inset-0 size-6 transition-all duration-200 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-ink/10 backdrop-blur-lg px-4 pb-6 pt-4 flex flex-col gap-4 border-b border-line/60">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm px-3 py-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-900/5 dark:hover:bg-zinc-500/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}