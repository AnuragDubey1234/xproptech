'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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

export function InnovationSpotlight() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 -z-10 transform-gpu will-change-transform" />

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

                {/* 3D Floating Cards */}
                <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            style={{
                                y: index % 2 === 0 ? y1 : y2,
                                rotate: index === 1 ? rotate : 0,
                                zIndex: features.length - index,
                                willChange: 'transform'
                            }}
                            transformTemplate={({ y, rotate, scale }) => `translateY(${y}) rotate(${rotate}) translateZ(0)`}
                            className={`absolute top-${index * 24} right-${index * 12} w-80 aspect-[4/5] bg-white rounded-2xl p-2 shadow-2xl border border-white/10 glass-card transform-gpu
                    ${index === 0 ? 'right-0 top-10' : ''}
                    ${index === 1 ? 'right-40 top-32' : ''}
                    ${index === 2 ? 'right-80 top-0' : ''}
                `}
                        >
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-800 group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="320px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <span className="text-xs font-bold text-fire-red uppercase mb-2">{item.category}</span>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-xs text-neutral-400 line-clamp-2">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
