'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Image from 'next/image';
import { Startup } from '@/lib/startups-data';

export function TrendingStartups({ startups }: { startups: Startup[] }) {
    if (startups.length === 0) return null;

    return (
        <div className="py-12 border-y-2 border-neutral-100 overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-12 mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-neutral-900 rounded-xl shadow-lg">
                        <Zap className="w-4 h-4 text-white fill-white animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-neutral-900 text-xs font-black uppercase tracking-[0.3em] leading-none mb-1.5">Trending Signal</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-fire-red animate-ping" />
                            <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase">Live Ecosystem Flow</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative group w-full overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 whitespace-nowrap"
                >
                    {/* Duplicate for seamless scroll */}
                    {[...startups, ...startups].map((startup, i) => (
                        <div
                            key={`${startup.id}-${i}`}
                            className="flex-shrink-0 w-[340px] h-[140px] bg-white border-2 border-neutral-100 rounded-2xl p-6 flex items-center gap-6 hover:border-fire-red/20 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 group/item cursor-pointer"
                        >
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0 border border-neutral-100 shadow-inner">
                                <Image
                                    src={startup.logo}
                                    alt={startup.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow">
                                <span className="text-neutral-900 font-black tracking-tighter text-xl uppercase leading-none mb-2">{startup.name}</span>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-fire-red">{startup.sector}</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-neutral-400 text-[9px] font-black uppercase tracking-widest">{startup.fundingStage}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover/item:bg-fire-red transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Sharp Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
}
