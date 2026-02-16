import type { Metadata } from 'next';
import { news } from '@/lib/news-data';
import { HeroBanner } from '@/components/HeroBanner';
import { NewsCard } from '@/components/NewsCard';
import { InsightsSidebar } from '@/components/InsightsSidebar';

export const metadata: Metadata = {
    title: 'All PropTech News | XPropTech.in',
    description: 'Complete archive of PropTech news, analysis, and updates from India, GCC, and the globe.',
};

export default function NewsPage() {
    // Use all news for this page
    const allNews = news;

    return (
        <div className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-32 pb-12">
            {/* Simple Header */}
            <div className="mb-12 md:mb-16 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
                    All Stories
                </h1>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                    The latest insights, deals, and innovations shaping the future of real estate in India and the GCC.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-12">
                {/* Main Content Area */}
                <main className="lg:col-span-7 min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {allNews.map((article) => (
                            <NewsCard key={article.slug} article={article} />
                        ))}
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="lg:col-span-3 h-fit sticky top-28 hidden lg:block">
                    <InsightsSidebar />
                </aside>
            </div>
        </div>
    );
}
