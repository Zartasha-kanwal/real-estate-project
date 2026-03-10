import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import floorplan2bed from "@/assets/floorplan-2bed.jpg";
import floorplan3bed from "@/assets/floorplan-3bed.jpg";
import floorplanPenthouse from "@/assets/floorplan-penthouse.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const plans = [
  {
    name: "Executive Suite",
    type: "2 Bedroom",
    size: "2,400 – 3,200 sq ft",
    floors: "Floors 8–20",
    image: floorplan2bed,
    highlights: ["Open-plan living & dining", "Master suite with walk-in closet", "Utility room & staff entrance", "Private balcony"],
  },
  {
    name: "Royal Apartment",
    type: "3 Bedroom",
    size: "3,800 – 5,200 sq ft",
    floors: "Floors 21–32",
    image: floorplan3bed,
    highlights: ["Separate family & formal living", "3 en-suite bedrooms", "Chef's kitchen with pantry", "Wraparound terrace"],
  },
  {
    name: "Crown Penthouse",
    type: "Duplex Penthouse",
    size: "12,000+ sq ft",
    floors: "Floors 40–42",
    image: floorplanPenthouse,
    highlights: ["Two-level living with grand staircase", "Private rooftop terrace & pool", "Staff quarters & service entrance", "360° panoramic views"],
  },
];

const FloorPlansSection = () => {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(z - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: panStart.current.x + (e.clientX - dragStart.current.x),
      y: panStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoom((z) => {
      const next = Math.max(1, Math.min(4, z + delta));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  return (
    <section id="floorplans" className="py-24 md:py-36 bg-card">
      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6 mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">Floor Plans</span>
          </div>
          <h2 className="section-subheading text-foreground">
            Designed for <span className="text-gold">How You Live</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="flex lg:flex-row flex-col gap-2 mb-12 "
        >
          {plans.map((p, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); resetView(); }}
              className={`px-6 py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active === i
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {p.type}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Floor plan image with zoom */}
            <div className="space-y-3">
              <div
                className="relative overflow-hidden bg-warm-cream p-8 select-none"
                style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
                onClick={() => { if (zoom === 1) setPreview(active); }}
              >
                <img
                  src={plans[active].image}
                  alt={`${plans[active].name} floor plan`}
                  className="w-full aspect-square object-contain transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  }}
                  draggable={false}
                />
              </div>
              {/* Zoom controls */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="font-body text-xs text-muted-foreground w-12 text-center">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 4}
                  className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={resetView}
                  className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors ml-2"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              <p className="font-body text-[10px] text-muted-foreground text-center">Scroll to zoom · Drag to pan · Click to fullscreen</p>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{plans[active].floors}</span>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2">{plans[active].name}</h3>
                <p className="font-body text-lg text-muted-foreground mt-1">{plans[active].size}</p>
              </div>

              <div className="gold-separator" />

              <div className="space-y-4">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Key Features</span>
                <ul className="space-y-3">
                  {plans[active].highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gold" />
                      <span className="font-body text-sm text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a href="#contact" className="btn-royal-primary">
                  Request Detailed Plans
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fullscreen preview */}
      <AnimatePresence>
        {preview !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy/95 backdrop-blur-sm flex items-center justify-center p-8"
            onClick={() => setPreview(null)}
          >
            <button onClick={() => setPreview(null)} className="absolute top-6 right-6 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <X className="w-6 h-6" />
            </button>
            <img
              src={plans[preview].image}
              alt={`${plans[preview].name} floor plan`}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(FloorPlansSection);
