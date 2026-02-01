'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { NewsArticle } from '@/lib/news-data';

type NewsCardProps = {
  article: NewsArticle;
  size?: 'default' | 'large';
};

export function NewsCard({ article, size = 'default' }: NewsCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl border border-neutral-200 shadow-md hover:shadow-lg hover:bg-[#F8FAFC] transition-all duration-200 overflow-hidden"
    >
      <Link href={`/news/${article.slug}`} className="block">
        <div className={`relative w-full overflow-hidden ${size === 'large' ? 'aspect-[16/10]' : 'aspect-video'}`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 350px'}
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-primary-900 text-white shadow-sm">
            {article.category}
          </span>
        </div>
        <div className="p-4 md:p-5">
          <h3 className={`font-bold text-neutral-900 group-hover:text-primary-900 transition-colors line-clamp-2 ${size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {article.title}
          </h3>
          <p className="mt-2 text-neutral-500 text-sm line-clamp-2 leading-relaxed">{article.excerpt}</p>
          <p className="mt-3 text-xs text-neutral-500">{article.date}</p>
        </div>
      </Link>
    </motion.article>
  );
}
