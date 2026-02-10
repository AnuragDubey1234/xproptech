'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Search } from 'lucide-react';
import Image from 'next/image';
import { Startup } from '@/lib/startups-data';
import { SpotlightEffect } from '@/components/ui/Spotlight';

interface FeaturedStartupProps {
    startup: Startup;
    searchQuery?: string;
    setSearchQuery?: (query: string) => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export function FeaturedStartup({ startup, searchQuery, setSearchQuery, onNext, onPrev }: FeaturedStartupProps) {
    return (
        <section className="w-full relative bg-white group/section">
            {/* Clean Background - Removed Fog */}
            <div className="absolute inset-0 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:60px_60px] opacity-40 -z-10" />

            <div className="w-full relative">
                {/* Navigation Arrows */}
                {onPrev && (
                    <button
                        onClick={onPrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 group hover:scale-110 shadow-lg"
                        aria-label="Previous Startup"
                    >
                        <ArrowRight className="w-6 h-6 rotate-180" />
                    </button>
                )}

                {onNext && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-neutral-900/10 backdrop-blur-md border border-neutral-900/20 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 group hover:scale-110 shadow-lg"
                        aria-label="Next Startup"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                )}

                <motion.div
                    key={startup.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative w-full overflow-hidden bg-white"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[105vh]">
                        {/* Image Section - Full Height */}
                        <div className="relative h-[50vh] lg:h-full min-h-[400px] overflow-hidden bg-neutral-900 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src={startup.logo}
                                    alt={startup.name}
                                    fill
                                    className="object-cover opacity-90 transition-transform duration-1000 group-hover/section:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Content Section - High Contrast */}
                        <SpotlightEffect className="p-8 md:p-12 flex flex-col justify-center bg-white rounded-none relative">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >


                                <motion.h2
                                    className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter leading-[0.85] mb-12 mt-[3.75rem] uppercase inline-block cursor-pointer relative z-10"
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8), 0px 0px 20px rgba(239, 68, 68, 0.4)",
                                        color: "#ef4444"
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {startup.name}
                                </motion.h2>

                                <p className="text-neutral-500 text-lg md:text-xl font-medium leading-tight mb-8 max-w-xl">
                                    {startup.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-xl">
                                    <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 space-y-2 hover:border-fire-red/20 hover:shadow-lg hover:shadow-fire-red/5 transition-all duration-300 group/card">
                                        <span className="text-[9px] text-neutral-400 font-black uppercase tracking-[0.2em] block group-hover/card:text-fire-red transition-colors">Base Operations</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-900 font-black tracking-tight text-lg leading-tight">{startup.city}, {startup.country}</span>
                                        </div>
                                    </div>
                                    <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 space-y-2 hover:border-fire-red/20 hover:shadow-lg hover:shadow-fire-red/5 transition-all duration-300 group/card">
                                        <span className="text-[9px] text-neutral-400 font-black uppercase tracking-[0.2em] block group-hover/card:text-fire-red transition-colors">Capital Status</span>
                                        <span className="text-fire-red font-black tracking-tight text-lg leading-tight">{startup.fundingStage}</span>
                                    </div>
                                </div>

                                <button className="group relative flex items-center justify-between bg-neutral-900 text-white px-10 py-6 rounded-2xl md:rounded-3xl font-black uppercase text-[11px] tracking-[0.4em] hover:bg-fire-red transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-fire-red/30 w-full md:w-auto min-w-[300px]">
                                    <span>Explore Ecosystem Profile</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                </button>

                                {searchQuery !== undefined && setSearchQuery ? (
                                    <div className="mt-8 pt-8 border-t border-neutral-100 w-full max-w-xl">
                                        <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-4">Found what you're looking for?</p>
                                        <div className="relative flex items-center bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 transition-all shadow-sm focus-within:shadow-md focus-within:border-fire-red/20 group/search">
                                            <Search className="w-6 h-6 text-neutral-400 group-focus-within/search:text-fire-red transition-colors" />
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search ecosystem..."
                                                className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-400 ml-4 text-xl font-medium"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-8 pt-8 border-t border-neutral-100 w-full max-w-xl">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">Primary Sector</p>
                                                <p className="text-xl font-black text-neutral-900">{startup.sector}</p>
                                            </div>
                                            <div className="w-[1px] h-8 bg-neutral-200" />
                                            <div>
                                                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">Founded</p>
                                                <p className="text-xl font-black text-neutral-900">{startup.foundedYear}</p>
                                            </div>
                                            <div className="w-[1px] h-8 bg-neutral-200 hidden md:block" />
                                            <div className="hidden md:block">
                                                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">Market Status</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <p className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Active</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </SpotlightEffect>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
