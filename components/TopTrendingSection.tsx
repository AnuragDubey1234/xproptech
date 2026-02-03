'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NewsArticle } from '@/lib/news-data';
import { SpotlightEffect } from '@/components/ui/Spotlight'; // Assuming you have this from previous steps

interface TopTrendingSectionProps {
    trending: NewsArticle[];
    india: NewsArticle[];
    gcc: NewsArticle[];
}

type Tab = 'trending' | 'india' | 'gcc';

export function TopTrendingSection({ trending, india, gcc }: TopTrendingSectionProps) {
    const [activeTab, setActiveTab] = useState<Tab>('trending');

    const tabs: { id: Tab; label: string }[] = [
        { id: 'trending', label: 'Trending' },
        { id: 'india', label: 'India' },
        { id: 'gcc', label: 'GCC' },
    ];

    const getActiveData = () => {
        switch (activeTab) {
            case 'india': return india.slice(0, 4);
            case 'gcc': return gcc.slice(0, 4);
            case 'trending':
            default: return trending.slice(0, 4);
        }
    };

    const data = getActiveData();

    return (
        <section className="mb-16 mt-0 perspective-1000">
            <div className="flex flex-col items-center md:flex-row md:items-end justify-between mb-6">
                <div className="text-center md:text-left">
                    <h2 className="text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
                        Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-600">Stories</span>
                    </h2>
                    <p className="text-neutral-500 font-medium text-lg">
                        Curated coverage of the most impactful developments.
                    </p>
                </div>

                {/* Classy Tabs */}
                {/* Arrow Navigation */}
                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-neutral-200/50 shadow-sm mt-4 md:mt-0 group hover:border-pink-300 hover:shadow-[0_0_50px_rgba(244,114,182,0.6)] transition-all duration-300">
                    <button
                        onClick={() => {
                            const currentIndex = tabs.findIndex(t => t.id === activeTab);
                            const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                            setActiveTab(tabs[prevIndex].id);
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-100 bg-white text-neutral-400 shadow-sm hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] hover:border-pink-200 hover:text-pink-600 hover:bg-pink-100 hover:scale-110 active:scale-95 transition-all duration-300"
                        aria-label="Previous category"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <div className="min-w-[140px] flex justify-center relative h-8 overflow-hidden">
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                                key={activeTab}
                                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -20, opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute inset-0 text-xl font-extrabold text-neutral-900 text-center uppercase tracking-widest flex items-center justify-center cursor-default"
                                style={{
                                    textShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fire-red to-orange-600 md:from-neutral-900 md:to-neutral-700 hover:from-fire-red hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                                    {tabs.find(t => t.id === activeTab)?.label}
                                </span>
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => {
                            const currentIndex = tabs.findIndex(t => t.id === activeTab);
                            const nextIndex = (currentIndex + 1) % tabs.length;
                            setActiveTab(tabs[nextIndex].id);
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-100 bg-white text-neutral-400 shadow-sm hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] hover:border-pink-200 hover:text-pink-600 hover:bg-pink-100 hover:scale-110 active:scale-95 transition-all duration-300"
                        aria-label="Next category"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout" initial={false}>
                    {data.map((article, i) => (
                        <motion.div
                            key={`${activeTab}-${article.slug}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full md:h-[420px] h-[120px]"
                        >
                            <Link href={`/news/${article.slug}`} className="block h-full group relative md:rounded-[2rem] rounded-xl overflow-hidden bg-neutral-900 shadow-sm md:shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 md:border-none">

                                {/* Desktop Image Layer */}
                                <div className="hidden md:block absolute inset-0 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                                </div>

                                {/* Mobile Image Layer (Thumbnail Left) */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[120px] overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="150px"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Desktop Content */}
                                <div className="hidden md:flex absolute bottom-0 left-0 right-0 p-6 flex-col z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-md self-start border border-white/20 text-white px-3 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                        {article.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight mb-3 line-clamp-2 drop-shadow-lg group-hover:text-fire-red transition-colors">
                                        {article.title}
                                    </h3>
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <p className="text-neutral-300 text-sm line-clamp-3 mb-4 font-medium leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Content (Right Side) */}
                                <div className="md:hidden absolute right-0 top-0 bottom-0 left-[120px] p-4 bg-white dark:bg-neutral-900 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold text-fire-red uppercase tracking-wider">{article.category}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-50 leading-snug line-clamp-2 mb-1">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                                        {article.date} • {article.author}
                                    </p>
                                </div>

                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
