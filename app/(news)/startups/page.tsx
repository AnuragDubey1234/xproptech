import type { Metadata } from 'next';
import { news } from '@/lib/news-data';
import { StartupsContent } from '@/components/StartupsContent';

export const metadata: Metadata = {
  title: 'Proptech Startups | XPropTech.in - Companies & Launches',
  description: 'Proptech startups, company launches, and product updates from India and GCC.',
  openGraph: { title: 'Startups | XPropTech.in', url: 'https://xproptech.in/startups' },
};

export default function StartupsPage() {
  const startups = news.filter((a) => a.category === 'Startups').length ? news.filter((a) => a.category === 'Startups') : news.slice(0, 8);
  return <StartupsContent articles={startups} />;
}
