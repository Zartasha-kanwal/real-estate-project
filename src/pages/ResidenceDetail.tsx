import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, ChevronLeft, ChevronRight, X, ZoomIn, Phone, Mail, MapPin, Check } from "lucide-react";
import { getResidenceBySlug } from "@/data/residences";
import { useFavorites } from "@/contexts/FavoritesContext";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ResidenceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const residence = getResidenceBySlug(slug || "");
  const { toggleFavorite, isFavorite } = useFavorites();
  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!residence) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-display text-4xl text-foreground">Residence Not Found</h1>
          <Link to="/" className="btn-royal-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  const prev = () => setActiveImage((c) => (c === 0 ? residence.gallery.length - 1 : c - 1));
  const next = () => setActiveImage((c) => (c === residence.gallery.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
          <Link to="/#explore" className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <span className="font-display text-sm tracking-[0.2em] text-foreground">{residence.name}</span>
          <button
            onClick={() => toggleFavorite(residence.id)}
            className="flex items-center gap-1"
          >
            <Heart className={`w-4 h-4 transition-colors ${isFavorite(residence.id) ? "text-gold fill-gold" : "text-muted-foreground hover:text-gold"}`} />
          </button>
        </div>
      </div>

      <div className="pt-16 ">
        {/* Hero gallery */}
        <section className="relative lg:px-9 lg:w-[90%] mx-auto py-5 px-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={residence.gallery[activeImage]}
                alt={`${residence.name} view ${activeImage + 1}`}
                className="absolute inset-0 w-full h-full object-fill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-deep-navy/20" />

            {/* Navigation */}
            <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Zoom */}
            <button
              onClick={() => setLightbox(activeImage)}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <span className="font-body text-xs text-primary-foreground/60">
                {String(activeImage + 1).padStart(2, "0")} / {String(residence.gallery.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="px-6 md:px-16 lg:px-24 -mt-8 relative z-10">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {residence.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 h-14 overflow-hidden transition-all ${
                    activeImage === i ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase bg-gold/90 text-deep-charcoal px-3 py-1.5">{residence.tag}</span>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{residence.floor}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl text-foreground">{residence.name}</h1>
                <p className="body-text max-w-2xl">{residence.description}</p>
              </motion.div>

              {/* Key metrics */}
              <motion.div initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.1 } } }}
                className="grid grid-cols-3 gap-6 p-6 border border-border"
              >
                <div className="text-center space-y-1">
                  <span className="font-display text-2xl md:text-3xl text-gold">{residence.beds}</span>
                  <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">Bedrooms</p>
                </div>
                <div className="text-center space-y-1 border-x border-border">
                  <span className="font-display text-2xl md:text-3xl text-gold">{residence.size}</span>
                  <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">Total Area</p>
                </div>
                <div className="text-center space-y-1">
                  <span className="font-display text-2xl md:text-3xl text-gold">{residence.price}</span>
                  <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">Starting</p>
                </div>
              </motion.div>

              {/* Specifications */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <h2 className="font-display text-2xl text-foreground">Specifications</h2>
                <div className="gold-separator" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {residence.specifications.map((s, i) => (
                    <div key={i} className="p-4 border border-border space-y-1">
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</span>
                      <p className="font-display text-lg text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floor plan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <h2 className="font-display text-2xl text-foreground">Floor Plan</h2>
                <div className="gold-separator" />
                <div
                  className="bg-warm-cream p-8 cursor-pointer group relative overflow-hidden"
                  onClick={() => setLightbox(-1)}
                >
                  <img
                    src={residence.floorPlan}
                    alt={`${residence.name} floor plan`}
                    className="w-full max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/5">
                    <span className="font-body text-xs tracking-[0.15em] uppercase bg-background/90 backdrop-blur-sm px-4 py-2">Click to Enlarge</span>
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <h2 className="font-display text-2xl text-foreground">Amenities & Features</h2>
                <div className="gold-separator" />
                <div className="grid grid-cols-2 gap-3">
                  {residence.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <h2 className="font-display text-2xl text-foreground">Location</h2>
                <div className="gold-separator" />
                <div className="aspect-video overflow-hidden border border-border">
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
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    { place: "Faisal Mosque", time: "8 min" },
                    { place: "Centaurus Mall", time: "12 min" },
                    { place: "Airport", time: "25 min" },
                    { place: "Margalla Trails", time: "5 min" },
                  ].map((l, i) => (
                    <div key={i} className="p-3 border border-border">
                      <span className="font-body text-[10px] text-muted-foreground block">{l.place}</span>
                      <span className="font-display text-sm text-gold">{l.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/*  Contact CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="border border-border p-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-display text-3xl text-gold">{residence.price}</span>
                    <p className="font-body text-xs text-muted-foreground">{residence.size} · {residence.bedsLabel}</p>
                  </div>
                  <div className="gold-separator" />

                  {submitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="font-display text-3xl text-gold">✓</div>
                      <h3 className="font-display text-lg">Thank You</h3>
                      <p className="font-body text-xs text-muted-foreground">We'll contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <h3 className="font-display text-lg">Enquire About This Residence</h3>
                      <input required type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                      <input required type="email" placeholder="Email" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                      <input required type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                      <textarea rows={3} placeholder="Message (optional)" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                      <button type="submit" className="btn-royal-gold w-full">
                        Request Private Viewing <ArrowRight className="w-3 h-3" />
                      </button>
                    </form>
                  )}
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold" />
                    <span className="font-body text-sm">+92 (51) 111-CROWN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold" />
                    <span className="font-body text-sm">private@crowntower.pk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="font-body text-sm text-muted-foreground">E-11, Islamabad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightbox === -1 ? residence.floorPlan : residence.gallery[lightbox]}
              alt={residence.name}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResidenceDetail;
