'use client';

import { motion, type Variants } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import type { NewsArticle } from '@/lib/news-data';
import Link from 'next/link';

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

type IndiaNewsContentProps = {
    articles: NewsArticle[];
    topic?: string;
};

export function IndiaNewsContent({ articles, topic }: IndiaNewsContentProps) {
    // If filtered, don't separate featured article, show all in grid
    const featured = topic ? undefined : articles[0];
    const rest = topic ? articles : articles.slice(1);

    return (
        <section className="relative" id="news-grid">
            <div className="relative">
                {/* Section header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={slideIn}
                    className="mb-8 md:mb-10"
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">
                        {topic ? 'Filtered View' : 'Latest Updates'}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 leading-tight font-serif capitalize">
                        {topic ? `${topic.replace('-', ' ')} News` : 'All About India'}
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        {topic
                            ? `Curated news and updates related to ${topic.replace('-', ' ')} in the Indian PropTech sector.`
                            : 'Curated selection of the most impactful PropTech stories, funding, and launches in India.'
                        }
                    </p>
                    {topic && (
                        <a href="/india" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 mt-4 transition-colors">
                            ← Back to all news
                        </a>
                    )}
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
                        <NewsCard article={featured} size="large" />
                    </motion.div>
                )}

                {/* News grid - premium spacing */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-10"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '100px' }} // Load earlier
                    variants={stagger}
                    style={{ willChange: 'opacity, transform' }}
                >
                    {rest.map((article) => (
                        <motion.div key={article.slug} variants={fadeInUp} style={{ willChange: 'opacity, transform' }}>
                            <NewsCard article={article} />
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
}
