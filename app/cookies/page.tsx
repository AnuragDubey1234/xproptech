export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { CookieContent } from '@/components/CookieContent';

export const metadata: Metadata = {
    title: 'Cookie Policy | XPropTech',
    description: 'Information about how XPropTech uses cookies.',
    openGraph: { title: 'Cookie Policy | XPropTech.in', url: 'https://xproptech.in/cookies' },
};

export default function CookiePage() {
    return <CookieContent />;
}
