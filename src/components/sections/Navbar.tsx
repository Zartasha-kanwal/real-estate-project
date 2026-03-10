import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#residences", label: "Residences" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#investment", label: "Investment" },
  { href: "#architecture", label: "The Tower" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 2xl:py-8 py-5">
        <a href="#" className={`font-display text-lg tracking-[0.2em] transition-colors ${
          scrolled ? "text-foreground" : "text-primary-foreground"
        }`}>
          THE CROWN TOWER
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-[11px] 2xl:text-[15px] uppercase transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-8 space-y-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
