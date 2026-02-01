'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import type { NewsArticle } from '@/lib/news-data';

const editorsPick = {
  country: [
    { title: 'India–GCC PropTech corridor: policy alignment and cross-border deals', slug: 'india-gcc-proptech-investment-flows' },
    { title: 'UAE and Saudi lead Middle East PropTech regulatory push', slug: 'uae-dubai-abu-dhabi-proptech-analysis' },
    { title: 'Tier 2 India cities drive 45% of PropTech adoption', slug: 'tier2-proptech-boom' },
    { title: 'Dubai Land Department digitisation and PropTech incentives', slug: 'dubai-proptech-ecosystem-2026' },
  ],
  fintech: [
    { title: 'Fractional REIT platforms cross ₹10K minimum investment in India', slug: 'reit-digital-platform' },
    { title: 'PropTech embedded lending and BNPL for home buyers', slug: 'proptech-unicorn-ipo' },
    { title: 'GCC PropTech funding flows: $50M+ Series C rounds in UAE', slug: 'dubai-proptech-funding' },
    { title: 'Rental yield analytics and investor-focused fintech tools', slug: 'rental-yield-analytics-50k' },
  ],
  edtech: [
    { title: 'PropTech skilling and certification programmes in India and GCC', slug: 'accelerator-cohort-6' },
    { title: 'Real estate tech courses and builder training platforms', slug: 'construction-tech-award' },
    { title: 'Virtual property tours and VR-based buyer education', slug: 'vr-property-tours-1m' },
    { title: 'RERA compliance training and legal tech for agents', slug: 'rera-compliance-saas-10k' },
  ],
  stockMarket: [
    { title: 'PropTech unicorn IPO plans for Q3 2026; draft papers filed', slug: 'proptech-unicorn-ipo' },
    { title: 'REIT and InvIT listings and retail participation trends', slug: 'reit-digital-platform' },
    { title: 'Proptech M&A record in 2025; 45 deals and acquirer interest', slug: 'proptech-ma-record' },
    { title: 'Sector report: PropTech India to cross $5B by 2028', slug: 'sector-report-5b' },
  ],
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

type HomeNewsContentProps = {
  mainFeed: NewsArticle[];
  gccDeals: NewsArticle[];
  indiaLaunches: NewsArticle[];
  featured: NewsArticle[];
};

export function HomeNewsContent({ mainFeed, gccDeals, indiaLaunches, featured }: HomeNewsContentProps) {
  return (
    <>
      {/* Section 1: 3-col news grid (12 cards) */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Latest Proptech News</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {mainFeed.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 2: GCC Deals Today (4 large cards) */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">GCC Deals Today</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {gccDeals.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} size="large" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 3: India Launches (4 cards) */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">India Launches</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {indiaLaunches.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 4: Featured Analysis (2 hero cards) */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Featured Analysis</h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {featured.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} size="large" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 5: Editors Pick (points, not cards) */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Editors Pick</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-fire-red mb-4 pb-2 border-b border-neutral-200">Country</h3>
            <ul className="space-y-2">
              {editorsPick.country.map((item) => (
                <li key={item.slug} className="flex gap-2">
                  <span className="text-fire-red mt-1.5 flex-shrink-0">•</span>
                  <Link href={`/news/${item.slug}`} className="text-sm text-neutral-700 hover:text-fire-red transition-colors leading-snug">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-fire-red mb-4 pb-2 border-b border-neutral-200">Fintech</h3>
            <ul className="space-y-2">
              {editorsPick.fintech.map((item) => (
                <li key={item.slug} className="flex gap-2">
                  <span className="text-fire-red mt-1.5 flex-shrink-0">•</span>
                  <Link href={`/news/${item.slug}`} className="text-sm text-neutral-700 hover:text-fire-red transition-colors leading-snug">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-fire-red mb-4 pb-2 border-b border-neutral-200">Edtech</h3>
            <ul className="space-y-2">
              {editorsPick.edtech.map((item) => (
                <li key={item.slug} className="flex gap-2">
                  <span className="text-fire-red mt-1.5 flex-shrink-0">•</span>
                  <Link href={`/news/${item.slug}`} className="text-sm text-neutral-700 hover:text-fire-red transition-colors leading-snug">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-fire-red mb-4 pb-2 border-b border-neutral-200">Stock Market</h3>
            <ul className="space-y-2">
              {editorsPick.stockMarket.map((item) => (
                <li key={item.slug} className="flex gap-2">
                  <span className="text-fire-red mt-1.5 flex-shrink-0">•</span>
                  <Link href={`/news/${item.slug}`} className="text-sm text-neutral-700 hover:text-fire-red transition-colors leading-snug">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
