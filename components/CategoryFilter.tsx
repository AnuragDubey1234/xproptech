'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const categories = [
  { label: 'GCC', value: 'gcc' },
  { label: 'India', value: 'india' },
  { label: 'Funding', value: 'funding' },
  { label: 'Policy', value: 'policy' },
];

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const activeCat = searchParams.get('cat');

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ label, value }) => {
        const isActive = activeCat === value;
        return (
          <Link key={value} href={isActive ? '/' : `/?cat=${value}`}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300'
              }`}
            >
              {label}
            </motion.button>
          </Link>
        );
      })}
    </div>
  );
}
