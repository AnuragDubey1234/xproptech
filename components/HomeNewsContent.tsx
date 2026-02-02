'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import type { NewsArticle } from '@/lib/news-data';

const editorsPick: Record<string, { title: string; slug: string }[]> = {
  'Real Estate Development': [
    { title: 'Housing.com Launches Builder CRM Suite for mid-tier developers', slug: 'housing-com-crm' },
    { title: 'RERA Compliance SaaS Hits 10K Users among Tier 2 developers', slug: 'rera-compliance-saas-10k' },
    { title: 'Tier 2 City PropTech Boom: Indore, Coimbatore, Jaipur', slug: 'tier2-proptech-boom' },
  ],
  'Construction Tech': [
    { title: 'Construction Tech Startup Wins National Innovation Award', slug: 'construction-tech-award' },
    { title: 'Proptech VC Fund Closes $80M for construction-tech startups', slug: 'vc-fund-80m-india' },
    { title: 'Land Title Digitization Phase 2 in 12 States', slug: 'land-title-digitization' },
  ],
  'Commercial & Office Spaces': [
    { title: 'Co-working Operator Ties Up With Proptech for Flex Leases', slug: 'coworking-flex-leases' },
    { title: 'Proptech M&A Activity Hits Record in 2025', slug: 'proptech-ma-record' },
    { title: 'Dubai Proptech Raises $50Mn for property management tech', slug: 'dubai-proptech-funding' },
  ],
  'Residential & Housing': [
    { title: 'Co-living Platform Expands to 15 Cities', slug: 'coliving-15-cities' },
    { title: 'Smart Home Tech Integration Surges 40% in new apartments', slug: 'smart-home-tech-40' },
    { title: 'PMAY-U 2.0 & Affordable Housing push', slug: 'smart-city-proptech-india-gcc-compare' },
  ],
  'Retail & Mall Tech': [
    { title: 'Proptech India Report: Sector to Cross $5B by 2028', slug: 'sector-report-5b' },
    { title: 'PropTech embedded lending and BNPL for home buyers', slug: 'proptech-unicorn-ipo' },
  ],
  'Hospitality & Hotels': [
    { title: 'Student Housing Proptech Raises $15M Series B', slug: 'student-housing-15m' },
    { title: 'Co-living Platform Expands to 15 Cities', slug: 'coliving-15-cities' },
  ],
  'Sustainability & Green Buildings': [
    { title: 'Green Building Tech Mandate for Top 8 Cities', slug: 'green-building-mandate' },
    { title: 'Proptech Accelerator Cohort 6: focus on sustainability', slug: 'accelerator-cohort-6' },
    { title: 'Smart City PropTech: PMAY, NEOM, and Dholera initiatives', slug: 'smart-city-proptech-india-gcc-compare' },
  ],
  'Real Estate Finance & Investment': [
    { title: 'REIT Digital Platform enables fractional investments from ₹10K', slug: 'reit-digital-platform' },
    { title: 'Proptech Unicorn IPO Plans for Q3 2026', slug: 'proptech-unicorn-ipo' },
    { title: 'Rental Yield Analytics Platform Crosses 50K Users', slug: 'rental-yield-analytics-50k' },
  ],
  'AI & Automation in Property': [
    { title: 'AI Valuation Tools Raise $5M Series A in Pune', slug: 'ai-valuation-tools-series-a' },
    { title: 'AI-Powered Due Diligence Tool Gains Traction', slug: 'ai-due-diligence-tool' },
    { title: 'Legal tech automates property verification for faster closings', slug: 'ai-due-diligence-tool' },
  ],
  'Smart Cities & IoT': [
    { title: 'Smart City PropTech: India vs GGC—PMAY, NEOM, Dholera', slug: 'smart-city-proptech-india-gcc-compare' },
    { title: 'Saudi Vision 2030 & PropTech: Mega Projects and Smart Cities', slug: 'saudi-vision-2030-proptech' },
    { title: 'Smart Home Tech Integration Surges 40%', slug: 'smart-home-tech-40' },
  ],
  'Data, Analytics & Market Intelligence': [
    { title: 'Rental Yield Analytics Platform Crosses 50K Users', slug: 'rental-yield-analytics-50k' },
    { title: 'Proptech India Report: Sector to Cross $5B by 2028', slug: 'sector-report-5b' },
    { title: 'Investor-focused platform for rental returns analysis', slug: 'rental-yield-analytics-50k' },
  ],
  'Legal, Compliance & Regulation': [
    { title: 'Blockchain Title Registry Pilot Launches in Maharashtra', slug: 'blockchain-title-registry-maharashtra' },
    { title: 'RERA Compliance SaaS Hits 10K Users', slug: 'rera-compliance-saas-10k' },
    { title: 'Middle East & India PropTech Regulatory Deep Dive', slug: 'middle-east-india-proptech-regulatory' },
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
  latestNews: NewsArticle[];
  gccDeals: NewsArticle[];
  indiaLaunches: NewsArticle[];
  featured: NewsArticle[];
};

export function HomeNewsContent({
  latestNews = [],
  gccDeals = [],
  indiaLaunches = [],
  featured = []
}: HomeNewsContentProps) {
  return (
    <>
      {/* Section 1: Latest PropTech News - 4 large premium cards, 2x2 grid */}
      <section className="mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Latest PropTech News</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {latestNews.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} size="large" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 2: GCC Deals Today */}
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
              <NewsCard article={article} size="large" compactHeadline />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 3: India Launches */}
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
              <NewsCard article={article} compactHeadline />
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

      {/* Section 5: Editors Pick - grouped by industry tags */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">Editor&apos;s Pick</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {Object.entries(editorsPick).map(([tag, items]) => (
            <motion.div
              key={tag}
              variants={fadeInUp}
              className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:border-fire-red/30 transition-colors"
            >
              <h3 className="text-base md:text-lg font-bold text-fire-red mb-4 pb-2 border-b-2 border-neutral-200">
                {tag}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item, i) => (
                  <li key={`${item.slug}-${i}`} className="flex gap-2">
                    <span className="text-fire-red mt-1.5 flex-shrink-0 font-bold">•</span>
                    <Link
                      href={`/news/${item.slug}`}
                      className="text-sm font-bold text-neutral-800 hover:text-fire-red transition-colors leading-snug"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
