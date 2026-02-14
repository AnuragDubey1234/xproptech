'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Zap } from 'lucide-react';
import type { Startup } from '@/lib/startups-data';
import { useState } from 'react';

import Link from 'next/link';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80';

const slugify = (text: string | undefined | null) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

export function StartupCard({ startup, index }: { startup: Startup; index: number }) {
    const [imgSrc, setImgSrc] = useState(startup.logo);
    const [imgError, setImgError] = useState(false);

    const handleImageError = () => {
        if (!imgError) {
            setImgError(true);
            setImgSrc(FALLBACK_IMAGE);
        }
    };

    return (
        <Link href={`/startups/${startup.slug}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 border-2 border-slate-200/90 hover:border-amber-400/60 shadow-lg shadow-slate-200/50 hover:shadow-[0_24px_48px_-12px_rgba(15,118,110,0.25),0_0_0_2px_rgba(251,191,36,0.4),0_0_16px_rgba(220,38,38,0.12)] cursor-pointer"
            >
                {/* Image Area - Full Width */}
                <div className="relative w-full aspect-video overflow-hidden bg-neutral-200 shrink-0">
                    <Image
                        src={imgSrc}
                        alt={startup.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        onError={handleImageError}
                    />

                    {/* Sector Badge - Top Left match NewsCard Category */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--color-gcc-teal)] text-white shadow-sm z-10">
                        {startup.sector}
                    </span>

                    {/* Trending Icon if applicable */}
                    {startup.trending && (
                        <div className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-lg border border-amber-400/30 shadow-sm z-10">
                            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 md:p-6">
                    {/* Metadata: Dot + Location */}
                    <div className="flex gap-2 mb-3 items-center">
                        <div className="w-2 h-2 bg-[var(--color-gcc-teal)] rounded-full shrink-0" />
                        <span className="text-xs font-bold uppercase text-[var(--color-gcc-teal)] tracking-wider">
                            {startup.city}, {startup.country}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="gibson-bold text-gray-dark group-hover:text-[var(--color-gcc-teal)] transition-colors leading-snug text-base md:text-lg line-clamp-2">
                        {startup.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-neutral-500 text-sm md:text-base line-clamp-2 leading-relaxed font-medium">
                        {startup.description}
                    </p>

                    {/* Footer */}
                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100/50">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Funding</span>
                            <span className="text-xs font-bold text-neutral-700">{startup.fundingStage}</span>
                        </div>

                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-[var(--color-gcc-teal)] text-neutral-600 hover:text-white rounded-lg transition-all duration-300 border border-slate-200 hover:border-transparent group/btn">
                            <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
