import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-navy-gradient">
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(closest-side, oklch(0.78 0.13 85 / 0.25), transparent)" }} />
      </div>
      <div className="container-lux max-w-4xl text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-3 mb-6 text-[11px] tracking-[0.32em] uppercase text-gold">
            <span className="h-px w-8 bg-gold/60" />{eyebrow}<span className="h-px w-8 bg-gold/60" />
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-ivory animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
