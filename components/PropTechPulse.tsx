'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function PropTechPulse() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[600px] mt-24 rounded-[3rem] overflow-hidden bg-neutral-900 border border-neutral-800 perspective-1000 group cursor-crosshair"
        >
            {/* Background Grid & Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-900 to-neutral-950" />

            {/* Animated Grid Floor */}
            <div className="absolute inset-0 opacity-20 transform-gpu perspective-3d">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] h-[200%] origin-top transform rotate-x-60 translate-y-[-20%]" />
            </div>

            {/* Glowing Core - The "Pulse" */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96"
                >
                    {/* Concentric Rings */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`absolute inset-0 border border-fire-red/${30 - i * 5} rounded-full animate-ping`} style={{ animationDuration: `${3 + i}s`, animationDelay: `${i * 0.5}s` }} />
                    ))}

                    {/* Central Orb */}
                    <div className="absolute inset-10 md:inset-20 bg-gradient-to-tr from-fire-red to-orange-600 rounded-full blur-[60px] opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20 tracking-tighter text-center z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            FUTURE<br />READY
                        </h2>
                    </div>
                </motion.div>
            </div>

            {/* Floating Data Cards */}
            <FloatingCard
                text="Smart City Data"
                value="+247%"
                x={20} y={-60}
                delay={0}
                mouseX={mousePosition.x} mouseY={mousePosition.y}
            />
            <FloatingCard
                text="Live Investments"
                value="$12.4M"
                x={-60} y={-20}
                delay={1}
                mouseX={mousePosition.x} mouseY={mousePosition.y}
            />
            <FloatingCard
                text="IoT Nodes Active"
                value="8,902"
                x={60} y={30}
                delay={2}
                mouseX={mousePosition.x} mouseY={mousePosition.y}
            />
            <FloatingCard
                text="Sustainability Score"
                value="A+"
                x={-30} y={70}
                delay={3}
                mouseX={mousePosition.x} mouseY={mousePosition.y}
            />

            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
        </section>
    );
}

function FloatingCard({ text, value, x, y, delay, mouseX, mouseY }: { text: string, value: string, x: number, y: number, delay: number, mouseX: number, mouseY: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay * 0.2, duration: 0.8, type: "spring" }}
            animate={{
                x: x * 5 + (mouseX * -50),
                y: y * 3 + (mouseY * -50),
            }}
            className={`absolute top-1/2 left-1/2 w-48 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col items-start gap-1`}
            style={{
                marginLeft: `${x}%`, // Base position offset
                marginTop: `${y}px`
            }}
        >
            <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-fire-red animate-pulse" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{text}</span>
            </div>
            <span className="text-2xl font-bold text-white font-mono">{value}</span>
            <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%" }}
                    transition={{ delay: 1 + delay, duration: 1.5 }}
                    className="h-full bg-gradient-to-r from-fire-red to-orange-500"
                />
            </div>
        </motion.div>
    );
}
