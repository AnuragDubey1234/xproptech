export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { TermsContent } from '@/components/TermsContent';

export const metadata: Metadata = {
    title: 'Terms of Service | XPropTech',
    description: 'Rules and regulations for using the XPropTech platform.',
    openGraph: { title: 'Terms of Service | XPropTech.in', url: 'https://xproptech.in/terms' },
};

export default function TermsPage() {
    return (
        <main className="pt-20 min-h-screen bg-white">
            <TermsContent />
        </main>
    );
}
