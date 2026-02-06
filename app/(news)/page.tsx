import type { Metadata } from 'next';
import { HeroBanner } from '@/components/HeroBanner';
import { getGlobalNews, getGCCNews, getIndiaNews } from '@/lib/news-data';
import { HomeNewsContent } from '@/components/HomeNewsContent';
import { InsightsSidebar } from '@/components/InsightsSidebar';
import { TopTrendingSection } from '@/components/TopTrendingSection';
import { PropTechPulseSection } from '@/components/PropTechPulseSection';

export const metadata: Metadata = {
  title: "Latest Proptech News | XPropTech.in - India's Proptech Community",
  description:
    'Global PropTech news, funding, policy, and market updates. India and GCC news on dedicated pages.',
  openGraph: {
    title: "Latest Proptech News | XPropTech.in",
    description: 'Global PropTech news, funding, policy, and market updates.',
    url: 'https://xproptech.in',
  },
};

export default function HomePage() {
  const globalNews = getGlobalNews();
  const latestNews = globalNews.slice(0, 4);
  const gccDeals = getGCCNews(8); // Fetch more for the top section if needed, or reuse
  const indiaLaunches = getIndiaNews(8);
  const trending = getGlobalNews().slice(0, 8); // Simplification for trending

  const featured = globalNews.filter((a) => a.category === 'Analysis').slice(0, 2);
  const featuredFallback = featured.length >= 2 ? featured : globalNews.slice(0, 2);

  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-24 pb-8 mt-0">
      {/* Top Section: Trending - Full Width */}
      <TopTrendingSection
        trending={trending}
        india={indiaLaunches}
        gcc={gccDeals}
      />

      {/* Main Content Area: Article Feed + Insights Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-12 mt-16">
        <main className="lg:col-span-7 min-w-0 order-1">
          <HeroBanner />
          <div className="mt-12">
            <HomeNewsContent
              latestNews={latestNews}
              gccDeals={gccDeals.slice(0, 4)}
              indiaLaunches={indiaLaunches.slice(0, 4)}
              featured={featuredFallback}
            />
          </div>
          {/* Desktop view: Stocks at bottom of news feed */}
          <div className="hidden lg:block mt-8">
            <PropTechPulseSection />
          </div>
        </main>

        {/* Sidebar restored for Facts & Events */}
        <aside className="lg:col-span-3 order-2 sticky top-28 self-start h-fit">
          <InsightsSidebar />
        </aside>

      </div>

      {/* Mobile view: Stocks at very bottom above footer */}
      <div className="block lg:hidden mt-8">
        <PropTechPulseSection />
      </div>
    </div>
  );
}
