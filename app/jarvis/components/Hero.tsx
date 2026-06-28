import AICore from "./AICore";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-8 py-24 lg:grid-cols-2 lg:items-center">

        {/* Left */}

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.5em] text-cyan-400">
            ATOM AI
          </p>

          <h1 className="mt-6 text-7xl font-black leading-none md:text-8xl xl:text-9xl">
            JARVIS
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            More than an AI assistant.

            <br />
            <br />

            JARVIS is your intelligent desktop companion designed to
            organise your work, automate repetitive tasks, manage files,
            coordinate AI agents and continuously evolve alongside you.

            <br />
            <br />

            Built from the ground up by ATOM with security,
            performance and extensibility at its core.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <span className="rounded-full border border-green-500 bg-green-500/20 px-5 py-2 text-sm font-semibold text-green-300">
              ● Online
            </span>

            <span className="rounded-full border border-cyan-500 bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
              Alpha
            </span>

            <span className="rounded-full border border-yellow-500 bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-300">
              Windows
            </span>

          </div>

          <div className="mt-12 flex flex-wrap gap-6">

            <button className="rounded-2xl bg-cyan-400 px-10 py-5 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-300">
              Download
            </button>

            <button className="rounded-2xl border border-cyan-400 px-10 py-5 text-lg transition hover:bg-cyan-400 hover:text-black">
              Documentation
            </button>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-black text-cyan-400">
                6
              </p>

              <p className="mt-2 text-sm text-slate-400">
                AI Agents
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-black text-cyan-400">
                12
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Plugins
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-black text-cyan-400">
                A
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Security Rating
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-black text-cyan-400">
                24/7
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Availability
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <AICore />

      </div>

    </section>
  );
}