import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || !isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-deep-navy/95 backdrop-blur-sm border-t border-primary-foreground/10 px-4 py-3 flex items-center justify-between gap-3">
      <p className="font-body text-[10px] text-primary-foreground/50">
        Only <span className="text-gold font-medium">23</span> left
      </p>
      <div className="flex items-center gap-2">
        <a href="tel:+925111127696" className="btn-royal border border-primary-foreground/20 text-primary-foreground text-[10px] px-3 py-2 hover:bg-primary-foreground/10">
          <Phone className="w-3 h-3" /> Call
        </a>
        <a href="#contact" className="btn-royal bg-gold text-deep-charcoal text-[10px] px-3 py-2 hover:bg-gold-light">
          Book Tour
        </a>
      </div>
    </div>
  );
};

export default React.memo(StickyCtaBar);
