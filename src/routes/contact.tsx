import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Youtube, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Infinity RxLife" },
      { name: "description", content: "Book a consultation or reach the Infinity RxLife team. Private, considered, responsive." },
      { property: "og:title", content: "Contact — Infinity RxLife" },
      { property: "og:description", content: "Book a consultation or reach our clinical team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "How do consultations work?", a: "A 45-minute private call with a clinician on our team. We review your goals and design a considered protocol." },
  { q: "Where do you ship?", a: "Most regions where research materials are permitted. Restrictions apply based on jurisdiction." },
  { q: "Are your products for humans?", a: "No. All products are Research Use Only. Not for human consumption." },
  { q: "How fast will I hear back?", a: "Within one business day. Consultations typically schedule within the same week." },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic text-gold-gradient">talk</span>.</>}
        subtitle="Send a note, book a consultation, or reach the clinical team directly. We answer every inquiry personally."
      />

      <section className="container-lux pb-24 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <form className="lg:col-span-3 rounded-[2rem] glass p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="First name" placeholder="Marcus" />
            <Field label="Last name" placeholder="Reyes" />
          </div>
          <Field label="Email" type="email" placeholder="you@company.com" />
          <Field label="Phone" placeholder="+1 (555) 000-0000" />
          <div>
            <label className="text-[10px] uppercase tracking-[0.28em] text-gold">Interested in</label>
            <select className="mt-2 w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-sm text-ivory focus:outline-none focus:border-gold/50">
              <option>Private consultation</option>
              <option>Product inquiry</option>
              <option>Wholesale / clinical partnership</option>
              <option>Press & media</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.28em] text-gold">Message</label>
            <textarea rows={5} placeholder="Tell us about your goals…" className="mt-2 w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/50" />
          </div>
          <button type="button" className="w-full rounded-full bg-gold-gradient px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-navy-deep hover:brightness-110 transition">
            Send Message
          </button>
          <p className="text-[11px] text-muted-foreground text-center">We reply within one business day. Your information stays private.</p>
        </form>

        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          {[
            { i: Mail, t: "Email", d: "hello@infinityrxlife.com" },
            { i: Phone, t: "Phone", d: "+1 (800) 424-6384" },
            { i: MapPin, t: "Studio", d: "One Longevity Row, Miami FL" },
            { i: Clock, t: "Hours", d: "Mon–Fri · 9am–6pm ET" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl glass p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gold-gradient flex items-center justify-center text-navy-deep"><c.i className="h-5 w-5" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{c.t}</div>
                <div className="text-ivory text-sm mt-1">{c.d}</div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl glass overflow-hidden aspect-[4/3] relative">
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, oklch(0.22 0.06 264), oklch(0.16 0.05 265))",
            }} />
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0H0V30" fill="none" stroke="oklch(0.86 0.09 88)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#mapgrid)" />
              <path d="M20 220 Q120 100 220 180 T380 90" stroke="oklch(0.86 0.09 88)" strokeWidth="1.5" fill="none" opacity="0.7" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-gold-gradient shadow-gold-glow animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-ivory/80 tracking-[0.2em] uppercase">Miami · FL</div>
          </div>

          <div className="rounded-2xl glass p-5 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Follow</div>
            <div className="flex gap-2">
              {[Instagram, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full glass-soft flex items-center justify-center text-ivory/80 hover:text-gold">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-lux pb-24 max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold mb-3">FAQ</div>
          <h2 className="font-display text-4xl text-ivory">Common questions.</h2>
        </div>
        <div className="space-y-3">
          {FAQ.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.28em] text-gold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/50"
      />
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(v => !v)} className="w-full text-left rounded-2xl glass-soft p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="font-display text-lg text-ivory">{q}</div>
        <ChevronDown className={`h-4 w-4 text-gold transition ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </button>
  );
}
