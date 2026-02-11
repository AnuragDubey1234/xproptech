'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Startup } from '@/lib/startups-data';
import { TrendingUp } from 'lucide-react';

export function TrendingStartups({ startups }: { startups: Startup[] }) {
    if (startups.length === 0) return null;

    return (
        <div className="w-full bg-neutral-900 overflow-hidden py-3 relative z-20 border-t border-neutral-800 rounded-b-[3rem]">
            <div className="flex items-center">
                {/* Fixed Label */}
                <div className="hidden md:flex items-center gap-3 px-6 md:px-12 border-r border-neutral-800 bg-neutral-900 relative z-30 shrink-0 h-10">
                    <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-fire-red animate-ping absolute inset-0 opacity-75" />
                        <div className="w-2 h-2 rounded-full bg-fire-red relative" />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                        Market Pulse
                    </span>
                </div>

                {/* Scrolling Ticker */}
                <div className="flex-1 overflow-hidden relative mask-linear-fade">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex items-center gap-8 whitespace-nowrap pl-8"
                    >
                        {/* Duplicate for seamless scroll */}
                        {[...startups, ...startups, ...startups].map((startup, i) => (
                            <div
                                key={`${startup.id}-${i}`}
                                className="flex items-center gap-3 group/ticker cursor-pointer hover:opacity-100 opacity-60 transition-opacity duration-300"
                            >
                                <div className="relative w-6 h-6 rounded bg-white overflow-hidden border border-neutral-700">
                                    <Image
                                        src={startup.logo}
                                        alt={startup.name}
                                        fill
                                        className="object-contain p-0.5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-bold text-xs uppercase tracking-wider group-hover/ticker:text-fire-red transition-colors">
                                            {startup.name}
                                        </span>
                                        <TrendingUp className="w-3 h-3 text-fire-red opacity-0 group-hover/ticker:opacity-100 transition-opacity transform translate-y-1 group-hover/ticker:translate-y-0 duration-300" />
                                    </div>
                                    <span className="text-[9px] text-neutral-500 font-medium uppercase tracking-widest">
                                        {startup.sector}
                                    </span>
                                </div>
                                <div className="w-[1px] h-4 bg-neutral-800 ml-4" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-20 pointer-events-none" />
            </div>
        </div>
    );
}
