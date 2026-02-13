'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, Building2, Leaf, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
    {
        title: 'Smart Infrastructure',
        description: 'IoT-enabled urban planning and next-gen construction tech reshaping India\'s skylines. From smart grids to automated waste management, our cities are becoming sentient.',
        icon: Building2,
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        pattern: 'radial-gradient(circle at top right, rgba(37,99,235,0.08), transparent 70%)'
    },
    {
        title: 'Green Tech',
        description: 'Sustainable materials and energy-efficient designs driving the net-zero transition. Adopting biophilic architecture for cleaner, greener living spaces.',
        icon: Leaf,
        color: 'text-green-600',
        bg: 'bg-green-100',
        pattern: 'radial-gradient(circle at bottom left, rgba(22,163,74,0.08), transparent 70%)'
    },
    {
        title: 'Fintech Integration',
        description: 'Seamless digital transactions, fractional ownership, and blockchain land records making real estate liquid and accessible to a wider investor base.',
        icon: BarChart3,
        color: 'text-purple-600',
        bg: 'bg-purple-100',
        pattern: 'radial-gradient(circle at top left, rgba(147,51,234,0.08), transparent 70%)'
    },
    {
        title: 'Regulatory Tech',
        description: 'Automated compliance and RERA alignment tools ensuring transparent real estate growth. Building trust through code and standardized digital protocols.',
        icon: ShieldCheck,
        color: 'text-orange-600',
        bg: 'bg-orange-100',
        pattern: 'radial-gradient(circle at bottom right, rgba(234,88,12,0.08), transparent 70%)'
    }
];

export function InnovationSpotlight() {
    return (
        <section className="w-full pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
            {/* Side Animations - Tech Brackets appearing on scroll */}
            <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
                {/* Left Side Animation */}
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent flex items-center"
                >
                    <div className="absolute left-0 w-[2px] h-48 bg-orange-400 blur-[4px]" />
                </motion.div>

                {/* Right Side Animation */}
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent flex items-center justify-end"
                >
                    <div className="absolute right-0 w-[2px] h-48 bg-orange-400 blur-[4px]" />
                </motion.div>
            </div>

            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-[100px] opacity-70 mix-blend-multiply"
                    style={{ willChange: 'transform' }}
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/40 to-rose-200/40 rounded-full blur-[80px] opacity-70 mix-blend-multiply"
                    style={{ willChange: 'transform' }}
                />
            </div>

            <div className="max-w-[1800px] mx-auto px-4 md:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-orange-200/50 mb-6 shadow-sm ring-1 ring-orange-100"
                    >
                        <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                        <span className="text-xs font-bold tracking-[0.2em] text-neutral-800 uppercase">
                            Market Drivers
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-neutral-900 leading-tight tracking-tight drop-shadow-sm"
                    >
                        Defining the <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500 italic">Future Landscape</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {pillars.map((pillar, index) => {
                        // Map pillar to topic query param
                        const topicMap: Record<string, string> = {
                            'Smart Infrastructure': 'infrastructure',
                            'Green Tech': 'green-tech',
                            'Fintech Integration': 'fintech',
                            'Regulatory Tech': 'regulatory'
                        };
                        const topic = topicMap[pillar.title] || 'infrastructure';

                        return (
                            <Link
                                key={index}
                                href={`/india/${topic}`}
                                className="block h-full relative z-20"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ background: pillar.pattern }}
                                    className="group relative overflow-hidden rounded-[2rem] bg-white/90 backdrop-blur-2xl border-2 border-orange-100/50 hover:border-orange-400/80 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.2)] transition-all duration-500 p-6 md:p-8 flex flex-col items-start h-full cursor-pointer"
                                >
                                    {/* Gradient Overlay for modern polish */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

                                    {/* Active Ring Gradient on Hover */}
                                    <div className="absolute inset-0 rounded-[2rem] ring-0 group-hover:ring-2 ring-orange-400/20 transition-all duration-500" />

                                    <div className="relative z-10 w-full">
                                        <div className={`w-12 h-12 ${pillar.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm ring-2 ring-white`}>
                                            <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl group-hover:text-neutral-900 transition-colors duration-300">
                                            {pillar.description}
                                        </p>
                                    </div>

                                    {/* Decorative Corner Icon - Faded but larger */}
                                    <pillar.icon className={`absolute -bottom-6 -right-6 w-32 h-32 ${pillar.color} opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700`} />
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
