import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import FeatureGrid from "./components/FeatureGrid";
import Roadmap from "./components/Roadmap";
import DownloadCard from "./components/DownloadCard";

export default function JarvisPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#0e749044,transparent_35%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <nav className="relative z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="/" className="text-2xl font-black tracking-[0.2em]">
            ATOM<span className="text-cyan-400">™</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-cyan-400">Home</a>
            <a href="/downloads" className="hover:text-cyan-400">Downloads</a>
            <a href="/documentation" className="hover:text-cyan-400">Docs</a>
            <a href="/security" className="hover:text-cyan-400">Security</a>
            <a href="/legal" className="hover:text-cyan-400">Legal</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <Terminal />
        <FeatureGrid />
        <Roadmap />
        <DownloadCard />
      </div>

      <footer className="relative z-10 border-t border-white/10 px-8 py-10 text-center text-slate-400">
        © 2026 ATOM™ — JARVIS is currently in alpha development.
      </footer>
    </main>
  );
}