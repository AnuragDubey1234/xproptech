import type { Metadata } from 'next';
import { news } from '@/lib/news-data';
import { InsightsNewsContent } from '@/components/InsightsNewsContent';

export const metadata: Metadata = {
  title: 'Data & Insights | XPropTech.in - Proptech Dashboards',
  description: 'Proptech data, market insights, and dashboards.',
  openGraph: { title: 'Insights | XPropTech.in', url: 'https://xproptech.in/insights' },
};

export default function InsightsPage() {
  return <InsightsNewsContent articles={news.slice(0, 12)} />;
}
