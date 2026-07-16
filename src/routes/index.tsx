import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, ShieldCheck, Sparkles, Dna, Microscope, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { DnaField } from "@/components/site/DnaField";
import logo from "@/assets/logo-primary.jpeg";
import vials from "@/assets/product-vials.jpeg";
import apparel from "@/assets/apparel.jpeg";
import brand from "@/assets/brand-guide.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity RxLife — The Future of Longevity Starts Here" },
      { name: "description", content: "Science-driven wellness, premium education, and innovative longevity solutions designed for lifelong health optimization." },
      { property: "og:title", content: "Infinity RxLife — The Future of Longevity" },
      { property: "og:description", content: "Peptides. Performance. Longevity. A luxury biotechnology brand." },
      { property: "og:image", content: vials },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const CATEGORIES = [
  { name: "Longevity", tag: "Cellular renewal", to: "/category/longevity" },
  { name: "Performance", tag: "Peak output", to: "/category/performance" },
  { name: "Recovery", tag: "Deep restoration", to: "/category/recovery" },
  { name: "Cognitive", tag: "Mental clarity", to: "/category/cognitive" },
];

const PRODUCTS = [
  { name: "Retatrutide", tag: "Metabolic", price: "Research grade", img: vials },
  { name: "Epitalon", tag: "Longevity", price: "Research grade", img: vials },
  { name: "Tesamorelin", tag: "Performance", price: "Research grade", img: vials },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <DnaField />
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-navy-gradient" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full blur-[140px] opacity-40"
               style={{ background: "radial-gradient(closest-side, oklch(0.78 0.13 85 / 0.35), transparent 70%)" }} />
        </div>

        <div className="container-lux relative grid lg:grid-cols-12 gap-16 items-center pt-32 pb-24">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.02] px-4 py-2 text-[10px] tracking-[0.32em] uppercase text-gold">
              <Sparkles className="h-3 w-3" /> A New Era of Longevity Science
            </div>
            <h1 className="font-display text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[1.02] text-ivory">
              The Future of<br/>
              <span className="italic text-gold-gradient">Longevity</span> Starts Here.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Science-driven wellness, premium education, and innovative longevity solutions
              designed for lifelong health optimization.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/shop" className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep hover:brightness-110 transition shadow-gold-glow">
                Shop Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/education" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ivory hover:border-gold/50 hover:text-gold transition">
                Explore Education
              </Link>
              <Link to="/contact" className="text-xs uppercase tracking-[0.24em] text-ivory/70 hover:text-gold underline underline-offset-[6px] decoration-gold/40">
                Book Consultation
              </Link>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { k: "99%", v: "Purity Verified" },
                { k: "3rd", v: "Party Tested" },
                { k: "∞", v: "Longevity Focused" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold-gradient">{s.k}</div>
                  <div className="mt-1 text-[11px] tracking-[0.24em] uppercase text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lux glass">
              <img src={logo} alt="Infinity RxLife Logo" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-56 rounded-2xl glass shadow-lux p-5 animate-float-slow hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy-deep"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-gold">Certified</div>
                  <div className="text-sm text-ivory">3rd Party Tested</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 w-52 rounded-2xl glass shadow-lux p-5 animate-float-slow hidden md:block" style={{ animationDelay: "1.6s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy-deep"><Dna className="h-5 w-5" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-gold">Science</div>
                  <div className="text-sm text-ivory">Peptide Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Scroll</div>
      </section>

      {/* MARQUEE / TRUST */}
      <section className="border-y border-white/5 py-8">
        <div className="container-lux flex flex-wrap items-center justify-center gap-x-14 gap-y-4 text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
          {["Peptides","·","Performance","·","Longevity","·","Recovery","·","Cognitive","·","Metabolic"].map((t, i) => (
            <span key={i} className={t === "·" ? "text-gold" : ""}>{t}</span>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-lux py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">The Collection</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory max-w-xl">Categories engineered for <span className="italic text-gold-gradient">every system</span>.</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-gold">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c, i) => (
            <Link key={c.name} to={c.to} className="group relative rounded-3xl glass p-8 overflow-hidden hover:shadow-gold-glow transition-shadow duration-500">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-20 blur-3xl bg-gold-gradient group-hover:opacity-40 transition" />
              <div className="h-14 w-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-navy-deep mb-8">
                {[<Dna key="a" className="h-6 w-6" />, <Sparkles key="b" className="h-6 w-6" />, <Beaker key="c" className="h-6 w-6" />, <Microscope key="d" className="h-6 w-6" />][i]}
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-2">{c.tag}</div>
              <div className="font-display text-2xl text-ivory">{c.name}</div>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-ivory/70 group-hover:text-gold transition">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-28">
        <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lux">
              <img src={vials} alt="Premium peptide vials" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 rounded-2xl glass shadow-lux p-6 hidden md:block">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-1">Verified</div>
              <div className="font-display text-2xl text-ivory">99% Purity</div>
              <div className="text-xs text-muted-foreground mt-2">HPLC & MS analysis on every batch.</div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Why Infinity RxLife</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">
              A standard of care as <span className="italic text-gold-gradient">precise</span> as the science itself.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every formulation begins with peer-reviewed research and ends with third-party verification.
              We build for the person who studies the label as carefully as the result.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { i: Microscope, t: "Science Driven", d: "Advanced peptide research and rigorous protocols." },
                { i: ShieldCheck, t: "Safe & Transparent", d: "3rd party tested for identity and purity." },
                { i: Sparkles, t: "Premium Quality", d: "Pure. Tested. Trusted." },
                { i: Dna, t: "Longevity Focused", d: "Optimize today. Live limitless." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl glass-soft p-5">
                  <f.i className="h-5 w-5 text-gold mb-3" />
                  <div className="font-display text-lg text-ivory">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-lux py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Featured</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory">Research-grade <span className="italic text-gold-gradient">peptides</span>.</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-gold">Shop all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => (
            <Link key={p.name} to="/product/$slug" params={{ slug: p.name.toLowerCase() }} className="group rounded-3xl glass overflow-hidden hover:shadow-gold-glow transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep to-transparent" />
                <div className="absolute top-4 left-4 rounded-full glass-soft px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-gold">{p.tag}</div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl text-ivory">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.price}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gold group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* APPAREL EDITORIAL */}
      <section className="relative py-28">
        <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Premium Apparel</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">
              Engineered for performance. <span className="italic text-gold-gradient">Made for legacy.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Racerback and athletic-cut essentials in tour-weight cotton. Signature gold detailing.
              Designed for the ones who train for a longer life.
            </p>
            <div className="flex gap-4">
              <Link to="/shop" className="inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Shop apparel</Link>
              <Link to="/about" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ivory hover:border-gold/50 hover:text-gold">Our story</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[5/4] rounded-[2rem] overflow-hidden shadow-lux">
              <img src={apparel} alt="Infinity RxLife apparel" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH / EDUCATION */}
      <section className="container-lux py-28">
        <div className="rounded-[2.5rem] glass p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl bg-gold-gradient" />
          <div className="grid lg:grid-cols-2 gap-14 items-center relative">
            <div>
              <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Education Hub</div>
              <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">Learn the science behind <span className="italic text-gold-gradient">longer</span>, <span className="italic text-gold-gradient">better</span> living.</h2>
              <p className="text-muted-foreground mt-6 max-w-lg">Peer-reviewed research, deep-dive protocols, and clinician-led primers on peptide therapy and healthspan.</p>
              <Link to="/education" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Enter the library <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-4">
              {[
                { t: "The Longevity Playbook", k: "12 min read" },
                { t: "Peptide Therapy Explained", k: "Guide" },
                { t: "Metabolic Health & GLP-1", k: "Research" },
              ].map((a) => (
                <div key={a.t} className="rounded-2xl glass-soft p-5 flex items-center justify-between hover:border-gold/40 transition">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{a.k}</div>
                    <div className="font-display text-lg text-ivory mt-1">{a.t}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-lux py-28">
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Reviewed by</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory">Trusted by physicians, athletes and <span className="italic text-gold-gradient">longevity leaders</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Dr. Elena Marchetti", r: "Longevity Physician", q: "The most transparent supply chain I've reviewed in a decade of peptide practice." },
            { n: "Marcus Reyes", r: "Executive · Biohacker", q: "Feels like a Rolex — precise, considered, quietly powerful. My favorite brand in the space." },
            { n: "Ava Nakamura", r: "Pro Endurance Athlete", q: "Recovery I can feel. Documentation I can trust. That's rare." },
          ].map((t) => (
            <div key={t.n} className="rounded-3xl glass p-8">
              <div className="flex gap-1 text-gold mb-5">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="font-display text-lg text-ivory leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-sm text-ivory">{t.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="container-lux py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lux">
            <img src={brand} alt="Infinity RxLife brand system" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.1]">A house built on <span className="italic text-gold-gradient">precision</span> and patience.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Infinity RxLife was founded by scientists and operators obsessed with translating the frontier of longevity
              research into products worth passing down. Every vial, every fiber, every page carries the same standard.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold">Read the story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-lux py-28">
        <div className="rounded-[2.5rem] glass p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full blur-3xl bg-gold-gradient" />
          </div>
          <div className="relative">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">The Longevity Letter</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory">Insights from the frontier of <span className="italic text-gold-gradient">healthspan</span>.</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Monthly. Considered. Never noisy.</p>
            <form className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full bg-white/[0.04] border border-white/10 px-6 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/60" />
              <button className="rounded-full bg-gold-gradient px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
