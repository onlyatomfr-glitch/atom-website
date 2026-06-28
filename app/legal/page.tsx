const documents = [
  ["Terms of Service", "/legal/terms", "v0.1 Draft", "Rules for using ATOM websites, software and services."],
  ["EULA", "/legal/eula", "v0.1 Draft", "Software licence terms for JARVIS and ATOM products."],
  ["Privacy Policy", "/legal/privacy", "v0.1 Draft", "How ATOM handles personal data and privacy."],
  ["AI Usage Policy", "/legal/ai-policy", "v0.1 Draft", "Rules and limits for AI features."],
  ["Acceptable Use", "/legal/acceptable-use", "v0.1 Draft", "What users can and cannot do."],
  ["Security Policy", "/legal/security", "v0.1 Draft", "Security standards and reporting."],
  ["Refund Policy", "/legal/refunds", "v0.1 Draft", "Refund and cancellation information."],
  ["Responsible Disclosure", "/legal/disclosure", "v0.1 Draft", "How to report vulnerabilities safely."],
  ["Third-Party Licences", "/legal/licenses", "v0.1 Draft", "Open-source and third-party notices."],
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-8 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">← Back to ATOM</a>

        <p className="mt-12 text-sm uppercase tracking-[0.45em] text-cyan-400">
          ATOM Legal Centre
        </p>

        <h1 className="mt-4 text-6xl font-black">Legal Documents</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Draft legal documentation for ATOM, JARVIS, downloads, plugins and related services.
          These documents are currently drafts and should be reviewed by a qualified solicitor before public release.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {documents.map(([title, href, version, description]) => (
            <a
              key={title}
              href={href}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/[0.06]"
            >
              <p className="text-sm font-semibold text-cyan-400">{version}</p>
              <h2 className="mt-3 text-3xl font-black">{title}</h2>
              <p className="mt-4 text-slate-300">{description}</p>
              <p className="mt-8 font-bold text-cyan-300">View Document →</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}