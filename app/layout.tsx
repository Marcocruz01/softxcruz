import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeColor } from "@/components/ThemeColor";

// Configuracion de la fuente
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

// Definimos el metadata
export const metadata: Metadata = {
  title: "Marco Cruz | Frontend Developer",
  description: "Frontend developer & Mechatronics Engineer. I build fast, accessible and intentional web products — from database to pixel.",
  themeColor: "#F9F7F4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-ink">
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeColor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
