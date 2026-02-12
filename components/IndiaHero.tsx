'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ScrollingMarquee } from './ScrollingMarquee';

export function IndiaHero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[500px] md:min-h-[600px] mb-0 isolate text-white overflow-hidden shadow-2xl z-10">
            {/* Background Image with continuous zoom loop */}
            <motion.div
                className="absolute inset-0 -z-20 will-change-transform transform-gpu"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?q=80&w=2069&auto=format&fit=crop"
                    alt="India Cityscape"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Glossy Overlay Effect - Optimized with transform-gpu */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/40 mix-blend-overlay transform-gpu" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light transform-gpu" />
            </motion.div>

            {/* Premium Gradient Overlay for readability (Low Eye Strain) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full px-6 pt-6 pb-32 md:px-16 md:pt-16 md:pb-40 lg:px-24 lg:pt-24 lg:pb-48 flex flex-col justify-end h-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-0.5 w-8 md:w-12 bg-fire-red inline-block" />
                        <span className="text-xs md:text-sm lg:text-base font-bold tracking-widest uppercase text-neutral-300">
                            India Edition
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 md:mb-8 tracking-tighter">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400">
                            Indian Real Estate
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wide text-neutral-200 mt-2 md:mt-4 opacity-90">
                        Innovating every square foot.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Scrolling Marquee Overlay */ }
    <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <ScrollingMarquee transparent />
    </div>
    </section >
    );
}
