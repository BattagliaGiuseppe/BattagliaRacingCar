export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-lg">
        Benvenuto nella gestione del <strong>Parco Auto 🚗</strong>
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold">Auto</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Gestisci le auto della scuderia
          </p>
        </div>

        <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold">Componenti</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Gestisci i componenti con manutenzione e scadenze
          </p>
        </div>
      </div>
    </div>
  );
}

            href="/components"
            className="text-blue-500 hover:underline"
          >
            Vai a Components →
          </a>
        </div>
      </div>
    </div>
  );
}
