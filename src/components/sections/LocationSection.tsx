import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import locationAerial from "@/assets/location-aerial.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const landmarks = [
  { name: "Faisal Mosque", distance: "8 min drive" },
  { name: "Centaurus Mall", distance: "5 min drive" },
  { name: "Islamabad Int'l Airport", distance: "25 min drive" },
  { name: "Margalla Hills Trail 3", distance: "12 min drive" },
  { name: "Serena Hotel", distance: "7 min drive" },
  { name: "PIMS / Shifa Hospital", distance: "10 min drive" },
];

const LocationSection = () => (
  <section id="location" className="py-20 md:py-32">
    <div className="px-6 md:px-12 mb-12">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="space-y-6 max-w-2xl"
      >
        <span className="section-label">Prime Location</span>
        <h2 className="section-subheading text-foreground">
          THE MOST PRESTIGIOUS
          <br />
          ADDRESS IN PAKISTAN
        </h2>
        <p className="body-text max-w-lg">
          Nestled in E-11, Islamabad — minutes from diplomatic enclaves,
          world-class hospitals, elite schools, and the serene Margalla Hills.
          Where privacy meets connectivity.
        </p>
      </motion.div>
    </div>

    {/* Aerial image */}
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="relative"
    >
      <img
        src={locationAerial}
        alt="Aerial view of Islamabad showing Faisal Mosque and Margalla Hills"
        className="w-full aspect-[16/9] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landmarks.map((l, i) => (
            <div key={i} className="flex items-start gap-2">
              <MapPin className="w-3 h-3 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-xs text-primary-foreground font-medium">{l.name}</p>
                <p className="font-body text-[10px] text-primary-foreground/60">{l.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default React.memo(LocationSection);
