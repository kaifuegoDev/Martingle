export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white px-4 overflow-hidden relative">
      {/* Decorative Background Glow - Responsive size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/15 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center gap-12 md:gap-16 max-w-2xl w-full py-12">
        <div className="flex flex-col items-center gap-6 text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-[13px] font-medium text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Coming Soon
          </div>


          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent py-4 px-2">
            MARTINGLE
          </h1>

          {/* Description - Constrained width */}
          <p className="max-w-[480px] text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed px-2">
            We're building the future of automated trading strategies.
            Experience a new level of precision and control.
          </p>
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-6 z-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <p className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
            Under Construction
          </p>
        </div>
      </div>
    </div>
  );
}

