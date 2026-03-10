import { motion } from "framer-motion";
import { Play } from "lucide-react";
import skyLounge from "@/assets/sky-lounge.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const VirtualTourSection = () => (
  <section className="relative py-24 md:py-36 overflow-hidden">
    <div className="absolute inset-0">
      <img src={skyLounge} alt="Crown Tower interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-deep-navy/75" />
    </div>

    <div className="relative z-10 px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="gold-separator" />
          <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold">Virtual Experience</span>
          <div className="gold-separator" />
        </div>

        <h2 className="section-subheading text-primary-foreground">
          Step Inside
          <br />
          <span className="text-gold">Before You Visit</span>
        </h2>

        <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto leading-relaxed">
          Experience the grandeur of Crown Tower from anywhere in the world. 
          Walk through the grand lobby, explore the sky pool, and step into 
          your future penthouse — all from your screen.
        </p>

        {/* Play button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-4"
        >
          <button className="group relative w-24 h-24 mx-auto flex items-center justify-center">
            {/* ring */}
            <span className="absolute inset-0 rounded-full border-2 border-gold/30 animate-ping" />
            <span className="absolute inset-0 rounded-full border border-gold/50" />
            <span className="relative w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors">
              <Play className="w-6 h-6 text-deep-charcoal ml-1" fill="currentColor" />
            </span>
          </button>
        </motion.div>

        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30">
          Immersive 360° Virtual Walkthrough
        </p>

        <a href="#contact" className="btn-royal border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 inline-flex">
          Schedule an In-Person Tour
        </a>
      </motion.div>
    </div>
  </section>
);

export default React.memo(VirtualTourSection);
