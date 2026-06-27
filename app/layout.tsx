import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeWatcher } from "@/components/ThemeWatcher";

// Configuracion de la fuente
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

// Definimos el metadata
export const metadata: Metadata = {
  title: "Marco Cruz | FrontEnd developer",
  description: "Frontend developer & Mechatronics Engineer. I build fast, accessible and intentional web products — from database to pixel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-ink transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeWatcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
