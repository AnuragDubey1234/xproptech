export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { PartnersContent } from '@/components/PartnersContent';

export const metadata: Metadata = {
    title: 'Partners - XPropTech Ecosystem',
    description:
        'Partner with India\'s leading PropTech ecosystem. Developers, Investors, and Government bodies uniting to digitize real estate.',
    openGraph: { title: 'Partners | XPropTech.in', url: 'https://xproptech.in/partners' },
};

export default function PartnersPage() {
    return <PartnersContent />;
}
