'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginModal } from '@/components/Login/LoginModal';
import { SignupModal } from '@/components/Login/SignupModal';



function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// Order: news, india, gcc, funding, buzz, features, startup, insights, policy (left to right)
const mainNavLinks = [
  { label: 'News', href: '/' },
  { label: 'India', href: '/india' },
  { label: 'GCC', href: '/gcc' },
  { label: 'Startup', href: '/startups' },
];

const allNavLinks = [
  ...mainNavLinks,
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Derived state from URL
  const isLoginOpen = searchParams?.get('login') === 'true';
  const isSignupOpen = searchParams?.get('signup') === 'true';

  const openLogin = () => {
    // Push the state to history so "Back" button works
    router.push(pathname + '?login=true', { scroll: false });
  };

  const closeAuth = () => {
    // Go back in history (pops the param)
    if (isLoginOpen || isSignupOpen) {
      router.back();
    }
  };

  const switchToSignup = () => {
    // Replace current param to smoothly switch modals without adding extra history
    router.replace(pathname + '?signup=true', { scroll: false });
  };

  const switchToLogin = () => {
    // Replace current param to smoothly switch modals
    router.replace(pathname + '?login=true', { scroll: false });
  };

  const isLinkActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white md:bg-white/95 md:backdrop-blur-md border-b border-red-200 shadow-lg h-16 transition-all duration-300">

      {/* AUTH MODALS */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeAuth}
        onSignupClick={switchToSignup}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={closeAuth}
        onLoginClick={switchToLogin}
      />

      <div className="w-full h-full flex items-center justify-between px-0 md:px-2">

        {/* LOGO - LEFT-ALIGNED per remote */}
        <Link href="/" className="flex-shrink-0 ml-[-4px] h-40 flex items-center" aria-label="XProptech Home">
          <Image
            src="/logo.png"
            alt="XProptech"
            width={300}
            height={100}
            className="h-40 w-auto object-contain flex-shrink-0"
            priority
          />
        </Link>

        {/* NAVIGATION - CENTER */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-2 ml-6 lg:ml-8">
          {mainNavLinks.map(({ label, href }) => {
            const isActive = isLinkActive(href);
            return (
              <Link
                key={label}
                href={href}
                className={`gibson-bold-nav relative px-4 py-2 text-lg font-bold transition-colors duration-300 rounded-md hover:bg-gray-50 ${isActive ? 'text-fire-red' : 'text-gray-800 hover:text-fire-red'
                  }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-fire-red rounded-t-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* RIGHT CTAs */}
        <div className="flex items-center space-x-2 mr-[-2px] flex-shrink-0">


          <button
            onClick={openLogin}
            className="gibson-bold-nav text-lg font-bold text-white bg-fire-red hover:bg-fire-red-dark px-6 py-2 rounded-lg h-11 inline-flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap ml-2"
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon className="w-6 h-6" />
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
            className="md:hidden bg-white border-t border-red-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {allNavLinks.map(({ label, href }) => {
                const isActive = isLinkActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`gibson-bold-nav block px-3 py-2.5 transition-colors rounded-lg ${isActive ? 'text-fire-red bg-red-50 border-l-2 border-fire-red' : 'text-gray-700 hover:bg-red-50'
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <button
                  onClick={() => { openLogin(); setMobileOpen(false); }}
                  className="block w-full text-left px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                >
                  Login
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
