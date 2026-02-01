import { TrendingSidebar } from '@/components/TrendingSidebar';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <main className="lg:col-span-7">{children}</main>
        <aside className="lg:col-span-3 order-first lg:order-last">
          <div className="lg:sticky lg:top-24">
            <TrendingSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
