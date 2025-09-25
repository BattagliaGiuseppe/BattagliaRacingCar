export default function ComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Gestione Componenti</h1>
      <p className="mb-6">Qui puoi aggiungere, modificare o eliminare componenti con manutenzione e scadenze.</p>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Lista Componenti</h2>
        <ul className="list-disc pl-5">
          <li>Motore</li>
          <li>Sospensioni</li>
          <li>Freni</li>
        </ul>
      </div>
    </div>
  );
}
