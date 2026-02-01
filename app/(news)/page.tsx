import type { Metadata } from 'next';
import { HeroBanner } from '@/components/HeroBanner';
import { NewsCard } from '@/components/NewsCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { news } from '@/lib/news-data';
import { HomeNewsContent } from '@/components/HomeNewsContent';

export const metadata: Metadata = {
  title: "Latest Proptech News | XPropTech.in - India's Proptech Community",
  description:
    'Proptech news, funding, policy, and market updates from India and GCC. Daily buzz, analysis, and startup coverage.',
  openGraph: {
    title: "Latest Proptech News | XPropTech.in",
    description: 'Proptech news, funding, policy, and market updates from India and GCC.',
    url: 'https://xproptech.in',
  },
};

export default function HomePage() {
  const mainFeed = news.slice(0, 12);
  const gccDeals = news.filter((a) => a.category === 'GCC Deals').slice(0, 4);
  const indiaLaunches = news.filter((a) => a.category === 'India Launches').slice(0, 4);
  const featured = news.filter((a) => a.category === 'Analysis').slice(0, 2);

  return (
    <>
      <HeroBanner />
      <div className="mt-8">
        <CategoryFilter />
      </div>
      <HomeNewsContent
        mainFeed={mainFeed}
        gccDeals={gccDeals.length >= 4 ? gccDeals : news.slice(0, 4)}
        indiaLaunches={indiaLaunches.length >= 4 ? indiaLaunches : news.slice(4, 8)}
        featured={featured.length >= 2 ? featured : news.slice(0, 2)}
      />
    </>
  );
}
