import { motion } from "framer-motion";
import lifestylePool from "@/assets/lifestyle-pool-sunset.jpg";
import lifestyleGym from "@/assets/lifestyle-gym.jpg";
import lifestyleConcierge from "@/assets/lifestyle-concierge.jpg";
import smartHome from "@/assets/smart-home.jpg";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const features = [
  {
    image: lifestyleGym,
    label: "PRIVATE SKY GYM",
    title: "Technogym-equipped fitness floor with floor-to-ceiling Margalla views — reserved for residents only",
  },
  {
    image: lifestyleConcierge,
    label: "DEDICATED CONCIERGE",
    title: "Travel, dining, household staffing, and private events — managed by a team that knows your name",
  },
  {
    image: smartHome,
    label: "FULL SMART-HOME",
    title: "Climate, lighting, curtains, and security — controlled from your phone or voice, room by room",
  },
];

const LifestyleSection = () => (
  <section id="lifestyle" className="py-20 md:py-32">
    <div className="px-6 md:px-12 mb-16">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
        className="max-w-2xl space-y-6"
      >
        <span className="section-label">What You're Actually Buying</span>
        <h2 className="section-subheading text-foreground">
          STATUS YOU CAN'T
          <br />
          FAKE. PRIVACY YOU
          <br />
          CAN'T BUY ELSEWHERE.
        </h2>
        <p className="body-text max-w-lg">
          The Crown Tower isn't a building with amenities bolted on.
          Every floor, every service, every material was designed around
          one question: what does a life without friction actually look like?
        </p>
      </motion.div>
    </div>

    {/* Full-width pool hero */}
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
      <img src={lifestylePool} alt="Rooftop infinity pool at sunset, 42 floors above Islamabad" className="w-full aspect-[21/9] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 px-6 md:px-12 pb-8 md:pb-12">
        <span className="section-label text-primary-foreground/60">42ND FLOOR</span>
        <p className="font-serif text-xl md:text-2xl text-primary-foreground mt-2 max-w-lg">
          Heated infinity pool. Private cabanas. Sunset over the Margalla range — every evening.
        </p>
      </div>
    </motion.div>

    {/* Feature grid */}
    <div className="px-6 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.7, delay: i * 0.12 } } }}
          className="relative overflow-hidden group"
        >
          <img src={f.image} alt={f.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <span className="section-label text-primary-foreground/60">{f.label}</span>
            <p className="font-serif text-base md:text-lg text-primary-foreground mt-1">{f.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default React.memo(LifestyleSection);
