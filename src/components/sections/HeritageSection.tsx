import { motion } from "framer-motion";
import pkBuilding from "@/assets/pk-building.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const HeritageSection = () => (
  <section id="heritage" className="px-6 md:px-12 py-20 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
        <span className="section-label">Heritage & Craft</span>
        <h2 className="section-heading text-foreground">
          MUGHAL
          <br />
          PRECISION.
          <br />
          MODERN
          <br />
          NERVE.
        </h2>
        <p className="body-text max-w-md">
          The Crown Tower's facade features proprietary perforated marble
          latticework — a contemporary reinterpretation of the jali screens
          at Lahore Fort. Every interior surface is hand-finished: carved
          Ziarat stone, bespoke woodwork by Peshawar's master craftsmen,
          and geometric tile patterns drawn from 400 years of Islamic art.
        </p>
        <p className="body-text max-w-md">
          This is what happens when Pakistani craftsmanship is given
          no budget ceiling and no deadline.
        </p>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.7, delay: 0.2 } } }}
      >
        <img src={pkBuilding} alt="The Crown Tower facade with Islamic-inspired marble latticework"
          className="w-full aspect-[3/4] object-cover" />
      </motion.div>
    </div>
  </section>
);

export default React.memo(HeritageSection);
