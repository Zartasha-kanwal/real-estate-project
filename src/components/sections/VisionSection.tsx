import { motion } from "framer-motion";
import pkBuilding from "@/assets/pk-building.jpg";
import grandLobby from "@/assets/grand-lobby.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const VisionSection = () => (
  <section id="vision" className="py-24 md:py-36">
    <div className="px-6 md:px-16 lg:px-24">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="max-w-3xl space-y-6 mb-20"
      >
        <div className="flex items-center gap-4">
          <div className="gold-separator" />
          <span className="section-label">The Vision</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] tracking-tight text-foreground">
          Where Mughal Precision
          <br />
          Meets{" "}
          <span className="font-serif italic text-gold">Modern Luxury</span>
        </h2>
        <p className="body-text max-w-xl">
          The Crown Tower's facade features proprietary perforated marble
          latticework — a contemporary reinterpretation of the jali screens at
          Lahore Fort. Every interior surface is hand-finished: carved Ziarat
          stone, bespoke woodwork by Peshawar's master craftsmen, and geometric
          tile patterns drawn from 400 years of Islamic art.
        </p>
      </motion.div>

      {/* Two-column visual */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="md:col-span-7 relative overflow-hidden group cursor-pointer"
        >
          <img
            src={pkBuilding}
            alt="Crown Tower facade with Islamic geometric marble latticework"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="section-label text-primary-foreground/50">
              Architectural Heritage
            </span>
            <p className="font-serif text-lg md:text-xl text-primary-foreground mt-2 max-w-md">
              Proprietary jali-inspired marble facade — the first of its kind in
              South Asian residential architecture
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            ...fadeIn,
            visible: {
              ...fadeIn.visible,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
          className="md:col-span-5 relative overflow-hidden group cursor-pointer"
        >
          <img
            src={grandLobby}
            alt="Grand double-height lobby with Islamic geometric marble floor"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="section-label text-primary-foreground/50">
              Grand Lobby
            </span>
            <p className="font-serif text-lg md:text-xl text-primary-foreground mt-2">
              Double-height entrance with hand-laid geometric marble and a
              24-hour concierge
            </p>
          </div>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
      >
        {[
          { number: "400+", label: "Years of craft tradition referenced" },
          { number: "17", label: "Master artisans from Peshawar & Lahore" },
          { number: "6", label: "Types of Pakistani marble used" },
          { number: "1", label: "Building like this in all of Pakistan" },
        ].map((s, i) => (
          <div key={i} className="space-y-2">
            <span className="font-display text-3xl md:text-4xl text-gold">
              {s.number}
            </span>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default React.memo(VisionSection);
