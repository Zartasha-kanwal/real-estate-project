import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import { residences } from "@/data/residences";
import { useFavorites } from "@/contexts/FavoritesContext";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

type ResidenceType = "all" | "penthouse" | "suite";

const PropertyExplorationSection = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showFilters, setShowFilters] = useState(false);
  const [type, setType] = useState<ResidenceType>("all");
  const [minBeds, setMinBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minSize, setMinSize] = useState(0);

  const filtered = useMemo(() => {
    return residences.filter((r) => {
      if (type !== "all" && r.type !== type) return false;
      if (r.beds < minBeds) return false;
      if (r.priceValue > maxPrice && maxPrice !== Infinity) return false;
      if (r.sizeRange[0] < minSize) return false;
      return true;
    });
  }, [type, minBeds, maxPrice, minSize]);

  const clearFilters = () => {
    setType("all");
    setMinBeds(0);
    setMaxPrice(Infinity);
    setMinSize(0);
  };

  const hasActiveFilters =
    type !== "all" || minBeds > 0 || maxPrice !== Infinity || minSize > 0;

  return (
    <section id="explore" className="py-24 md:py-36">
      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="gold-separator" />
              <span className="section-label">Explore Residences</span>
            </div>
            <h2 className="section-subheading text-foreground">
              Find Your <span className="text-gold">Perfect Residence</span>
            </h2>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-royal-outline flex items-center gap-2 self-start"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {showFilters ? "Hide Filters" : "Filter Residences"}
          </button>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12 p-6 md:p-8 border border-border space-y-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Refine Your Search
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-body text-xs text-gold hover:text-gold-light transition-colors"
                >
                  <X className="w-3 h-3" /> Clear All
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Type */}
              <div className="space-y-2">
                <label className="section-label">Type</label>
                <div className="flex gap-2">
                  {(["all", "suite", "penthouse"] as ResidenceType[]).map(
                    (t) => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`px-4 py-2 font-body text-[10px] tracking-[0.15em] uppercase transition-all ${
                          type === t
                            ? "bg-foreground text-background"
                            : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {t === "all"
                          ? "All"
                          : t === "suite"
                            ? "Suite"
                            : "Penthouse"}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="section-label">Min Bedrooms</label>
                <div className="flex gap-2">
                  {[0, 2, 3, 4, 5].map((b) => (
                    <button
                      key={b}
                      onClick={() => setMinBeds(b)}
                      className={`px-3 py-2 font-body text-[10px] tracking-[0.15em] transition-all ${
                        minBeds === b
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {b === 0 ? "Any" : `${b}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="section-label">Max Price</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { label: "Any", value: Infinity },
                    { label: "< 6 Cr", value: 60000000 },
                    { label: "< 10 Cr", value: 100000000 },
                    { label: "< 20 Cr", value: 200000000 },
                  ].map((p) => (
                    <button
                      key={p.label}
                      onClick={() => setMaxPrice(p.value)}
                      className={`px-3 py-2 font-body text-[10px] tracking-[0.15em] transition-all ${
                        maxPrice === p.value
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <label className="section-label">Min Size</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { label: "Any", value: 0 },
                    { label: "3,000+", value: 3000 },
                    { label: "5,000+", value: 5000 },
                    { label: "10,000+", value: 10000 },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setMinSize(s.value)}
                      className={`px-3 py-2 font-body text-[10px] tracking-[0.15em] transition-all ${
                        minSize === s.value
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mb-8">
          <span className="font-body text-xs text-muted-foreground">
            Showing{" "}
            <span className="text-foreground font-medium">
              {filtered.length}
            </span>{" "}
            of 127 residences
          </span>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <motion.div
              key={r.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                visible: {
                  ...fadeIn.visible,
                  transition: { duration: 0.7, delay: i * 0.08 },
                },
              }}
              className="group relative overflow-hidden border border-border hover:border-gold/30 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={r.image}
                  alt={`${r.name} interior`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase bg-gold/90 text-deep-charcoal px-3 py-1.5">
                    {r.tag}
                  </span>
                </div>

                {/* Favorite */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(r.id);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm hover:bg-deep-navy/80 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFavorite(r.id)
                        ? "text-gold fill-gold"
                        : "text-primary-foreground/60 hover:text-gold"
                    }`}
                  />
                </button>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
                    {r.floor}
                  </span>
                  <h3 className="font-display text-xl text-primary-foreground mt-1">
                    {r.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-4 bg-card">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="font-body text-[10px] text-muted-foreground block">
                      Beds
                    </span>
                    <span className="font-display text-sm text-foreground">
                      {r.beds}
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-[10px] text-muted-foreground block">
                      Size
                    </span>
                    <span className="font-display text-sm text-foreground">
                      {r.size}
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-[10px] text-muted-foreground block">
                      Price
                    </span>
                    <span className="font-display text-sm text-gold">
                      {r.price}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/residence/${r.slug}`}
                  className="btn-royal-outline w-full flex items-center justify-center gap-2 text-[10px] py-3"
                >
                  View Residence <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <p className="font-display text-2xl text-foreground">
              No residences match your criteria
            </p>
            <button onClick={clearFilters} className="btn-royal-gold">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(PropertyExplorationSection);
