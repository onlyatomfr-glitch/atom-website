export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black tracking-[0.2em]">
            ATOM<span className="text-cyan-400">™</span>
          </h1>

          <div className="hidden gap-8 text-slate-300 md:flex">
            <a href="#products" className="hover:text-cyan-400">
              Products
            </a>

            <a href="#security" className="hover:text-cyan-400">
              Security
            </a>

            <a href="#downloads" className="hover:text-cyan-400">
              Downloads
            </a>

            <a href="/legal" className="hover:text-cyan-400">
              Legal
            </a>
          </div>

          <a
            href="#products"
            className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Explore
          </a>
        </nav>
      </header>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-cyan-400">
          Built to Keep Evolving
        </p>

        <h1 className="text-7xl font-black md:text-9xl">
          ATOM<span className="text-cyan-400">™</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-slate-300">
          Engineering intelligent software, verified downloads,
          AI systems, developer tools and safe gaming mods.
        </p>

        <div className="mt-12 flex gap-4">
          <a
            href="#products"
            className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black"
          >
            Explore Products
          </a>

          <a
            href="/legal"
            className="rounded-full border border-white/20 px-8 py-4 font-bold"
          >
            Legal Centre
          </a>
        </div>
      </section>

      <section id="products" className="px-8 py-32 text-center">
        <h2 className="text-5xl font-black">Products</h2>
        <p className="mt-4 text-slate-300">
          JARVIS • Game Mods • Developer Tools
        </p>
      </section>

      <section id="security" className="px-8 py-32 text-center">
        <h2 className="text-5xl font-black">Security Standard</h2>
        <p className="mt-4 text-slate-300">
          Every release is designed to be secure, documented and professionally maintained.
        </p>
      </section>

      <section id="downloads" className="px-8 py-32 text-center">
        <h2 className="text-5xl font-black">Downloads</h2>
        <p className="mt-4 text-slate-300">
          Version history, documentation and verified releases will appear here.
        </p>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 ATOM™ — Built to Keep Evolving
      </footer>
    </main>
  );
}