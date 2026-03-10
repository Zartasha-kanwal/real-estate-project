import { motion } from "framer-motion";
import { Shield, Cpu, Crown, Car, Waves, Dumbbell, Leaf, Building2 } from "lucide-react";
import pkInteriorPanoramic from "@/assets/pk-interior-panoramic.jpg";
import pkKitchen from "@/assets/pk-kitchen.jpg";
import pkInteriorLiving from "@/assets/pk-interior-living.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const residenceTypes = [
  { name: "Executive Suite", size: "2,400 – 3,200 sq ft", beds: "2–3 Bed", price: "From PKR 4.5 Cr" },
  { name: "Royal Apartment", size: "3,800 – 5,200 sq ft", beds: "3–4 Bed", price: "From PKR 8.2 Cr" },
  { name: "Sky Penthouse", size: "6,500 – 9,000 sq ft", beds: "4–5 Bed + Staff", price: "From PKR 15 Cr" },
  { name: "Crown Penthouse", size: "12,000+ sq ft", beds: "Duplex · Private Terrace", price: "By Invitation" },
];

const amenities = [
  { icon: Waves, label: "Infinity Pool", detail: "42nd-floor rooftop, heated deck" },
  { icon: Dumbbell, label: "Sky Gym", detail: "Technogym, personal trainers" },
  { icon: Shield, label: "24/7 Security", detail: "Biometric access, private lobbies" },
  { icon: Car, label: "Valet Parking", detail: "3 dedicated spaces per unit" },
  { icon: Crown, label: "Concierge", detail: "Travel, dining, lifestyle" },
  { icon: Cpu, label: "Smart Home", detail: "Climate, lighting — one tap" },
  { icon: Leaf, label: "Eco Design", detail: "Solar panels, rainwater" },
  { icon: Building2, label: "Private Lift", detail: "Separate elevator per floor" },
];

const PropertyHighlights = () => (
  <section id="residences" className="px-6 md:px-12 py-20 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
        <span className="section-label">The Residences</span>
        <h2 className="section-subheading text-foreground">
          ZIARAT MARBLE.
          <br />
          MULTANI TILE.
          <br />
          NOTHING IMPORTED
          <br />
          EXCEPT THE STANDARD.
        </h2>
        <p className="body-text max-w-md">
          Every residence is hand-finished by Pakistan's finest artisans.
          Floor-to-ceiling panoramic glass, custom joinery, and spatial
          design that treats air and light as materials — not afterthoughts.
        </p>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.7, delay: 0.2 } } }}
        className="mt-8 md:mt-16"
      >
        <img src={pkInteriorPanoramic} alt="Panoramic living room with Margalla views" className="w-full aspect-[4/3] object-cover" />
      </motion.div>
    </div>

    {/* Dual images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        src={pkKitchen} alt="Marble kitchen with Islamic geometric patterns" className="w-full aspect-square object-cover" />
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.7, delay: 0.15 } } }}
        src={pkInteriorLiving} alt="Grand living room with hand-carved stone accents" className="w-full aspect-square object-cover" />
    </div>

    {/* Residence Types */}
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-20 md:mt-32">
      <span className="section-label">Choose Your Residence</span>
      <h3 className="section-subheading text-foreground mt-4 mb-12">FOUR TIERS OF LIVING</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {residenceTypes.map((r, i) => (
          <div key={i} className="bg-background p-8 space-y-4 group hover:bg-card transition-colors">
            <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">{r.beds}</span>
            <h4 className="font-display text-xl md:text-2xl">{r.name}</h4>
            <p className="font-body text-sm text-muted-foreground">{r.size}</p>
            <p className="font-display text-lg text-foreground">{r.price}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Amenities */}
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-20 md:mt-32">
      <span className="section-label">Amenities</span>
      <h3 className="section-subheading text-foreground mt-4 mb-12">EVERY FLOOR EARNS ITS KEEP</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {amenities.map((a, i) => (
          <div key={i} className="bg-background p-6 md:p-8 space-y-3 group hover:bg-card transition-colors">
            <a.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <h4 className="font-display text-base md:text-lg">{a.label}</h4>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{a.detail}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default React.memo(PropertyHighlights);
