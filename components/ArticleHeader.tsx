'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { NewsArticle } from '@/lib/news-data';
import { ShareButtons } from './ShareButtons';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80';

type ArticleHeaderProps = {
  article: NewsArticle;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const [imgSrc, setImgSrc] = useState(article.image);

  return (
    <header className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[21/9] rounded-xl overflow-hidden bg-neutral-200"
      >
        <Image
          src={imgSrc}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <span className="inline-block px-3 py-1 rounded-md text-sm font-semibold bg-primary-900 text-white mb-4">
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-neutral-900 leading-tight mb-4">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          {article.readTime && (
            <>
              <span>•</span>
              <span>{article.readTime}</span>
            </>
          )}
          {article.views != null && (
            <>
              <span>•</span>
              <span>{article.views} views</span>
            </>
          )}
        </div>
        <ShareButtons title={article.title} slug={article.slug} />
      </motion.div>
    </header>
  );
}
