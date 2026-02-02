'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactContent() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'contact'>('login');

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Tabs: Login | Sign Up | Contact */}
        <div className="flex gap-2 mb-8 border-b border-neutral-200">
          {(['login', 'signup', 'contact'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'text-primary-600 border-primary-500'
                  : 'text-neutral-500 border-transparent hover:text-neutral-700'
              }`}
            >
              {tab === 'login' ? 'Login' : tab === 'signup' ? 'Sign Up' : 'Contact'}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="glass-card rounded-3xl p-8"
        >
          {activeTab === 'login' && (
            <>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Login</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Login</motion.button>
              </form>
            </>
          )}

          {activeTab === 'signup' && (
            <>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Sign Up</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Sign Up</motion.button>
              </form>
            </>
          )}

          {activeTab === 'contact' && (
            <>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Send Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>General</option>
                  <option>Partnership</option>
                  <option>Startup Submission</option>
                  <option>Media</option>
                </select>
                <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-transform focus:scale-[1.01]" />
                <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Send Message</motion.button>
              </form>
            </>
          )}
        </motion.div>

        <div className="mt-8 text-center text-neutral-500">
          <p>HQ: Koregaon Park, Pune, Maharashtra</p>
          <a href="mailto:Team@xproptech.in" className="text-primary-600 hover:underline">Team@xproptech.in</a>
        </div>
      </div>
    </section>
  );
}
