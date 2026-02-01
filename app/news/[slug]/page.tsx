import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { news, getArticleBySlug, getRelatedArticles } from '@/lib/news-data';
import { ArticlePageContent } from '@/components/ArticlePageContent';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found | XPropTech.in' };
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
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: { '@type': 'Person', name: article.author },
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
        <article className="max-w-4xl mx-auto">
          <ArticlePageContent article={article} related={related} />
        </article>
      </div>
    </>
  );
}
