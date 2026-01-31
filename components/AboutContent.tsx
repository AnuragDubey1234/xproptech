'use client';

import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const whyCards = [
  { title: 'No platform connects developers, investors, founders, operators', icon: '🔗' },
  { title: 'Too much funding hype, zero execution reality', icon: '📉' },
  { title: 'India needs its PropTech knowledge headquarters', icon: '🇮🇳' },
];

export function AboutContent() {
  return (
    <>
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Building India&apos;s PropTech future, one real connection at a time
          </motion.h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-neutral-900 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Founder Story
          </motion.h2>
          <motion.div className="flex flex-col md:flex-row gap-12 items-start" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 shrink-0"
            />
            <motion.div variants={fadeInUp} className="flex-1">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Rohan Sharma</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Ex-Housing.com PM, NoBroker growth lead. Saw the disconnect between brilliant tech and real execution. Built XPropTech to bridge it.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                After years in India&apos;s top PropTech companies, I noticed a pattern: incredible technology, but founders struggling to find the right investors, developers struggling to find meaningful projects, and operators isolated from the innovation happening around them.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                XPropTech exists to create the connections that actually move the needle—not another networking event, but a real community where PropTech builders find capital, talent, and truth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Why XPropTech Exists
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {whyCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <motion.span className="text-5xl mb-4 block" whileHover={{ scale: 1.2 }}>{card.icon}</motion.span>
                <p className="font-semibold text-neutral-900">{card.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Team</h3>
            <p className="text-neutral-700 text-lg">
              10+ domain experts joining Q1 2026. From real estate, tech, and finance—united to build India&apos;s PropTech future.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Roadmap</h3>
            <ul className="space-y-3 text-neutral-700">
              {['Community (Now)', 'Events (Q2 2026)', 'Accelerator (Q3 2026)'].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span className="w-2 h-2 rounded-full bg-primary-500" whileHover={{ scale: 1.5 }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
