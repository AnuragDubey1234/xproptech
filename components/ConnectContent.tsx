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

const devInvestor = [
  { title: 'Build2Rent SaaS seeks $500K Series A', location: 'Pune' },
  { title: 'AR/VR Property Tours needs angel round', location: 'Bangalore' },
  { title: 'PropTech CRM platform - seed stage', location: 'Mumbai' },
];

const founderOperator = [
  { title: 'Pune Co-living operator needs facility manager', location: 'Pune' },
  { title: 'Delhi brokerage seeks fractional ownership CTO', location: 'Delhi' },
  { title: 'Bangalore REIT platform needs sales lead', location: 'Bangalore' },
];

const opportunities = [
  { title: 'PropTech Accelerator Cohort 2026', type: 'Accelerator', location: 'Pune' },
  { title: 'REIT Data Platform - Technical Co-founder', type: 'Co-founder', location: 'Remote' },
  { title: '$2M Series A - Proptech SaaS', type: 'Funding', location: 'Mumbai' },
];

export function ConnectContent() {
  return (
    <>
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Where PropTech Builders Actually Connect
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Developers ↔ Investors ↔ Founders. Real opportunities, real connections.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Developers ↔ Investors
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {devInvestor.map((item) => (
              <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }} className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Founders ↔ Operators
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {founderOperator.map((item) => (
              <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }} className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Real Opportunities Hub
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {opportunities.map((item) => (
              <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -10, scale: 1.03 }} className="glass-card rounded-3xl p-8 border-2 border-primary-500/30">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{item.type}</span>
                <h3 className="text-xl font-bold text-neutral-900 mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Post Opportunity</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Title" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <textarea placeholder="Description" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
              <input type="text" placeholder="Category" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <input type="text" placeholder="Budget (optional)" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <input type="text" placeholder="Contact" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Post Opportunity</motion.button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Find Partners</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">I&apos;m a</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Founder</option>
                  <option>Investor</option>
                  <option>Developer</option>
                  <option>Operator</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Seeking</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Funding</option>
                  <option>Tech</option>
                  <option>Co-founder</option>
                  <option>Operations</option>
                </select>
              </div>
              <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Find Partners</motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
