'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function EcosystemShower() {
    // Generate static particles to avoid hydration mismatch
    const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; height: number }>>([]);

    useEffect(() => {
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random horizontal position %
            delay: Math.random() * 5, // Random delay
            duration: 3 + Math.random() * 4, // Random duration (slow fall)
            height: 20 + Math.random() * 40, // Random height of the "drop"
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden">
            {/* Gradient Mask to Fade Out at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />

            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 600, opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                    style={{
                        left: `${particle.x}%`,
                        height: `${particle.height}px`,
                    }}
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40 will-change-transform"
                />
            ))}
        </div>
    );
}
