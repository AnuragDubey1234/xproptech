'use client';

import { usePathname } from 'next/navigation';

export function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isIndiaPage = pathname === '/india';

    return (
        <main
            className={
                isIndiaPage
                    ? 'min-h-screen overflow-x-hidden'
                    : 'min-h-screen pt-16 px-2 md:px-3 lg:px-4 pb-12'
            }
        >
            {isIndiaPage ? (
                children
            ) : (
                <div className="max-w-[1440px] mx-auto">{children}</div>
            )}
        </main>
    );
}
