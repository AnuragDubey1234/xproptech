'use client';

import { motion } from 'framer-motion';

export function StartupSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden h-[400px]">
                    <div className="h-48 bg-white/5 animate-pulse" />
                    <div className="p-6 space-y-4">
                        <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-3 bg-white/5 rounded-full w-full animate-pulse" />
                            <div className="h-3 bg-white/5 rounded-full w-5/6 animate-pulse" />
                        </div>
                        <div className="pt-8 border-t border-white/5 flex justify-between">
                            <div className="h-4 bg-white/5 rounded-full w-1/4 animate-pulse" />
                            <div className="w-10 h-10 rounded-full bg-white/5 animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
