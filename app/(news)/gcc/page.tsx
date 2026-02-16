import type { Metadata } from 'next';
import { getGCCNews } from '@/lib/news-data';
import { InsightsSidebar } from '@/components/InsightsSidebar';
import { GCCHeroBanner } from '@/components/gcc/GCCHeroBanner';
import { StockTicker } from '@/components/StockTicker';
import { GCCNewsContent } from '@/components/gcc/GCCNewsContent';

export const metadata: Metadata = {
  title: 'GCC PropTech News | XPropTech.in - UAE, Saudi, Middle East',
  description:
    'PropTech news from GCC: UAE, Saudi Arabia, Dubai, Qatar, Oman, Bahrain. Funding, deals, and market updates.',
  openGraph: {
    title: 'GCC PropTech News | XPropTech.in',
    description: 'PropTech news from UAE, Saudi, and the Middle East.',
    url: 'https://xproptech.in/gcc',
  },
};

export default function GCCPage() {
  const gccNews = getGCCNews(22);

  return (
    <div className="w-full pb-12">
      <div className="relative w-full pt-16 rounded-b-[3rem] overflow-hidden shadow-2xl z-10 bg-neutral-900 border-b border-neutral-800">
        <GCCHeroBanner />
        <StockTicker region="GCC" />
      </div>

      {/* Content Wrapper */}
      <div className="max-w-[1800px] mx-auto px-3 md:px-6 lg:px-12 mt-11 md:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
          {/* Main Content Areas */}
          <main className="lg:col-span-7 min-w-0">
            <GCCNewsContent articles={gccNews} />
          </main>

          {/* Sticky Sidebar Container */}
          <aside className="lg:col-span-3">
            <InsightsSidebar hideExtrasOnMobile={true} />
          </aside>
        </div>
      </div>
    </div>
  );
}
