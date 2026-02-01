'use client';

import { useState, useEffect, useRef } from 'react';

export function WatchingEyes() {
    const [leftEyePosition, setLeftEyePosition] = useState({ x: 0, y: 0 });
    const [rightEyePosition, setRightEyePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate angle
            const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

            // Limit the movement radius
            const maxRadius = 8;
            const x = Math.cos(angle) * maxRadius;
            const y = Math.sin(angle) * maxRadius;

            setLeftEyePosition({ x, y });
            setRightEyePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="flex justify-center gap-4 py-6">
            {/* Left Eye */}
            <div className="relative w-16 h-16 bg-white rounded-full border-2 border-gray-200 shadow-inner flex items-center justify-center overflow-hidden">
                <div
                    className="w-6 h-6 bg-black rounded-full shadow-md transition-transform duration-75 ease-out"
                    style={{ transform: `translate(${leftEyePosition.x}px, ${leftEyePosition.y}px)` }}
                />
                <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full opacity-50 pointer-events-none" />
            </div>

            {/* Right Eye */}
            <div className="relative w-16 h-16 bg-white rounded-full border-2 border-gray-200 shadow-inner flex items-center justify-center overflow-hidden">
                <div
                    className="w-6 h-6 bg-black rounded-full shadow-md transition-transform duration-75 ease-out"
                    style={{ transform: `translate(${rightEyePosition.x}px, ${rightEyePosition.y}px)` }}
                />
                <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full opacity-50 pointer-events-none" />
            </div>
        </div>
    );
}
