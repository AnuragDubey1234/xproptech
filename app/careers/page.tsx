export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { CareersContent } from '@/components/CareersContent';

export const metadata: Metadata = {
    title: 'Careers - Join XPropTech | Build the Future',
    description:
        'Join the revolution. XPropTech is hiring visionaries to reshape the Indian Real Estate market. Engineering, Marketing, Business positions open.',
    openGraph: { title: 'Careers | XPropTech.in', url: 'https://xproptech.in/careers' },
};

export default function CareersPage() {
    return <CareersContent />;
}
