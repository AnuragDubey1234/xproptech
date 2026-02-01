'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mainNavLinks = [
  { label: 'News', href: '/' },
  { label: 'Buzz', href: '/buzz' },
  { label: 'Features', href: '/features' },
  { label: 'Startups', href: '/startups' },
  { label: 'Insights', href: '/insights' },
];
const allNavLinks = [
  ...mainNavLinks,
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function Bars3Icon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm h-14">
      <div className="max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        {/* LOGO - LEFTMOST (Exact Inc42 position) */}
        <Link href="/" className="flex-shrink-0 ml-[-2px] flex items-center h-10" aria-label="XProptech Home">
          <div className="h-9 w-9 md:h-10 md:w-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="gibson-bold-nav text-white text-base">X</span>
          </div>
          <span className="gibson-bold-nav ml-2 text-gray-900 hidden sm:inline whitespace-nowrap">XProptech</span>
        </Link>

        {/* MAIN NAV LINKS - LEFT-ALIGNED, underline on hover */}
        <div className="hidden md:flex items-center space-x-1 ml-6 lg:ml-8">
          {mainNavLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`gibson-bold-nav nav-link px-3 py-2 text-lg font-bold transition-all duration-200 whitespace-nowrap border-b-2 border-transparent ${
                  isActive ? 'active-nav' : 'text-gray-800 hover:text-black hover:border-black'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT CTAs - FLUSH RIGHT */}
        <div className="flex items-center space-x-2 mr-[-2px] flex-shrink-0">
          <button type="button" className="p-2 text-gray-600 hover:text-black transition-colors" aria-label="Search">
            <SearchIcon className="w-5 h-5" />
          </button>
          <Link
            href="/contact"
            className="gibson-bold-nav hidden sm:inline-flex text-lg font-bold text-gray-800 hover:text-black px-3 py-2 whitespace-nowrap transition-colors"
          >
            Join
          </Link>
          <Link
            href="/contact"
            className="gibson-bold-nav text-lg font-bold text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md h-10 inline-flex items-center justify-center transition-colors whitespace-nowrap"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -m-2 text-gray-700 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu - collapse after 768px */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0">
              {allNavLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`gibson-bold-nav block px-3 py-2.5 transition-colors rounded-lg ${
                      isActive ? 'text-black bg-gray-100 border-l-2 border-black' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
