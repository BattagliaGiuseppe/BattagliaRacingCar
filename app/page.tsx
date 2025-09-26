// app/page.tsx
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Benvenuto in Battaglia Racing Car</h1>
      <p className="text-lg mb-4">
        Questo è il tuo nuovo progetto Next.js.
      </p>
      <Link href="/components" className="text-blue-500 hover:underline">
        Vai a Components →
      </Link>
    </main>
  );
}
