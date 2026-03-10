import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="gold-separator" />
            <span className="section-label">Private Viewings</span>
          </div>
          <h2 className="section-subheading text-foreground">
            23 Residences Remain.
            <br />
            <span className="text-gold">This Page Won't Age Well.</span>
          </h2>
          <p className="body-text max-w-md">
            Schedule a private, one-on-one tour with our senior advisors —
            in person at our Islamabad sales gallery, or via live video
            for overseas buyers.
          </p>
          <div className="space-y-4 pt-4">
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
              <span className="font-body text-sm">Sales Gallery, Blue Area, Jinnah Avenue, Islamabad</span>
            </div>
          </div>
          <div className="pt-8 border-t border-border space-y-4">
            <p className="section-label">Recognized By</p>
            <div className="flex flex-wrap gap-6 items-center text-muted-foreground font-body text-xs tracking-wider">
              <span>DAWN Property Awards</span>
              <span className="text-gold">·</span>
              <span>Pakistan Today Top Developer</span>
              <span className="text-gold">·</span>
              <span>PBC Excellence Award</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.8, delay: 0.2 } } }}>
          {submitted ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="font-display text-4xl text-gold">✓</div>
                <h3 className="font-display text-2xl">Thank You</h3>
                <p className="body-text">Our team will contact you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-border">
              <h3 className="font-display text-xl mb-2">Request a Private Viewing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="section-label">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="section-label">Phone</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" placeholder="+92 300 000 0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="section-label">Email</label>
                <input required type="email" className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="section-label">Interested In</label>
                <select className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="">Select residence type</option>
                  <option value="executive">Executive Suite (2–3 Bed)</option>
                  <option value="royal">Royal Apartment (3–4 Bed)</option>
                  <option value="sky">Sky Penthouse (4–5 Bed)</option>
                  <option value="crown">Crown Penthouse (Duplex)</option>
                  <option value="investment">Investment Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="section-label">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="btn-royal-gold w-full sm:w-auto mt-4">
                Request Private Viewing <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ContactSection);
