'use client';

import { useEffect, useState } from 'react';

export function EcosystemShower() {
    const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

    useEffect(() => {
        // Generate static particles
        const particleCount = 40;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            // Spread across 5-95% to avoid edge cutoff, but cover full width
            left: 5 + Math.random() * 90,
            delay: Math.random() * 5,
            duration: 4 + Math.random() * 5,
            size: 4 + Math.random() * 4,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-[400px] pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <style jsx>{`
                @keyframes snowfall {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.8;
                    }
                    90% {
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(400px);
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />

            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-neutral-600"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: 0,
                        animationName: 'snowfall',
                        animationDuration: `${p.duration}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
