'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import type { NewsArticle } from '@/lib/news-data';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80';

type NewsCardProps = {
  article: NewsArticle;
  size?: 'default' | 'large';
  compactHeadline?: boolean;
};

export function NewsCard({ article, size = 'default', compactHeadline = false }: NewsCardProps) {
  const [imgSrc, setImgSrc] = useState(article.image);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <article
      className="group bg-white rounded-2xl border border-neutral-100 hover:border-fire-red/40 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
    >
      <Link href={`/news/${article.slug}`} className="block flex-grow flex flex-col h-full">
        <div className={`relative w-full overflow-hidden bg-neutral-100 ${size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'} flex-shrink-0`}>
          <Image
            src={imgSrc}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 350px'}
            loading="lazy"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-white/95 text-fire-red shadow-sm backdrop-blur-md">
            {article.category}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex gap-2 mb-3 items-center">
            <span className="w-1.5 h-1.5 bg-fire-red rounded-full flex-shrink-0 animate-pulse" />
            <span className="text-xs font-bold uppercase text-neutral-400 tracking-widest">{article.date}</span>
          </div>
          <h3 className={`font-bold text-neutral-900 group-hover:text-fire-red transition-colors duration-200 ${compactHeadline
            ? 'text-sm md:text-base line-clamp-3 leading-snug'
            : `line-clamp-2 leading-tight ${size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`
            }`}>
            {article.title}
          </h3>
          {!compactHeadline && (
            <p className="mt-3 text-neutral-500 text-sm md:text-base line-clamp-2 leading-relaxed font-medium">
              {article.excerpt}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
