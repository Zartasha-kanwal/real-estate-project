import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import penthouseLiving from "@/assets/penthouse-living.jpg";
import React from "react";

const HeroSection = () => (
  <section className="relative h-screen overflow-hidden">
    <img
      src={penthouseLiving}
      alt="Penthouse living room with panoramic city views at sunset"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-deep-navy/30" />

    <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="max-w-full  space-y-3 "
      >
        {/*Tagline */}
        <div className="flex items-center gap-2 sm:gap-4 ">
          <div className="gold-separator w-8 sm:w-12 h-[2px] bg-gold" />
          <span className="font-body text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase text-gold">
            The Crown Tower · E-11, Islamabad
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-normal text-primary-foreground ">
          127 Residences.
          <br />
          42 Floors.
          <br />
          <span className="text-gold">Zero Compromise.</span>
        </h1>

        {/* Description */}
        <p className="font-body text-sm  2xl:text-lg font-light text-primary-foreground/70 max-w-full sm:max-w-lg ">
          Floor-to-ceiling Margalla views. Biometric private lobbies. Smart-home
          living managed by a 24/7 concierge — built for those who measure
          legacy in generations, not square feet.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#residences"
            className="btn-royal w-full sm:w-auto bg-gold text-deep-charcoal hover:bg-gold-light text-center"
          >
            Explore Residences
          </a>
          <a
            href="#contact"
            className="btn-royal w-full sm:w-auto  border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-center flex items-center justify-center gap-2"
          >
            Schedule a Private Tour <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>

    
  </section>
);

export default React.memo(HeroSection);
