'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const gccSlides = [
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85',
    title: 'UAE & Dubai PropTech',
    sub: 'Free zones, Golden Visa, and digital real estate innovation',
    country: 'UAE',
  },
  {
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=85',
    title: 'Saudi Vision 2030',
    sub: 'NEOM, giga-projects, and smart city PropTech',
    country: 'Saudi Arabia',
  },
  {
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=85',
    title: 'Abu Dhabi & Qatar',
    sub: 'Masdar City, Lusail, and sustainable PropTech hubs',
    country: 'Gulf',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    title: 'GCC PropTech Corridor',
    sub: 'Cross-border deals, funding, and talent flow',
    country: 'GCC',
  },
];

export function GCCHeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % gccSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[380px] mb-8 md:mb-10 shadow-xl group/hero">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Ken Burns: subtle pan + zoom */}
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.05],
                x: [0, 8],
                y: [0, 6],
              }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Image
                src={gccSlides[index].image}
                alt={gccSlides[index].title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </motion.div>
            {/* GCC-themed gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(12,74,110,0.88) 0%, rgba(15,118,110,0.72) 45%, rgba(0,0,0,0.92) 100%)',
              }}
            />
            {/* Subtle shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
              style={{ width: '50%' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Country badge - animated */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`badge-${index}`}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.4 }}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-20 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-200 text-sm font-semibold uppercase tracking-wider"
        >
          {gccSlides[index].country}
        </motion.span>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end min-h-[300px] md:min-h-[380px] px-6 md:px-12 pb-8 md:pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg tracking-tight"
            >
              {gccSlides[index].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-teal-100 text-lg md:text-xl drop-shadow-md leading-relaxed"
            >
              {gccSlides[index].sub}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators - animated */}
        <div className="flex gap-2.5 mt-8">
          {gccSlides.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              animate={{ width: i === index ? 40 : 6 }}
              whileHover={i !== index ? { scale: 1.2 } : {}}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
