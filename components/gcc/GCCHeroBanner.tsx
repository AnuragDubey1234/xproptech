'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StockTicker } from '../StockTicker';

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
  const prevIndex = useRef(0);

  const triggerTransition = useCallback((nextIndex: number) => {
    prevIndex.current = nextIndex;
    setIndex(nextIndex);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const next = (index + 1) % gccSlides.length;
      triggerTransition(next);
    }, 5500);
    return () => clearInterval(id);
  }, [index, triggerTransition]);

  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] mb-0 group/hero">
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-24 right-10 md:top-32 md:right-16 z-20 px-5 py-2 rounded-full bg-amber-500/20 backdrop-blur-xl border border-amber-500/30 text-amber-200 text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          {gccSlides[index].country}
        </motion.span>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end items-center min-h-[420px] md:min-h-[500px] px-6 md:px-12 pb-36 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-tighter leading-none text-center"
            >
              {gccSlides[index].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-teal-100/90 text-lg md:text-2xl drop-shadow-md leading-relaxed max-w-2xl mx-auto font-medium text-center"
            >
              {gccSlides[index].sub}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators - centered */}
        <div className="flex gap-3 justify-center mt-12">
          {gccSlides.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => triggerTransition(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index
                ? 'bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]'
                : 'bg-white/30 hover:bg-white/60'
                }`}
              animate={{ width: i === index ? 48 : 8 }}
              whileHover={i !== index ? { scale: 1.25 } : {}}
              transition={{ duration: 0.4 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <StockTicker transparent />
      </div>
    </section>
  );
}
