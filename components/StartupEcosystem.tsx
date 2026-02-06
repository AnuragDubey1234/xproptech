'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Rocket, X, Navigation, Globe, ArrowRight, Zap, Activity, Terminal, Cpu } from 'lucide-react';

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
    const [hasMounted, setHasMounted] = useState(false);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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
        <section
            className="relative py-0 px-0 bg-[#050505] overflow-hidden min-h-screen flex flex-col justify-start pt-20"
            aria-label="Startup Ecosystem Map"
        >
            {/* High-End Futuristic Background */}
            <FuturisticBackground hasMounted={hasMounted} />

            <motion.div
                className="w-full relative z-10 px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasMounted ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-blue-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">STARTUPS.</span>
                        </h2>
                    </div>

                    <div className="flex bg-neutral-900 shadow-2xl p-1.5 rounded-2xl border border-white/5 transition-all">
                        <button
                            onClick={() => setView('India')}
                            aria-label="Switch to India Hub"
                            aria-pressed={view === 'India'}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'India' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            India Hub
                        </button>
                        <button
                            onClick={() => setView('GCC')}
                            aria-label="Switch to GCC Hub"
                            aria-pressed={view === 'GCC'}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'GCC' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            GCC Hub
                        </button>
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[60vh] min-h-[500px] bg-neutral-950/40 rounded-none border border-white/5 shadow-3xl overflow-hidden backdrop-blur-2xl">
                    {/* Radial Shadow for Focus */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />
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
                                        role="button"
                                        aria-label={`View startups in ${city.name}`}
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setActiveCity(city);
                                            }
                                        }}
                                    >
                                        {/* Ring animation */}
                                        <circle cx={cx} cy={cy} r="12" className="fill-red-600/20 stroke-red-600/40 stroke-1 animate-pulse" aria-hidden="true" />

                                        {/* Core dot */}
                                        <circle
                                            cx={cx} cy={cy} r="4"
                                            className={`transition-colors duration-300 ${activeCity?.id === city.id ? 'fill-white' : 'fill-red-500'}`}
                                            style={{ filter: 'drop-shadow(0 0 8px #ef4444)' }}
                                            aria-hidden="true"
                                        />

                                        {/* Permanent Label */}
                                        <text
                                            x={cx + 12}
                                            y={cy + 4}
                                            className="text-[10px] font-black uppercase tracking-tighter fill-white/80 pointer-events-none"
                                            aria-hidden="true"
                                        >
                                            {city.name}
                                        </text>
                                    </motion.g>
                                );
                            })}
                        </g>
                    </svg>

                    {/* Centered City Card Overlay */}
                    <AnimatePresence>
                        {activeCity && (
                            <div className="absolute inset-0 z-[100] flex items-center justify-center p-4">
                                {/* Backdrop Blur Mask */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setActiveCity(null)}
                                    className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
                                />

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.95, opacity: 0, y: 10 }}
                                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                                    className="relative w-full max-w-2xl bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] overflow-hidden"
                                >
                                    {/* Ambient Glow in Card */}
                                    <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                                    <div className="flex justify-between items-start mb-10 relative z-10">
                                        <div className="space-y-2">
                                            <motion.div
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]"
                                            >
                                                <Navigation className="w-3 h-3" /> Real-time Ecosystem Node
                                            </motion.div>
                                            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">{activeCity.name}</h3>
                                            <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">{activeCity.region} Hub · {activeCity.lat.toFixed(4)}°N, {activeCity.lng.toFixed(4)}°E</div>
                                        </div>
                                        <button
                                            onClick={() => setActiveCity(null)}
                                            aria-label="Close city details"
                                            className="p-4 bg-white/5 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 border border-white/5 group"
                                        >
                                            <X className="w-5 h-5" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Startup Grid - No scrollbars, dynamic height */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                        {activeCity.startups.map((startup, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + (i * 0.05) }}
                                                className="group p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-red-500/30 transition-all duration-500 flex flex-col justify-between gap-4"
                                            >
                                                <div className="space-y-1">
                                                    <div className="font-black text-lg text-white tracking-tight leading-tight group-hover:text-red-400 transition-colors">
                                                        {startup.name}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
                                                        <Rocket className="w-3 h-3" /> {startup.industry}
                                                    </div>
                                                </div>
                                                <div className="self-start px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-tighter">
                                                    {startup.status}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* View full link */}
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-10 w-full py-6 bg-white text-black rounded-3xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-red-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-xl"
                                    >
                                        Detailed Regional Deep Dive <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                    {/* Tech HUD footer */}
                    <div className="absolute left-10 bottom-10 flex flex-col gap-1 pointer-events-none opacity-40">
                        <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-[0.2em]"><Globe className="w-3 h-3" /> Coordinate.System.Active</div>
                        <div className="text-[9px] text-neutral-500 font-mono tracking-widest underline decoration-red-500/50">DATUM: WGS84 | PROJ: MERCATOR</div>
                    </div>
                </div>

                {/* Global Summary - Modernized with Glassmorphic Cards and Tech Decor */}
                <div className="relative mt-12 py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
                    {/* Tech Decor: Corners */}
                    <TechBrackets />

                    {/* HUD Markers in Margins */}
                    <HUDMarkers />

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full relative z-10">
                        {[
                            { label: 'Verified Hubs', value: '11', suffix: ' Cities', icon: Globe },
                            { label: 'Ecosystem Value', prefix: '$', value: '84', suffix: 'B', icon: Zap },
                            { label: 'Active Startups', value: '450', suffix: '+', icon: Rocket },
                            { label: 'Growth Rating', value: 'AAA+', icon: Activity }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 min-w-[240px] flex-1 max-w-[300px]"
                            >
                                {/* Stat Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">{stat.label}</div>
                                        {stat.icon && <stat.icon className="w-4 h-4 text-neutral-600 group-hover:text-red-500 transition-colors" />}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                        {/^\d+$/.test(stat.value) ? (
                                            <Counter
                                                value={parseInt(stat.value)}
                                                prefix={stat.prefix}
                                                suffix={stat.suffix}
                                            />
                                        ) : (
                                            <span>{stat.value}</span>
                                        )}
                                    </div>
                                    <div className="h-[2px] w-8 bg-neutral-800 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Connect CTA Section */}
                <div className="mt-12 pb-24 px-6 relative overflow-hidden">
                    {/* Seamless Footer Bridge */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-0" />
                    {/* Background Ambience */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-[2/1] bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 blur-[80px] rounded-full pointer-events-none transform-gpu"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-4xl mx-auto text-center relative z-10 transform-gpu"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight relative cursor-default">
                            {/* Decorative Quote Mark */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl text-white/5 font-serif select-none italic">"</span>

                            <span className="text-white/80">
                                Let’s connect together for a better experience where
                            </span>
                            <span className="md:inline hidden"> </span>
                            <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-fire-red to-blue-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                                ideas meet innovation.
                            </span>
                        </h2>

                        {/* Animated Underline/Divider */}
                        <div className="mt-12 flex flex-col items-center gap-4">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                                className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.2 }}
                                transition={{ delay: 0.8 }}
                                className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                            >
                                XPropTech Ecosystem
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

// --- Futuristic Background Components ---

// --- HUD Decoration Components ---

const TechBrackets = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
    </div>
);

const HUDMarkers = () => {
    const markers = [
        { label: 'DATA.STREAM: ACTIVE', bottom: '15%', right: '8%' },
        { label: 'REALTIME.INIT: OK', top: '40%', right: '4%' },
        { label: 'ECC.MODE: STABLE', bottom: '30%', left: '6%' },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
            {markers.map((m, i) => (
                <div
                    key={i}
                    className="absolute text-[8px] font-mono text-neutral-600 border-l border-neutral-800 pl-2 py-1 flex flex-col gap-1"
                    style={{ top: m.top, left: m.left, right: m.right, bottom: m.bottom }}
                >
                    <span className="tracking-[0.3em] uppercase">{m.label}</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-red-500/40 rounded-full animate-pulse" />
                        <div className="w-4 h-[1px] bg-neutral-800 mt-[2px]" />
                    </div>
                </div>
            ))}
        </div>
    );
};

const FuturisticBackground = ({ hasMounted }: { hasMounted: boolean }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#050505]">
            {/* Animated Gradient Mesh */}
            <motion.div
                animate={{
                    x: ['-20%', '10%', '-10%'],
                    y: ['-10%', '20%', '0%'],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen will-change-transform"
            />
            <motion.div
                animate={{
                    x: ['20%', '-10%', '10%'],
                    y: ['20%', '-10%', '10%'],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-red-600/10 blur-[150px] rounded-full mix-blend-screen will-change-transform"
            />
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0)_0%,rgba(5,5,5,0.8)_100%)] z-10"
            />

            {/* Particle Systems - Optimized Counts (Only render on client) */}
            {hasMounted && (
                <>
                    <ParticleSystem count={50} type="particles" />
                    <ParticleSystem count={20} type="nodes" />

                    {/* Stream 1: Rising from Footer - High Density (80 nodes) */}
                    <RisingNodes count={80} source="footer" />

                    {/* Stream 2: Emerging from Map - Medium Density (40 nodes) */}
                    <RisingNodes count={40} source="map" />
                </>
            )}
        </div>
    );
};

const RisingNodes = ({ count, source }: { count: number, source: 'footer' | 'map' }) => {
    const nodes = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 2,
            duration: source === 'footer' ? Math.random() * 5 + 10 : Math.random() * 4 + 8, // Map nodes are slightly faster for variety
            delay: Math.random() * 10,
            glow: Math.random() > 0.5 ? '#ef4444' : '#3b82f6',
            driftX: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 50],
        }));
    }, [count, source]);

    return (
        <div className="absolute inset-0 z-[6] pointer-events-none">
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    style={{
                        width: node.size,
                        height: node.size,
                        left: node.left,
                        bottom: source === 'footer' ? '-20px' : '45%', // Map starts roughly at 45% of the ecosystem container
                        backgroundColor: node.glow,
                    }}
                    animate={{
                        y: source === 'footer' ? [0, -2200] : [0, -1200], // Map nodes have shorter distance to Navbar
                        x: [0, ...node.driftX],
                        // Opacity Sync:
                        // Footer: [Start, Full(Bottom), FadeOut(Map), Hidden(Map), FadeIn(Heading), Full(Heading), End(Top)]
                        // Map: [Start, Full(Source), Full(Heading), End(Top)]
                        opacity: source === 'footer'
                            ? [0, 0.9, 0.9, 0, 0, 0.9, 0.9, 0]
                            : [0, 0, 0.9, 0.9, 0.9, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: node.duration,
                        delay: node.delay,
                        repeat: Infinity,
                        ease: "linear",
                        // Adjusted timing for the two flows
                        times: source === 'footer'
                            ? [0, 0.05, 0.1, 0.15, 0.6, 0.65, 0.9, 1]
                            : [0, 0.1, 0.2, 0.5, 0.9, 1]
                    }}
                    className="absolute rounded-full transform-gpu will-change-transform"
                />
            ))}
        </div>
    );
};

const ParticleSystem = ({ count, type }: { count: number, type: 'particles' | 'nodes' }) => {
    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            size: type === 'particles' ? Math.random() * 2 + 1 : Math.random() * 3 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 10,
            color: type === 'particles'
                ? (Math.random() > 0.5 ? 'rgba(255,255,255,0.2)' : 'rgba(59,130,246,0.3)')
                : (Math.random() > 0.5 ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.5)')
        }));
    }, [count, type]);

    return (
        <div className="absolute inset-0 z-[5]">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full will-change-transform"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top,
                        backgroundColor: p.color,
                        // Removed expensive boxShadow
                    }}
                    animate={type === 'particles' ? {
                        y: [-20, 20],
                        x: [-10, 10],
                        opacity: [0.1, 0.4, 0.1],
                    } : {
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2],
                        rotate: 360,
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

// --- Helper Components ---

const Counter = ({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 0.5 }
            }}
            onViewportEnter={() => {
                const controls = animate(0, value, {
                    duration: 2,
                    ease: "easeOut",
                    onUpdate: (latest) => setCount(Math.floor(latest))
                });
                return () => controls.stop();
            }}
            viewport={{ once: true }}
        >
            {prefix}{count}{suffix}
        </motion.span>
    );
};
