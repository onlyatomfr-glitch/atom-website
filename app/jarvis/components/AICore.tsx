export default function AICore() {
  const stats = [
    ["Status", "ONLINE", "text-green-400"],
    ["Agents", "6 Active", "text-cyan-300"],
    ["Memory", "3.2 GB", "text-cyan-300"],
    ["CPU", "24%", "text-cyan-300"],
    ["Plugins", "12 Ready", "text-cyan-300"],
  ];

  return (
    <div className="rounded-[2rem] border border-cyan-400/30 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(34,211,238,0.12)]">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
        AI Core
      </p>

      <div className="my-12 flex justify-center">
        <div className="relative h-72 w-72">
          <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin [animation-duration:18s]" />
          <div className="absolute inset-5 rounded-full border border-cyan-400/30 animate-spin [animation-duration:12s] [animation-direction:reverse]" />
          <div className="absolute inset-12 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-24 rounded-full bg-cyan-400 shadow-[0_0_90px_#22d3ee]" />

          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee]" />
          <div className="absolute bottom-8 left-8 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />
          <div className="absolute right-8 top-16 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />
        </div>
      </div>

      <div className="space-y-4">
        {stats.map(([label, value, colour]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-4"
          >
            <span className="text-slate-300">{label}</span>
            <span className={`font-bold ${colour}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}