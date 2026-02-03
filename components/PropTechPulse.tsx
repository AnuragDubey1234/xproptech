'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, Globe, Building2 } from 'lucide-react';

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
    { symbol: 'GODREJPROP', name: 'Godrej Properties', price: '2,450.10', change: '+1.8%', up: true, region: 'IND' },
    { symbol: 'Z', name: 'Zillow Group', price: '$54.20', change: '-0.5%', up: false, region: 'USA' },
    { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', price: '1,560.75', change: '+3.1%', up: true, region: 'IND' },
    { symbol: 'ABNB', name: 'Airbnb Inc.', price: '$135.60', change: '+0.9%', up: true, region: 'USA' },
    { symbol: 'CSGP', name: 'CoStar Group', price: '$88.90', change: '-1.2%', up: false, region: 'USA' },
    { symbol: 'PHOENIXLTD', name: 'Phoenix Mills', price: '3,210.00', change: '+0.4%', up: true, region: 'IND' },
    { symbol: 'RDFN', name: 'Redfin Corp', price: '$7.85', change: '-2.1%', up: false, region: 'USA' },
];

export function PropTechPulse() {
    return (
        <section className="relative w-full h-[650px] mt-8 rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-neutral-800 perspective-1000 group">

            {/* 1. Dynamic Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-black" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] h-[200%] origin-top transform rotate-x-60 translate-y-[-10%]" />
            </div>


            {/* 2. Central Pulse Core */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                    {/* Glowing Orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-[50px] animate-pulse delay-75" />

                    {/* Central Text */}
                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center"
                        >
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
                                <Activity className="w-3 h-3" /> Live Market
                            </span>
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                                PROP<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">TECH</span><br />
                                EQUITY
                            </h2>
                            <p className="text-neutral-400 font-mono mt-4 text-sm md:text-base max-w-md mx-auto">
                                Real-time tracking of leading global real estate technology stocks.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 3. Orbiting Stock Cards */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Orbital Path 1 (Slow) */}
                <OrbitingCards radius={350} duration={40} direction="normal" stocks={[stocks[0], stocks[2], stocks[4]]} />

                {/* Orbital Path 2 (Medium) */}
                <OrbitingCards radius={250} duration={30} direction="reverse" stocks={[stocks[1], stocks[3], stocks[5]]} />
            </div>

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
        </section>
    );
}

// Helper: Circular/Elliptical Orbit Animation
function OrbitingCards({ radius, duration, direction, stocks }: { radius: number, duration: number, direction: 'normal' | 'reverse', stocks: Stock[] }) {

    // Calculate precise positions along a circle
    const getPosition = (index: number, total: number) => {
        const angle = (index / total) * 360;
        return angle;
    };

    return (
        <motion.div
            animate={{ rotate: direction === 'normal' ? 360 : -360 }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-0 h-0"
        >
            {stocks.map((stock, i) => {
                const angle = getPosition(i, stocks.length);
                return (
                    <div
                        key={stock.symbol}
                        className="absolute"
                        style={{
                            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` // Keep card upright
                        }}
                    >
                        {/* Counter-rotate the card content so it stays upright while the container spins */}
                        <motion.div
                            animate={{ rotate: direction === 'normal' ? -360 : 360 }}
                            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                        >
                            <StockCard stock={stock} />
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    );
}

function StockCard({ stock }: { stock: Stock }) {
    return (
        <div className="w-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group pointer-events-auto">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400">
                        {stock.region === 'IND' ? <Building2 size={14} /> : <Globe size={14} />}
                    </div>
                    <span className="text-xs font-bold text-neutral-400">{stock.symbol}</span>
                </div>
                {stock.up ?
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full"><ArrowUpRight size={14} /></div> :
                    <div className="bg-red-500/20 text-red-400 p-1 rounded-full"><ArrowDownRight size={14} /></div>
                }
            </div>

            <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">{stock.price}</span>
                <span className={`text-xs font-bold ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.change} Today
                </span>
            </div>

            {/* Mini Chart Line (CSS Gradient) */}
            <div className={`h-1 w-full rounded-full mt-3 ${stock.up ? 'bg-gradient-to-r from-transparent to-green-500' : 'bg-gradient-to-r from-transparent to-red-500'} opacity-50`} />
        </div>
    );
}
