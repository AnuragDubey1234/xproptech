import type { Metadata } from 'next';
import { getIndiaNews, getIndiaNewsByTopic } from '@/lib/news-data';
import { IndiaHero } from '@/components/IndiaHero';
import { StockTicker } from '@/components/StockTicker';
import { InnovationSpotlight } from '@/components/InnovationSpotlight';
import { IndiaNewsContent } from '@/components/india/IndiaNewsContent';
import { InsightsSidebar } from '@/components/InsightsSidebar';

export const metadata: Metadata = {
  title: "India PropTech News | XPropTech.in - India's PropTech Community",
  description:
    'PropTech news, launches, and updates from India. RERA, Tier 2 cities, startups, and real estate technology.',
  openGraph: {
    title: 'India PropTech News | XPropTech.in',
    description: 'PropTech news and launches from India.',
    url: 'https://xproptech.in/india',
  },
};

export default function IndiaPage({ searchParams }: { searchParams: { topic?: string } }) {
  const topic = searchParams.topic;
  const indiaNews = topic ? getIndiaNewsByTopic(topic) : getIndiaNews();

  return (
    <div className="w-full pb-12">
      <div className="relative w-full pt-16 rounded-b-[3rem] overflow-hidden shadow-2xl z-10 bg-neutral-900">
        <IndiaHero />
        <StockTicker region="IND" />
      </div>

      {/* Content Wrapper */}
      <div className="w-full max-w-[1800px] mx-auto px-3 md:px-6 lg:px-12 mt-6 md:mt-8">
        {/* Engaging Feature Section */}
        <InnovationSpotlight />

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16 mt-6">
          {/* Main Content Areas */}
          <main className="lg:col-span-7 min-w-0">
            <IndiaNewsContent articles={indiaNews.slice(0, 22)} topic={topic} />
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
