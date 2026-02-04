export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About - XPropTech | Defining Real Estate Intelligence',
  description:
    "XPropTech is the convergence of concrete infrastructure and digital innovation. Meet the founder, Anurag Dubey, and our mission to revolutionize Indian Real Estate.",
  openGraph: { title: 'About | XPropTech.in', url: 'https://xproptech.in/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
