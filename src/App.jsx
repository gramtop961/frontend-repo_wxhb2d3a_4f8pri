import Hero from './components/Hero'
import Features from './components/Features'
import KnowledgeLibrary from './components/KnowledgeLibrary'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-white tracking-tight">Chat Assistants</a>
          <nav className="text-sm text-blue-100/80 flex items-center gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#library" className="hover:text-white">Library</a>
            <a href="/test" className="hover:text-white">Test API</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <KnowledgeLibrary />
      </main>

      <Footer />
    </div>
  )
}

export default App
