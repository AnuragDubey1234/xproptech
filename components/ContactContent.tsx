'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export function ContactContent() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'contact'>('contact');

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-32 pb-12 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Col: Info */}
        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-fire-red font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-600">Future Together</span>
            </h1>
            <p className="text-xl text-neutral-500 font-light max-w-md leading-relaxed">
              Whether you're a founder, investor, or simply curious—we're here to connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-fire-red/5 flex items-center justify-center text-fire-red shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                <p className="text-neutral-500">Vasai, Mumbai<br />Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-fire-red/5 flex items-center justify-center text-fire-red shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <a href="mailto:Team@xproptech.in" className="text-neutral-500 hover:text-fire-red transition-colors">Team@xproptech.in</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Forms */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_-10px_rgba(0,0,0,0.05)] border border-neutral-100 relative overflow-hidden"
        >
          {/* Decorative Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-fire-red/5 rounded-full blur-3xl pointer-events-none" />

          {/* Tabs */}
          <div className="flex gap-2 mb-10 p-1 bg-neutral-100/50 rounded-2xl w-fit">
            {(['contact', 'login', 'signup'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === tab
                  ? 'bg-white text-fire-red shadow-lg shadow-black/5'
                  : 'text-neutral-500 hover:text-neutral-900'
                  }`}
              >
                {tab === 'contact' ? 'Message' : tab === 'login' ? 'Login' : 'Join'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'login' && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Email</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Password</label>
                    <input type="password" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="••••••••" />
                  </div>
                  <button className="w-full py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-fire-red transition-colors flex items-center justify-center gap-2 group">
                    Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-sm text-neutral-500 mt-4">Forgot password?</p>
                </form>
              )}

              {activeTab === 'signup' && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="First Name" />
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="Last Name" />
                  </div>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="Work Email" />
                  <input type="password" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="Create Password" />
                  <button className="w-full py-4 bg-fire-red text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-fire-red/20">
                    Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

              {activeTab === 'contact' && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="Name" />
                    <select className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium appearance-none text-neutral-500">
                      <option>General</option>
                      <option>Partnership</option>
                      <option>Media</option>
                    </select>
                  </div>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium" placeholder="Email Address" />
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-fire-red focus:outline-none transition-all font-medium resize-none" placeholder="How can we help?" />
                  <button className="w-full py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-fire-red transition-colors flex items-center justify-center gap-2 group">
                    Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
