export default function Features() {
  const features = [
    {
      title: "Knowledge Library",
      desc: "Store custom notes, docs and links your assistants can reference during conversations.",
    },
    {
      title: "Smart Tagging",
      desc: "Organize content with tags and search instantly across your library.",
    },
    {
      title: "Contextual Chat",
      desc: "Your messages are enriched with relevant snippets fetched from your library.",
    },
    {
      title: "Fast & Secure",
      desc: "All data persists in a database, with CORS-enabled API and validation.",
    },
  ]
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 text-blue-100">
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-blue-100/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
