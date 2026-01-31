export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ConnectContent } from '@/components/ConnectContent';

export const metadata: Metadata = {
  title: 'Connect - PropTech Builders Hub',
  description:
    'Where PropTech builders connect. Developers ↔ Investors ↔ Founders. Post opportunities, find partners, funding, and co-founders.',
  openGraph: { title: 'Connect | XPropTech.in', url: 'https://xproptech.in/connect' },
};

export default function ConnectPage() {
  return <ConnectContent />;
}
