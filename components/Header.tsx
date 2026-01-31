'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Awareness', href: '/awareness' },
  { label: 'Insights', href: '/insights' },
  { label: 'Connect', href: '/connect' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-100/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">X</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">XPropTech.in</span>
          </Link>

          {/* Desktop Navigation - SEPARATE BUTTONS */}
          <div className="hidden md:flex items-center space-x-0.5">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg border shadow-sm transition-all duration-200 active:scale-95 ${
                  pathname === href
                    ? 'text-gray-900 bg-white border-gray-300 shadow-md'
                    : 'text-gray-700 bg-white/80 border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md hover:border-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-100 border-t border-gray-200 pb-4 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-2 space-y-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg font-medium transition-all ${
                    pathname === href
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
