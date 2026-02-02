'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
    <motion.article
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100 hover:border-fire-red shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/news/${article.slug}`} className="block">
        <div className={`relative w-full overflow-hidden bg-neutral-200 ${size === 'large' ? 'aspect-[16/10]' : 'aspect-video'}`}>
          <Image
            src={imgSrc}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 350px'}
            loading="lazy"
            onError={handleImageError}
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-fire-red text-white shadow-sm">
            {article.category}
          </span>
        </div>
        <div className="p-4 md:p-5">
          <div className="flex gap-2 mb-3 items-center">
            <div className="w-2 h-2 bg-fire-red rounded-full flex-shrink-0" />
            <span className="text-xs font-bold uppercase text-fire-red tracking-wider">{article.date}</span>
          </div>
          <h3 className={`gibson-bold text-gray-dark group-hover:text-fire-red transition-colors ${
            compactHeadline
              ? 'text-sm md:text-base line-clamp-4'
              : `line-clamp-2 ${size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'}`
          }`}>
            {article.title}
          </h3>
          <p className="mt-2 text-neutral-600 text-sm line-clamp-2 leading-relaxed">{article.excerpt}</p>
        </div>
      </Link>
    </motion.article>
  );
}
