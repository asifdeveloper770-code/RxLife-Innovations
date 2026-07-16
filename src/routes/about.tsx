import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { ArrowRight, ShieldCheck, Microscope, Dna, Sparkles } from "lucide-react";
import brand from "@/assets/brand-guide.jpeg.asset.json";
import vials from "@/assets/product-vials.jpeg.asset.json";
import apparel from "@/assets/apparel.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Infinity RxLife" },
      { name: "description", content: "The founders, mission and standards behind Infinity RxLife — a luxury longevity house." },
      { property: "og:title", content: "About — Infinity RxLife" },
      { property: "og:description", content: "The story, mission and standards behind a luxury longevity house." },
      { property: "og:image", content: brand.url },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { y: "2021", t: "The idea", d: "A physician and a former athlete meet over a paper on cellular senescence. A brand takes shape." },
  { y: "2023", t: "Laboratory partnership", d: "cGMP-adjacent partners onboarded. First HPLC and MS protocols standardized." },
  { y: "2024", t: "Brand system launch", d: "The Infinity mark, apparel and vial system released to a private list." },
  { y: "2026", t: "Public flagship", d: "Education Hub, consultation program and premium product line open to the world." },
];

const VALUES = [
  { i: Microscope, t: "Scientific Integrity", d: "We publish what we know, and we say what we don't." },
  { i: ShieldCheck, t: "Third-Party Verified", d: "Every batch. Every certificate. Every time." },
  { i: Sparkles, t: "Uncompromising Quality", d: "Materials, packaging and process at the top of the market." },
  { i: Dna, t: "Longevity First", d: "Decisions are made for outcomes decades away." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title={<>Built for <span className="italic text-gold-gradient">a longer, better</span> life.</>}
        subtitle="Infinity RxLife is a luxury longevity house — a small, obsessive team translating peptide science into products worth passing down."
      />

      <section className="container-lux grid lg:grid-cols-2 gap-16 items-center pb-24">
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lux">
          <img src={brand.url} alt="Brand system" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-6">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Founder Story</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">A quiet obsession with <span className="italic text-gold-gradient">the frontier</span>.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The house was born in a research library, not a boardroom. Our founders — a longevity physician and a former endurance athlete — set out to build the brand they wished existed:
            transparent, uncompromising, and quietly luxurious.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, Infinity RxLife serves physicians, athletes, executives and researchers who choose their inputs the way a chef chooses ingredients: with reverence.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="container-lux py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { k: "Mission", t: "Advance human healthspan through precision peptide science and world-class education." },
            { k: "Vision", t: "A future where longevity is a discipline — approachable, evidenced, and beautifully executed." },
          ].map((m) => (
            <div key={m.k} className="rounded-3xl glass p-10">
              <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-4">{m.k}</div>
              <p className="font-display text-3xl text-ivory leading-snug">{m.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="container-lux py-24">
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Our Standards</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory">Four principles. <span className="italic text-gold-gradient">Zero shortcuts.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-3xl glass p-8">
              <div className="h-12 w-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-navy-deep mb-6"><v.i className="h-5 w-5" /></div>
              <div className="font-display text-xl text-ivory">{v.t}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-lux py-24">
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Timeline</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory">A short history of a <span className="italic text-gold-gradient">patient</span> company.</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((e, i) => (
              <div key={e.y} className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-14" : "md:pl-14"}`}>
                  <div className="font-display text-3xl text-gold-gradient">{e.y}</div>
                  <div className="font-display text-xl text-ivory mt-1">{e.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{e.d}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-gold-gradient shadow-gold-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality strip */}
      <section className="container-lux py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Quality</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">Every vial. <span className="italic text-gold-gradient">Every batch.</span></h2>
            <ul className="space-y-4 text-muted-foreground">
              {["HPLC & Mass Spectrometry on every batch", "Endotoxin and sterility protocols", "Independent third-party laboratories", "Certificates of analysis available on request"].map((x) => (
                <li key={x} className="flex gap-3"><ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" /> <span>{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lux">
            <img src={vials.url} alt="Quality" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux py-24">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-lux">
          <img src={apparel.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="relative p-12 md:p-20 max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">Ready to design a <span className="italic text-gold-gradient">longer</span> life?</h2>
            <p className="text-muted-foreground mt-4">Book a private consultation with our clinical team.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">
              Book consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
