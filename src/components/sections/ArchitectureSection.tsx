import { motion } from "framer-motion";
import towerExterior from "@/assets/tower-exterior.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const details = [
  { label: "Total Height", value: "198 Metres" },
  { label: "Total Floors", value: "42 Floors" },
  { label: "Total Residences", value: "127 Units" },
  { label: "Location", value: "E-11, Islamabad" },
  { label: "Facade Material", value: "Ziarat Marble & Glass" },
  { label: "Completion", value: "Q4 2027" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="py-24 md:py-36">
    <div className="px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="relative overflow-hidden group cursor-pointer"
        >
          <img
            src={towerExterior}
            alt="Crown Tower exterior at golden hour with Margalla Hills"
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.8, delay: 0.2 } } }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">The Tower</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-[0.95] tracking-tight text-foreground">
            198 Metres of
            <br />
            <span className="font-serif italic text-gold">Architectural Conviction</span>
          </h2>
          <p className="body-text max-w-md">
            Rising 42 floors above Islamabad's most prestigious sector, The Crown
            Tower is Pakistan's tallest residential structure. Its facade combines
            floor-to-ceiling glass with proprietary marble jali screens — a
            silhouette visible from every corner of the capital.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
            {details.map((d, i) => (
              <div key={i} className="space-y-1">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{d.label}</span>
                <p className="font-display text-lg text-foreground">{d.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default React.memo(ArchitectureSection);
