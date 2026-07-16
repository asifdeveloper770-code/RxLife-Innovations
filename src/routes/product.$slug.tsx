import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ShieldCheck, Star, Minus, Plus, Heart, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import vials from "@/assets/product-vials.jpeg.asset.json";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => ({ slug: params.slug }),
  head: ({ params }) => {
    const name = titleize(params.slug);
    return {
      meta: [
        { title: `${name} — Infinity RxLife` },
        { name: "description", content: `${name}. Research-grade peptide from Infinity RxLife — third-party tested for 99% purity.` },
        { property: "og:title", content: `${name} — Infinity RxLife` },
        { property: "og:description", content: `${name}. Research-grade. 99% purity.` },
        { property: "og:image", content: vials.url },
        { property: "og:url", content: `/product/${params.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name,
          brand: "Infinity RxLife",
          description: `${name} — research-grade peptide, 99% purity, third-party tested.`,
          image: vials.url,
        }),
      }],
    };
  },
  component: ProductPage,
});

function titleize(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const name = titleize(slug);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"benefits"|"ingredients"|"usage"|"research"|"certificates">("benefits");
  const [subscribe, setSubscribe] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 pb-4 container-lux">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link> / <Link to="/shop" className="hover:text-gold">Shop</Link> / <span className="text-gold">{name}</span>
        </div>
      </section>

      <section className="container-lux pb-16 grid lg:grid-cols-12 gap-12">
        {/* Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-[2rem] overflow-hidden shadow-lux aspect-square glass">
            <img src={vials.url} alt={name} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[0,1,2,3].map((i) => (
              <div key={i} className={`aspect-square rounded-2xl overflow-hidden border ${i===0 ? "border-gold" : "border-white/10"}`}>
                <img src={vials.url} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-gold">Research Grade · 10MG</div>
            <h1 className="font-display text-5xl text-ivory mt-2">{name}</h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1 text-gold">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="text-xs text-muted-foreground">128 verified reviews</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {name} is a research-grade peptide manufactured under rigorous protocols and verified by
            independent third-party laboratories. HPLC & MS analyzed. Not for human consumption.
          </p>

          <div className="rounded-3xl glass p-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <div className="font-display text-4xl text-ivory">$189<span className="text-lg text-muted-foreground">.00</span></div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold">In stock</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setSubscribe(false)} className={`rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.16em] border ${!subscribe ? "bg-gold-gradient text-navy-deep border-transparent" : "border-white/10 text-ivory/80"}`}>One-time</button>
              <button onClick={() => setSubscribe(true)} className={`rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.16em] border ${subscribe ? "bg-gold-gradient text-navy-deep border-transparent" : "border-white/10 text-ivory/80"}`}>Subscribe · save 15%</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-white/10">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="h-11 w-11 flex items-center justify-center text-ivory hover:text-gold"><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center text-ivory">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="h-11 w-11 flex items-center justify-center text-ivory hover:text-gold"><Plus className="h-4 w-4" /></button>
              </div>
              <button className="flex-1 rounded-full bg-gold-gradient px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep hover:brightness-110 transition">Add to cart</button>
              <button className="h-12 w-12 rounded-full glass flex items-center justify-center text-ivory hover:text-gold"><Heart className="h-5 w-5" /></button>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { t: "99% Purity", d: "HPLC verified" },
                { t: "3rd Party", d: "Independent lab" },
                { t: "Batch COA", d: "On request" },
              ].map((b) => (
                <div key={b.t} className="rounded-xl glass-soft p-3">
                  <ShieldCheck className="h-4 w-4 text-gold mb-1" />
                  <div className="text-[11px] text-ivory">{b.t}</div>
                  <div className="text-[10px] text-muted-foreground">{b.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="rounded-3xl glass overflow-hidden">
            <div className="flex overflow-x-auto no-scrollbar border-b border-white/5">
              {(["benefits","ingredients","usage","research","certificates"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`shrink-0 px-5 py-4 text-[11px] uppercase tracking-[0.2em] ${tab===t ? "text-gold border-b-2 border-gold" : "text-ivory/70 hover:text-gold"}`}>{t}</button>
              ))}
            </div>
            <div className="p-6 text-sm text-muted-foreground leading-relaxed min-h-32">
              {tab === "benefits" && <ul className="space-y-2">{["Supports research on cellular renewal","Studied for metabolic and longevity markers","Third-party verified for identity and purity","Manufactured under stringent quality protocols"].map(x => <li key={x} className="flex gap-2"><span className="text-gold">◆</span>{x}</li>)}</ul>}
              {tab === "ingredients" && <p>Lyophilized {name} peptide, 10mg per vial. Excipients: none. Reconstitute with bacteriostatic water for research.</p>}
              {tab === "usage" && <p>For research use only. Not for human consumption. Store lyophilized vial in a cool, dry place. Reconstituted product should be refrigerated.</p>}
              {tab === "research" && <p>Peer-reviewed literature and internal analytical data available on request via our clinical & research team.</p>}
              {tab === "certificates" && <p>Certificate of Analysis (COA) issued per batch. HPLC purity report, mass spectrometry identity, endotoxin and sterility documentation available.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-lux py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ivory">Reviews</h2>
          <div className="text-xs text-muted-foreground">4.9 / 5 · 128 reviews</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Marcus R.", q: "Documentation is second to none. Feels premium end to end." },
            { n: "Dr. E. M.", q: "The transparency and packaging set a new standard." },
            { n: "Ava N.", q: "Fast shipping, elegant unboxing, real COA in the box." },
          ].map((r) => (
            <div key={r.n} className="rounded-3xl glass p-6">
              <div className="flex gap-1 text-gold mb-3">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-sm text-ivory/90 leading-relaxed">"{r.q}"</p>
              <div className="text-xs text-muted-foreground mt-4">{r.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational content */}
      <section className="container-lux py-16">
        <div className="rounded-[2rem] glass p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">Learn</div>
            <h3 className="font-display text-3xl md:text-4xl text-ivory">The science behind {name}.</h3>
            <p className="text-muted-foreground mt-3">A curated primer written by our clinical team. Mechanisms, current literature, and where the field is heading.</p>
            <Link to="/education" className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold">Read primer <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* Related */}
      <section className="container-lux py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ivory">You may also like</h2>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-gold">Shop all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Epitalon","Tesamorelin","BPC-157","Semax"].map((n) => (
            <Link key={n} to="/product/$slug" params={{ slug: n.toLowerCase() }} className="group rounded-3xl glass overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={vials.url} alt={n} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="font-display text-lg text-ivory">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">Research grade</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqSection() {
  const items = [
    { q: "Is a certificate of analysis included?", a: "Yes. Every order includes a COA and identity report for the specific batch." },
    { q: "How is it shipped?", a: "Insulated packaging with tracked, signature-required shipping." },
    { q: "What is your return policy?", a: "Due to research-grade nature, sealed vials may be returned within 14 days." },
  ];
  return (
    <div className="space-y-2">
      {items.map((f) => <FaqRow key={f.q} q={f.q} a={f.a} />)}
    </div>
  );
}
function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(v=>!v)} className="w-full text-left rounded-2xl glass-soft p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-ivory">{q}</div>
        <ChevronDown className={`h-4 w-4 text-gold transition ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-2 text-sm text-muted-foreground">{a}</p>}
    </button>
  );
}
