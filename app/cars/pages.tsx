export default function CarsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestione Auto</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Qui potrai aggiungere, modificare e monitorare tutte le auto della
        scuderia.
      </p>

      <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Lista Auto</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          (In futuro qui ci sarà la tabella con tutte le auto 🚗)
        </p>
      </div>
    </div>
  );
}
