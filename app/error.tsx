'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">Something went wrong</h1>
      <p className="text-neutral-700 text-center max-w-md mb-8">
        We couldn&apos;t load this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-2xl border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
