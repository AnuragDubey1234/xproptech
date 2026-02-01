'use client';

type ShareButtonsProps = {
  title: string;
  slug: string;
};

const baseUrl = 'https://xproptech.in';

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `${baseUrl}/news/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${title} - XPropTech.in`);

  const links = [
    { label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, icon: '𝕏' },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: 'in' },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`, icon: 'WA' },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-neutral-500">Share:</span>
      <div className="flex gap-2">
        {links.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-neutral-100 hover:bg-primary-100 flex items-center justify-center text-neutral-700 hover:text-primary-900 transition-colors text-sm font-semibold"
            aria-label={`Share on ${label}`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
