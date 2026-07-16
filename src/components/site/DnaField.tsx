export function DnaField({ className = "" }: { className?: string }) {
  // Deterministic particles for SSR consistency
  const particles = Array.from({ length: 26 }).map((_, i) => {
    const left = (i * 37) % 100;
    const top = (i * 53) % 100;
    const size = 2 + ((i * 7) % 4);
    const delay = (i % 10) * 0.6;
    const dur = 8 + ((i * 3) % 10);
    return { left, top, size, delay, dur, i };
  });
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "oklch(0.86 0.09 88 / 0.7)",
            boxShadow: "0 0 12px 2px oklch(0.86 0.09 88 / 0.5)",
            animation: `dna-drift ${p.dur}s ease-in ${p.delay}s infinite`,
          }}
        />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0V60" fill="none" stroke="oklch(0.86 0.09 88)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
