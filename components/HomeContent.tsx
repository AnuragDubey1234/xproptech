'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const heroTitle: Variants = {
  initial: { opacity: 0, y: 48, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroSubtitle: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroButtons: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const pillarCards = [
  { title: 'Awareness', href: '/awareness', description: 'Learn PropTech fundamentals, evolution, and market trends', icon: '📚' },
  { title: 'Insights', href: '/insights', description: 'Real case studies, honest discussions, no hype', icon: '💡' },
  { title: 'Connect', href: '/connect', description: 'Developers ↔ Investors ↔ Founders hub', icon: '🤝' },
];

const updates = [
  { title: 'AI Valuation Tools Raise $5M Series A', excerpt: 'Pune-based PropTech startup secures funding for AI-powered property valuation platform.', date: 'Jan 28, 2026' },
  { title: 'RERA Compliance SaaS Hits 10K Users', excerpt: 'Compliance automation platform sees rapid adoption among Tier 2 developers.', date: 'Jan 25, 2026' },
  { title: 'Tier 2 City PropTech Boom 2026', excerpt: 'Indore, Coimbatore, and Jaipur emerge as new PropTech innovation hubs.', date: 'Jan 22, 2026' },
  { title: 'Blockchain Title Registry Pilot in Maharashtra', excerpt: 'State government partners with PropTech firm for pilot blockchain-based land records.', date: 'Jan 20, 2026' },
  { title: 'Co-living Platform Expands to 15 Cities', excerpt: 'Fractional living startup raises $12M to scale operations across Tier 2 markets.', date: 'Jan 18, 2026' },
  { title: 'PropTech Unicorn IPO Plans for Q3 2026', excerpt: 'India\'s first PropTech unicorn files draft papers for domestic listing.', date: 'Jan 16, 2026' },
  { title: 'Smart Home Tech Integration Surges 40%', excerpt: 'Builders report increased demand for IoT-enabled apartments post-2025.', date: 'Jan 14, 2026' },
  { title: 'REIT Digital Platform Launches', excerpt: 'New platform enables fractional REIT investments starting at ₹10,000.', date: 'Jan 12, 2026' },
  { title: 'Virtual Reality Property Tours Hit 1M Sessions', excerpt: 'VR/AR PropTech sees record adoption as remote buying becomes mainstream.', date: 'Jan 10, 2026' },
  { title: 'PropTech Accelerator Announces Cohort 6', excerpt: 'Applications open for 20 startups; focus on sustainability and affordability.', date: 'Jan 8, 2026' },
  { title: 'AI-Powered Due Diligence Tool Gains Traction', excerpt: 'Legal tech startup automates property verification for faster closings.', date: 'Jan 6, 2026' },
  { title: 'Rental Yield Analytics Platform Crosses 50K Users', excerpt: 'Investor-focused platform helps analyze rental returns across Indian cities.', date: 'Jan 4, 2026' },
];

export function HomeContent() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern cityscape - PropTech innovation"
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.h1
            variants={heroTitle}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6"
          >
            India&apos;s First PropTech Community
          </motion.h1>
          <motion.p
            variants={heroSubtitle}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl lg:text-3xl text-neutral-700 mb-10 max-w-2xl mx-auto"
          >
            Where real estate meets technology, capital, and execution.
          </motion.p>
          <motion.div variants={heroButtons} initial="initial" animate="animate" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/connect" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105">
              Join Community
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105">
              Submit Startup
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            {pillarCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={card.href} className="block bg-white border border-neutral-200 shadow-lg hover:shadow-xl rounded-3xl p-8 h-full transition-all duration-300">
                  <motion.span className="text-4xl mb-4 block" whileHover={{ scale: 1.2, rotate: 5 }}>{card.icon}</motion.span>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{card.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{card.description}</p>
                  <span className="inline-block mt-4 text-primary-600 font-semibold">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neutral-900" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Latest PropTech Updates
          </motion.h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            {updates.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white border border-neutral-200 shadow-lg hover:shadow-xl rounded-3xl p-6 md:p-8 transition-all duration-300 cursor-default"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-700 text-sm mb-4">{item.excerpt}</p>
                <span className="text-xs text-neutral-500">{item.date}</span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Join 2,500+ PropTech Builders
          </motion.h2>
          <motion.form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.02]"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
