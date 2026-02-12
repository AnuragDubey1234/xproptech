'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import { STARTUPS } from '@/lib/startups-data';

export function ScrollingMarquee({ transparent = false }: { transparent?: boolean }) {
    const marqueeVariants = {
        animate: {
            x: ["0%", "-50%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 40,
                    ease: "linear" as const,
                },
            },
        },
    };

    const duplicatedStartups = [...STARTUPS, ...STARTUPS];

    return (
        <div className={`relative w-full py-8 ${transparent ? 'bg-transparent border-none' : 'bg-neutral-900 border-b border-neutral-800'} overflow-hidden`}>
            {!transparent && <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10 pointer-events-none" />}
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex items-center gap-12 md:gap-20"
                    style={{ willChange: 'transform' }}
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {duplicatedStartups.map((startup, i) => (
                        <div key={`${startup.id}-${i}`} className="relative h-8 md:h-10 w-24 md:w-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer group">
                            <Link href={`/news/${startup.slug}`}>
                                <Image
                                    src={startup.logo}
                                    alt={startup.name}
                                    fill
                                    className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                                    sizes="(max-width: 768px) 100px, 150px"
                                />
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
