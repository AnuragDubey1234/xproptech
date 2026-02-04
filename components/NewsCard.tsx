'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import type { NewsArticle } from '@/lib/news-data';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80';

const variantStyles = {
  default: {
    border: 'border-red-100 hover:border-fire-red',
    shadow: 'shadow-xl hover:shadow-2xl',
    category: 'bg-fire-red',
    dot: 'bg-fire-red',
    date: 'text-fire-red',
    titleHover: 'group-hover:text-fire-red',
    titleSize: 'text-lg',
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

  return (
    <motion.article
      whileHover={
        isGccSmall
          ? { scale: 1.02, y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
          : { scale: 1.02, y: -4, transition: { duration: 0.2 } }
      }
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${s.border} ${s.shadow}`}
    >
      <Link href={`/news/${article.slug}`} className="block flex-grow flex flex-col h-full">
        <div className={`relative w-full overflow-hidden bg-neutral-200 rounded-t-2xl flex-shrink-0 ${size === 'large' ? 'aspect-[16/10]' : 'aspect-video'}`}>
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
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${s.category} text-white shadow-sm`}>
            {article.category}
          </span>
        </div>
        <div className={`flex flex-col flex-grow ${isGccSmall ? 'p-5 md:p-6' : 'p-4 md:p-5'}`}>
          <div className="flex gap-2 mb-3 items-center">
            <div className={`w-2 h-2 ${s.dot} rounded-full flex-shrink-0`} />
            <span className={`text-xs font-bold uppercase ${s.date} tracking-wider`}>{article.date}</span>
          </div>
          <h3 className={`gibson-bold text-gray-dark ${s.titleHover} transition-colors leading-snug ${titleClasses}`}>
            {article.title}
          </h3>
          {!compactHeadline && (
            <p className="mt-3 text-neutral-500 text-sm md:text-base line-clamp-2 leading-relaxed font-medium">
              {article.excerpt}
            </p>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
