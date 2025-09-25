export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Benvenuto nella gestione del Parco Auto 🚗</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Auto</h2>
          <p className="mb-4">Gestisci le auto della scuderia</p>
          <a
            href="/cars"
            className="text-blue-500 hover:underline"
          >
            Vai a Cars →
          </a>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Componenti</h2>
          <p className="mb-4">Gestisci i componenti con manutenzione e scadenze</p>
          <a
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
