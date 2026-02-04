export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ContactContent } from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact - Get in Touch | XPropTech',
  description:
    'Contact XPropTech. HQ: Vasai, Mumbai, Maharashtra. General, Partnership, Startup Submission, Media inquiries.',
  openGraph: { title: 'Contact | XPropTech.in', url: 'https://xproptech.in/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
