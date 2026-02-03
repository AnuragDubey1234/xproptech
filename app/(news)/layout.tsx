'use client';
import { usePathname } from 'next/navigation';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIndiaPage = pathname === '/india';

  return <div className={isIndiaPage ? '' : "pt-10 pb-4 md:pb-6"}>{children}</div>;
}
