'use client';
import { motion } from 'framer-motion';

export function ScrollingMarquee() {
    const marqueeVariants = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 20,
                    ease: "linear" as const,
                },
            },
        },
    };

    return (
        <div className="relative w-full py-6 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10 pointer-events-none" />
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex items-center gap-16 text-neutral-400/50 font-bold text-lg md:text-xl uppercase tracking-[0.2em]"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span>Future of Living</span>
                            <span className="text-fire-red">•</span>
                            <span>Smart Cities</span>
                            <span className="text-fire-red">•</span>
                            <span>PropTech 3.0</span>
                            <span className="text-fire-red">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
