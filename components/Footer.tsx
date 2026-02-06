'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Send, Linkedin, Twitter, MessageCircle, Instagram, ArrowUp } from 'lucide-react';

const socialLinks = [
  { href: 'https://www.linkedin.com/company/xproptech/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com', label: 'X (Twitter)', icon: Twitter },
  { href: 'https://www.instagram.com/xproptech?igsh=MXdsb211bHhsYnJxcA==', label: 'Instagram', icon: Instagram },
];

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Startups", href: "/startups" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ]
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 mt-0 overflow-hidden font-sans">

      {/* Background Grid & Gloam */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

      {/* Spotlight Effect behind Newsletter - The Von Restorff Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-fire-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-6">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block relative group">
              <div className="relative h-10 w-48 md:h-12 md:w-56">
                <Image
                  src="/logoxproptec.png"
                  alt="XPropTech Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-fire-red rounded-full group-hover:w-40 md:group-hover:w-48 transition-all duration-500 ease-out" />
            </Link>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md font-light">
              Pioneering the digital transformation of real estate. We bridge the gap between concrete infrastructure and digital innovation.
            </p>

            {/* Magnetic Social Buttons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  aria-label={`Follow us on ${social.label}`}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-fire-red hover:border-fire-red transition-all duration-300 group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs opacity-70">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-neutral-500 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter with Spotlight */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs opacity-70">Stay Ahead</h4>
            <p className="text-neutral-500 text-sm mb-6">
              Join 15,000+ investors and founders receiving our weekly deep-dive.
            </p>
            <form className="relative group" aria-label="Newsletter subscription">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-14 text-white placeholder-neutral-600 focus:outline-none focus:border-fire-red/50 focus:bg-white/10 transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.1)] focus:shadow-[0_0_60px_-10px_rgba(220,38,38,0.2)]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-2 bottom-2 w-10 flex items-center justify-center bg-fire-red rounded-lg text-white hover:bg-red-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600 font-mono relative pt-2">
          <p>© 2026 XPropTech Inc. All rights reserved.</p>

          {/* Back to Top - The "Closure" Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-fire-red/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-fire-red focus-visible:outline-none"
          >
            <span className="text-neutral-400 group-hover:text-white transition-colors">Back to Top</span>
            <ArrowUp size={14} className="text-fire-red group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </button>

          <div className="flex gap-8">
            <span>MUMBAI</span>
            <span>PUNE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
