'use client';

import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const timeline = [
  { year: '2015', event: 'Housing.com revolutionizes online real estate search' },
  { year: '2018', event: 'NoBroker AI-powered matching gains traction' },
  { year: '2022', event: 'PropTech sector crosses $1.2B in funding' },
  { year: '2026', event: 'Smart Cities & Tier 2 expansion drive growth' },
];

const trends = ['RERA compliance platforms', 'REITs digital infrastructure', 'Tier 2/3 city expansion', 'Co-living & fractional ownership tech'];

const techFeatures = [
  { title: 'AI Predictive Pricing', desc: 'Neural network-powered valuation models', icon: '🧠' },
  { title: 'Smart Contracts', desc: 'Blockchain transaction flow for property deals', icon: '⛓️' },
  { title: 'Digital Twins', desc: '3D building models for planning & management', icon: '🏗️' },
  { title: 'Virtual Property Tours', desc: 'VR headset immersive viewing experiences', icon: '🥽' },
];

export function AwarenessContent() {
  return (
    <>
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            PropTech Evolution in India
          </motion.h1>
          <motion.div className="grid md:grid-cols-3 gap-6 mb-16" initial="initial" animate="animate" variants={stagger}>
            {['15x growth', '$2.8B market', '500+ startups'].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-3xl p-6 text-center"
              >
                <motion.span className="text-3xl font-black text-primary-600" whileHover={{ scale: 1.1 }}>{stat}</motion.span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="space-y-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={fadeInLeft}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex gap-6 items-start glass-card rounded-2xl p-6"
              >
                <motion.span className="text-2xl font-bold text-primary-600 shrink-0" whileHover={{ scale: 1.1 }}>{item.year}</motion.span>
                <p className="text-neutral-700 text-lg">{item.event}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Real Estate Market Trends 2026
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {trends.map((trend) => (
              <motion.div key={trend} variants={fadeInUp} whileHover={{ y: -4 }} className="glass-card rounded-3xl p-6">
                <p className="font-semibold text-neutral-900">{trend}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            New & Practical Property Technologies
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {techFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <motion.span className="text-5xl mb-4 block" whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}>{f.icon}</motion.span>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-neutral-700">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
