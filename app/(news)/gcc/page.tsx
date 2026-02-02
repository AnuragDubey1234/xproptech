import type { Metadata } from 'next';
import { getGCCNews } from '@/lib/news-data';
import { TrendingSidebar } from '@/components/TrendingSidebar';
import { RegionNewsGrid } from '@/components/RegionNewsGrid';

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
  const gccNews = getGCCNews();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8">
      <main className="lg:col-span-7 min-w-0 order-1">
        <RegionNewsGrid
          title="GCC PropTech News"
          description="Deals, funding, and market updates from UAE, Saudi Arabia, and the Middle East."
          articles={gccNews}
        />
      </main>
      <aside className="lg:col-span-3 order-2">
        <TrendingSidebar />
      </aside>
    </div>
  );
}
