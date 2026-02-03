'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import { PropTechPulse } from '@/components/PropTechPulse';
import type { NewsArticle } from '@/lib/news-data';

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

export function HomeNewsContent({ latestNews, gccDeals, indiaLaunches, featured }: HomeNewsContentProps) {
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
      {/* Section 5: Future PropTech Pulse Animation */}
      <section className="mt-14 mb-0">
        <div className="flex justify-center mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="relative"
          >
            {/* Visual Anchor */}
            <motion.div
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { width: "100%", opacity: 1, transition: { duration: 0.8, ease: "circOut" } }
              }}
              className="absolute -top-4 left-0 h-0.5 bg-gradient-to-r from-transparent via-fire-red to-transparent w-full"
            />

            <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight flex gap-3 overflow-hidden">
              {"PropTech Stocks".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
                    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 pb-2"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>
        </div>
        <PropTechPulse />
      </section>
    </>
  );
}
