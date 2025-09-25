export default function CarsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Gestione Auto</h1>
      <p className="mb-6">Qui puoi aggiungere, modificare o eliminare le auto della tua scuderia.</p>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Lista Auto</h2>
        <ul className="list-disc pl-5">
          <li>Auto 1</li>
          <li>Auto 2</li>
          <li>Auto 3</li>
        </ul>
      </div>
    </div>
  );
}
