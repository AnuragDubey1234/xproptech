'use client';

import { motion } from 'framer-motion';
import { FileText, Gavel, AlertCircle } from 'lucide-react';

export function TermsContent() {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-24 pb-8 px-4">
            <div className="max-w-4xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="w-16 h-16 mx-auto bg-fire-red/10 rounded-2xl flex items-center justify-center text-fire-red mb-6 shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)]">
                        <FileText size={32} />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black mb-4">
                        Terms of Service
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
                            Welcome to XPropTech. By accessing our platform, you agree to these terms. We believe in fair play, transparency, and mutual respect.
                        </p>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><Gavel size={16} /></span>
                            Usage Rules
                        </h3>
                        <p>
                            You agree to use our platform only for lawful purposes. You must not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 mb-8 marker:text-fire-red">
                            <li>Attempt to breach or circumvent our security systems.</li>
                            <li>Scrape, mine, or extract data without written efficiency.</li>
                            <li>Harass, threaten, or impersonate other users.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><AlertCircle size={16} /></span>
                            Liability
                        </h3>
                        <p className="text-neutral-600 mb-8">
                            XPropTech is provided "as is". While we strive for perfection, software bugs happen. We are not liable for any direct, indirect, or consequential damages arising from your use of the platform.
                        </p>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">Termination</h3>
                        <p className="text-neutral-600">
                            We reserve the right to suspend or terminate your access if you violate these terms. Ideally, let's just be nice and build great things together.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
