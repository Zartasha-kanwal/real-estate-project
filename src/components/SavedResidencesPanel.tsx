import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext";
import { residences } from "@/data/residences";

const SavedResidencesPanel = () => {
  const { favorites, toggleFavorite, count } = useFavorites();
  const [open, setOpen] = useState(false);

  const saved = residences.filter((r) => favorites.includes(r.id));

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 w-12 h-12 flex items-center justify-center bg-gold text-deep-charcoal hover:bg-gold-light transition-colors shadow-lg"
        aria-label="Saved residences"
      >
        <Heart className="w-5 h-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-foreground text-background font-body text-[10px] font-medium rounded-full">
            {count}
          </span>
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-deep-navy/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-foreground">My Saved Residences</h3>
                    <p className="font-body text-xs text-muted-foreground">{count} saved</p>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="gold-separator" />

                {saved.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <Heart className="w-8 h-8 text-muted-foreground/30 mx-auto" />
                    <p className="font-body text-sm text-muted-foreground">No saved residences yet.</p>
                    <p className="font-body text-xs text-muted-foreground/60">Click the heart icon on any residence to save it.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {saved.map((r) => (
                      <div key={r.id} className="flex gap-4 p-3 border border-border hover:border-gold/30 transition-colors">
                        <img src={r.image} alt={r.name} className="w-20 h-20 object-cover flex-shrink-0" />
                        <div className="flex-1 space-y-1 min-w-0">
                          <h4 className="font-display text-sm text-foreground truncate">{r.name}</h4>
                          <p className="font-body text-[10px] text-muted-foreground">{r.beds} Bed · {r.size}</p>
                          <p className="font-display text-sm text-gold">{r.price}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => toggleFavorite(r.id)}
                            className="text-gold hover:text-gold-light transition-colors"
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                          <Link
                            to={`/residence/${r.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SavedResidencesPanel;
