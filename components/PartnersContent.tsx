'use client';

import { motion } from 'framer-motion';
import { Handshake, Building2, TrendingUp, ArrowRight } from 'lucide-react';

export function PartnersContent() {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-24 pb-8 px-4">

            <div className="max-w-[95%] mx-auto">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-fire-red/10 text-fire-red font-mono text-sm mb-6 font-bold"
                    >
                        PARTNERSHIPS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
                    >
                        Scale with the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-600">Ecosystem</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-500 font-light max-w-2xl mx-auto"
                    >
                        We partner with leading real estate developers, VC firms, and government bodies to accelerate PropTech adoption in India.
                    </motion.p>
                </div>

                {/* Partner Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
                    {[
                        { icon: Building2, title: "Developers", desc: "Integrate cutting-edge tech into your projects. Smart homes, construction tech, and sales automation." },
                        { icon: TrendingUp, title: "Investors", desc: "Get exclusive deal flow of high-potential PropTech startups before anyone else." },
                        { icon: Handshake, title: "Startups", desc: "Gain access to our network of 50+ enterprise clients and pilot opportunities." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-[2.5rem] bg-white border border-fire-red/20 shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] hover:border-fire-red/50 transition-all duration-300 group text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-3xl bg-fire-red/10 flex items-center justify-center text-fire-red mb-6 group-hover:scale-110 transition-transform">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="max-w-5xl mx-auto bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">

                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fire-red/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner?</h2>
                        <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join the alliance that is digitizing Indian Real Estate. Let's discuss how we can create value together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-fire-red text-white font-bold rounded-2xl text-lg hover:bg-red-600 transition-colors shadow-lg shadow-fire-red/25"
                            >
                                Apply for Partnership
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl text-lg hover:bg-white/20 transition-colors border border-white/10"
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
