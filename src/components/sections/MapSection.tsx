import { motion } from "framer-motion";
import { MapPin, Utensils, ShoppingBag, Landmark, TreePine } from "lucide-react";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const nearbyPlaces = [
  { icon: Landmark, name: "Faisal Mosque", distance: "8 min drive", category: "Landmark" },
  { icon: ShoppingBag, name: "Centaurus Mall", distance: "12 min drive", category: "Shopping" },
  { icon: Utensils, name: "Monal Restaurant", distance: "15 min drive", category: "Dining" },
  { icon: TreePine, name: "Margalla Hills Trails", distance: "5 min drive", category: "Nature" },
  { icon: Landmark, name: "Islamabad Airport", distance: "25 min drive", category: "Transport" },
  { icon: ShoppingBag, name: "Giga Mall", distance: "10 min drive", category: "Shopping" },
];

const MapSection = () => (
  <section className="py-24 md:py-36 bg-card">
    <div className="px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-6 mb-16"
      >
        <div className="flex items-center gap-4">
          <div className="gold-separator" />
          <span className="section-label">Location</span>
        </div>
        <h2 className="section-subheading text-foreground">
          At the Heart of <span className="text-gold">Islamabad's Prestige</span>
        </h2>
        <p className="body-text max-w-xl">
          E-11 — Islamabad's most coveted address. Minutes from the capital's finest dining, 
          shopping, and nature, yet elevated above it all.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="lg:col-span-2 aspect-[16/10] overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13278.26!2d73.0!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6fd43f47d8e2be73!2sE-11%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crown Tower Location"
            className="w-full h-full"
          />
        </motion.div>

        {/* Nearby places */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.2 } } }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Nearby</span>
          </div>
          {nearbyPlaces.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border border-border hover:border-gold/30 transition-colors"
            >
              <p.icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm text-foreground">{p.name}</p>
                <span className="font-body text-[10px] text-muted-foreground">{p.category}</span>
              </div>
              <span className="font-body text-xs text-gold whitespace-nowrap">{p.distance}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default React.memo(MapSection);
