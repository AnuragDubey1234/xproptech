'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArticleHeader } from '@/components/ArticleHeader';
import { NewsCard } from '@/components/NewsCard';
import { useSectionTitle } from '@/contexts/SectionTitleContext';
import type { NewsArticle } from '@/lib/news-data';

type ArticlePageContentProps = {
  article: NewsArticle;
  related: NewsArticle[];
};

export function ArticlePageContent({ article, related }: ArticlePageContentProps) {
  const body = article.body ?? article.excerpt;
  const { setSectionTitle } = useSectionTitle();

  useEffect(() => {
    setSectionTitle(article.title);
    return () => setSectionTitle(null);
  }, [article.title, setSectionTitle]);

  return (
    <>
      <ArticleHeader article={article} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-neutral max-w-none text-neutral-900 text-base leading-[1.7]"
      >
        <p className="text-lg text-neutral-600 mb-6">{body}</p>
        <p className="text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mt-4 text-neutral-700">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Proptech continues to transform real estate across India and the GCC, with funding, policy, and innovation driving growth.
        </p>
      </motion.div>

      <section className="mt-12 pt-8 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((r) => (
            <NewsCard key={r.slug} article={r} />
          ))}
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Comments</h2>
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 text-center text-neutral-500">
          <p>Comments section (UI only). Sign in to leave a comment.</p>
        </div>
      </section>
    </>
  );
}
