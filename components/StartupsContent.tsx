'use client';

import { motion, type Variants } from 'framer-motion';
import { StartupEcosystem } from '@/components/StartupEcosystem';
import type { NewsArticle } from '@/lib/news-data';

export function StartupsContent({ articles }: { articles: NewsArticle[] }) {
  return (
    <section>
      <div className="mb-0">
        <StartupEcosystem />
      </div>

      {/* 
        The previous card grid is replaced by the interactive Ecosystem Hub.
        We keep the section structure for consistency.
      */}
    </section>
  );
}
