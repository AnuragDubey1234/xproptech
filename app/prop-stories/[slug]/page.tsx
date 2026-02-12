
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STORIES, getStoryBySlug, getRelatedStories } from '@/lib/prop-stories-data';
import { StoryPageContent } from '@/components/StoryPageContent';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return STORIES.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const story = getStoryBySlug(slug);

    if (!story) {
        return { title: 'Story Not Found | XPropTech.in' };
    }

    return {
        title: `${story.name} - ${story.role} | XPropTech Stories`,
        description: `Read specific insights from ${story.name}, ${story.role} at ${story.company} on the future of PropTech.`,
        openGraph: {
            title: `${story.name} on PropTech Future`,
            description: story.quote,
            images: [{ url: story.image, width: 1200, height: 630 }],
        }
    };
}

export default async function StoryPage({ params }: Props) {
    const { slug } = await params;
    const story = getStoryBySlug(slug);

    if (!story) {
        notFound();
    }

    const related = getRelatedStories(story.id);

    return <StoryPageContent story={story} related={related} />;
}
