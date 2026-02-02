'use client';

import Link from 'next/link';
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
  { title: 'PropTech M&A Activity Hits Record in 2025', excerpt: 'Consolidation wave sees 45 deals; proptech infra and SaaS lead acquirer interest.', date: 'Jan 2, 2026' },
  { title: 'Green Building Tech Mandate for Top 8 Cities', excerpt: 'Govt. mandates energy monitoring and smart meters for new commercial projects.', date: 'Dec 30, 2025' },
  { title: 'PropTech VC Fund Closes $80M for India Focus', excerpt: 'New fund to back 25–30 early-stage proptech and construction-tech startups.', date: 'Dec 28, 2025' },
  { title: 'NoBroker Labs Spins Off Rental Tech Unit', excerpt: 'Rental management and tenant verification product to operate as separate brand.', date: 'Dec 26, 2025' },
  { title: 'Housing.com Launches Builder CRM Suite', excerpt: 'All-in-one sales, inventory, and customer management for mid-tier developers.', date: 'Dec 24, 2025' },
  { title: 'Land Title Digitization Completes Phase 2 in 12 States', excerpt: 'DLR and proptech firms integrate with state land records for instant verification.', date: 'Dec 22, 2025' },
  { title: 'Co-working Operator Ties Up With Proptech for Flex Leases', excerpt: 'Short-term, tech-driven leases to help landlords fill vacant commercial space.', date: 'Dec 20, 2025' },
  { title: 'Student Housing Proptech Raises $15M Series B', excerpt: 'Platform manages 50K beds across 30 cities; eyes Southeast Asia expansion.', date: 'Dec 18, 2025' },
  { title: 'Construction Tech Startup Wins National Innovation Award', excerpt: 'AI-based project scheduling and cost tracking adopted by 5 major developers.', date: 'Dec 16, 2025' },
  { title: 'PropTech India Report: Sector to Cross $5B by 2028', excerpt: 'Report highlights growth in SaaS, marketplaces, and embedded fintech.', date: 'Dec 14, 2025' },
];

export function HomeContent() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-fire-red via-red-600 to-yellow-bright pt-28 pb-24 overflow-hidden flex flex-col items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.h1
            variants={heroTitle}
            initial="initial"
            animate="animate"
            className="gibson-bold text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight"
          >
            AI Valuation Tools
            <br />
            <span className="text-yellow-bright drop-shadow-lg">Raise $5M Series A</span>
          </motion.h1>
          <motion.p
            variants={heroSubtitle}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-lg"
          >
            Pune-based PropTech startup secures funding for AI-powered property valuation
          </motion.p>
          <motion.div variants={heroButtons} initial="initial" animate="animate" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/connect" className="inline-flex items-center justify-center bg-fire-red hover:bg-fire-red-dark text-white py-4 px-8 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105">
              Join Community
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white border-2 border-white py-4 px-8 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105">
              Submit Startup
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-dark" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Latest PropTech Updates
          </motion.h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            {updates.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group bg-white/80 backdrop-blur-sm border border-red-100 hover:border-fire-red shadow-xl hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="flex gap-3 mb-4 items-center">
                  <div className="w-3 h-3 bg-fire-red rounded-full flex-shrink-0" />
                  <span className="text-xs font-bold uppercase text-fire-red tracking-wider">{item.date}</span>
                </div>
                <h3 className="gibson-bold text-xl text-gray-dark mb-3 line-clamp-2 group-hover:text-fire-red transition-colors">{item.title}</h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.excerpt}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-fire-red transition-transform focus:scale-[1.02]"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-fire-red hover:bg-fire-red-dark text-white font-semibold shadow-lg transition-colors"
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
