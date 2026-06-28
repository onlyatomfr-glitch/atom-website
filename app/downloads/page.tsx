export default function DownloadsPage() {
  const products = [
    {
      name: "JARVIS",
      version: "Coming Soon",
      status: "In Development",
      description: "Your intelligent desktop AI assistant.",
      link: "#",
    },
    {
      name: "LSPDFR Mods",
      version: "Coming Soon",
      status: "In Development",
      description: "Verified GTA V police modifications.",
      link: "#",
    },
    {
      name: "Roblox Tools",
      version: "Coming Soon",
      status: "Planning",
      description: "Professional Roblox development tools.",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-8 py-24">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black">
          Downloads
        </h1>

        <p className="mt-6 text-slate-300 text-lg">
          Every download is verified, version controlled and security checked.
        </p>

        <div className="grid gap-8 mt-16 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 transition"
            >

              <div className="flex justify-between">

                <h2 className="text-3xl font-bold">
                  {product.name}
                </h2>

                <span className="text-cyan-400">
                  {product.version}
                </span>

              </div>

              <p className="mt-6 text-slate-300">
                {product.description}
              </p>

              <div className="mt-8 space-y-2 text-sm">

                <p>🟢 Status: {product.status}</p>
                <p>🛡 Malware Scanned</p>
                <p>🔒 SHA256 Verified</p>
                <p>📦 Version Controlled</p>

              </div>

              <button
                className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400 transition"
              >
                View Product
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}