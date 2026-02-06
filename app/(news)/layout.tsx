'use client';
import { usePathname } from 'next/navigation';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIndiaPage = pathname === '/india';

  const isFullBleed = pathname === '/' || pathname === '/india' || pathname === '/startups';
  return <div className={isFullBleed ? '' : "pt-10 pb-4 md:pb-6"}>{children}</div>;
}
