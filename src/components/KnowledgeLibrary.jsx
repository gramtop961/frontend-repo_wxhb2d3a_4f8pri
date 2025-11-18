import { useEffect, useState } from "react"

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

export default function KnowledgeLibrary() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ title: "", content: "", tags: "", source: "" })
  const [error, setError] = useState("")
  const [query, setQuery] = useState("")

  const fetchItems = async () => {
    setLoading(true)
    setError("")
    try {
      const url = new URL(`${BASE_URL}/api/knowledge`)
      if (query) url.searchParams.set("q", query)
      const res = await fetch(url)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError("Failed to load knowledge items")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchItems() }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!form.title || !form.content) {
      setError("Title and content are required")
      return
    }
    try {
      const payload = {
        title: form.title,
        content: form.content,
        tags: form.tags ? form.tags.split(",").map(t => t.trim()).filter(Boolean) : null,
        source: form.source || null,
      }
      const res = await fetch(`${BASE_URL}/api/knowledge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed")
      setForm({ title: "", content: "", tags: "", source: "" })
      await fetchItems()
    } catch (e) {
      setError("Could not add item. Check backend URL and try again.")
    }
  }

  return (
    <section id="library" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-white font-semibold text-xl mb-4">Add knowledge</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Title</label>
                <input value={form.title} onChange={e=>setForm(f=>({...f, title: e.target.value}))} className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-white" placeholder="e.g. Refund policy overview" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Content</label>
                <textarea rows={6} value={form.content} onChange={e=>setForm(f=>({...f, content: e.target.value}))} className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-white" placeholder="Paste notes or documentation..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-100/80 mb-1">Tags (comma separated)</label>
                  <input value={form.tags} onChange={e=>setForm(f=>({...f, tags: e.target.value}))} className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-white" placeholder="policies, onboarding" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100/80 mb-1">Source (optional URL)</label>
                  <input value={form.source} onChange={e=>setForm(f=>({...f, source: e.target.value}))} className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-white" placeholder="https://..." />
                </div>
              </div>
              {error && <div className="text-red-300 text-sm">{error}</div>}
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Save</button>
                <button type="button" onClick={fetchItems} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15">Refresh</button>
              </div>
            </form>
          </div>

          <div className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-xl">Library</h3>
              <div className="flex gap-2">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..." className="rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-white" />
                <button onClick={fetchItems} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15">Search</button>
              </div>
            </div>
            {loading ? (
              <div className="text-blue-200">Loading...</div>
            ) : (
              <ul className="space-y-3">
                {items.length === 0 && (
                  <li className="text-blue-200/80 text-sm">No items yet. Add your first knowledge above.</li>
                )}
                {items.map((it) => (
                  <li key={it.id} className="rounded-lg bg-slate-900/70 border border-slate-700 p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-semibold">{it.title}</h4>
                      {it.source && (
                        <a className="text-blue-300 text-sm hover:underline" href={it.source} target="_blank" rel="noreferrer">Source</a>
                      )}
                    </div>
                    <p className="text-blue-100/80 text-sm mt-1 whitespace-pre-wrap">{it.content}</p>
                    {it.tags && it.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {it.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-100">{t}</span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
