'use client';

import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import type { NewsArticle } from '@/lib/news-data';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const slideIn: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

type GCCNewsContentProps = {
  articles: NewsArticle[];
};

export function GCCNewsContent({ articles }: GCCNewsContentProps) {
  const [featured, ...rest] = articles;

  return (
    <section className="relative">
      {/* Soft background for eye comfort */}
      <div
        className="absolute inset-0 -mx-6 md:-mx-8 -my-8 rounded-2xl pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--color-gcc-bg) 0%, transparent 60%)' }}
        aria-hidden
      />

      <div className="relative">
        {/* Section header with GCC theme */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideIn}
          className="mb-7 md:mb-8"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gcc-teal)] mb-3">
            Latest from the Gulf
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 leading-tight font-serif">
            GCC PropTech News
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Deals, funding, and market updates from UAE, Saudi Arabia, Oman, Bahrain, and the wider Middle East.
          </p>
        </motion.div>

        {/* Featured article - large hero card */}
        {featured && (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10 md:mb-12"
          >
            <NewsCard article={featured} size="large" variant="gcc" />
          </motion.div>
        )}

        {/* News grid - premium spacing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {rest.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <NewsCard article={article} variant="gcc" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
