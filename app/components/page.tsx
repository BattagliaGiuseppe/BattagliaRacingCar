export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestione Componenti</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Qui potrai gestire i componenti delle auto con le relative manutenzioni,
        scadenze e revisioni.
      </p>

      <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Lista Componenti</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          (In futuro qui ci sarà la tabella con i componenti 🔧)
        </p>
      </div>
    </div>
  );
}
