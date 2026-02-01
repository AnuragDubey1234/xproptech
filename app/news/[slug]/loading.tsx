export default function ArticleLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[21/9] rounded-xl bg-neutral-200 animate-pulse" />
          <div className="h-8 w-24 rounded bg-neutral-200 animate-pulse" />
          <div className="h-12 w-full rounded bg-neutral-200 animate-pulse" />
          <div className="h-4 w-48 rounded bg-neutral-200 animate-pulse" />
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full rounded bg-neutral-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-neutral-200 animate-pulse" />
            <div className="h-4 w-4/5 max-w-[80%] rounded bg-neutral-200 animate-pulse" />
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
