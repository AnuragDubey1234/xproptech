import { TrendingSidebar } from '@/components/TrendingSidebar';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8">
        <main className="lg:col-span-7 min-w-0">{children}</main>
        <aside className="lg:col-span-3 order-first lg:order-last">
          <div className="lg:sticky lg:top-24">
            <TrendingSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
