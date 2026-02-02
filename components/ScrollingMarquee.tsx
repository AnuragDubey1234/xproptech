
export function ScrollingMarquee() {
    return (
        <div className="relative w-full py-6 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
                <div className="animate-marquee flex gap-16 items-center text-neutral-400/50 font-bold text-lg md:text-xl uppercase tracking-[0.2em] pr-16">
                    {/* First Loop */}
                    {[...Array(6)].map((_, i) => (
                        <div key={`a-${i}`} className="flex items-center gap-16 flex-shrink-0">
                            <span>Future of Living</span>
                            <span className="text-fire-red">•</span>
                            <span>Smart Cities</span>
                            <span className="text-fire-red">•</span>
                            <span>PropTech 3.0</span>
                            <span className="text-fire-red">•</span>
                        </div>
                    ))}
                    {/* Second Loop (Duplicate for seamless scroll) */}
                    {[...Array(6)].map((_, i) => (
                        <div key={`b-${i}`} className="flex items-center gap-16 flex-shrink-0">
                            <span>Future of Living</span>
                            <span className="text-fire-red">•</span>
                            <span>Smart Cities</span>
                            <span className="text-fire-red">•</span>
                            <span>PropTech 3.0</span>
                            <span className="text-fire-red">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
