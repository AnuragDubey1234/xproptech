'use client';

import { motion } from 'framer-motion';
import { PropTechPulse } from './PropTechPulse';

export function PropTechPulseSection() {
    return (
        <section className="mt-20 mb-8 w-full">
            <div className="flex justify-center mb-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="relative"
                >
                    {/* Visual Anchor */}
                    <motion.div
                        variants={{
                            hidden: { width: 0, opacity: 0 },
                            visible: { width: "100%", opacity: 1, transition: { duration: 0.8, ease: "circOut" } }
                        }}
                        className="absolute -top-4 left-0 h-0.5 bg-gradient-to-r from-transparent via-fire-red to-transparent w-full"
                    />

                    <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight flex gap-3 overflow-hidden">
                        {"PropTech Stocks".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
                                    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 pb-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                </motion.div>
            </div>
            <PropTechPulse />
        </section>
    );
}
