export default function HomePage() {
  const products = [
    ["JARVIS", "AI Operating System", "/jarvis"],
    ["Downloads", "Verified Software", "/downloads"],
    ["Marketplace", "Plugin Ecosystem", "/marketplace"],
  ];

  const standards = [
    "A-rated security headers",
    "Verified downloads",
    "Version controlled releases",
    "Solicitor-ready legal documents",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#0e749044,transparent_35%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <nav className="relative z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="/" className="text-2xl font-black tracking-[0.2em]">
            ATOM<span className="text-cyan-400">™</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="/jarvis" className="hover:text-cyan-400">JARVIS</a>
            <a href="/downloads" className="hover:text-cyan-400">Downloads</a>
            <a href="/marketplace" className="hover:text-cyan-400">Marketplace</a>
            <a href="/documentation" className="hover:text-cyan-400">Docs</a>
            <a href="/security" className="hover:text-cyan-400">Security</a>
            <a href="/legal" className="hover:text-cyan-400">Legal</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-8 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.55em] text-cyan-400">
            Built To Keep Evolving
          </p>

          <h1 className="mt-6 text-7xl font-black leading-none md:text-9xl">
            ATOM<span className="text-cyan-400">™</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Engineering intelligent software, verified downloads, AI systems,
            developer tools and secure gaming mods under one trusted brand.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="/jarvis"
              className="rounded-2xl bg-cyan-400 px-9 py-4 font-bold text-black shadow-[0_0_45px_rgba(34,211,238,0.35)] transition hover:scale-105 hover:bg-cyan-300"
            >
              Explore JARVIS
            </a>

            <a
              href="/downloads"
              className="rounded-2xl border border-cyan-400 px-9 py-4 font-bold transition hover:bg-cyan-400 hover:text-black"
            >
              Downloads
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/30 bg-white/[0.04] p-8 shadow-[0_0_100px_rgba(34,211,238,0.12)]">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
            ATOM Core
          </p>

          <div className="my-12 flex justify-center">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin [animation-duration:20s]" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/30 animate-spin [animation-duration:14s] [animation-direction:reverse]" />
              <div className="absolute inset-20 rounded-full bg-cyan-400 shadow-[0_0_90px_#22d3ee]" />
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["Website", "ONLINE"],
              ["Security", "A RATED"],
              ["JARVIS", "ALPHA"],
              ["Downloads", "READY"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-4"
              >
                <span className="text-slate-300">{label}</span>
                <span className="font-bold text-cyan-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
          Ecosystem
        </p>

        <h2 className="mt-5 text-5xl font-black md:text-6xl">
          One brand. Multiple products.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map(([title, subtitle, href]) => (
            <a
              key={title}
              href={href}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-cyan-400/[0.06]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                {subtitle}
              </p>
              <h3 className="mt-5 text-3xl font-black">{title}</h3>
              <p className="mt-8 font-bold text-cyan-300">Open →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.06] p-10">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
            ATOM Standard
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Built around trust.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {standards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 p-5 text-slate-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-8 py-10 text-center text-slate-400">
        © 2026 ATOM™ — Built To Keep Evolving
      </footer>
    </main>
  );
}