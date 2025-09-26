import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Parco Auto",
  description: "Gestione del parco auto di una scuderia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 shadow bg-gray-100 dark:bg-gray-800">
          <nav className="flex items-center space-x-6">
            <Link href="/" className="font-bold text-lg hover:opacity-80">
              Parco Auto
            </Link>
            <Link href="/cars" className="hover:underline">
              Cars
            </Link>
            <Link href="/components" className="hover:underline">
              Components
            </Link>
          </nav>
          <ThemeToggle />
        </header>

        {/* Contenuto dinamico */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="px-6 py-4 text-center text-sm bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
          © {new Date().getFullYear()} Battaglia Racing Car — Parco Auto
        </footer>
      </body>
    </html>
  );
}
