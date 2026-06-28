const products = [
  {
    name: "JARVIS",
    type: "AI Desktop Assistant",
    version: "Alpha 0.1",
    status: "In Development",
    platform: "Windows",
    href: "/jarvis",
  },
  {
    name: "GTA V Mods",
    type: "Verified Game Mods",
    version: "Coming Soon",
    status: "Planning",
    platform: "Windows",
    href: "#",
  },
  {
    name: "Roblox Tools",
    type: "Developer Utilities",
    version: "Coming Soon",
    status: "Planning",
    platform: "Roblox Studio",
    href: "#",
  },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] px-8 py-24 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#0e749044,transparent_35%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">
          ← Back to ATOM
        </a>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
          ATOM Downloads
        </p>

        <h1 className="mt-5 text-6xl font-black md:text-7xl">
          Verified software releases.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Every public ATOM release will include version history, requirements,
          documentation, SHA256 verification, malware scanning and clear support information.
        </p>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(34,211,238,0.06)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                {product.type}
              </p>

              <h2 className="mt-5 text-4xl font-black">{product.name}</h2>

              <div className="mt-8 space-y-4 text-slate-300">
                <div className="flex justify-between">
                  <span>Version</span>
                  <span className="text-cyan-300">{product.version}</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-yellow-300">{product.status}</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform</span>
                  <span>{product.platform}</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5 text-sm text-slate-300">
                <p>✓ SHA256 verification planned</p>
                <p className="mt-2">✓ Malware scan required</p>
                <p className="mt-2">✓ Version-controlled release</p>
                <p className="mt-2">✓ Official ATOM source</p>
              </div>

              <a
                href={product.href}
                className="mt-8 block rounded-2xl bg-cyan-400 py-4 text-center font-bold text-black transition hover:bg-cyan-300"
              >
                View Product
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}