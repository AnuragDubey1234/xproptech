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
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <p className="text-lg text-neutral-600 mb-6">{body}</p>
        )}
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
