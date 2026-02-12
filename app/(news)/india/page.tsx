import type { Metadata } from 'next';
import { getIndiaNews } from '@/lib/news-data';
import { IndiaHero } from '@/components/IndiaHero';
import { ScrollingMarquee } from '@/components/ScrollingMarquee';
import { InnovationSpotlight } from '@/components/InnovationSpotlight';
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
    <div className="w-full overflow-x-hidden pb-24">
      <div className="relative w-full pt-16 rounded-b-[3rem] overflow-hidden shadow-2xl z-10 bg-neutral-900">
        <IndiaHero />
      </div>

      {/* Content Wrapper */}
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Engaging Feature Section */}
        <InnovationSpotlight />

        {/* Simplified News Grid */}
        <div className="px-6 md:px-12 lg:px-24">
          <RegionNewsGrid
            title="Latest Updates"
            description="Curated selection of the most impactful PropTech stories in India."
            articles={indiaNews.slice(0, 8)}
            cardSize="large"
          />
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-neutral-900 text-neutral-900 font-bold rounded-full hover:bg-neutral-900 hover:text-white transition-all">
              View All Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
