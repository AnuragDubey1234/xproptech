'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getTrending } from '@/lib/news-data';

export function TrendingSidebar() {
  const trending = getTrending(5);

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-md p-5">
        <h3 className="text-lg font-bold text-neutral-900 mb-4">Trending</h3>
        <ul className="space-y-3">
          {trending.map((article, i) => (
            <motion.li
              key={article.slug}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/news/${article.slug}`}
                className="block py-2 border-b border-neutral-100 last:border-0 hover:text-primary-900 transition-colors"
              >
                <span className="text-xs font-bold text-teal-600 mr-2">{i + 1}</span>
                <span className="text-sm font-medium text-neutral-900 line-clamp-2">{article.title}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-md p-5">
        <h3 className="text-lg font-bold text-neutral-900 mb-3">Newsletter</h3>
        <p className="text-sm text-neutral-500 mb-4">Get proptech news and analysis in your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-primary-900 text-white font-semibold text-sm hover:bg-primary-800 transition-colors"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </aside>
  );
}
