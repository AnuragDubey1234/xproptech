export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { AwarenessContent } from '@/components/AwarenessContent';

export const metadata: Metadata = {
  title: 'Awareness - PropTech Evolution & Market Trends',
  description:
    'Learn PropTech fundamentals, evolution in India, and real estate market trends 2026. AI, smart contracts, digital twins, virtual tours.',
  openGraph: { title: 'Awareness | XPropTech.in', url: 'https://xproptech.in/awareness' },
};

export default function AwarenessPage() {
  return <AwarenessContent />;
}
