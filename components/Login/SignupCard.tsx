'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface SignupCardProps {
    onLoginClick?: () => void;
    onClose?: () => void;
}

export function SignupCard({ onLoginClick, onClose }: SignupCardProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to center of screen (normalized -0.5 to 0.5)
        const normalizedX = (e.clientX - rect.left) / width - 0.5;
        const normalizedY = (e.clientY - rect.top) / height - 0.5;

        x.set(normalizedX);
        y.set(normalizedY);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div
            className="w-full max-w-lg relative perspective-1000"
            onMouseMove={handleMouseMove}
            style={{ perspective: "1000px" }}
        >
            {/* Close Button */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-0 right-[-3rem] md:right-[-4rem] text-white/50 hover:text-white transition-colors z-50"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}

            {/* The 3D Card */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="w-full z-10"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                >
                    {/* Dynamic Glow Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-10 translate-z-10" style={{ transform: "translateZ(20px)" }}>
                        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            JOIN UP
                        </h2>
                        <p className="text-gray-400 font-medium">Initialize your XPropTech sequence</p>
                    </motion.div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                        {/* Name */}
                        <motion.div variants={itemVariants} className="relative group">
                            <input
                                type="text" name="name" placeholder="Agent Name"
                                value={formData.name} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-fire-red focus:bg-white/10 transition-all duration-300 focus:scale-[1.02]"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants} className="relative group">
                            <input
                                type="email" name="email" placeholder="Access ID (Email)"
                                value={formData.email} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-fire-red focus:bg-white/10 transition-all duration-300 focus:scale-[1.02]"
                            />
                        </motion.div>

                        {/* Password */}
                        <motion.div variants={itemVariants} className="relative group">
                            <input
                                type="password" name="password" placeholder="Passcode"
                                value={formData.password} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-fire-red focus:bg-white/10 transition-all duration-300 focus:scale-[1.02]"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants} className="pt-4">
                            <button className="w-full relative overflow-hidden group/btn bg-white text-black font-black text-xl py-4 rounded-xl hover:scale-105 transition-transform duration-300">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    ACTIVATE <span className="group-hover/btn:rotate-45 transition-transform">🚀</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-fire-red to-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-white group-hover/btn:opacity-0 transition-opacity duration-300" />
                                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover/btn:text-white pointer-events-none">
                                    ACTIVATE <span className="group-hover/btn:rotate-45 transition-transform">🚀</span>
                                </span>
                            </button>
                        </motion.div>

                    </form>

                    {/* Footer Link */}
                    <motion.div variants={itemVariants} className="mt-8 text-center">
                        <button
                            onClick={onLoginClick}
                            className="text-gray-500 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase"
                        >
                            // ALREADY_INITIALIZED? LOGIN
                        </button>
                    </motion.div>

                </motion.div>
            </motion.div>
        </div>
    );
}
