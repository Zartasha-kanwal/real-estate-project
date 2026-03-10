import { motion } from "framer-motion";
import skyLounge from "@/assets/sky-lounge.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const testimonials = [
  {
    quote: "We looked at every luxury project in Islamabad. The Crown Tower was the only one where the materials, the views, and the privacy felt genuine — not staged.",
    name: "Ahmed & Fatima K.",
    title: "Crown Penthouse Owners",
  },
  {
    quote: "As an overseas Pakistani, the remote purchase process was seamless. The NRP desk handled everything. I own a piece of Islamabad without leaving London.",
    name: "Dr. Raheel S.",
    title: "Investor, United Kingdom",
  },
  {
    quote: "The concierge team treats every request like it matters. From airport pickups to private dining — this is the first building in Pakistan that operates like a five-star hotel.",
    name: "Sana M.",
    title: "Royal Apartment Resident",
  },
];

const TestimonialsSection = () => (
  <section id="lifestyle" className="relative py-24 md:py-36 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={skyLounge}
        alt="Sky lounge at night"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-deep-navy/85" />
    </div>

    <div className="relative z-10 px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="text-center space-y-6 mb-16"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="gold-separator" />
          <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold">Voices of Residents</span>
          <div className="gold-separator" />
        </div>
        <h2 className="section-subheading text-primary-foreground">
          What Living Here
          <br />
          <span className="text-gold">Actually Feels Like</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.8, delay: i * 0.15 } } }}
            className="p-8 border border-primary-foreground/10 space-y-6 hover:border-gold/30 transition-colors"
          >
            <div className="font-display text-4xl text-gold leading-none">"</div>
            <p className="font-serif text-base md:text-lg text-primary-foreground/80 italic leading-relaxed">
              {t.quote}
            </p>
            <div className="pt-4 border-t border-primary-foreground/10">
              <p className="font-body text-sm text-primary-foreground">{t.name}</p>
              <p className="font-body text-xs text-primary-foreground/40">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(TestimonialsSection);
