import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, ChevronDown } from "lucide-react";
import vials from "@/assets/product-vials.jpeg.asset.json";
import { useState } from "react";

const CATEGORIES: Record<string, { title: string; blurb: string; intro: string; benefits: string[]; products: string[] }> = {
  longevity: {
    title: "Longevity",
    blurb: "Cellular renewal and healthspan.",
    intro: "Peptides and protocols aimed at the mechanisms of aging — telomere maintenance, senescent-cell balance and mitochondrial resilience.",
    benefits: ["Cellular repair", "Mitochondrial health", "Skin & tissue quality", "Systemic inflammation balance"],
    products: ["Epitalon", "GHK-Cu", "NAD+ Precursors", "Thymosin Alpha-1"],
  },
  performance: {
    title: "Performance",
    blurb: "Output. Endurance. Composition.",
    intro: "Formulations engineered for elite output — from growth-hormone axis modulators to advanced ergogenic peptides.",
    benefits: ["Lean mass support", "Endurance capacity", "Recovery velocity", "Power output"],
    products: ["Tesamorelin", "CJC-1295", "Ipamorelin", "MOTS-c"],
  },
  recovery: {
    title: "Recovery",
    blurb: "Restoration on a molecular level.",
    intro: "Tissue-repair peptides and protocols designed to shorten downtime and restore capacity.",
    benefits: ["Soft-tissue repair", "Joint support", "Deep sleep quality", "Systemic recovery"],
    products: ["BPC-157", "TB-500", "Melatonin+", "Selank"],
  },
  cognitive: {
    title: "Cognitive",
    blurb: "Clarity, memory, and mood.",
    intro: "Neuropeptides selected for signal-to-noise on focus, memory consolidation and mood regulation.",
    benefits: ["Focus & attention", "Memory support", "Neuroprotection", "Mood balance"],
    products: ["Semax", "Selank", "Cerebrolysin", "Dihexa"],
  },
  metabolic: {
    title: "Metabolic Health",
    blurb: "GLP-1s and beyond.",
    intro: "The frontier of metabolic optimization — GLP-1/GIP agonists and adjunct peptides for composition and glycemic control.",
    benefits: ["Glycemic control", "Body composition", "Appetite regulation", "Cardiometabolic markers"],
    products: ["Retatrutide", "Tirzepatide", "Semaglutide", "AOD-9604"],
  },
};

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES[params.slug.toLowerCase()];
    if (!cat) throw notFound();
    return cat;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Category"} — Infinity RxLife` },
      { name: "description", content: loaderData?.intro ?? "Infinity RxLife category." },
      { property: "og:title", content: `${loaderData?.title ?? "Category"} — Infinity RxLife` },
      { property: "og:description", content: loaderData?.blurb ?? "" },
      { property: "og:image", content: vials.url },
      { property: "og:url", content: `/category/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/category/${params.slug}` }],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout><div className="container-lux py-40 text-center"><h1 className="font-display text-4xl text-ivory">Category not found</h1></div></SiteLayout>
  ),
});

const FAQ = [
  { q: "Are these products for human consumption?", a: "No. All products are labeled Research Use Only. Not for human consumption." },
  { q: "How are peptides tested for purity?", a: "Every batch is analyzed by HPLC and mass spectrometry via independent third-party laboratories." },
  { q: "Do you ship internationally?", a: "We ship to most regions where research materials are permitted. Restrictions apply." },
  { q: "How should peptides be stored?", a: "Lyophilized powders are shelf-stable when cool; reconstituted vials should be refrigerated." },
];

function CategoryPage() {
  const cat = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-16">
        <div className="container-lux grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-4">Category · {cat.blurb}</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory">
              {cat.title}
              <span className="italic text-gold-gradient">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">{cat.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden shadow-lux aspect-[4/3]">
              <img src={vials.url} alt={cat.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-lux py-16">
        <div className="grid md:grid-cols-4 gap-4">
          {cat.benefits.map((b: string) => (
            <div key={b} className="rounded-2xl glass p-5">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Benefit</div>
              <div className="font-display text-lg text-ivory mt-1">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Featured in <span className="italic text-gold-gradient">{cat.title}</span></h2>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-gold">Shop all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cat.products.map((name: string) => (
            <Link key={name} to="/product/$slug" params={{ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") }} className="group rounded-3xl glass overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={vials.url} alt={name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep to-transparent" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{cat.title}</div>
                  <div className="font-display text-lg text-ivory mt-1">{name}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related articles */}
      <section className="container-lux py-16">
        <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-4">Related Reading</div>
        <div className="grid md:grid-cols-3 gap-6">
          {["Protocols overview", `${cat.title} deep dive`, "Clinical context"].map((t) => (
            <Link key={t} to="/education" className="rounded-3xl glass p-8 hover:shadow-gold-glow transition">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Guide</div>
              <div className="font-display text-xl text-ivory mt-2">{t}</div>
              <div className="text-xs text-muted-foreground mt-4">12 min read</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-lux py-24 max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">FAQ</div>
          <h2 className="font-display text-4xl text-ivory">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {FAQ.map((f) => <FaqRow key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="rounded-[2.5rem] glass p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Not sure where to start?</h2>
          <p className="text-muted-foreground mt-3">Book a consultation with our clinical team.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Book Consultation</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen((v) => !v)} className="w-full text-left rounded-2xl glass-soft p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="font-display text-lg text-ivory">{q}</div>
        <ChevronDown className={`h-4 w-4 text-gold transition ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </button>
  );
}
