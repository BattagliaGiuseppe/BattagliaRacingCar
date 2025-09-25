export default function HomePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p>Benvenuto nella gestione del Parco Auto 🚗</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-gray-700">
          <h3 className="font-bold mb-2">Auto</h3>
          <p>Gestisci le auto della scuderia</p>
        </div>

        <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-gray-700">
          <h3 className="font-bold mb-2">Componenti</h3>
          <p>Gestisci i componenti con manutenzione e scadenze</p>
        </div>
      </div>
    </div>
  );
}

