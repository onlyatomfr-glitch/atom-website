export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-8 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <a href="/legal" className="text-cyan-400 hover:text-cyan-300">← Back to Legal Centre</a>

        <p className="mt-12 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Draft — Pending Solicitor Review
        </p>

        <h1 className="mt-4 text-6xl font-black">Terms of Service</h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
          <p><strong className="text-white">Document ID:</strong> ATOM-TOS-001</p>
          <p><strong className="text-white">Version:</strong> 0.1 Draft</p>
          <p><strong className="text-white">Effective Date:</strong> Not Yet Effective</p>
          <p><strong className="text-white">Last Updated:</strong> 28 June 2026</p>
          <p><strong className="text-white">Jurisdiction:</strong> England and Wales</p>
        </div>

        <section className="mt-12 space-y-8 text-lg leading-8 text-slate-300">
          <h2 className="text-3xl font-black text-white">Plain English Summary</h2>
          <p>
            These Terms explain the rules for using ATOM websites, software, downloads,
            plugins, documentation and services. They are draft terms and should be reviewed
            by a qualified solicitor before public launch.
          </p>

          <h2 className="text-3xl font-black text-white">1. Introduction</h2>
          <p>
            These Terms of Service govern your access to and use of ATOM products and services,
            including websites, software, downloads, documentation, plugins and support.
          </p>

          <h2 className="text-3xl font-black text-white">2. Acceptance</h2>
          <p>
            By accessing, downloading, installing or using ATOM products or services, you agree
            to these Terms. If you do not agree, you must not use the services.
          </p>

          <h2 className="text-3xl font-black text-white">3. AI Features</h2>
          <p>
            ATOM software may include AI features. AI output may be incorrect, incomplete or unsuitable.
            Users remain responsible for checking important information before relying on it.
          </p>

          <h2 className="text-3xl font-black text-white">4. Downloads</h2>
          <p>
            ATOM aims to provide safe, documented and version-controlled downloads. Users should only
            download ATOM products from official ATOM sources.
          </p>

          <h2 className="text-3xl font-black text-white">5. Contact</h2>
          <p>
            Legal contact details will be added before public release.
          </p>
        </section>
      </article>
    </main>
  );
}