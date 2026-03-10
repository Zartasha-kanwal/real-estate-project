import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Film,
  Sparkles,
  Building2,
  Cpu,
  UtensilsCrossed,
  X,
} from "lucide-react";
import lifestylePool from "@/assets/lifestyle-pool-sunset.jpg";
import privateCinema from "@/assets/private-cinema.jpg";
import royalSpa from "@/assets/royal-spa.jpg";
import grandLobby from "@/assets/grand-lobby.jpg";
import smartHome from "@/assets/smart-home.jpg";
import privateDining from "@/assets/private-dining.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const amenities = [
  {
    icon: Waves,
    title: "Infinity Sky Pool",
    description:
      "42nd-floor heated rooftop pool with private cabanas overlooking the Margalla range",
    image: lifestylePool,
    fullDescription:
      "Perched 198 metres above Islamabad, the Infinity Sky Pool is a temperature-controlled sanctuary with retractable glass enclosure for year-round use. Private cabanas with dedicated butler service, underwater lighting, and panoramic views of the Margalla Hills stretching to the horizon.",
    features: [
      "Heated year-round",
      "Retractable glass roof",
      "Private cabanas with service",
      "Sunset-facing orientation",
      "Children's pool area",
    ],
  },
  {
    icon: Film,
    title: "Private Cinema",
    description:
      "12-seat Dolby Atmos screening room with navy velvet interiors and gold accents",
    image: privateCinema,
    fullDescription:
      "A 12-seat Dolby Atmos cinema designed as a private screening room for residents. Navy velvet seating, gold acoustic panels, and a 6-metre curved screen. Reservable for private screenings, sporting events, or gaming sessions.",
    features: [
      "Dolby Atmos 7.1.4 surround",
      "6m curved 4K laser screen",
      "Climate-controlled",
      "Online booking system",
      "Complimentary refreshments",
    ],
  },
  {
    icon: Sparkles,
    title: "Royal Spa & Wellness",
    description:
      "Full-service marble spa with steam rooms, treatment suites, and meditation chambers",
    image: royalSpa,
    fullDescription:
      "A 5,000 sq ft wellness sanctuary clad in Ziarat marble. Separate male and female zones, each with hammam, steam room, sauna, and cold plunge pool. Treatment suites for massage, facials, and traditional therapies. A dedicated meditation garden with natural light.",
    features: [
      "Separate male/female zones",
      "Hammam & steam rooms",
      "Salt therapy room",
      "Meditation garden",
      "Professional therapists on-site",
    ],
  },
  {
    icon: Building2,
    title: "Grand Lobby Lounge",
    description:
      "Double-height entrance with 24/7 concierge, valet parking, and biometric security",
    image: grandLobby,
    fullDescription:
      "The Grand Lobby is the first impression of Crown Tower — a double-height atrium with hand-laid geometric marble floors, a cascading water feature, and bespoke lighting by Italian artisans. 24/7 concierge desk, biometric access control, and valet service.",
    features: [
      "Double-height atrium",
      "24/7 concierge desk",
      "Biometric access control",
      "Valet parking service",
      "Italian bespoke lighting",
    ],
  },
  {
    icon: Cpu,
    title: "Smart Home Systems",
    description:
      "Climate, lighting, curtains, and security — controlled from your phone, room by room",
    image: smartHome,
    fullDescription:
      "Every residence is equipped with an integrated smart-home platform controlling lighting scenes, climate zones, automated curtains, and security cameras. Voice control via premium assistants, remote access from anywhere in the world, and a dedicated tech concierge for setup and troubleshooting.",
    features: [
      "Room-by-room climate zones",
      "Automated curtains & blinds",
      "Voice assistant integration",
      "Remote mobile access",
      "Dedicated tech support",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Private Dining Rooms",
    description:
      "Crystal-lit dining spaces for intimate gatherings with panoramic city views",
    image: privateDining,
    fullDescription:
      "Two reservable private dining rooms on the 38th floor, each seating up to 14 guests. Crystal chandeliers, Mughal-inspired geometric wall panels, and floor-to-ceiling glass with city views. In-house chef available for bespoke multi-course dining experiences.",
    features: [
      "Seats up to 14 guests",
      "In-house chef service",
      "Crystal chandeliers",
      "Panoramic city views",
      "Custom menu planning",
    ],
  },
];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="amenities" className="py-24 md:py-36">
      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-2xl mx-auto space-y-6 mb-20"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">Exclusive Amenities</span>
            <div className="gold-separator" />
          </div>
          <h2 className="section-subheading text-foreground">
            Every Floor Earns
            <br />
            <span className="text-gold">Its Place</span>
          </h2>
          <p className="body-text mx-auto max-w-lg">
            Six signature amenities designed around one question: what does a
            life without friction actually look like?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                visible: {
                  ...fadeIn.visible,
                  transition: { duration: 0.8, delay: i * 0.08 },
                },
              }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy" 
                  decoding="async" 
                  fetchpriority="low"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    {...{ fetchpriority: "low" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-all duration-500 group-hover:from-deep-navy/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <a.icon
                    className="w-5 h-5 text-gold mb-3"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-xl text-primary-foreground">
                    {a.title}
                  </h3>
                  <p className="font-body text-xs text-primary-foreground/60 leading-relaxed mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {a.description}
                  </p>
                  <span className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 block">
                    Click to explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Amenity Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={amenities[selected].image}
                  alt={amenities[selected].title}
                  loading="lazy" 
                  decoding="async" 
                  fetchpriority="low"
                  className="w-full h-full object-cover"
                    {...{ fetchpriority: "low" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {(() => {
                    const Icon = amenities[selected].icon;
                    return (
                      <Icon
                        className="w-6 h-6 text-gold mb-2"
                        strokeWidth={1.5}
                      />
                    );
                  })()}
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground">
                    {amenities[selected].title}
                  </h3>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="body-text">
                  {amenities[selected].fullDescription}
                </p>

                <div className="gold-separator" />

                <div className="space-y-3">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Key Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {amenities[selected].features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 py-1">
                        <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        <span className="font-body text-sm text-foreground">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="btn-royal-gold inline-flex"
                >
                  Enquire About Amenities
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(AmenitiesSection);
