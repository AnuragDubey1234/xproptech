'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const features = [
    {
        title: 'Digital Twins',
        category: 'Analysis',
        image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?q=80&w=1000&auto=format&fit=crop',
        desc: 'Simulating urban growth before pavement hits the ground.'
    },
    {
        title: 'Fractional Ownership',
        category: 'Investment',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        desc: 'Democratizing Grade-A commercial real estate for everyone.'
    },
    {
        title: 'Smart Materials',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
        desc: 'Self-healing concrete and energy-generating glass facades.'
    },
];

import dynamic from 'next/dynamic';

const InnovationCards = dynamic(() => import('./InnovationCards'), { ssr: false });

export function InnovationSpotlight() {
    const [isMounted, setIsMounted] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    return (
        <section ref={containerRef} className="relative w-full pt-12 pb-32 overflow-hidden">
            {/* Background Decor - Optimized */}
            <div className="absolute inset-0 bg-neutral-900 skew-y-3 transform origin-top-left scale-110 -z-20 will-change-transform transform-gpu" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 -z-10 transform-gpu" />

            <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white z-10"
                >
                    <span className="text-fire-red font-bold tracking-[0.2em] uppercase mb-6 block text-sm">
                        Future Focus
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight relative group cursor-default">
                        <span className="relative inline-block text-neutral-500 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] group-hover:scale-105">
                            Shaping the
                        </span> <br />
                        <span className="relative inline-block text-neutral-500 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] group-hover:scale-105">
                            Next Decade
                        </span>
                        {/* Glow backing for visibility */}
                        <div className="absolute -inset-4 bg-fire-red/10 blur-3xl -z-10 rounded-full opacity-30 pointer-events-none" />
                    </h2>
                    <p className="text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed font-light">
                        Explore the breakthrough technologies that are redefining how India builds, buys, and lives.
                    </p>

                    <button className="group flex items-center gap-3 text-white font-bold text-lg hover:text-fire-red transition-colors">
                        Explore Innovations
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>



                {/* 3D Floating Cards - Lazy Loaded & Desktop Only */}
                {isMounted && isDesktop && (
                    <InnovationCards features={features} y1={y1} y2={y2} rotate={rotate} />
                )}
            </div>
        </section>
    );
}
