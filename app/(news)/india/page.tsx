import type { Metadata } from 'next';
import { getIndiaNews } from '@/lib/news-data';
import { TrendingSidebar } from '@/components/TrendingSidebar';
import { RegionNewsGrid } from '@/components/RegionNewsGrid';

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

export default function IndiaPage() {
  const indiaNews = getIndiaNews();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8">
      <main className="lg:col-span-7 min-w-0 order-1">
        <RegionNewsGrid
          title="India PropTech News"
          description="Launches, policy, and market updates from India's PropTech ecosystem."
          articles={indiaNews}
        />
      </main>
      <aside className="lg:col-span-3 order-2">
        <TrendingSidebar />
      </aside>
    </div>
  );
}
