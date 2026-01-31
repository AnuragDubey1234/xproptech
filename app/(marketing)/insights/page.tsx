export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { InsightsContent } from '@/components/InsightsContent';

export const metadata: Metadata = {
  title: 'Insights - Real PropTech Case Studies & Discussions',
  description:
    'No sales. No hype. Real case studies, honest industry discussions. How AI failed PropTech startups and what actually works.',
  openGraph: { title: 'Insights | XPropTech.in', url: 'https://xproptech.in/insights' },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
