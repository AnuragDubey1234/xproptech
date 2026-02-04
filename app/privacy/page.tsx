export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { PrivacyContent } from '@/components/PrivacyContent';

export const metadata: Metadata = {
    title: 'Privacy Policy | XPropTech',
    description: 'How XPropTech collects, uses, and protects your data.',
    openGraph: { title: 'Privacy Policy | XPropTech.in', url: 'https://xproptech.in/privacy' },
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
