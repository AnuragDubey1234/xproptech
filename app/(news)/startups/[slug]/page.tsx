import { STARTUPS } from '@/lib/startups-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Globe, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { StartupCard } from '@/components/StartupCard';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const startup = STARTUPS.find((s) => s.slug === slug);

    if (!startup) {
        return {
            title: 'Startup Not Found',
        };
    }

    return {
        title: `${startup.name} - ${startup.category || 'PropTech Startup'} | XPropTech`,
        description: startup.description,
    };
}

export default async function StartupPage({ params }: PageProps) {
    const { slug } = await params;
    const startup = STARTUPS.find((s) => s.slug === slug);

    if (!startup) {
        return notFound();
    }

    // Related Articles Logic: Prioritize same sector, then fill with others. Excluding current.
    const relatedStartups = STARTUPS
        .filter((s) => s.id !== startup.id)
        .sort((a, b) => {
            if (a.sector === startup.sector && b.sector !== startup.sector) return -1;
            if (a.sector !== startup.sector && b.sector === startup.sector) return 1;
            return 0; // Stable sort otherwise
        })
        .slice(0, 3);

    return (
        <article className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 pt-4 pb-12 md:pt-8 md:pb-16">
                {/* Header Section */}
                <header className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight mb-6 leading-tight">
                        {startup.name}
                    </h1>
                    <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-2xl md:mx-0 mx-auto">
                        {startup.description}
                    </p>
                </header>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column: Article Body (8 cols) */}
                    <div className="md:col-span-8">
                        {/* Featured Image */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
                            <Image
                                src={startup.logo}
                                alt={startup.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div
                            className="prose prose-lg prose-neutral max-w-none text-neutral-800 font-serif leading-loose"
                            dangerouslySetInnerHTML={{ __html: startup.content || '<p>Content coming soon...</p>' }}
                        />
                    </div>

                    {/* Right Column: Sidebar (4 cols) */}
                    <div className="md:col-span-4 space-y-10">
                        {/* Highlights Box */}
                        {startup.highlights && startup.highlights.length > 0 && (
                            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
                                <h3 className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-fire-red" />
                                    Highlights
                                </h3>
                                <ul className="space-y-4">
                                    {startup.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3 text-neutral-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-fire-red mt-2.5 shrink-0" />
                                            <span className="leading-relaxed text-sm font-medium">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Company Facts */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest">Company Data</h3>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Location</div>
                                    <div className="text-neutral-900 font-semibold">{startup.city}, {startup.country}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Founded</div>
                                    <div className="text-neutral-900 font-semibold">{startup.foundedYear}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Stage</div>
                                    <div className="text-neutral-900 font-semibold">{startup.fundingStage}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Sector</div>
                                    <div className="text-neutral-900 font-semibold">{startup.sector}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <section className="bg-neutral-50 border-t border-neutral-100 pt-16 pb-0">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-neutral-900 mb-10 tracking-tight">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedStartups.map((s, i) => (
                            <div key={s.id} className="h-[420px]">
                                <StartupCard startup={s} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
