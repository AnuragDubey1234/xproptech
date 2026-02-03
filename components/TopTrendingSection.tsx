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
            <div className="flex flex-col items-center md:flex-row md:items-end justify-between mb-6 border-b border-neutral-200/60">
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
                            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: -90, scale: 0.8, transition: { duration: 0.3 } }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: i * 0.1
                            }}
                            style={{ perspective: 1000 }}
                            className="h-[420px] w-full"
                        >
                            <Link href={`/news/${article.slug}`} className="block h-full group relative rounded-[2rem] overflow-hidden bg-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-500">
                                {/* Image Layer with Parallax-like scale */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        priority={i < 2}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Cinematic Grading Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                                    {/* Spotlight overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute top-5 left-5 z-20">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                        {article.category}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {/* Revolving/Sliding Text Effect */}
                                    <div className="overflow-hidden">
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            className="text-white/70 text-xs font-bold mb-2 flex items-center gap-2"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-fire-red animate-pulse"></span>
                                            LIVE UPDATE
                                        </motion.p>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white leading-tight mb-3 line-clamp-2 drop-shadow-lg group-hover:text-fire-red transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <p className="text-neutral-300 text-sm line-clamp-3 mb-4 font-medium leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center text-xs text-neutral-400 font-semibold uppercase tracking-wider border-t border-white/20 pt-4">
                                                <span>{article.author}</span>
                                                <span className="mx-2 text-fire-red">•</span>
                                                <span>{article.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
