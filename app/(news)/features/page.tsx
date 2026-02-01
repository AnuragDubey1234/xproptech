import type { Metadata } from 'next';
import { news } from '@/lib/news-data';
import { FeaturesContent } from '@/components/FeaturesContent';

export const metadata: Metadata = {
  title: 'Analysis & Features | XPropTech.in - Proptech News',
  description: 'In-depth proptech analysis, commentary, and feature stories.',
  openGraph: { title: 'Analysis | XPropTech.in', url: 'https://xproptech.in/features' },
};

export default function FeaturesPage() {
  const analysis = news.filter((a) => a.category === 'Analysis').length ? news.filter((a) => a.category === 'Analysis') : news.slice(0, 8);
  return <FeaturesContent articles={analysis} />;
}
