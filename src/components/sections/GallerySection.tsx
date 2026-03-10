import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryLobby from "@/assets/grand-lobby.jpg";
import galleryPool from "@/assets/lifestyle-pool-sunset.jpg";
import galleryKitchen from "@/assets/pk-kitchen.jpg";
import galleryLiving from "@/assets/pk-interior-living.jpg";
import galleryLounge from "@/assets/sky-lounge.jpg";
import galleryCityscape from "@/assets/pk-cityscape.jpg";
import galleryBedroom from "@/assets/pk-bedroom.jpg";
import galleryPenthouse from "@/assets/penthouse-living.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const images = [
  { src: galleryLobby, label: "Grand Lobby", category: "Architecture" },
  { src: galleryPenthouse, label: "Penthouse Living", category: "Interior" },
  { src: galleryLounge, label: "Sky Lounge", category: "Lifestyle" },
  { src: galleryKitchen, label: "Designer Kitchen", category: "Interior" },
  { src: galleryPool, label: "Infinity Pool", category: "Lifestyle" },
  { src: galleryCityscape, label: "Skyline Views", category: "Views" },
  { src: galleryLiving, label: "Living Room", category: "Interior" },
  { src: galleryBedroom, label: "Master Suite", category: "Interior" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((c) => (c === null ? null : c === 0 ? images.length - 1 : c - 1));
  const next = () => setLightbox((c) => (c === null ? null : c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="py-24 md:py-36 bg-card">
      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6 mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">Gallery</span>
          </div>
          <h2 className="section-subheading text-foreground">
            Lobby to Skyline.
            <br />
            <span className="text-gold">Every Room Tells a Story.</span>
          </h2>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.06 } } }}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 || i === 4 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/50 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-gold">{img.category}</span>
                <p className="font-display text-sm text-primary-foreground">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10">
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].label}
                className="max-h-[75vh] w-auto mx-auto object-contain"
              />
              <div className="text-center mt-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{images[lightbox].category}</span>
                <p className="font-display text-xl text-primary-foreground mt-1">{images[lightbox].label}</p>
                <span className="font-body text-xs text-primary-foreground/40 mt-1">
                  {String(lightbox + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(GallerySection);
