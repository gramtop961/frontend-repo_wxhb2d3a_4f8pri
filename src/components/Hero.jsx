import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.08),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Build chat assistants with your own knowledge
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-blue-100/90"
            >
              Create a knowledge library your assistants can reference. Upload notes, paste docs, tag content and chat with context.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#library" className="inline-flex items-center justify-center rounded-lg bg-blue-500 text-white font-semibold px-6 py-3 shadow hover:bg-blue-600 transition">
                Open Knowledge Library
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white font-semibold px-6 py-3 border border-white/15 hover:bg-white/15 transition">
                Explore Features
              </a>
            </motion.div>
            <div className="mt-6 text-sm text-blue-200/80">
              No setup required — add entries and start chatting.
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm shadow-xl"
          >
            <div className="text-blue-100 text-sm mb-3">Preview</div>
            <div className="rounded-xl bg-slate-900/70 border border-slate-700 p-4 h-64 flex items-center justify-center text-blue-200">
              Your assistant will use your knowledge here
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
