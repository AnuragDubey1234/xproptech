import type { Metadata } from 'next';
import { news } from '@/lib/news-data';
import { BuzzContent } from '@/components/BuzzContent';

export const metadata: Metadata = {
  title: 'Daily Buzz | XPropTech.in - Proptech News',
  description: 'Daily proptech news, funding, and market updates from India and GCC.',
  openGraph: { title: 'Daily Buzz | XPropTech.in', url: 'https://xproptech.in/buzz' },
};

export default function BuzzPage() {
  const buzzFeed = news.slice(0, 12);
  return <BuzzContent articles={buzzFeed} />;
}
