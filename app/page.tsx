"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Parco Auto</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      {/* Dashboard */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Benvenuto nella gestione del Parco Auto 🚗
        </p>
      </section>

      {/* Sezioni */}
      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/cars"
          className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <h3 className="text-lg font-bold">Auto</h3>
          <p>Gestisci le auto della scuderia</p>
        </Link>

        <Link
          href="/components"
          className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <h3 className="text-lg font-bold">Componenti</h3>
          <p>Gestisci i componenti con manutenzione e scadenze</p>
        </Link>
      </section>
    </main>
  );
}
