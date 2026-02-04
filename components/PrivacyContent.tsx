'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

export function PrivacyContent() {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-24 pb-8 px-4">
            <div className="max-w-4xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="w-16 h-16 mx-auto bg-fire-red/10 rounded-2xl flex items-center justify-center text-fire-red mb-6 shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)]">
                        <Shield size={32} />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black mb-4">
                        Privacy Policy
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-500">
                        Last Updated: February 2026
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
                            At XPropTech ("we", "us"), we treat your data with the same respect we treat our own code: secure, optimized, and transparent. This policy outlines how we handle your digital footprint.
                        </p>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><Eye size={16} /></span>
                            Data Collection
                        </h3>
                        <p>
                            We collect information to provide better services to all our users. This includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 mb-8 marker:text-fire-red">
                            <li><strong>Personal Information:</strong> Name, email, and contact details provided during signup.</li>
                            <li><strong>Usage Data:</strong> Pages visited, interaction times, and feature usage.</li>
                            <li><strong>Device Info:</strong> Browser type, IP address, and device headers.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-fire-red/10 flex items-center justify-center text-fire-red text-sm"><Lock size={16} /></span>
                            Data Protection
                        </h3>
                        <p className="text-neutral-600 mb-8">
                            We implement industry-standard security measures including SSL encryption, secure database clusters, and strict access controls. Your data is stored on secure servers located in India and globally distributed CDNs.
                        </p>

                        <h3 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">Sharing & Disclosure</h3>
                        <p className="text-neutral-600">
                            We do not sell your personal data. We may share data with third-party service providers (like hosting partners) solely for the purpose of operating our platform, under strict confidentiality agreements.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
