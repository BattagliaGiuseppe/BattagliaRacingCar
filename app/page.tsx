"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Applica la classe "dark" all'html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Dati finti per test
  const components = [
    { id: 1, tipo: "Motore", serial: "MOT123", scadenza: "—" },
    { id: 2, tipo: "Cambio", serial: "CAM555", scadenza: "—" },
    { id: 3, tipo: "Estintore", serial: "EST999", scadenza: "2025-12-31" },
  ];

  return (
    <main className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🏎️ Parco Auto</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* Lista componenti */}
      <div className="grid gap-4">
        {components.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-lg shadow bg-white dark:bg-gray-800"
          >
            <p className="font-semibold">{c.tipo}</p>
            <p>Serial: {c.serial}</p>
            <p>Scadenza: {c.scadenza}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
