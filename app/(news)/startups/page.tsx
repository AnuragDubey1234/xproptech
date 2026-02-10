import type { Metadata } from 'next';
import { StartupDirectory } from '@/components/StartupDirectory';

export const metadata: Metadata = {
  title: 'Proptech Startups | XPropTech.in - Companies & Launches',
  description: 'Proptech startups, company launches, and product updates from India and GCC.',
  openGraph: { title: 'Startups | XPropTech.in', url: 'https://xproptech.in/startups' },
};

export default function StartupsPage() {
  return <StartupDirectory />;
}
