'use client';

import { useState, useEffect, useRef } from 'react';

interface LoginCharacterProps {
    isPasswordFocused: boolean;
    showPassword: boolean;
}

export function LoginCharacter({ isPasswordFocused, showPassword }: LoginCharacterProps) {
    const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
    const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });
    const faceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If hiding or focusing logic takes over, stop tracking
        if (isPasswordFocused || showPassword) return;

        const handleMouseMove = (event: MouseEvent) => {
            if (!faceRef.current) return;

            const rect = faceRef.current.getBoundingClientRect();
            const faceCenterX = rect.left + rect.width / 2;
            const faceCenterY = rect.top + rect.height / 2;

            const angle = Math.atan2(event.clientY - faceCenterY, event.clientX - faceCenterX);
            const maxRadius = 6;
            const x = Math.cos(angle) * maxRadius;
            const y = Math.sin(angle) * maxRadius;

            setLeftEyePos({ x, y });
            setRightEyePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isPasswordFocused, showPassword]);

    return (
        <div className="flex justify-center mb-4 relative">

            {/* Speech Bubble - Side Positioned "Thinking" Style */}
            {/* Positioned based on center + offset to ensure it stays next to the head */}
            <div className="absolute top-0 left-[50%] translate-x-[70px] z-20 animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-forwards origin-bottom-left hidden sm:block">
                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl rounded-bl-none shadow-xl border border-white/60 relative transform hover:scale-105 transition-transform">
                    <span className="text-gray-900 font-bold text-sm gibson-bold tracking-wide whitespace-nowrap">Hey welcome to XPropTech</span>
                    {/* Tail pointing towards the character */}
                    <div className="absolute bottom-0 -left-1.5 w-4 h-4 bg-white/95 border-l border-b border-white/60 [clip-path:polygon(100%_0,0%_100%,100%_100%)]"></div>
                </div>
            </div>

            <div
                ref={faceRef}
                className="relative w-32 h-32 bg-[#ffdac7] rounded-[40%] flex flex-col items-center shadow-lg transition-all duration-300"
            >
                {/* Hair Back */}
                <div className="absolute top-[-20%] w-[110%] h-[80%] bg-[#2d3748] rounded-[50%_50%_40%_40%] -z-10" />

                {/* Bangs */}
                <div className="absolute top-[-5px] w-full h-12 overflow-hidden rounded-t-[40%]">
                    <div className="w-[120%] h-16 bg-[#2d3748] rounded-[50%] absolute top-[-20%] left-[-10%]" />
                </div>

                {/* Face Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center pt-8">

                    {/* Eyes Container */}
                    <div className="flex justify-between w-16 mb-3">
                        {showPassword ? (
                            // TWISTED / CHEEKY MODE (Show Password)
                            <>
                                {/* Squinted/Closed Cheeky Eyes (> < style) */}
                                <div className="w-6 h-2 border-b-2 border-gray-800 rotate-12 mt-2 transition-all duration-200" />
                                <div className="w-6 h-2 border-b-2 border-gray-800 -rotate-12 mt-2 transition-all duration-200" />
                            </>
                        ) : isPasswordFocused ? (
                            // PRIVACY MODE (Focus)
                            <>
                                <div className="w-6 h-1 bg-gray-800 rounded-full rotate-12 mt-2 transition-all duration-200" />
                                <div className="w-6 h-1 bg-gray-800 rounded-full -rotate-12 mt-2 transition-all duration-200" />
                            </>
                        ) : (
                            // TRACKING MODE (Normal)
                            <>
                                <div className="relative w-6 h-8 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner">
                                    <div
                                        className="w-3 h-4 bg-gray-900 rounded-full absolute top-2 left-1.5"
                                        style={{ transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)` }}
                                    />
                                </div>
                                <div className="relative w-6 h-8 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner">
                                    <div
                                        className="w-3 h-4 bg-gray-900 rounded-full absolute top-2 left-1.5"
                                        style={{ transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)` }}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    {/* Blush */}
                    <div className="absolute top-[55%] w-full px-4 flex justify-between opacity-40">
                        <div className="w-4 h-2 bg-pink-400 rounded-full blur-[2px]" />
                        <div className="w-4 h-2 bg-pink-400 rounded-full blur-[2px]" />
                    </div>

                    {/* Mouth */}
                    <div className="mt-2">
                        {showPassword ? (
                            // TWISTED LIP for Show Password (squiggly ~)
                            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="stroke-gray-800 stroke-2">
                                <path d="M2 4C5 1 9 7 12 4C15 1 19 7 22 4" strokeLinecap="round" />
                            </svg>
                        ) : isPasswordFocused ? (
                            // 'o' Mouth for Privacy
                            <div className="w-2 h-2 bg-pink-300 rounded-full transition-all duration-200" />
                        ) : (
                            // Normal Smile
                            <div className="w-5 h-2.5 border-b-2 border-gray-700 rounded-[50%] transition-all duration-200" />
                        )}
                    </div>

                    {/* Hands covering eyes animation (Only on Focus, not just showing password) */}
                    {isPasswordFocused && !showPassword && (
                        <div className="absolute top-[35%] w-full flex justify-between px-2 transition-opacity duration-300">
                            <div className="w-10 h-10 bg-[#ffdac7] border-2 border-[#e6c3b0] rounded-full translate-x-2 rotate-[-20deg] shadow-sm" />
                            <div className="w-10 h-10 bg-[#ffdac7] border-2 border-[#e6c3b0] rounded-full -translate-x-2 rotate-[20deg] shadow-sm" />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
