import type { MetadataRoute } from 'next';
import { news } from '@/lib/news-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://xproptech.in';
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/india`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${base}/gcc`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${base}/buzz`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/features`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/startups`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
  const newsPages: MetadataRoute.Sitemap = news.map((article) => ({
    url: `${base}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  return [...staticPages, ...newsPages];
}
