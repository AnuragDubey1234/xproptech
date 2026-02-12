'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { StartupFilterBar } from './StartupFilterBar'; // Removed
import { TrendingStartups } from './TrendingStartups';
import { FeaturedStartup } from './FeaturedStartup';
import { StartupCard } from './StartupCard';
import { StartupSkeleton } from './StartupSkeleton';
import { getFilteredStartups, getTrendingStartups, getFeaturedStartup, Startup, STARTUPS } from '@/lib/startups-data';
import { Rocket, Info, ArrowRight, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { EcosystemShower } from './EcosystemShower';

const PropStories = dynamic(() => import('./PropStories').then((mod) => mod.PropStories), {
    loading: () => <div className="h-[500px] bg-neutral-50" />, // Simple placeholder preventing layout shift
    ssr: true // Keep SSR for SEO as it has content
});

export function StartupDirectory() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const [filters, setFilters] = useState(...) // Removed
    // const [sort, setSort] = useState(...) // Removed

    const filteredStartups = useMemo(() => {
        // Pass null for filters and default sort since UI is removed
        return getFilteredStartups(searchQuery, { country: null, state: null, sector: null, funding: null }, 'name');
    }, [searchQuery]);

    const [featuredIndex, setFeaturedIndex] = useState(0);

    const trendingStartups = useMemo(() => getTrendingStartups(), []);

    // Featured Startups Carousel List
    const featuredStartupsList = useMemo(() => {
        const list = [];
        const huspy = getFeaturedStartup(); // Default featured (Huspy)
        if (huspy) list.push(huspy);

        const propStack = STARTUPS.find(s => s.id === '13'); // PropStack
        if (propStack) list.push(propStack);

        const noBroker = STARTUPS.find(s => s.id === '2'); // NoBroker (Bangalore)
        if (noBroker) list.push(noBroker);

        const hapondo = STARTUPS.find(s => s.id === '14'); // Hapondo (Qatar)
        if (hapondo) list.push(hapondo);

        const squareYards = STARTUPS.find(s => s.id === '1'); // Square Yards (Delhi)
        if (squareYards) list.push(squareYards);

        return list;
    }, []);

    const currentFeaturedStartup = featuredStartupsList[featuredIndex] || featuredStartupsList[0];

    const handleNextFeatured = () => {
        setFeaturedIndex((prev) => (prev + 1) % featuredStartupsList.length);
    };

    const handlePrevFeatured = () => {
        setFeaturedIndex((prev) => (prev - 1 + featuredStartupsList.length) % featuredStartupsList.length);
    };



    return (
        <div className="bg-white min-h-screen relative">
            {/* Clean Background - Removing Fog */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.2] pointer-events-none -z-10" />

            {/* Unified Hero & Ticker Section */}
            <div className="relative w-full rounded-b-[3rem] overflow-hidden shadow-2xl z-10 bg-white border-b border-neutral-100 pb-0">
                {currentFeaturedStartup && (
                    <FeaturedStartup
                        startup={currentFeaturedStartup}
                        searchQuery={featuredIndex === 0 ? searchQuery : undefined}
                        setSearchQuery={featuredIndex === 0 ? setSearchQuery : undefined}
                        onNext={featuredStartupsList.length > 1 ? handleNextFeatured : undefined}
                        onPrev={featuredStartupsList.length > 1 ? handlePrevFeatured : undefined}
                    />
                )}
                <TrendingStartups startups={trendingStartups} />
            </div>

            {/* Filter Bar */}


            {/* Main Grid Area with Shower Animation */}
            <div className="relative w-full">
                <EcosystemShower />

                <section id="startup-directory-grid" className="pt-24 pb-8 w-full max-w-[95%] mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-16 gap-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight"
                        >
                            All About Startups
                        </motion.h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-fire-red to-orange-500 rounded-full" />
                    </div>

                    <AnimatePresence mode="popLayout">
                        {isLoading ? (
                            <motion.div
                                key="skeleton"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <StartupSkeleton />
                            </motion.div>
                        ) : filteredStartups.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8"
                            >
                                {filteredStartups.map((startup, index) => (
                                    <StartupCard key={startup.id} startup={startup} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="py-40 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-[2rem] bg-fire-red/5 border border-fire-red/10 flex items-center justify-center mb-10 animate-pulse shadow-sm">
                                    <Info className="w-10 h-10 text-fire-red" />
                                </div>
                                <h3 className="text-4xl font-black text-neutral-900 mb-4 tracking-tighter uppercase">Null Result Protocol</h3>
                                <p className="text-neutral-500 max-w-sm font-light text-lg">
                                    The current parameters did not yield any active ecosystem nodes. Try recalibrating your search vectors.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        // setFilters(...) // Removed
                                    }}
                                    className="mt-12 group flex items-center gap-3 text-fire-red text-xs font-black uppercase tracking-[0.3em] hover:text-neutral-900 transition-all"
                                >
                                    Reset Calibration <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

            {/* Prop Stories Section */}
            <PropStories />
        </div>
    );
}
