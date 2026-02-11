'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Quote, User, Briefcase } from 'lucide-react';
import Image from 'next/image';

// --- Types ---
interface Interview {
    id: string;
    type: 'founder' | 'professional';
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    content: {
        intro: string;
        qa?: { question: string; answer: string }[]; // For founders
        article?: string[]; // For professionals
    };
}

// --- Mock Data ---
const STORIES: Interview[] = [
    // Founders
    {
        id: '1',
        type: 'founder',
        name: 'Aarav Gupta',
        role: 'Founder & CEO',
        company: 'PropAI',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
        quote: "AI isn't replacing brokers; it's making them superhuman.",
        content: {
            intro: "Aarav Gupta discusses how PropAI is leveraging generative AI to automate property valuations and legal due diligence.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "The immense time wastage in manual property verification. We automate 90% of the due diligence process." },
                { question: "What makes your startup different?", answer: "Our proprietary dataset of over 50 million property records combined with a specialized LLM for Indian real estate law." },
                { question: "Current challenge in PropTech?", answer: "Fragmented land records. Digitization is happening, but interoperability between state systems is still a hurdle." },
                { question: "One prediction for real estate tech?", answer: "By 2030, you will be able to buy a home entirely from your phone, including loan approval and registration, in under 24 hours." },
                { question: "Advice for new founders?", answer: "Don't build for the 'cool' factor. Build for the unglamorous, messy problems that no one else wants to touch." }
            ]
        }
    },
    {
        id: '2',
        type: 'founder',
        name: 'Zara Khan',
        role: 'Co-founder',
        company: 'UrbanLiving',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
        quote: "Co-living is about community first, real estate second.",
        content: {
            intro: "Zara Khan shares her vision for the future of shared urban living spaces in Tier 1 cities.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "Urban loneliness and the poor quality of rental housing for young professionals." },
                { question: "What makes your startup different?", answer: "We focus heavily on experience design. Our community events are as important as our furniture quality." },
                { question: "Current challenge in PropTech?", answer: "Standardizing the tenant experience across a fragmented supply of landlord-owned properties." },
                { question: "One prediction for real estate tech?", answer: "Flexible living subscriptions will replace traditional 11-month leases for the mobile workforce." },
                { question: "Advice for new founders?", answer: "Understand your customer's daily life deeply. Real estate is personal." }
            ]
        }
    },
    {
        id: '3',
        type: 'founder',
        name: 'Vikram Singh',
        role: 'CTO',
        company: 'BuildTech Solutions',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
        quote: "Construction efficiency is the only way to solve the housing crisis.",
        content: {
            intro: "Vikram Singh talks about bringing robotics and IoT into the traditional construction site.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "Project delays and cost overruns due to lack of real-time visibility on construction sites." },
                { question: "What makes your startup different?", answer: "We deploy IoT sensors that track material usage and worker productivity in real-time, feeding into a central dashboard." },
                { question: "Current challenge in PropTech?", answer: "Adoption inertia. Convincing traditional construction firms to trust data over gut feeling." },
                { question: "One prediction for real estate tech?", answer: "Prefabricated and 3D-printed homes will become 30% of new inventory within the next decade." },
                { question: "Advice for new founders?", answer: "Hardware is hard. Make sure your software value proposition is strong enough to carry the hardware costs." }
            ]
        }
    },
    {
        id: '7',
        type: 'founder',
        name: 'Elena Rodriguez',
        role: 'CEO',
        company: 'GreenBrick',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
        quote: "Sustainability is no longer an option; it's the only way to build.",
        content: {
            intro: "Elena shares how GreenBrick is making sustainable materials accessible to everyone.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "The high cost and low availability of truly sustainable building materials." },
                { question: "What makes your startup different?", answer: "We have a direct-to-consumer model that cuts out the middleman, making green materials 40% cheaper." },
                { question: "Current challenge in PropTech?", answer: "Educating the market. People still think 'green' means 'expensive' or 'low durability'." },
                { question: "One prediction for real estate tech?", answer: "Carbon footprint tracking will become a standard part of every property transaction." },
                { question: "Advice for new founders?", answer: "Start with a niche. You can't boil the ocean, but you can dominate a pond." }
            ]
        }
    },
    // Professionals
    {
        id: '4',
        type: 'professional',
        name: 'Priya Sharma',
        role: 'Head of Research',
        company: 'Knight Frank India',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
        quote: "The office market is not dying; it's evolving into experience centers.",
        content: {
            intro: "Priya Sharma analyzes the shifting trends in commercial real estate post-pandemic.",
            article: [
                "The narrative that 'office is dead' has been greatly exaggerated. What we are seeing is a flight to quality. Grade A offices that offer sustainability, wellness, and technology are seeing record occupancy rates.",
                "Tenants are no longer looking for just desks; they are looking for collaboration hubs. This means more breakout areas, smart meeting rooms, and amenities that rival high-end hotels.",
                "However, the struggle is real for Grade B and C assets. Landlords of older buildings must upgrade or risk obsolescence. The future belong to 'smart' buildings that can report on their own ESG metrics.",
                "Proptech plays a crucial role here. From occupancy sensors to air quality monitoring, technology is the differentiator that justifies premium rents in a competitive market."
            ]
        }
    },
    {
        id: '5',
        type: 'professional',
        name: 'Rahul Mehta',
        role: 'Managing Partner',
        company: 'RealStep Ventures',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
        quote: "We are finally seeing the 'fintech-ization' of real estate.",
        content: {
            intro: "Rahul Mehta discusses the convergence of finance and property technology.",
            article: [
                "Real estate has historically been the most illiquid asset class. That is changing rapidly with fractional ownership and tokenization.",
                "Platforms that allow retail investors to buy a slice of a commercial building for as little as ₹10,000 are democratizing wealth creation. This was previously the playground of the ultra-wealthy.",
                "But regulation is key. The SEBI's SM REIT guidelines are a massive step forward. It brings trust and transparency to a sector that desperately needed it.",
                "The next big wave? Mortgages. The approval process is still archaic. We expect end-to-end digital mortgage processing to become the standard within 2-3 years, driven by account aggregators and digital identity stacks."
            ]
        }
    },
    {
        id: '6',
        type: 'professional',
        name: 'Anjali Desai',
        role: 'Chief Architect',
        company: 'Sustainable Spaces',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
        quote: "Green buildings are no longer a luxury; they are a compliance necessity.",
        content: {
            intro: "Anjali Desai on why sustainability is the new standard in development.",
            article: [
                "With the new energy conservation codes and carbon neutrality goals, developers don't have a choice. You either build green, or you don't build.",
                "But it's not just about compliance. Buyers are smarter. They ask about thermal insulation, water harvesting, and solar capacity. They know these lower their long-term operating costs.",
                "We are seeing a surge in demand for 'Net Zero' ready homes. These are homes designed to produce as much energy as they consume.",
                "Technology is the enabler. BIM (Building Information Modeling) allows us to simulate energy performance before a single brick is laid. This is essentially 'simulation-driven design' becoming mainstream."
            ]
        }
    },
    {
        id: '8',
        type: 'professional',
        name: 'David Chen',
        role: 'Director',
        company: 'Future Cities',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
        quote: "Smart cities are about people, not just sensors.",
        content: {
            intro: "David discusses the human-centric approach to smart city development.",
            article: [
                "We often get caught up in the technology of smart cities—the sensors, the data, the AI. But we forget the most important part: the people who live there.",
                "A truly smart city uses technology to improve quality of life. Shorter commutes, cleaner air, safer streets. If the tech doesn't deliver that, it's useless.",
                "The '15-minute city' concept is gaining traction globally. It's about designing neighborhoods where everything you need is a short walk or bike ride away.",
                "This requires a fundamental rethink of urban planning. We need mixed-use developments, better public transport, and more green spaces. Technology is the tool that helps us achieve this vision."
            ]
        }
    }
];

export function PropStories() {
    const [selectedStory, setSelectedStory] = useState<Interview | null>(null);

    const founders = STORIES.filter(s => s.type === 'founder');
    const professionals = STORIES.filter(s => s.type === 'professional');

    return (
        <section className="pt-12 pb-8 bg-neutral-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-fire-red font-mono font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
                        Editorial.Voices
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter uppercase mb-6">
                        Prop Stories
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
                        Insights from founders and real estate professionals shaping the future of PropTech.
                    </p>
                </div>

                {/* Subsection 1: Founders Spotlight */}
                <div className="mb-24">
                    <div className="flex items-end justify-between mb-10 border-b border-neutral-200 pb-6">
                        <div>
                            <h3 className="text-3xl font-black text-neutral-800 tracking-tight uppercase">Founders Spotlight</h3>
                            <p className="text-neutral-500 mt-2 text-sm font-medium uppercase tracking-wider">Challenges, Growth, and Future Vision</p>
                        </div>
                        <div className="hidden md:block text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">
                            Series.Interview.01
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {founders.map((story) => (
                            <motion.div
                                key={story.id}
                                className="group relative bg-white border border-neutral-200 p-6 rounded-[2rem] hover:border-fire-red/30 hover:shadow-xl hover:shadow-fire-red/5 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
                                onClick={() => setSelectedStory(story)}
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
                        ))}
                    </div>
                </div>

                {/* Subsection 2: Professional Perspective */}
                <div>
                    <div className="flex items-end justify-between mb-10 border-b border-neutral-200 pb-6">
                        <div>
                            <h3 className="text-3xl font-black text-neutral-800 tracking-tight uppercase">Professional Perspective</h3>
                            <p className="text-neutral-500 mt-2 text-sm font-medium uppercase tracking-wider">Industry Leaders on What's Changing</p>
                        </div>
                        <div className="hidden md:block text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">
                            Series.Insight.02
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {professionals.map((story) => (
                            <motion.div
                                key={story.id}
                                className="group relative bg-white border border-neutral-200 p-0 rounded-[2rem] overflow-hidden hover:border-fire-red/30 hover:shadow-xl hover:shadow-fire-red/5 transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full"
                                onClick={() => setSelectedStory(story)}
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
                        ))}
                    </div>
                </div>

                {/* View More Stories Button */}
                {/* View More Stories Button */}
                <div className="flex justify-center mt-12 mb-0">
                    <button className="group relative px-10 py-5 bg-neutral-900 text-white border border-neutral-900 rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden hover:bg-fire-red hover:border-fire-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-fire-red/20">
                        <span className="relative flex items-center gap-3">
                            View All Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Reading Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStory(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="relative h-40 md:h-60 bg-neutral-900 flex-shrink-0">
                                <Image
                                    src={selectedStory.image}
                                    alt={selectedStory.name}
                                    fill
                                    sizes="100vw"
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                                <div className="absolute bottom-8 left-8 md:left-12 right-12">
                                    <div className="inline-block px-3 py-1 bg-fire-red/20 border border-fire-red/30 text-fire-red rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                        {selectedStory.type === 'founder' ? 'Founder Interview' : 'Professional Insight'}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                                        {selectedStory.name}
                                    </h2>
                                    <p className="text-white/70 font-medium text-sm md:text-lg uppercase tracking-wide">
                                        {selectedStory.role}, {selectedStory.company}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedStory(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                <div className="prose prose-lg max-w-none">
                                    <p className="font-serif text-2xl text-neutral-900 italic leading-relaxed border-l-4 border-fire-red pl-6 mb-12">
                                        "{selectedStory.quote}"
                                    </p>

                                    {selectedStory.type === 'founder' && selectedStory.content.qa && (
                                        <div className="space-y-10">
                                            {selectedStory.content.qa.map((item, idx) => (
                                                <div key={idx}>
                                                    <h4 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-3">
                                                        <span className="text-fire-red mr-2">Q{idx + 1}:</span>
                                                        {item.question}
                                                    </h4>
                                                    <p className="text-neutral-600 leading-relaxed text-lg">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {selectedStory.type === 'professional' && selectedStory.content.article && (
                                        <div className="space-y-6">
                                            {selectedStory.content.article.map((paragraph, idx) => (
                                                <p key={idx} className="text-neutral-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-black first-letter:text-neutral-900 first-letter:mr-3 first-letter:float-left">
                                                    {paragraph}
                                                </p>
                                            ))}
                                            <div className="mt-12 pt-12 border-t border-neutral-100">
                                                <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest text-center">
                                                    End of Perspective
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(229, 231, 235, 1);
                    border-radius: 20px;
                }
            `}</style>
        </section>
    );
}
