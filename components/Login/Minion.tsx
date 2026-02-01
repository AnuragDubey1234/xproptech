'use client';

import { useState, useEffect, useRef } from 'react';

interface MinionProps {
    variant: 'one-eye' | 'two-eyes';
    isLookingAside: boolean;
    className?: string;
}

export function Minion({ variant, isLookingAside, className = '' }: MinionProps) {
    const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
    const faceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If looking aside, freeze pupils to a specific direction (e.g., Up-Right)
        if (isLookingAside) {
            setPupilPos({ x: 4, y: -4 });
            return;
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (!faceRef.current) return;

            const rect = faceRef.current.getBoundingClientRect();
            const faceCenterX = rect.left + rect.width / 2;
            const faceCenterY = rect.top + rect.height / 2;

            // Calculate angle
            const angle = Math.atan2(event.clientY - faceCenterY, event.clientX - faceCenterX);

            // Limit pupil movement radius
            const maxRadius = 5;
            const x = Math.cos(angle) * maxRadius;
            const y = Math.sin(angle) * maxRadius;

            setPupilPos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isLookingAside]);

    return (
        <div className={`relative w-28 h-32 ${className}`} ref={faceRef}>
            {/* Body Shape */}
            <div className="absolute inset-0 bg-[#FCE029] rounded-t-[50px] rounded-b-[40px] shadow-[inset_-5px_-5px_15px_rgba(218,165,32,0.4)] border-2 border-[#E5C100]"></div>

            {/* Hair (Spiky) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-6 bg-black rounded-full rotate-[${(i-2)*15}deg] origin-bottom" style={{ transform: `rotate(${(i - 2) * 15}deg)` }} />
                ))}
            </div>

            {/* Goggle Strap */}
            <div className="absolute top-10 left-[-4px] right-[-4px] h-4 bg-[#333] rounded-sm shadow-sm z-10"></div>

            {/* Eyes Container */}
            <div className="absolute top-6 w-full flex justify-center z-20">
                {variant === 'one-eye' ? (
                    // ONE EYE
                    <div className="relative w-16 h-16 bg-white rounded-full border-[6px] border-[#999] shadow-lg flex items-center justify-center overflow-hidden">
                        {/* Eyelid (when looking aside/suspicious, maybe partially close? kept simple for now) */}
                        <div
                            className="w-6 h-6 bg-[#3D2C24] rounded-full relative transition-transform duration-100 ease-out"
                            style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
                        >
                            <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-60" />
                        </div>
                    </div>
                ) : (
                    // TWO EYES
                    <div className="flex gap-[-2px]">
                        <div className="relative w-12 h-12 bg-white rounded-full border-[5px] border-[#999] shadow-lg flex items-center justify-center overflow-hidden z-10">
                            <div
                                className="w-4 h-4 bg-[#6F4E37] rounded-full relative transition-transform duration-100 ease-out"
                                style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
                            >
                                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                            </div>
                        </div>
                        <div className="relative w-12 h-12 bg-white rounded-full border-[5px] border-[#999] shadow-lg flex items-center justify-center overflow-hidden -ml-1">
                            <div
                                className="w-4 h-4 bg-[#6F4E37] rounded-full relative transition-transform duration-100 ease-out"
                                style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
                            >
                                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mouth */}
            <div className="absolute bottom-6 w-full flex justify-center">
                {isLookingAside ? (
                    // Whistling / "Nothing to see here" mouth
                    <div className="w-2 h-2 bg-black rounded-full shadow-sm" />
                ) : (
                    // Smiley
                    <div className="w-10 h-4 border-b-[3px] border-[#333] rounded-full opacity-80" />
                )}
            </div>

            {/* Overalls Straps (Hint) */}
            <div className="absolute bottom-0 left-0 w-full h-8 px-4 flex justify-between">
                <div className="w-4 h-full bg-[#3F68A8] rounded-t-sm" />
                <div className="w-4 h-full bg-[#3F68A8] rounded-t-sm" />
            </div>

        </div>
    );
}
