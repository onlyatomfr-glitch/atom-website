const roadmap = [
  {
    status: "Completed",
    title: "Core Interface",
    items: ["Desktop UI", "Command input", "Basic memory", "Project structure"],
    colour: "text-green-400",
  },
  {
    status: "In Progress",
    title: "Alpha Systems",
    items: ["Voice commands", "File reading", "Mission Control", "Security Centre"],
    colour: "text-yellow-400",
  },
  {
    status: "Planned",
    title: "Public Release",
    items: ["Plugin store", "Verified updates", "Installer", "Legal review"],
    colour: "text-cyan-400",
  },
];

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
        Roadmap
      </p>

      <h2 className="mt-5 text-5xl font-black md:text-6xl">
        Development timeline.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {roadmap.map((phase) => (
          <div
            key={phase.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <p className={`font-bold ${phase.colour}`}>{phase.status}</p>

            <h3 className="mt-4 text-2xl font-black">{phase.title}</h3>

            <ul className="mt-6 space-y-3 text-slate-300">
              {phase.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}