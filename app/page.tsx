export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <a href="/" className="text-4xl font-black">
            ATOM<span className="text-cyan-400">™</span>
          </a>

          <div className="hidden md:flex gap-8 text-slate-300">

            <a href="/" className="hover:text-cyan-400 transition">Home</a>

            <a href="/jarvis" className="hover:text-cyan-400 transition">JARVIS</a>

            <a href="/downloads" className="hover:text-cyan-400 transition">Downloads</a>

            <a href="/marketplace" className="hover:text-cyan-400 transition">Marketplace</a>

            <a href="/documentation" className="hover:text-cyan-400 transition">Documentation</a>

            <a href="/security" className="hover:text-cyan-400 transition">Security</a>

            <a href="/legal" className="hover:text-cyan-400 transition">Legal</a>

            <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-8">

        <div className="text-center max-w-5xl">

          <p className="tracking-[0.5em] text-cyan-400 uppercase">
            Built To Keep Evolving
          </p>

          <h1 className="mt-6 text-8xl font-black">
            ATOM<span className="text-cyan-400">™</span>
          </h1>

          <p className="mt-8 text-2xl text-slate-300">
            Engineering intelligent software, verified downloads,
            AI systems, developer tools and secure gaming mods.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="/downloads"
              className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black hover:bg-cyan-300 transition"
            >
              Downloads
            </a>

            <a
              href="/jarvis"
              className="rounded-full border border-cyan-400 px-8 py-4 hover:bg-cyan-400 hover:text-black transition"
            >
              Explore JARVIS
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">

        © 2026 ATOM™ — Built To Keep Evolving

      </footer>

    </main>
  );
}