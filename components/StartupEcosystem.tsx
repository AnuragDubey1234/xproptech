'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Rocket, X, Navigation, Globe, ArrowRight, Zap } from 'lucide-react';

interface Startup {
    name: string;
    industry: string;
    status: 'Scaling' | 'Funding' | 'Active';
}

interface CityNode {
    id: string;
    name: string;
    region: 'India' | 'GCC';
    lat: number;
    lng: number;
    startups: Startup[];
}

const CITIES: CityNode[] = [
    // INDIA
    { id: 'mumbai', name: 'Mumbai', region: 'India', lat: 19.0760, lng: 72.8777, startups: [{ name: 'Square Yards', industry: 'Fintech', status: 'Scaling' }, { name: 'Lodha', industry: 'Proptech', status: 'Active' }] },
    { id: 'bangalore', name: 'Bangalore', region: 'India', lat: 12.9716, lng: 77.5946, startups: [{ name: 'PropStack', industry: 'Data', status: 'Scaling' }, { name: 'NoBroker', industry: 'Marketplace', status: 'Active' }] },
    { id: 'ncr', name: 'NCR', region: 'India', lat: 28.6139, lng: 77.2090, startups: [{ name: 'Stanza Living', industry: 'Co-living', status: 'Funding' }] },
    { id: 'pune', name: 'Pune', region: 'India', lat: 18.5204, lng: 73.8567, startups: [{ name: 'ZestMoney', industry: 'Fintech', status: 'Active' }] },
    { id: 'hyderabad', name: 'Hyderabad', region: 'India', lat: 17.3850, lng: 78.4867, startups: [{ name: 'MyGate', industry: 'Security', status: 'Active' }] },
    { id: 'chennai', name: 'Chennai', region: 'India', lat: 13.0827, lng: 80.2707, startups: [{ name: 'Zolostays', industry: 'Co-living', status: 'Scaling' }] },
    { id: 'ahmedabad', name: 'Ahmedabad', region: 'India', lat: 23.0225, lng: 72.5714, startups: [{ name: 'Indiabulls', industry: 'Finance', status: 'Active' }] },

    // GCC
    { id: 'dubai', name: 'Dubai', region: 'GCC', lat: 25.2048, lng: 55.2708, startups: [{ name: 'Property Finder', industry: 'Portal', status: 'Scaling' }, { name: 'Stella Stays', industry: 'Rentals', status: 'Active' }] },
    { id: 'abudhabi', name: 'Abu Dhabi', region: 'GCC', lat: 24.4539, lng: 54.3773, startups: [{ name: 'Hub71', industry: 'Ecosystem', status: 'Active' }] },
    { id: 'riyadh', name: 'Riyadh', region: 'GCC', lat: 24.7136, lng: 46.6753, startups: [{ name: 'Aqar', industry: 'Classifieds', status: 'Active' }, { name: 'Munjz', industry: 'Services', status: 'Funding' }] },
    { id: 'doha', name: 'Doha', region: 'GCC', lat: 25.2854, lng: 51.5310, startups: [{ name: 'Hapondo', industry: 'Marketplace', status: 'Active' }] },
];

const GCC_COUNTRIES = ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait'];

export const StartupEcosystem = () => {
    const [geoData, setGeoData] = useState<any>(null);
    const [activeCity, setActiveCity] = useState<CityNode | null>(null);
    const [view, setView] = useState<'India' | 'GCC'>('India');
    const svgRef = useRef<SVGSVGElement>(null);

    // Load Topology
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(res => res.json())
            .then(data => {
                const countries = topojson.feature(data, data.objects.countries) as any;
                const filtered = countries.features.filter((f: any) =>
                    f.properties.name === 'India' || GCC_COUNTRIES.includes(f.properties.name)
                );
                setGeoData(filtered);
            });
    }, []);

    // Map Config
    const width = 1000;
    const height = 600;

    const projection = useMemo(() => {
        const center: [number, number] = view === 'India' ? [78.9629, 22.5937] : [50.0, 24.0];
        const scale = view === 'India' ? 1200 : 2000;

        return d3.geoMercator()
            .center(center)
            .scale(scale)
            .translate([width / 2, height / 2]);
    }, [view]);

    const pathGenerator = d3.geoPath().projection(projection);

    return (
        <section className="relative py-0 px-0 bg-[#0a0a0a] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="w-full relative z-10 px-0">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-8 px-4 md:px-8 lg:px-12">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <Zap className="w-3 h-3" /> Geographical Precision v4
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                            DOMINANT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">STARTUPS.</span>
                        </h2>
                    </div>

                    <div className="flex bg-neutral-900 shadow-2xl p-1.5 rounded-2xl border border-white/5 transition-all">
                        <button
                            onClick={() => setView('India')}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'India' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            India Hub
                        </button>
                        <button
                            onClick={() => setView('GCC')}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'GCC' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            GCC Hub
                        </button>
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[70vh] min-h-[500px] bg-neutral-900/60 rounded-none border border-white/5 shadow-3xl overflow-hidden backdrop-blur-xl">
                    {/* Subtle Grid */}
                    <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px] opacity-40 pointer-events-none" />

                    <svg
                        ref={svgRef}
                        viewBox={`0 0 ${width} ${height}`}
                        className="w-full h-full"
                    >
                        {/* Map Paths */}
                        <g className="map-layer">
                            {geoData?.map((feature: any, i: number) => (
                                <motion.path
                                    key={feature.id || i}
                                    d={pathGenerator(feature) as string}
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 1, pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="fill-white/5 stroke-white/20 stroke-1 hover:fill-red-500/10 hover:stroke-red-500/40 transition-colors duration-500 cursor-default"
                                />
                            ))}
                        </g>

                        {/* City Nodes */}
                        <g className="cities-layer">
                            {CITIES.filter(c => c.region === view).map((city) => {
                                const [cx, cy] = projection([city.lng, city.lat]) || [0, 0];
                                return (
                                    <motion.g
                                        key={city.id}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.2 }}
                                        className="cursor-pointer"
                                        onClick={() => setActiveCity(city)}
                                    >
                                        {/* Ring animation */}
                                        <circle cx={cx} cy={cy} r="12" className="fill-red-600/20 stroke-red-600/40 stroke-1 animate-pulse" />

                                        {/* Core dot */}
                                        <circle
                                            cx={cx} cy={cy} r="4"
                                            className={`transition-colors duration-300 ${activeCity?.id === city.id ? 'fill-white' : 'fill-red-500'}`}
                                            style={{ filter: 'drop-shadow(0 0 8px #ef4444)' }}
                                        />

                                        {/* Permanent Label */}
                                        <text
                                            x={cx + 12}
                                            y={cy + 4}
                                            className="text-[10px] font-black uppercase tracking-tighter fill-white/80 pointer-events-none"
                                        >
                                            {city.name}
                                        </text>
                                    </motion.g>
                                );
                            })}
                        </g>
                    </svg>

                    {/* Side Insight Panel */}
                    <AnimatePresence>
                        {activeCity && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100%', opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="absolute top-8 right-8 bottom-8 w-96 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col shadow-2xl z-50"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest">
                                            <Navigation className="w-3 h-3" /> Insight Analytics
                                        </div>
                                        <h3 className="text-4xl font-black text-white tracking-tighter">{activeCity.name}</h3>
                                        <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">{activeCity.lat.toFixed(4)}°N, {activeCity.lng.toFixed(4)}°E</div>
                                    </div>
                                    <button
                                        onClick={() => setActiveCity(null)}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5"
                                    >
                                        <X className="w-5 h-5 text-white" />
                                    </button>
                                </div>

                                <div className="flex-1 space-y-5 overflow-y-auto no-scrollbar pr-2">
                                    {activeCity.startups.map((startup, i) => (
                                        <div key={i} className="group p-6 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-red-500/5 hover:border-red-500/30 transition-all duration-500">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="font-black text-xl text-white tracking-tight">{startup.name}</div>
                                                <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase">{startup.status}</div>
                                            </div>
                                            <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                                                <Rocket className="w-3 h-3" /> {startup.industry}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Region Market Cap</div>
                                        <div className="text-white font-black">$2.4B+</div>
                                    </div>
                                    <button className="w-full py-5 bg-white text-black rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-[0.98] transition-transform">
                                        View Full Deep Dive <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tech HUD footer */}
                    <div className="absolute left-10 bottom-10 flex flex-col gap-1 pointer-events-none opacity-40">
                        <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-[0.2em]"><Globe className="w-3 h-3" /> Coordinate.System.Active</div>
                        <div className="text-[9px] text-neutral-500 font-mono tracking-widest underline decoration-red-500/50">DATUM: WGS84 | PROJ: MERCATOR</div>
                    </div>
                </div>

                {/* Global Summary */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-12 md:gap-32 w-full py-12 px-4 md:px-8 lg:px-12">
                    {[
                        { label: 'Verified Hubs', value: '11 Cities' },
                        { label: 'Ecosystem Value', value: '$84B' },
                        { label: 'Active Startups', value: '450+' },
                        { label: 'Growth Rating', value: 'AAA+' }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-3 text-center min-w-[150px]">
                            <div className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">{stat.label}</div>
                            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
