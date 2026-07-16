import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import logo from "@/assets/logo-primary.jpeg.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/education", label: "Education" },
  { to: "/category/longevity", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/30 bg-navy-deep">
            <img src={logo.url} alt="Infinity RxLife" className="h-full w-full object-cover scale-[1.6]" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg text-ivory tracking-wide">Infinity <span className="italic text-gold-gradient">RxLife</span></span>
            <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase mt-1">Peptides · Performance · Longevity</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-[0.18em] uppercase text-ivory/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-ivory/70 hover:text-gold transition"><Search className="h-4 w-4" /></button>
          <button className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-ivory/70 hover:text-gold transition"><User className="h-4 w-4" /></button>
          <button className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-ivory/70 hover:text-gold transition relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold-gradient text-[10px] text-navy-deep font-semibold flex items-center justify-center">0</span>
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-semibold text-navy-deep uppercase tracking-[0.16em] hover:brightness-110 transition"
          >
            Book Consultation
          </Link>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ivory"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/5">
          <div className="container-lux py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.2em] text-ivory/85 hover:text-gold">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 text-xs font-semibold text-navy-deep uppercase tracking-[0.16em]">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
