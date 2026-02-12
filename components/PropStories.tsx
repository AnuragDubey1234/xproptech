'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { STORIES } from '@/lib/prop-stories-data';

export function PropStories() {
    const founders = STORIES.filter(s => s.type === 'founder');
    const professionals = STORIES.filter(s => s.type === 'professional');

    return (
        <section id="prop-stories" className="pt-12 pb-8 bg-neutral-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter uppercase mb-6">
                        Prop Stories
                    </h2>
                    <div className="w-24 h-1 bg-fire-red mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-3xl mx-auto leading-relaxed">
                        Insights from founders and real estate professionals shaping the future of PropTech.
                    </p>
                </motion.div>

                {/* Subsection 1: Founders Spotlight */}
                <div id="founders-spotlight" className="mb-20 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-end justify-between mb-12 border-b border-neutral-200 pb-6"
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-neutral-800 tracking-tight uppercase">Founders Spotlight</h3>
                            <p className="text-neutral-500 mt-2 text-base font-medium tracking-wide">Challenges, Growth, and Future Vision</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {founders.map((story, i) => (
                            <Link key={story.id} href={`/prop-stories/${story.slug}`} className="block h-full">
                                <motion.div
                                    className="group relative bg-white border border-neutral-200 p-6 rounded-[2rem] hover:border-fire-red/30 hover:shadow-xl hover:shadow-fire-red/5 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8 items-stretch h-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative w-full md:w-40 md:h-full min-h-[160px] rounded-2xl overflow-hidden border border-neutral-100 flex-shrink-0">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 160px"
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between flex-grow">
                                        <div className="flex justify-between items-start">
                                            <blockquote className="text-lg font-bold text-neutral-800 leading-tight pr-4">
                                                "{story.quote}"
                                            </blockquote>
                                            <Quote className="w-6 h-6 text-neutral-200 group-hover:text-fire-red/20 transition-colors flex-shrink-0" />
                                        </div>

                                        <div className="mt-6 md:mt-0">
                                            <div className="h-[1px] w-full bg-neutral-100 mb-4 group-hover:bg-fire-red/20 transition-colors" />
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-black text-neutral-900 text-sm uppercase tracking-wide">{story.name}</h4>
                                                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-1">{story.role}, {story.company}</p>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-fire-red group-hover:text-white transition-all duration-300">
                                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Spotlight CTA */}
                    <div className="flex justify-center mt-12">
                        <Link href="#founders-spotlight" className="group relative px-10 py-5 bg-neutral-900 text-white border border-neutral-900 rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden hover:bg-fire-red hover:border-fire-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-fire-red/20">
                            <span className="relative flex items-center gap-3">
                                View All Spotlight <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Subsection 2: Professional Perspective */}
                <div id="professional-perspective" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-end justify-between mb-12 border-b border-neutral-200 pb-6"
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-neutral-800 tracking-tight uppercase">Professional Perspective</h3>
                            <p className="text-neutral-500 mt-2 text-base font-medium tracking-wide">Industry Leaders on What's Changing</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {professionals.map((story, i) => (
                            <Link key={story.id} href={`/prop-stories/${story.slug}`} className="block h-full">
                                <motion.div
                                    className="group relative bg-white border border-neutral-200 p-0 rounded-[2rem] overflow-hidden hover:border-fire-red/30 hover:shadow-xl hover:shadow-fire-red/5 transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative w-full md:w-48 md:min-h-full h-48 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                        <div className="absolute bottom-4 left-6 text-white md:hidden">
                                            <h4 className="font-black text-lg uppercase tracking-wide">{story.name}</h4>
                                            <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{story.role}, {story.company}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h4 className="text-xl font-bold text-neutral-900 leading-tight mb-2 group-hover:text-fire-red transition-colors">
                                                {story.content.intro}
                                            </h4>
                                            <div className="hidden md:block mt-4">
                                                <h4 className="font-black text-sm uppercase tracking-wide text-neutral-900">{story.name}</h4>
                                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{story.role}, {story.company}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-neutral-400 text-xs font-black uppercase tracking-widest group-hover:text-neutral-900 transition-colors">
                                                Read Perspective
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-fire-red group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* View More Stories Button */}
                <div className="flex justify-center mt-12 mb-0">
                    <button className="group relative px-10 py-5 bg-neutral-900 text-white border border-neutral-900 rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden hover:bg-fire-red hover:border-fire-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-fire-red/20">
                        <span className="relative flex items-center gap-3">
                            View All Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
