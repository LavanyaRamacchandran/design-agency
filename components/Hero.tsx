export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background visual */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="w-full max-w-6xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-400">
            NEXA — Digital Design Studio
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            We design
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We create bold digital experiences, brands, and products
            that help ambitious businesses stand out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105 hover:bg-gray-200"
            >
              View Our Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#services"
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500 transition hover:text-white"
          >
            Scroll
            <span className="h-10 w-px bg-gradient-to-b from-gray-500 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}