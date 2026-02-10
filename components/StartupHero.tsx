'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface StartupHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function StartupHero({ searchQuery, setSearchQuery }: StartupHeroProps) {
    return (
        <div className="relative pt-32 pb-16 px-6 md:px-12 flex flex-col items-center text-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="space-y-4 mb-4"
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-fire-red/30"></span>
                    <span className="text-fire-red font-mono font-bold tracking-[0.4em] uppercase text-[10px] block">
                        Ecosystem v2.0
                    </span>
                    <span className="h-[1px] w-8 bg-fire-red/30"></span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] cursor-default uppercase">
                    <span className="text-neutral-900 drop-shadow-sm">EXPLORE</span> <br />
                    <span className="text-fire-red">PROPTECH</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-neutral-500 text-lg md:text-xl max-w-xl mb-12 font-medium leading-tight"
            >
                Discover the next generation of real estate innovation across India & GCC.
            </motion.p>

            {/* Sharp Modern Search Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative w-full max-w-2xl group"
            >
                <div className="relative flex items-center bg-white border-2 border-neutral-100 rounded-2xl px-8 py-5 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] focus-within:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] focus-within:border-fire-red/20 group-hover:border-neutral-200">
                    <Search className="w-6 h-6 text-neutral-400 group-focus-within:text-fire-red transition-colors" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by company name, sector, or region..."
                        className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-400 ml-5 text-xl font-medium"
                    />
                    <div className="hidden md:flex items-center px-4 py-1.5 bg-neutral-50 rounded-lg border border-neutral-100 text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-4">
                        Search
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
