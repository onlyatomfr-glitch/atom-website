export default function DownloadCard() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-black/40 shadow-[0_0_100px_rgba(34,211,238,0.08)]">

        <div className="grid gap-10 p-10 lg:grid-cols-[2fr_1fr]">

          {/* Left */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
              Download
            </p>

            <h2 className="mt-5 text-5xl font-black">
              JARVIS Alpha
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The first public release of JARVIS will focus on local AI,
              voice commands, file management, automation and a verified
              plugin ecosystem.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-slate-400">Current Version</p>
                <p className="mt-2 text-2xl font-bold text-cyan-400">
                  Alpha 0.1
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-slate-400">Platform</p>
                <p className="mt-2 text-2xl font-bold">
                  Windows
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-slate-400">Release Status</p>
                <p className="mt-2 text-2xl font-bold text-yellow-400">
                  In Development
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-slate-400">Security Rating</p>
                <p className="mt-2 text-2xl font-bold text-green-400">
                  A Rated
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-cyan-400/20 bg-black/30 p-8">

            <h3 className="text-3xl font-black">
              Verified Download
            </h3>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-400">
                  SHA256
                </span>

                <span className="text-green-400">
                  ✓ Verified
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Malware Scan
                </span>

                <span className="text-green-400">
                  ✓ Passed
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Publisher
                </span>

                <span>
                  ATOM™
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Digital Signature
                </span>

                <span className="text-yellow-400">
                  Planned
                </span>
              </div>

            </div>

            <button
              disabled
              className="mt-10 w-full cursor-not-allowed rounded-2xl bg-cyan-400/60 py-4 text-lg font-bold text-black opacity-70"
            >
              Coming Soon
            </button>

            <p className="mt-4 text-center text-sm text-slate-400">
              Public downloads will be available once Alpha testing begins.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}