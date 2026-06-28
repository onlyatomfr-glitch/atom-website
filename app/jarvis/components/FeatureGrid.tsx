const features = [
  {
    icon: "🧠",
    title: "AI Intelligence",
    text: "Understands natural language, plans tasks and helps you work faster.",
  },
  {
    icon: "🎙️",
    title: "Voice Commands",
    text: "Control your desktop using spoken commands and natural conversation.",
  },
  {
    icon: "📂",
    title: "File Management",
    text: "Read, organise, create and manage files with approval-based safety.",
  },
  {
    icon: "🤖",
    title: "AI Agents",
    text: "Specialised agents for coding, research, planning, testing and automation.",
  },
  {
    icon: "🧩",
    title: "Plugin System",
    text: "Expand JARVIS with official verified ATOM plugins and tools.",
  },
  {
    icon: "🛡️",
    title: "Security First",
    text: "Permission-based actions, trusted downloads and safer automation.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
        Capabilities
      </p>

      <h2 className="mt-5 text-5xl font-black md:text-6xl">
        Built to feel intelligent.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-cyan-400/[0.06]"
          >
            <div className="text-4xl">{feature.icon}</div>

            <h3 className="mt-6 text-2xl font-black">{feature.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">{feature.text}</p>

            <div className="mt-8 h-1 w-16 rounded-full bg-cyan-400/60 transition group-hover:w-28" />
          </div>
        ))}
      </div>
    </section>
  );
}