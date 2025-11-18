export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-blue-200/80 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div>Chat Knowledge Starter • Built for fast iteration</div>
        <div className="opacity-80">Tip: Set VITE_BACKEND_URL to connect your API</div>
      </div>
    </footer>
  )
}
