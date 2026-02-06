'use client';

import { usePathname } from 'next/navigation';

export function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isFullBleedPage = ['/', '/india', '/startups', '/about', '/contact', '/careers', '/partners', '/privacy', '/terms', '/cookies'].includes(pathname || '');

    return (
        <main
            className={
                isFullBleedPage
                    ? 'min-h-screen overflow-x-clip'
                    : 'min-h-screen pt-16 px-0 pb-12'
            }
        >
            {children}
        </main>
    );
}
