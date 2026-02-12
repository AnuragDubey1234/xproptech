'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'Smart City Ecosystems',
        category: 'Urban Tech',
        image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1000&auto=format&fit=crop',
        desc: 'Integrating IoT and data layers into Tier 1 & 2 cities for smarter governance and living.',
        color: 'bg-neutral-900', // Dark card for contrast
        textColor: 'text-white'
    },
    {
        title: 'RERA Digitization',
        category: 'Transparency',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80',
        desc: 'Blockchain-backed records and transparent digital platforms rebuilding market trust.',
        color: 'bg-white', // Light card
        textColor: 'text-neutral-900'
    },
    {
        title: 'Green Infrastructure',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1518005052357-1936c62c2f21?w=1000&q=80',
        desc: 'Net-zero complexes and sustainable materials shaping the skyline of tomorrow.',
        color: 'bg-neutral-100', // Off-white card
        textColor: 'text-neutral-900'
    },
];

const Card = ({ i, title, category, desc, image, color, textColor, progress, range, targetScale }: {
    i: number, title: string, category: string, desc: string, image: string, color: string, textColor: string, progress: MotionValue<number>, range: number[], targetScale: number
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    zIndex: i
                }}
                className={`flex flex-col relative w-[90vw] md:w-[1000px] h-[60vh] rounded-3xl p-6 md:p-10 origin-top overflow-hidden border border-black/5 shadow-2xl ${color}`}
            >
                <div className="flex flex-col-reverse md:flex-row h-full gap-6 md:gap-10">
                    <div className="md:w-[40%] flex flex-col justify-center">
                        <span className="text-fire-red font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 block text-xs md:text-sm">
                            {category}
                        </span>
                        <h2 className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight tracking-tight ${textColor}`}>
                            {title}
                        </h2>
                        <p className={`text-base md:text-lg leading-relaxed font-light ${textColor === 'text-white' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            {desc}
                        </p>
                    </div>

                    <div className="md:w-[60%] relative h-full rounded-2xl overflow-hidden min-h-[200px]">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export function InnovationSpotlight() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative mt-0 mb-0">
            <div className="max-w-[1600px] mx-auto px-6 py-20 text-center sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                <span className="text-fire-red font-bold tracking-[0.2em] uppercase mb-3 block text-sm">
                    Future Focus
                </span>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
                    Shaping the <br /> <span className="text-neutral-400">Next Decade</span>
                </h2>
            </div>

            {features.map((item, i) => {
                const targetScale = 1 - ((features.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        {...item}
                        i={i}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
