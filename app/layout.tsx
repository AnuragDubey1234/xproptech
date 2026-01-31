import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xproptech.in'),
  title: {
    default: "XPropTech.in - India's First PropTech Community",
    template: '%s | XPropTech.in',
  },
  description:
    "Where real estate meets technology, capital, and execution. PropTech evolution, insights, and connections.",
  keywords: [
    'proptech india',
    'real estate technology',
    'proptech startups',
    'real estate ai',
    'smart contracts india',
  ],
  authors: [{ name: 'XPropTech' }],
  creator: 'XPropTech.in',
  openGraph: {
    title: "XPropTech.in - India's First PropTech Community",
    description: "India's PropTech hub - Awareness, Insights, Connect",
    url: 'https://xproptech.in',
    siteName: 'XPropTech.in',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://xproptech.in' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}>
        <Header />
        <main className="min-h-screen pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
