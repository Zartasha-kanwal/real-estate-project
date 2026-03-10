import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryPool from "@/assets/gallery-pool.jpg";
import galleryStudy from "@/assets/gallery-study.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";
import pkInteriorLiving from "@/assets/pk-interior-living.jpg";
import pkKitchen from "@/assets/pk-kitchen.jpg";
import pkBedroom from "@/assets/pk-bedroom.jpg";

const slides = [
  { image: pkInteriorLiving, label: "Grand Living Room", area: "4,200 sq ft — DHA Islamabad" },
  { image: pkKitchen, label: "Designer Kitchen", area: "800 sq ft — Gulberg Lahore" },
  { image: galleryDining, label: "Formal Dining", area: "1,200 sq ft — F-7 Islamabad" },
  { image: pkBedroom, label: "Master Bedroom", area: "900 sq ft — Bahria Town" },
  { image: galleryBathroom, label: "Marble Bath Suite", area: "450 sq ft — DHA Phase 6" },
  { image: galleryStudy, label: "Private Study", area: "600 sq ft — E-11 Islamabad" },
  { image: galleryPool, label: "Rooftop Infinity Pool", area: "Amenity — The Crown Tower" },
  { image: galleryLobby, label: "Grand Lobby", area: "Amenity — The Crown Tower" },
];

const ResidenceGallery = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="space-y-8">
      {/* Image */}
      <div className="relative overflow-hidden group">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            key={current}
            src={slides[current].image}
            alt={slides[current].label}
            className="w-full h-full object-cover animate-fade-up"
          />
        </div>

        {/* buttons  */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/70 backdrop-blur-sm border border-border hover:bg-background transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/70 backdrop-blur-sm border border-border hover:bg-background transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl md:text-3xl">{slides[current].label}</h3>
          <p className="font-body text-sm text-muted-foreground mt-1">{slides[current].area}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-body text-xs tracking-[0.15em] text-muted-foreground">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-foreground" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidenceGallery;
