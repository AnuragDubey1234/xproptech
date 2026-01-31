export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About - XPropTech Mission & Founder',
  description:
    "Building India's PropTech future, one real connection at a time. Rohan Sharma - ex-Housing.com, NoBroker. Why XPropTech exists.",
  openGraph: { title: 'About | XPropTech.in', url: 'https://xproptech.in/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
