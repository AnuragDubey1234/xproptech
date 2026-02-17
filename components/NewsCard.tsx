'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import type { NewsArticle } from '@/lib/news-data';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80';

const variantStyles = {
  default: {
    border: 'border-2 border-slate-200/90 hover:border-orange-400/60',
    shadow: 'shadow-lg shadow-slate-200/50 hover:shadow-[0_24px_48px_-12px_rgba(234,88,12,0.25),0_0_0_2px_rgba(251,191,36,0.4),0_0_16px_rgba(234,88,12,0.12)]',
    category: 'bg-orange-600',
    dot: 'bg-orange-600',
    date: 'text-orange-600',
    titleHover: 'group-hover:text-orange-600',
    titleSize: 'text-base md:text-lg',
    lineClamp: 'line-clamp-2',
  },
  gcc: {
    border: 'border-2 border-slate-200/90 hover:border-amber-400/60',
    shadow:
      'shadow-lg shadow-slate-200/50 hover:shadow-[0_24px_48px_-12px_rgba(15,118,110,0.25),0_0_0_2px_rgba(251,191,36,0.4),0_0_16px_rgba(220,38,38,0.12)]',
    category: 'bg-[var(--color-gcc-teal)]',
    dot: 'bg-[var(--color-gcc-teal)]',
    date: 'text-[var(--color-gcc-teal)]',
    titleHover: 'group-hover:text-[var(--color-gcc-teal)]',
    titleSize: 'text-base md:text-lg',
    lineClamp: 'line-clamp-3',
  },
};

type NewsCardProps = {
  article: NewsArticle;
  size?: 'default' | 'large';
  compactHeadline?: boolean;
  variant?: 'default' | 'gcc';
  priority?: boolean;
};

export function NewsCard({ article, size = 'default', compactHeadline = false, variant = 'default', priority = false }: NewsCardProps) {
  const s = variantStyles[variant];
  const [imgSrc, setImgSrc] = useState(article.image);
  const [imgError, setImgError] = useState(false);
  const isGccSmall = variant === 'gcc' && size === 'default';

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  const titleClasses = compactHeadline
    ? 'text-sm md:text-base line-clamp-4'
    : size === 'large'
      ? `line-clamp-2 text-xl md:text-2xl`
      : `${s.titleSize} ${s.lineClamp}`;

  // Startup Card Style Shadows/Borders
  const containerClasses = "group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 border-2 border-slate-200/90 hover:border-amber-400/60 shadow-lg shadow-slate-200/50 hover:shadow-[0_24px_48px_-12px_rgba(15,118,110,0.25),0_0_0_2px_rgba(251,191,36,0.4),0_0_16px_rgba(220,38,38,0.12)]";

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className={containerClasses}
    >
      <Link href={`/news/${article.slug}`} className="block flex-grow flex flex-col h-full">
        {/* Image Section */}
        <div className={`relative w-full overflow-hidden bg-neutral-200 flex-shrink-0 ${size === 'large' ? 'aspect-[16/10]' : 'aspect-video'}`}>
          <Image
            src={imgSrc}
            alt={article.title}
            fill
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 350px'}
            loading={priority ? 'eager' : 'lazy'}
            onError={handleImageError}
          />
          {variant === 'default' && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
          {/* Badge - Matching Startup Card Position */}
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${s.category} text-white shadow-sm z-10`}>
            {article.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-5 md:p-6">
          {/* Metadata */}
          <div className="flex gap-2 mb-3 items-center">
            <div className={`w-2 h-2 ${s.dot} rounded-full flex-shrink-0`} />
            <span className={`text-xs font-bold uppercase ${s.date} tracking-wider`}>{article.date}</span>
          </div>

          {/* Title */}
          <h3 className={`gibson-bold text-gray-dark ${s.titleHover} transition-colors leading-snug ${titleClasses}`}>
            {article.title}
          </h3>

          {/* Excerpt */}
          {!compactHeadline && (
            <p className="mt-3 text-neutral-500 text-sm md:text-base line-clamp-2 leading-relaxed font-medium">
              {article.excerpt}
            </p>
          )}

          {/* Footer with Button - Matching Startup Card */}
          <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100/50">
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Author</span>
              <span className="text-xs font-bold text-neutral-700 truncate max-w-[100px]">{article.author}</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-neutral-600 rounded-lg transition-all duration-300 border border-slate-200 group-hover:border-transparent group-hover:text-white ${variant === 'gcc' ? 'group-hover:bg-[var(--color-gcc-teal)]' : 'group-hover:bg-orange-600'}`}>
              <span className="text-[10px] font-black uppercase tracking-widest">Read Story</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
