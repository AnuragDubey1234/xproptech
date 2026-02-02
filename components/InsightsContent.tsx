'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const articles = [
  { title: 'How AI Failed 90% of PropTech Startups (And What Works)', author: 'Rohan Sharma', date: 'Jan 28, 2026', readTime: '12 min read', excerpt: "We analyzed 247 PropTech failures. Here's the tech stack that actually scales...", categories: ['Case Study', 'Tech Stack', 'Funding'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
  { title: 'Why RERA Compliance Is Your Unfair Advantage', author: 'Priya Mehta', date: 'Jan 25, 2026', readTime: '8 min read', excerpt: 'Builders who automated compliance saw 40% faster project approvals.', categories: ['Case Study', 'Compliance'], image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
  { title: 'The Tier 2 PropTech Playbook: Indore to Coimbatore', author: 'Arjun Kapoor', date: 'Jan 22, 2026', readTime: '10 min read', excerpt: 'Where the next 100 PropTech unicorns will come from.', categories: ['Market', 'Expansion'], image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
  { title: 'Fractional Ownership: Regulation vs Reality', author: 'Neha Singh', date: 'Jan 20, 2026', readTime: '6 min read', excerpt: 'What SEBI guidelines mean for fractional property platforms.', categories: ['Regulation', 'Funding'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
  { title: 'From NoBroker to Your Startup: Lessons in Unit Economics', author: 'Vikram Reddy', date: 'Jan 18, 2026', readTime: '14 min read', excerpt: 'CAC, LTV, and the metrics that matter in PropTech.', categories: ['Case Study', 'Metrics'], image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80' },
  { title: "Smart Contracts in Indian Real Estate: 2026 Status", author: 'Rohan Sharma', date: 'Jan 15, 2026', readTime: '9 min read', excerpt: "Blockchain adoption is slow but steady. Here's the roadmap.", categories: ['Tech Stack', 'Blockchain'], image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80' },
];

const quotes = [
  { text: 'We spent 18 months on AI. The thing that actually moved the needle? A simple Excel automation for RERA filings.', author: 'Founder, Pune-based PropTech' },
  { text: 'Investors want to see execution, not demos. Show me 10 paying builders, not 100 free users.', author: 'Angel Investor, Mumbai' },
  { text: 'Tier 2 is where the real opportunity is. Mumbai and Bangalore are saturated.', author: 'Operator, Co-living startup' },
];

export function InsightsContent() {
  return (
    <>
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=60" alt="" fill className="object-cover opacity-50" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-white/40" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            No Sales. No Hype. Just Reality.
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Real case studies. Honest discussions. What actually works in Indian PropTech.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            {articles.map((a) => (
              <motion.article
                key={a.title}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className="relative aspect-video rounded-t-3xl overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">{a.title}</h3>
                  <p className="text-sm text-neutral-500 mb-3">{a.author} · {a.date} · {a.readTime}</p>
                  <p className="text-neutral-700 mb-4">{a.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {a.categories.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">{c}</span>
                    ))}
                  </div>
                  <Link href="#" className="inline-flex items-center font-semibold text-primary-600 hover:underline">Read More →</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-neutral-900 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Honest Industry Discussions
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {quotes.map((q) => (
              <motion.blockquote
                key={q.text}
                variants={fadeInUp}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card rounded-3xl p-8 border-l-4 border-primary-500"
              >
                <p className="text-neutral-700 italic mb-4">&ldquo;{q.text}&rdquo;</p>
                <cite className="text-sm text-neutral-500 not-italic">— {q.author}</cite>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
