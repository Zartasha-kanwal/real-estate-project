import { ArrowRight } from "lucide-react";
import React from "react";

const FooterSection = () => (
  <footer className="bg-deep-navy text-primary-foreground border-t border-primary-foreground/10 px-6 md:px-16 lg:px-24 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <span className="font-display text-lg tracking-[0.2em]">THE CROWN TOWER</span>
        <p className="font-body text-sm text-primary-foreground/40 mt-4 max-w-xs leading-relaxed">
          127 residences. 42 floors. Pakistan's most prestigious address.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 items-center text-primary-foreground/30 font-body text-[10px] tracking-wider">
          <span>DAWN Awards</span>
          <span className="text-gold">·</span>
          <span>PBC Excellence</span>
          <span className="text-gold">·</span>
          <span>Pakistan Today Top 10</span>
        </div>
      </div>
      <div className="space-y-3">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/40">Sales Gallery</p>
        <p className="font-body text-sm font-light text-primary-foreground/70">
          Blue Area, Jinnah Avenue<br />
          Islamabad, Pakistan
        </p>
        <p className="font-body text-sm font-light text-primary-foreground/70">+92 (51) 111-CROWN</p>
      </div>
      <div className="space-y-3">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/40">Private Inquiries</p>
        <p className="font-body text-sm font-light text-primary-foreground/70">private@crowntower.pk</p>
        <a href="#contact" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body font-medium border-b border-primary-foreground/30 pb-1 hover:border-gold hover:text-gold transition-colors mt-4 text-primary-foreground/70">
          SCHEDULE A VISIT <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-primary-foreground/10">
      <p className="font-body text-[10px] text-primary-foreground/30 tracking-wider">
        © 2026 The Crown Tower. All rights reserved. RERA Registered. Developed by Crownstone Realty Pakistan.
      </p>
    </div>
  </footer>
);

export default React.memo(FooterSection);
