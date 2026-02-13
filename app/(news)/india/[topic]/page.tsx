import type { Metadata } from 'next';
import { getIndiaNewsByTopic } from '@/lib/news-data';
import { notFound } from 'next/navigation';
import { IndiaNewsContent } from '@/components/india/IndiaNewsContent';
import Link from 'next/link';

type Props = {
    params: Promise<{ topic: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { topic } = await params;
    const topicTitle = topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
        title: `${topicTitle} News | India PropTech`,
        description: `Latest news and updates on ${topicTitle} in the Indian PropTech sector.`,
    };
}

// Generate static params for known topics to help with routing/performance
export async function generateStaticParams() {
    return [
        { topic: 'infrastructure' },
        { topic: 'green-tech' },
        { topic: 'fintech' },
        { topic: 'regulatory' },
    ];
}

export default async function TopicPage({ params }: Props) {
    const { topic } = await params;
    const validTopics = ['infrastructure', 'green-tech', 'fintech', 'regulatory'];

    if (!validTopics.includes(topic)) {
        notFound();
    }

    const news = getIndiaNewsByTopic(topic);

    return (
        <div className="w-full min-h-screen bg-neutral-50 pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/india"
                        className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 mb-6 transition-colors group"
                    >
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to India Overview
                    </Link>
                </div>

                <IndiaNewsContent articles={news} topic={topic} />
            </div>
        </div>
    );
}
