'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Users, Globe, Briefcase } from 'lucide-react';

const positions = [
    { title: "Senior Frontend Engineer", type: "Full-time", loc: "Mumbai / Remote", dept: "Engineering" },
    { title: "Growth Marketing Manager", type: "Full-time", loc: "Mumbai", dept: "Marketing" },
    { title: "Strategic Partnerships Lead", type: "Full-time", loc: "Delhi NCR", dept: "Business" },
    { title: "Product Designer", type: "Contract", loc: "Remote", dept: "Design" },
];

export function CareersContent() {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-24 pb-8 px-4">

            <div className="max-w-[95%] mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-fire-red/10 text-fire-red font-mono text-xs mb-3 font-bold"
                    >
                        WE ARE HIRING
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
                    >
                        Join the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-600">Revolution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-500 font-light"
                    >
                        We are looking for visionaries who want to reshape the $200B Indian Real Estate market.
                    </motion.p>
                </div>

                {/* Culture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                    {[
                        { icon: Zap, title: "Fast-Paced", desc: "We move at the speed of light. Ship fast, learn faster." },
                        { icon: Users, title: "Collaborative", desc: "No silos. Engineers talk to investors. Designers talk to founders." },
                        { icon: Globe, title: "Impact First", desc: "We don't just build features; we solve real infrastructure problems." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-3xl bg-white border border-fire-red/20 shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] hover:border-fire-red/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-fire-red/10 flex items-center justify-center text-fire-red mb-4 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Open Roles */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
                    <div className="space-y-4">
                        {positions.map((pos, i) => (
                            <motion.div
                                key={pos.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-white border border-neutral-200 hover:border-fire-red/30 hover:shadow-lg hover:shadow-fire-red/5 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-fire-red group-hover:text-white transition-colors">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold group-hover:text-fire-red transition-colors">{pos.title}</h3>
                                        <div className="flex gap-4 text-xs text-neutral-500 font-mono mt-1">
                                            <span>{pos.dept}</span>
                                            <span>•</span>
                                            <span>{pos.type}</span>
                                            <span>•</span>
                                            <span>{pos.loc}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-sm font-bold text-neutral-400 group-hover:text-fire-red transition-colors">
                                    Apply Now <ArrowUpRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
