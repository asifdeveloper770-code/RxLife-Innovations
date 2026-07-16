import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Search, PlayCircle, BookOpen, Beaker, ArrowRight } from "lucide-react";
import brand from "@/assets/brand-guide.jpeg.asset.json";
import vials from "@/assets/product-vials.jpeg.asset.json";
import apparel from "@/assets/apparel.jpeg.asset.json";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education Hub — Infinity RxLife" },
      { name: "description", content: "Peer-reviewed research, deep-dive protocols, and clinician-led primers on peptide therapy and healthspan." },
      { property: "og:title", content: "Education Hub — Infinity RxLife" },
      { property: "og:description", content: "The library for longevity — peptides, protocols, healthspan." },
      { property: "og:image", content: brand.url },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

const TOPICS = ["All", "Peptides", "Longevity", "Metabolic", "Cognitive", "Recovery", "Protocols"];

const FEATURED = [
  { t: "The Longevity Playbook", k: "12 min · Guide", img: brand.url },
  { t: "Peptide Therapy Explained", k: "8 min · Primer", img: vials.url },
  { t: "GLP-1 & Metabolic Health", k: "10 min · Research", img: apparel.url },
];

const ARTICLES = [
  { t: "Understanding Cellular Senescence", k: "Longevity" },
  { t: "The Growth Hormone Axis", k: "Performance" },
  { t: "BPC-157: A Recovery Primer", k: "Recovery" },
  { t: "Semax and Neuroplasticity", k: "Cognitive" },
  { t: "Reading a Certificate of Analysis", k: "Protocols" },
  { t: "Sleep Architecture and Longevity", k: "Longevity" },
];

function EducationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Education Hub"
        title={<>The <span className="italic text-gold-gradient">library</span> for longevity.</>}
        subtitle="Peer-reviewed research, clinician-led primers and long-form deep-dives. Curated by our scientific team."
      />

      {/* Search + filters */}
      <section className="container-lux pb-12">
        <div className="rounded-3xl glass p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-3 flex-1 w-full rounded-full bg-white/[0.03] border border-white/10 px-5 py-3">
            <Search className="h-4 w-4 text-gold" />
            <input placeholder="Search topics, peptides, protocols…" className="flex-1 bg-transparent text-sm text-ivory placeholder:text-muted-foreground focus:outline-none" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {TOPICS.map((t, i) => (
              <button key={t} className={`shrink-0 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition ${i===0 ? "bg-gold-gradient text-navy-deep border-transparent" : "border-white/10 text-ivory/80 hover:border-gold/40 hover:text-gold"}`}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container-lux pb-16">
        <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-6">Featured</div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((a, i) => (
            <Link key={a.t} to="/education" className={`group rounded-3xl glass overflow-hidden ${i===0 ? "md:col-span-2 md:row-span-1" : ""}`}>
              <div className={`relative overflow-hidden ${i===0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img src={a.img} alt={a.t} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{a.k}</div>
                  <div className="font-display text-2xl text-ivory mt-2">{a.t}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="container-lux py-16">
        <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-6">Learning Paths</div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: BookOpen, t: "Longevity 101", d: "A foundation for healthspan." },
            { i: Beaker, t: "Peptide Fundamentals", d: "Mechanisms, classes, protocols." },
            { i: PlayCircle, t: "Clinical Deep-Dives", d: "Video series with our team." },
          ].map((p) => (
            <div key={p.t} className="rounded-3xl glass p-8 hover:shadow-gold-glow transition">
              <div className="h-12 w-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-navy-deep mb-6"><p.i className="h-5 w-5" /></div>
              <div className="font-display text-2xl text-ivory">{p.t}</div>
              <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
              <Link to="/education" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">Begin path <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section className="container-lux py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ivory">Latest research</h2>
          <div className="text-xs text-muted-foreground">Updated weekly</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <Link key={a.t} to="/education" className="group rounded-3xl glass p-8 hover:shadow-gold-glow transition block">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{a.k}</div>
              <div className="font-display text-xl text-ivory mt-2 group-hover:text-gold transition">{a.t}</div>
              <div className="text-xs text-muted-foreground mt-6">10 min read · Clinical team</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-lux py-16">
        <div className="rounded-[2.5rem] glass p-10 md:p-16 text-center">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">The Longevity Letter</div>
          <h2 className="font-display text-4xl text-ivory">Weekly research. <span className="italic text-gold-gradient">Zero noise.</span></h2>
          <form className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full bg-white/[0.04] border border-white/10 px-6 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/60" />
            <button className="rounded-full bg-gold-gradient px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Consultation */}
      <section className="container-lux pb-24">
        <div className="rounded-[2.5rem] glass p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Want personalized guidance?</h2>
          <p className="text-muted-foreground mt-3">Book a private consultation with our clinical team.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Book Consultation</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
