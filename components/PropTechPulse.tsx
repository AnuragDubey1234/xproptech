'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Activity, Globe, Building2, X } from 'lucide-react';

// Mock Data for PropTech & Real Estate Stocks
interface Stock {
    symbol: string;
    name: string;
    price: string;
    change: string;
    up: boolean;
    region: 'IND' | 'USA';
}

const stocks: Stock[] = [
    { symbol: 'DLF', name: 'DLF Limited', price: '892.45', change: '+2.4%', up: true, region: 'IND' },
    { symbol: 'GODREJ', name: 'Godrej Props', price: '2,450.10', change: '+1.8%', up: true, region: 'IND' },
    { symbol: 'Z', name: 'Zillow Group', price: '$54.20', change: '-0.5%', up: false, region: 'USA' },
    { symbol: 'OBEROI', name: 'Oberoi Realty', price: '1,560.75', change: '+3.1%', up: true, region: 'IND' },
    { symbol: 'ABNB', name: 'Airbnb Inc.', price: '$135.60', change: '+0.9%', up: true, region: 'USA' },
    { symbol: 'CSGP', name: 'CoStar Group', price: '$88.90', change: '-1.2%', up: false, region: 'USA' },
    { symbol: 'PHOENIX', name: 'Phoenix Mills', price: '3,210.00', change: '+0.4%', up: true, region: 'IND' },
    { symbol: 'RDFN', name: 'Redfin Corp', price: '$7.85', change: '-2.1%', up: false, region: 'USA' },
    { symbol: 'OPEN', name: 'Opendoor', price: '$2.15', change: '-4.3%', up: false, region: 'USA' },
    { symbol: 'COMP', name: 'Compass Inc.', price: '$3.45', change: '+1.2%', up: true, region: 'USA' },
    { symbol: 'MTTR', name: 'Matterport', price: '$2.80', change: '+0.5%', up: true, region: 'USA' },
];

export function PropTechPulse() {
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

    // Split stocks for inner and outer orbits
    const innerStocks = stocks.slice(0, 5);
    const outerStocks = stocks.slice(5);

    return (
        <section className="relative w-full h-[600px] mt-8 rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-neutral-800 perspective-1000 group">

            {/* 1. Dynamic Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-black" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] h-[200%] origin-top transform rotate-x-60 translate-y-[-10%]" />
            </div>

            {/* 2. Central Pulse Core */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full">
                <div className="relative z-10 text-center px-4">
                    {/* Glowing Orbs - Reduced opacity and size to not distract */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-cyan-500/10 rounded-full blur-[50px] animate-pulse delay-75 -z-10" />

                    {/* Dark Mask behind text to ensure readability */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#0a0a0a]/80 blur-2xl -z-10" />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                            <Activity className="w-3 h-3" /> Live Market
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl relative z-20">
                            PROP<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">TECH</span><br />
                            EQUITY
                        </h2>
                        <p className="text-neutral-400 font-mono mt-4 text-sm md:text-base max-w-md mx-auto relative z-20">
                            Real-time tracking of leading global real estate technology stocks.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 3. Central Orbiting Cards */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                {/* Inner Orbit */}
                <OrbitingCards
                    stocks={innerStocks}
                    radius={280}
                    duration={40}
                    direction="normal"
                    onSelect={setSelectedStock}
                />
                {/* Outer Orbit */}
                <OrbitingCards
                    stocks={outerStocks}
                    radius={420}
                    duration={60}
                    direction="reverse"
                    onSelect={setSelectedStock}
                />
            </div>

            {/* Expanded Card Overlay */}
            <AnimatePresence>
                {selectedStock && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStock(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            layoutId={selectedStock.symbol}
                            className="relative w-full max-w-sm bg-neutral-950/90 border border-neutral-800 rounded-3xl p-8 shadow-2xl overflow-hidden z-[101] backdrop-blur-xl"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedStock(null); }}
                                className="absolute top-4 right-4 p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition"
                            >
                                <X size={16} className="text-white" />
                            </button>

                            {/* Expanded Content */}
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-neutral-800 text-cyan-400">
                                            {selectedStock.region === 'IND' ? <Building2 size={24} /> : <Globe size={24} />}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white leading-none">{selectedStock.symbol}</h3>
                                            <span className="text-sm text-neutral-400">{selectedStock.name}</span>
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${selectedStock.up ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {selectedStock.change}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center py-6 bg-neutral-900/50 rounded-2xl border border-white/5">
                                    <span className="text-neutral-400 text-sm font-mono uppercase tracking-widest mb-2">Current Price</span>
                                    <span className="text-5xl font-black text-white tracking-tighter">{selectedStock.price}</span>
                                </div>

                                <div className="text-center text-neutral-500 text-xs">
                                    Market data detailed view. Click outside to close.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>


            {/* 4. Bottom Ticker Tape */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md border-t border-white/5 flex items-center overflow-hidden z-20">
                <div className="flex animate-scroll whitespace-nowrap gap-12 px-6">
                    {/* Duplicated list for seamless scrolling */}
                    {[...stocks, ...stocks, ...stocks].map((stock, i) => (
                        <div key={`${stock.symbol}-${i}`} className="flex items-center gap-3">
                            <span className="font-bold text-neutral-300">{stock.symbol}</span>
                            <span className="font-mono text-white">{stock.price}</span>
                            <span className={`text-xs font-bold flex items-center ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
                @keyframes orbit-normal {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes orbit-reverse {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
                }
                @keyframes counter-normal {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
                }
                @keyframes counter-reverse {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-orbit-normal {
                    animation: orbit-normal linear infinite;
                }
                .animate-orbit-reverse {
                    animation: orbit-reverse linear infinite;
                }
                .animate-counter-normal {
                    animation: counter-normal linear infinite;
                }
                .animate-counter-reverse {
                    animation: counter-reverse linear infinite;
                }
            `}</style>
        </section>
    );
}

// Orbiting Cards Component
function OrbitingCards({ stocks, radius, duration, direction, onSelect }: { stocks: Stock[], radius: number, duration: number, direction: 'normal' | 'reverse', onSelect: (s: Stock) => void }) {
    return (
        <div className="absolute top-1/2 left-1/2 w-0 h-0 group/orbit pointer-events-auto">
            {/* Main Ring */}
            <div
                className={`absolute inset-0 flex items-center justify-center ${direction === 'normal' ? 'animate-orbit-normal' : 'animate-orbit-reverse'} group-hover/orbit:[animation-play-state:paused]`}
                style={{ animationDuration: `${duration}s` }}
            >
                {stocks.map((stock, i) => {
                    const angle = (i / stocks.length) * 360;
                    return (
                        <div
                            key={stock.symbol}
                            className="absolute top-1/2 left-1/2 w-0 h-0"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px)`,
                            }}
                        >
                            {/* Counter Rotation to keep cards Upright */}
                            <div
                                className={`${direction === 'normal' ? 'animate-counter-normal' : 'animate-counter-reverse'} group-hover/orbit:[animation-play-state:paused]`}
                                style={{ animationDuration: `${duration}s` }}
                            >
                                <div style={{ transform: `rotate(-${angle}deg)` }}>
                                    <TiltCard
                                        stock={stock}
                                        index={i}
                                        side={angle > 90 && angle < 270 ? 'left' : 'right'} // Just for tilt visual
                                        onClick={() => onSelect(stock)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// 3D Tilt Card Component
function TiltCard({ stock, index, side, onClick }: { stock: Stock, index: number, side: 'left' | 'right', onClick: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            layoutId={stock.symbol}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, zIndex: 100 }} // The "Pop" effect
            className="relative w-56 cursor-pointer"
        >
            <div
                style={{ transform: "translateZ(20px)" }}
                className="relative bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(8,112,184,0.2)] transition-colors duration-300"
            >
                {/* Shiny Glare Gradient - Reduced Intensity */}
                <motion.div
                    style={{
                        opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.15]), // Much more subtle
                        background: "linear-gradient(to top right, transparent, rgba(255, 255, 255, 0.1), transparent)", // White tint reduced significantly
                        x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
                        y: useTransform(mouseY, [-0.5, 0.5], [50, -50]),
                    }}
                    className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                />

                <div className="flex justify-between items-start mb-2 relative z-0">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-neutral-900 text-neutral-500 group-hover:text-cyan-400 transition-colors">
                            {stock.region === 'IND' ? <Building2 size={14} /> : <Globe size={14} />}
                        </div>
                        <span className="text-xs font-bold text-neutral-500 group-hover:text-neutral-300">{stock.symbol}</span>
                    </div>
                    {stock.up ?
                        <div className="bg-green-500/10 text-green-500 p-1 rounded-full"><ArrowUpRight size={14} /></div> :
                        <div className="bg-red-500/10 text-red-500 p-1 rounded-full"><ArrowDownRight size={14} /></div>
                    }
                </div>

                <div className="flex flex-col relative z-0">
                    <span className="text-xl font-bold text-neutral-200 tracking-tight group-hover:text-white transition-colors">{stock.price}</span>
                    <span className={`text-xs font-bold ${stock.up ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.change} Today
                    </span>
                </div>

                {/* Mini Chart Line */}
                <div className={`h-1 w-full rounded-full mt-3 ${stock.up ? 'bg-gradient-to-r from-transparent to-green-900' : 'bg-gradient-to-r from-transparent to-red-900'} opacity-30 group-hover:opacity-100 transition-opacity`} />
            </div>
        </motion.div>
    );
}
