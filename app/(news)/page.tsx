import type { Metadata } from 'next';
import { HeroBanner } from '@/components/HeroBanner';
import { getGlobalNews, getGCCNews, getIndiaNews } from '@/lib/news-data';
import { HomeNewsContent } from '@/components/HomeNewsContent';
import { TrendingSidebar } from '@/components/TrendingSidebar';

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
  const gccDeals = getGCCNews(4);
  const indiaLaunches = getIndiaNews(4);
  const featured = globalNews.filter((a) => a.category === 'Analysis').slice(0, 2);
  const featuredFallback = featured.length >= 2 ? featured : globalNews.slice(0, 2);

  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-10 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8">
        <main className="lg:col-span-7 min-w-0 order-1">
          <HeroBanner />
          <HomeNewsContent
            latestNews={latestNews}
            gccDeals={gccDeals}
            indiaLaunches={indiaLaunches}
            featured={featuredFallback}
          />
        </main>
        <aside className="lg:col-span-3 order-2">
          <TrendingSidebar />
        </aside>
      </div>
    </div>
  );
}
