import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Search, Heart, Eye } from "lucide-react";
import vials from "@/assets/product-vials.jpeg.asset.json";
import apparel from "@/assets/apparel.jpeg.asset.json";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Infinity RxLife" },
      { name: "description", content: "Research-grade peptides, longevity essentials and premium apparel from Infinity RxLife." },
      { property: "og:title", content: "Shop — Infinity RxLife" },
      { property: "og:description", content: "Research-grade peptides, longevity essentials and premium apparel." },
      { property: "og:image", content: vials.url },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const FILTERS = ["All", "Longevity", "Performance", "Recovery", "Cognitive", "Metabolic", "Apparel"];

const PRODUCTS = [
  { name: "Retatrutide", cat: "Metabolic", price: "Research grade", tag: "Best Seller", img: vials.url, slug: "retatrutide" },
  { name: "Epitalon", cat: "Longevity", price: "Research grade", tag: "New", img: vials.url, slug: "epitalon" },
  { name: "Tesamorelin", cat: "Performance", price: "Research grade", tag: "", img: vials.url, slug: "tesamorelin" },
  { name: "BPC-157", cat: "Recovery", price: "Research grade", tag: "", img: vials.url, slug: "bpc-157" },
  { name: "Semax", cat: "Cognitive", price: "Research grade", tag: "", img: vials.url, slug: "semax" },
  { name: "GHK-Cu", cat: "Longevity", price: "Research grade", tag: "New", img: vials.url, slug: "ghk-cu" },
  { name: "Signature Tank — Onyx", cat: "Apparel", price: "$68", tag: "Apparel", img: apparel.url, slug: "signature-tank" },
  { name: "Longevity Crew — Ivory", cat: "Apparel", price: "$88", tag: "Apparel", img: apparel.url, slug: "longevity-crew" },
];

function ShopPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Shop"
        title={<>The <span className="italic text-gold-gradient">Collection</span></>}
        subtitle="A curated house of longevity essentials. Research-grade formulations and premium apparel — tested, documented, delivered."
      />

      <section className="container-lux pb-12">
        <div className="rounded-3xl glass p-4 md:p-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex items-center gap-3 flex-1 rounded-full bg-white/[0.03] border border-white/10 px-5 py-3">
            <Search className="h-4 w-4 text-gold" />
            <input placeholder="Search peptides, apparel, categories…" className="flex-1 bg-transparent text-sm text-ivory placeholder:text-muted-foreground focus:outline-none" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {FILTERS.map((f, i) => (
              <button key={f} className={`shrink-0 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition ${i === 0 ? "bg-gold-gradient text-navy-deep border-transparent" : "border-white/10 text-ivory/80 hover:border-gold/40 hover:text-gold"}`}>{f}</button>
            ))}
          </div>
          <select className="rounded-full bg-white/[0.03] border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.16em] text-ivory/80 focus:outline-none">
            <option>Featured</option>
            <option>New arrivals</option>
            <option>Best sellers</option>
            <option>Price: low → high</option>
          </select>
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group rounded-3xl glass overflow-hidden hover:shadow-gold-glow transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep to-transparent" />
                {p.tag && <div className="absolute top-4 left-4 rounded-full glass-soft px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-gold">{p.tag}</div>}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="h-9 w-9 rounded-full glass flex items-center justify-center text-ivory/90 hover:text-gold"><Heart className="h-4 w-4" /></button>
                  <button className="h-9 w-9 rounded-full glass flex items-center justify-center text-ivory/90 hover:text-gold"><Eye className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{p.cat}</div>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                  <div className="font-display text-lg text-ivory">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-14">
          {[1,2,3,4].map((n) => (
            <button key={n} className={`h-10 w-10 rounded-full text-xs ${n === 1 ? "bg-gold-gradient text-navy-deep" : "border border-white/10 text-ivory/80 hover:border-gold/40 hover:text-gold"}`}>{n}</button>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
