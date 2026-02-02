import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter, Noto_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionTitleProvider } from '@/contexts/SectionTitleContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-nav',
  display: 'swap',
});

import { MainLayoutWrapper } from '@/components/MainLayoutWrapper';

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

import { SmoothScroll } from '@/components/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${notoSans.variable} ${plusJakartaSans.variable} font-sans antialiased bg-white text-neutral-900`}>
        <SectionTitleProvider>
          <SmoothScroll />
          <Suspense fallback={<div className="h-16 bg-white border-b border-red-200" />}>
            <Header />
          </Suspense>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <Footer />
        </SectionTitleProvider>
      </body>
    </html>
  );
}
