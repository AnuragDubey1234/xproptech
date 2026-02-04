'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Info } from 'lucide-react';

export function CookieContent() {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-24 pb-8 px-4">
            <div className="max-w-4xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="w-16 h-16 mx-auto bg-fire-red/10 rounded-2xl flex items-center justify-center text-fire-red mb-6 shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)]">
                        <Cookie size={32} />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black mb-4">
                        Cookie Policy
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-500">
                        Effective Date: February 2026
                    </motion.p>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white border border-fire-red/20 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)] relative"
                >
                    {/* Decorative Neon Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-fire-red/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="prose prose-lg prose-neutral max-w-none">
                        <p className="lead text-xl text-neutral-600 font-light leading-relaxed mb-8">
                            Cookies are small text files that help us make your experience smoother. We use them sparingly and effectively.
                        </p>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><Info size={16} /></span>
                            What We Use
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
                            <li className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                <strong className="block text-neutral-900 mb-1">Essential Cookies</strong>
                                <span className="text-sm text-neutral-500">Required for login and security. Cannot be disabled.</span>
                            </li>
                            <li className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                <strong className="block text-neutral-900 mb-1">Analytics Cookies</strong>
                                <span className="text-sm text-neutral-500">Help us understand how you use the site so we can improve it.</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><Settings size={16} /></span>
                            Managing Cookies
                        </h3>
                        <p className="text-neutral-600 mb-8">
                            You can control cookies through your browser settings. Blocking essential cookies may break some features of the platform.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
