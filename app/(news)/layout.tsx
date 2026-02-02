'use client';
import { usePathname } from 'next/navigation';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIndiaPage = pathname === '/india';

  return <div className={isIndiaPage ? '' : "py-6 md:py-8"}>{children}</div>;
}
