'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const headlines = [
  { text: 'Latest Proptech News', sub: 'Funding, policy, and market updates from India & GCC' },
  { text: 'GCC Deals Today', sub: 'Middle East proptech funding and expansion' },
  { text: 'India Launches', sub: 'New products and startups in real estate tech' },
  { text: 'Featured Analysis', sub: 'Deep dives and expert commentary' },
];

export function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-fire-red rounded-2xl overflow-hidden min-h-[200px] md:min-h-[260px] flex items-center justify-center px-6 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-fire-red/90 to-fire-red-dark/95" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {headlines[index].text}
            </h1>
            <p className="text-primary-200 text-lg md:text-xl">{headlines[index].sub}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link
            href="/buzz"
            className="px-5 py-2.5 rounded-lg bg-white text-primary-900 font-semibold text-sm hover:bg-primary-100 transition-colors"
          >
            Daily Buzz
          </Link>
          <Link
            href="/features"
            className="px-5 py-2.5 rounded-lg bg-white text-primary-900 font-semibold text-sm hover:bg-primary-100 transition-colors"
          >
            Analysis
          </Link>
          <Link
            href="/startups"
            className="px-5 py-2.5 rounded-lg bg-white text-primary-900 font-semibold text-sm hover:bg-primary-100 transition-colors"
          >
            Startups
          </Link>
        </div>
      </div>
    </section>
  );
}
