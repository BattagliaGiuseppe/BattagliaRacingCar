import { useEffect, useState } from 'react'
import ThemeToggle from "../../components/ThemeToggle";

type ComponentRow = {
  id: number
  tipo: string
  serial_number: string
  omologazione?: string | null
  data_scadenza?: string | null
  stato: string
}

export default function Home() {
  const [list, setList] = useState<ComponentRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/components')
      .then(r => r.json())
      .then(data => setList(data || []))
      .catch(err => {
        console.error(err)
        setList([])
      })
      .finally(() => setLoading(false))
  },[])

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Parco Auto — Dashboard</h1>
        <div className="flex gap-3 items-center">
          <ThemeToggle />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-4 text-sm text-gray-500">Lista componenti</div>

          <div className="space-y-3">
            {loading ? (
              <div>Caricamento...</div>
            ) : list.length === 0 ? (
              <div>Nessun componente</div>
            ) : (
              list.map(c => (
                <div key={c.id} className="p-4 rounded-lg border bg-white dark:bg-gray-800">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{c.tipo} — {c.serial_number}</div>
                      <div className="text-sm text-gray-500">{c.omologazione ?? 'Nessuna omologazione'}</div>
                    </div>
                    <div className="text-sm">
                      {c.data_scadenza ? <div>Scade: {c.data_scadenza}</div> : <div>&nbsp;</div>}
                      <div className="mt-1 text-xs">{c.stato}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <aside className="p-4 border rounded-lg bg-white dark:bg-gray-800">
          <h3 className="font-medium mb-2">Prossime scadenze</h3>
          {/* per ora vuoto; poi possiamo popolare */}
          <div className="text-sm text-gray-500">Nessuna scadenza imminente (demo)</div>
        </aside>
      </section>
    </div>
  )
}
