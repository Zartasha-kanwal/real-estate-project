import { motion } from "framer-motion";
import { TrendingUp, Globe, Award } from "lucide-react";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stats = [
  { number: "18%", label: "Avg. annual appreciation in E-11 Islamabad" },
  { number: "30%+", label: "Paper gains for early Crown Tower investors" },
  { number: "3×", label: "Rental yield vs. traditional Islamabad real estate" },
  { number: "23", label: "Residences remaining — of 127 total" },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Outperforming Every Asset Class",
    text: "Islamabad luxury real estate has beaten gold, equities, and fixed deposits for 5 consecutive years. Crown Tower investors entered at PKR 4.5 Cr — current valuations exceed PKR 6 Cr.",
  },
  {
    icon: Globe,
    title: "Built for Overseas Pakistanis",
    text: "Dedicated NRP desk, dollar-denominated payment plans, digital documentation, and full legal support. Purchase remotely — visit when you're ready.",
  },
  {
    icon: Award,
    title: "Guaranteed Rental Income",
    text: "Hotel-managed rental program with guaranteed returns. Fully furnished units, professional housekeeping, and monthly income deposits — zero landlord hassle.",
  },
];

const InvestmentSection = () => (
  <section id="investment" className="bg-deep-navy text-primary-foreground py-24 md:py-36">
    <div className="px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-6 mb-20"
      >
        <div className="flex items-center gap-4">
          <div className="gold-separator" />
          <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold">Investment</span>
        </div>
        <h2 className="section-subheading text-primary-foreground">
          This Isn't Speculation.
          <br />
          <span className="text-gold">It's Math.</span>
        </h2>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 pb-20 border-b border-primary-foreground/10"
      >
        {stats.map((s, i) => (
          <div key={i} className="space-y-2">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl text-gold">{s.number}</span>
            <p className="font-body text-xs md:text-sm text-primary-foreground/40 leading-relaxed">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.8, delay: i * 0.15 } } }}
            className="space-y-4 p-8 border border-primary-foreground/10 hover:border-gold/30 transition-colors"
          >
            <r.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <h3 className="font-display text-xl md:text-2xl text-primary-foreground">{r.title}</h3>
            <p className="font-body text-sm text-primary-foreground/40 leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="mt-16 text-center"
      >
        <a href="#contact" className="btn-royal-gold">
          Request Investment Brochure
        </a>
      </motion.div>
    </div>
  </section>
);

export default React.memo(InvestmentSection);
