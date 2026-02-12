'use client';

import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Stock {
    symbol: string;
    name: string;
    price: string;
    change: string;
    up: boolean;
    region: 'IND' | 'GCC';
}

const indiaStocks: Stock[] = [
    { symbol: 'DLF', name: 'DLF Limited', price: '₹892.45', change: '+2.4%', up: true, region: 'IND' },
    { symbol: 'GODREJ', name: 'Godrej Props', price: '₹2,450.10', change: '+1.8%', up: true, region: 'IND' },
    { symbol: 'OBEROI', name: 'Oberoi Realty', price: '₹1,560.75', change: '+3.1%', up: true, region: 'IND' },
    { symbol: 'PHOENIX', name: 'Phoenix Mills', price: '₹3,210.00', change: '+0.4%', up: true, region: 'IND' },
    { symbol: 'PRESTIGE', name: 'Prestige Est', price: '₹1,240.50', change: '+1.2%', up: true, region: 'IND' },
    { symbol: 'BRIGADE', name: 'Brigade Ent', price: '₹980.20', change: '-0.8%', up: false, region: 'IND' },
    { symbol: 'SOBHA', name: 'Sobha Ltd', price: '₹1,450.00', change: '+0.5%', up: true, region: 'IND' },
];

const gccStocks: Stock[] = [
    { symbol: 'EMAAR', name: 'Emaar Properties', price: 'AED 8.45', change: '+1.2%', up: true, region: 'GCC' },
    { symbol: 'ALDAR', name: 'Aldar Properties', price: 'AED 5.60', change: '+0.8%', up: true, region: 'GCC' },
    { symbol: 'DAMAC', name: 'Damac Properties', price: 'AED 1.40', change: '+0.5%', up: true, region: 'GCC' },
    { symbol: 'DEYAAR', name: 'Deyaar Dev', price: 'AED 0.75', change: '-1.2%', up: false, region: 'GCC' },
    { symbol: 'UNION', name: 'Union Prop', price: 'AED 0.32', change: '+2.1%', up: true, region: 'GCC' },
    { symbol: 'DAR', name: 'Dar Al Arkan', price: 'SAR 14.20', change: '+0.4%', up: true, region: 'GCC' },
    { symbol: 'JABAL', name: 'Jabal Omar', price: 'SAR 28.50', change: '-0.5%', up: false, region: 'GCC' },
];

export function StockTicker({ transparent = false, region = 'IND' }: { transparent?: boolean, region?: 'IND' | 'GCC' }) {
    const stocks = region === 'GCC' ? gccStocks : indiaStocks;

    return (
        <div className={`relative w-full h-14 md:h-16 flex items-center overflow-hidden border-t border-white/5 border-b border-white/5 ${transparent ? 'bg-transparent' : 'bg-neutral-900/60 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-900/40'}`}>
            {/* Glass Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="flex animate-scroll whitespace-nowrap gap-12 px-6 will-change-transform items-center">
                {/* Duplicated list for seamless scrolling */}
                {[...stocks, ...stocks, ...stocks, ...stocks].map((stock, i) => (
                    <div key={`${stock.symbol}-${i}`} className="flex items-center gap-2 group cursor-default">
                        <span className="font-bold text-sm text-neutral-400 group-hover:text-white transition-colors">{stock.symbol}</span>
                        <span className="font-bold text-sm text-white">{stock.price}</span>
                        <span className={`text-xs font-bold flex items-center ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                            {stock.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {stock.change}
                        </span>
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
