import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo-primary.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-navy-deep">
      <div className="absolute inset-x-0 top-0 h-px hairline-gold" />
      <div className="container-lux py-20 grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/30">
              <img src={logo.url} alt="Infinity RxLife" className="h-full w-full object-cover scale-[1.6]" />
            </div>
            <div>
              <div className="font-display text-xl text-ivory">Infinity <span className="italic text-gold-gradient">RxLife</span></div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mt-1">Peptides · Performance · Longevity</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A luxury longevity house — advancing human performance through peptide science, education,
            and third-party tested precision.
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full glass-soft flex items-center justify-center text-ivory/70 hover:text-gold transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Explore", items: [["Shop","/shop"], ["Education","/education"], ["Categories","/category/longevity"], ["About","/about"]] },
          { title: "Support", items: [["Contact","/contact"], ["FAQ","/education"], ["Shipping","/contact"], ["Returns","/contact"]] },
          { title: "Company", items: [["Research","/education"], ["Press","/about"], ["Careers","/about"], ["Legal","/contact"]] },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">{col.title}</div>
            <ul className="space-y-3">
              {col.items.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-ivory/75 hover:text-gold transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="container-lux py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Infinity RxLife. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Research Use Only · Not for Human Consumption</div>
        </div>
      </div>
    </footer>
  );
}
