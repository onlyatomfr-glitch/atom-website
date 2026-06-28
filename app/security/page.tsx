const checks = [
  ["Security Headers", "A Rated", "🟢"],
  ["Verified Downloads", "Required", "🟢"],
  ["SHA256 Hashes", "Planned", "🟡"],
  ["Malware Scanning", "Required", "🟢"],
  ["Digital Signing", "Future", "🟡"],
  ["Responsible Disclosure", "Coming Soon", "⚪"],
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] px-8 py-24 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#0e749044,transparent_35%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">
          ← Back to ATOM
        </a>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
          ATOM Security
        </p>

        <h1 className="mt-5 text-6xl font-black md:text-7xl">
          Built around trust.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          ATOM is being built with security, transparency and verified releases as core principles.
          Every public download should be clear, documented and checked before release.
        </p>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {checks.map(([name, status, icon]) => (
            <div
              key={name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="text-3xl">{icon}</div>
              <h2 className="mt-5 text-2xl font-black">{name}</h2>
              <p className="mt-3 text-cyan-300">{status}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.06] p-10">
          <h2 className="text-4xl font-black">ATOM Release Standard</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Only download from official ATOM sources.",
              "Every release should include a changelog.",
              "Every public file should have a version number.",
              "Downloads should be scanned before publication.",
              "Hashes should be published where possible.",
              "Security issues should be reported responsibly.",
            ].map((item) => (
              <p key={item} className="rounded-2xl bg-black/25 p-5 text-slate-300">
                ✓ {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}