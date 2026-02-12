'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote, X } from 'lucide-react';
import type { Interview } from '@/lib/prop-stories-data';

export function StoryPageContent({ story, related }: { story: Interview; related: Interview[] }) {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Hero */}
            <div className="relative h-[60vh] md:h-[70vh] bg-neutral-900 w-full">
                <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Back Button */}
                <Link
                    href={story.type === 'founder' ? "/startups#founders-spotlight" : "/startups#professional-perspective"}
                    className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                >
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-sm transition-all">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest hidden md:block">Back to Stories</span>
                </Link>

                <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 max-w-5xl">
                    <div className="inline-block px-4 py-1.5 bg-fire-red/20 border border-fire-red/30 text-fire-red rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        {story.type === 'founder' ? 'Founder Interview' : 'Professional Insight'}
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-4"
                    >
                        {story.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 font-medium text-lg md:text-2xl uppercase tracking-wide max-w-2xl"
                    >
                        {story.role}, {story.company}
                    </motion.p>
                </div>
            </div>

            {/* Content Container */}
            <article className="max-w-4xl mx-auto px-6 md:px-0 -mt-20 relative z-10">
                <div className="bg-white rounded-t-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-neutral-100">

                    {/* Intro / Quote */}
                    <div className="mb-12 md:mb-16">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-fire-red/20 mb-6" />
                        <blockquote className="text-2xl md:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
                            "{story.quote}"
                        </blockquote>
                        <div className="mt-8 h-1 w-24 bg-gradient-to-r from-fire-red to-orange-500 rounded-full" />
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg md:prose-xl max-w-none text-neutral-600">
                        <p className="lead font-medium text-neutral-800 mb-12">{story.content.intro}</p>

                        {/* FOUNDER Q&A STYLE */}
                        {story.type === 'founder' && story.content.qa && (
                            <div className="space-y-12 md:space-y-16">
                                {story.content.qa.map((item, idx) => (
                                    <div key={idx} className="group">
                                        <h3 className="font-black text-neutral-900 uppercase tracking-tight text-lg md:text-xl mb-4 group-hover:text-fire-red transition-colors flex items-start gap-3">
                                            <span className="text-fire-red opacity-50 text-base mt-1">0{idx + 1}</span>
                                            {item.question}
                                        </h3>
                                        <p className="text-lg md:text-xl leading-relaxed text-neutral-600 pl-0 md:pl-8 border-l-2 border-transparent md:group-hover:border-neutral-200 transition-colors">
                                            {item.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* PROFESSIONAL ARTICLE STYLE */}
                        {story.type === 'professional' && story.content.article && (
                            <div className="space-y-6 md:space-y-8">
                                {story.content.article.map((paragraph, idx) => (
                                    <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:text-neutral-900 first-letter:mr-3 first-letter:float-left" : ""}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        <div className="mt-16 pt-12 border-t border-neutral-100 flex items-center justify-center">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-300">End of Feature</span>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Stories (Simplified) */}
            {related.length > 0 && (
                <section className="max-w-6xl mx-auto px-6 mt-20">
                    <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-8">More Perspectives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {related.map(item => (
                            <Link href={`/prop-stories/${item.slug}`} key={item.id} className="group flex gap-6 items-center p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 group-hover:text-fire-red transition-colors">{item.name}</h4>
                                    <p className="text-xs font-bold uppercase text-neutral-500 tracking-wider mt-1">{item.role}</p>
                                    <p className="text-sm text-neutral-600 mt-2 line-clamp-2 md:hidden lg:block">"{item.quote}"</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
