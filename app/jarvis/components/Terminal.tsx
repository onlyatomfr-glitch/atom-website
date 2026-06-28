const lines = [
  { command: "> Hello Jarvis", response: "Good evening, Atom. Systems are online." },
  { command: "> Scan project status", response: "4 active projects detected. 2 require attention." },
  { command: "> Check security", response: "No threats found. Security headers rated A." },
  { command: "> Open plugin warehouse", response: "Plugin warehouse ready. 12 verified plugins loaded." },
];

export default function Terminal() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-black/60 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <p className="ml-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            JARVIS Terminal
          </p>
        </div>

        <div className="space-y-6 font-mono text-sm md:text-base">
          {lines.map((line) => (
            <div key={line.command}>
              <p className="text-cyan-300">{line.command}</p>
              <p className="mt-2 text-slate-300">{line.response}</p>
            </div>
          ))}

          <p className="text-cyan-300">
            <span className="animate-pulse">█</span>
          </p>
        </div>
      </div>
    </section>
  );
}