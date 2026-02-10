'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StartupFilterBar } from './StartupFilterBar';
import { TrendingStartups } from './TrendingStartups';
import { FeaturedStartup } from './FeaturedStartup';
import { StartupCard } from './StartupCard';
import { StartupSkeleton } from './StartupSkeleton';
import { getFilteredStartups, getTrendingStartups, getFeaturedStartup, Startup, STARTUPS } from '@/lib/startups-data';
import { Rocket, Info, ArrowRight, ArrowUpRight } from 'lucide-react';

export function StartupDirectory() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<{
        country: string | null;
        state: string | null;
        sector: string | null;
        funding: string | null;
    }>({
        country: null,
        state: null,
        sector: null,
        funding: null,
    });
    const [sort, setSort] = useState<'newest' | 'oldest' | 'name'>('name');

    const filteredStartups = useMemo(() => {
        return getFilteredStartups(searchQuery, filters, sort);
    }, [searchQuery, filters, sort]);

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

            {/* Featured Spotlight Carousel */}
            {currentFeaturedStartup && (
                <FeaturedStartup
                    startup={currentFeaturedStartup}
                    searchQuery={featuredIndex === 0 ? searchQuery : undefined}
                    setSearchQuery={featuredIndex === 0 ? setSearchQuery : undefined}
                    onNext={featuredStartupsList.length > 1 ? handleNextFeatured : undefined}
                    onPrev={featuredStartupsList.length > 1 ? handlePrevFeatured : undefined}
                />
            )}

            {/* Trending Strip */}
            <TrendingStartups startups={trendingStartups} />

            {/* Filter Bar */}
            <StartupFilterBar
                filters={filters}
                setFilters={setFilters}
                sort={sort}
                setSort={setSort}
            />

            {/* Main Grid */}
            <section className="py-24 px-4 md:px-8 lg:px-12 container mx-auto relative">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <div className="flex flex-col">
                        <span className="text-fire-red font-mono font-bold tracking-[0.4em] uppercase text-[10px] mb-2">Inventory.Access</span>
                        <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter flex items-baseline gap-4 uppercase">
                            NETWORK
                            <span className="text-neutral-400 text-lg md:text-2xl font-black tracking-widest border border-neutral-100 px-4 py-1 rounded-full bg-neutral-50 shadow-sm">
                                {isLoading ? '---' : String(filteredStartups.length).padStart(3, '0')}
                            </span>
                        </h2>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 opacity-40 pointer-events-none">
                        <div className="w-16 h-[1px] bg-neutral-200" />
                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500 font-sans">STARTUP_ECOSYSTEM_GRID_v2</span>
                        <div className="w-16 h-[1px] bg-neutral-200" />
                    </div>
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
                            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10"
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
                                    setFilters({ country: null, state: null, sector: null, funding: null });
                                }}
                                className="mt-12 group flex items-center gap-3 text-fire-red text-xs font-black uppercase tracking-[0.3em] hover:text-neutral-900 transition-all"
                            >
                                Reset Calibration <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Footer Brackets Decor */}
            <div className="py-32 flex flex-col items-center opacity-40 pointer-events-none">
                <div className="w-[1px] h-32 bg-gradient-to-b from-fire-red to-transparent mb-4" />
                <span className="text-[8px] font-mono tracking-[0.5em] text-neutral-400">EOF_REACHED</span>
            </div>
        </div>
    );
}
