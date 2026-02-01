export default function NewsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="h-48 rounded-2xl bg-neutral-200 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-neutral-200">
                <div className="aspect-video bg-neutral-200 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-4 w-20 rounded bg-neutral-200 animate-pulse" />
                  <div className="h-5 w-full rounded bg-neutral-200 animate-pulse" />
                  <div className="h-4 w-3/4 rounded bg-neutral-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="h-64 rounded-xl bg-neutral-200 animate-pulse" />
          <div className="h-48 rounded-xl bg-neutral-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
