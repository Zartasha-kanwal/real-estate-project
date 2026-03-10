import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pkInteriorLiving from "@/assets/pk-interior-living.jpg";
import pkBedroom from "@/assets/pk-bedroom.jpg";
import pkKitchen from "@/assets/pk-kitchen.jpg";
import penthouseSunset from "@/assets/penthouse-sunset.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const residences = [
  {
    name: "Executive Suite",
    floor: "Floors 8–20",
    size: "2,400 – 3,200 sq ft",
    beds: "2–3 Bedrooms",
    price: "From PKR 4.5 Cr",
    image: pkKitchen,
    tag: "Most Popular",
  },
  {
    name: "Royal Apartment",
    floor: "Floors 21–32",
    size: "3,800 – 5,200 sq ft",
    beds: "3–4 Bedrooms",
    price: "From PKR 8.2 Cr",
    image: pkInteriorLiving,
    tag: "Premium",
  },
  {
    name: "Sky Penthouse",
    floor: "Floors 33–39",
    size: "6,500 – 9,000 sq ft",
    beds: "4–5 Bed + Staff Quarter",
    price: "From PKR 15 Cr",
    image: pkBedroom,
    tag: "Limited",
  },
  {
    name: "Crown Penthouse",
    floor: "Floors 40–42",
    size: "12,000+ sq ft Duplex",
    beds: "Private Terrace · Pool",
    price: "By Invitation Only",
    image: penthouseSunset,
    tag: "Exclusive",
  },
];

const ResidencesSection = () => (
  <section id="residences" className="py-24 md:py-36 bg-card">
    <div className="px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">The Residences</span>
          </div>
          <h2 className="section-subheading text-foreground">
            Four Tiers of Living.
            <br />
            <span className="text-gold">One Standard.</span>
          </h2>
        </div>
        <p className="body-text max-w-md">
          Every residence is hand-finished by Pakistan's finest artisans.
          Ziarat marble, Multani tile, floor-to-ceiling panoramic glass,
          and spatial design that treats air and light as materials.
        </p>
      </motion.div>

      {/* Residence cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {residences.map((r, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.8, delay: i * 0.1 } } }}
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={r.image}
                alt={`${r.name} interior`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase bg-gold/90 text-deep-charcoal px-3 py-1.5">
                  {r.tag}
                </span>
              </div>

              {/* Default info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{r.floor}</span>
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mt-1">{r.name}</h3>

                {/* Revealed on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
                  <div className="pt-4 space-y-2 border-t border-primary-foreground/20 mt-4">
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-primary-foreground/60">{r.size}</span>
                      <span className="font-body text-xs text-primary-foreground/60">{r.beds}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-display text-lg text-gold">{r.price}</span>
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(ResidencesSection);
