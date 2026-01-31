import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-6xl font-black text-neutral-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-neutral-700 mb-2">
        Property Not Found
      </h2>
      <p className="text-neutral-600 text-center max-w-md mb-8">
        This listing might have been sold, or the URL doesn&apos;t exist. Let&apos;s get you back to the right
        address.
      </p>
      <Link
        href="/"
        className="px-8 py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
