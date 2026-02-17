import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { news, getArticleBySlug, getRelatedArticles } from '@/lib/news-data';
import { ArticlePageContent } from '@/components/ArticlePageContent';
import { generateArticleContent } from '@/lib/content-generator';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return { title: `${title} | XPropTech.in` };
  }

  return {
    title: `${article.title} | XPropTech.in`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://xproptech.in/news/${slug}`,
      images: [{ url: article.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt },
    alternates: { canonical: `https://xproptech.in/news/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  let article = getArticleBySlug(slug);

  // FALLBACK: Create Dummy Article if not found
  if (!article) {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    article = {
      slug: slug,
      title: title,
      excerpt: `Comprehensive coverage and details regarding ${title}.`,
      content: `
            <h2>Overview</h2>
            <p>This is a placeholder article for <strong>${title}</strong>. As XPropTech continues to expand its coverage of the Indian and Global PropTech ecosystem, detailed reports on specific events, infrastructure projects, and market movements will be populated here.</p>
            <p>The ${title} represents a significant development in the sector, impacting stakeholders across real estate, technology, and policy.</p>
            <h2>Key Highlights</h2>
            <ul>
                <li>Strategic importance in the current market cycle.</li>
                <li>Technological integration and digital transformation aspects.</li>
                <li>Future outlook and expected milestones.</li>
            </ul>
        `,
      date: new Date().toISOString().split('T')[0],
      author: 'XPropTech Editorial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Generic city image
      category: 'Analysis', // Use a valid category from NEWS_CATEGORIES
      readTime: '3 min read'
    };
  }

  const related = getRelatedArticles(slug, 3);

  // Safe to use article here as it's either found or dummy
  const safeArticle = article!;

  // Generate content if not present
  if (!safeArticle.content && !safeArticle.body) {
    safeArticle.content = generateArticleContent(safeArticle);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: safeArticle.title,
    description: safeArticle.excerpt,
    image: safeArticle.image,
    datePublished: safeArticle.date,
    author: { '@type': 'Person', name: safeArticle.author },
    publisher: { '@type': 'Organization', name: 'XPropTech.in', url: 'https://xproptech.in' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://xproptech.in/news/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-6 md:py-8">
        <article className="max-w-4xl mx-auto px-4 md:px-0">
          <ArticlePageContent article={safeArticle} related={related} />
        </article>
      </div>
    </>
  );
}
