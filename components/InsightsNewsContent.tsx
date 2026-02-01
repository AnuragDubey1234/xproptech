'use client';

import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import type { NewsArticle } from '@/lib/news-data';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export function InsightsNewsContent({ articles }: { articles: NewsArticle[] }) {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Data & Insights</h1>
      <p className="text-neutral-500 mb-8">Proptech market data and dashboards.</p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {articles.map((article) => (
          <motion.div key={article.slug} variants={fadeInUp}>
            <NewsCard article={article} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
