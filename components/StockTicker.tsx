'use client';

import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

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

export function StockTicker({ transparent = false }: { transparent?: boolean }) {
    return (
        <div className={`relative w-full h-16 flex items-center overflow-hidden border-t border-white/10 ${transparent ? 'bg-transparent' : 'bg-black/60 backdrop-blur-md'}`}>
            <div className="flex animate-scroll whitespace-nowrap gap-12 px-6 will-change-transform">
                {/* Duplicated list for seamless scrolling */}
                {[...stocks, ...stocks, ...stocks, ...stocks].map((stock, i) => (
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
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
