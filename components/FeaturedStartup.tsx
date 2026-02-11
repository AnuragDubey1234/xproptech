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
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Static Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

                {/* Moving Gradient Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-fire-red/5 to-purple-500/5 rounded-full blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-20"
                />

                {/* Hover Blend - Intense Blue/Red/Orange */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-red-600/70 to-orange-500/80 opacity-0 group-hover/section:opacity-100 transition-opacity duration-700 ease-in-out" />
            </div>

            <div className="w-full relative max-w-[2000px] mx-auto pt-0 pb-0">
                {/* Navigation Arrows */}
                {onPrev && (
                    <button
                        onClick={onPrev}
                        className="absolute left-4 md:left-8 top-[67%] -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 group hover:scale-110 shadow-lg"
                        aria-label="Previous Startup"
                    >
                        <ArrowRight className="w-6 h-6 rotate-180" />
                    </button>
                )}

                {onNext && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 md:right-8 top-[67%] -translate-y-1/2 z-30 p-4 rounded-full bg-neutral-900/10 backdrop-blur-md border border-neutral-900/20 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 group hover:scale-110 shadow-lg"
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
                        {/* Image Section - Full Height */}
                        <div className="relative h-[400px] lg:h-full min-h-[400px] overflow-hidden bg-neutral-900 flex items-center justify-center">
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

                        {/* Content Section - High Contrast - Transparent for Float Effect */}
                        <SpotlightEffect className="p-8 md:p-12 pt-24 md:pt-32 flex flex-col justify-start bg-white/20 group-hover/section:bg-white/5 transition-colors duration-500 backdrop-blur-xl rounded-none relative overflow-hidden">
                            {/* Removed Gradient Overlay */}

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >


                                <motion.h2
                                    className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter leading-[0.85] mb-12 mt-0 uppercase inline-block cursor-pointer relative z-10"
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
                            </motion.div>
                        </SpotlightEffect>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
