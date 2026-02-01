'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

function EyeIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    );
}

function EyeOffIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
    );
}

interface SignupCardProps {
    onLoginClick?: () => void;
    onClose?: () => void;
}

export function SignupCard({ onLoginClick, onClose }: SignupCardProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-md relative"
        >

            {/* The Classy Card - Optimized Vertical Height (Stationary) */}
            <div className="bg-[#0c0c0c] border border-white/10 p-9 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden">
                {/* Close Button - Top Left */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-6 left-6 text-white/30 hover:text-white transition-colors z-20"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Subtle backlight */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-fire-red/5 blur-[120px] pointer-events-none" />

                {/* Header */}
                <div className="text-center mb-7 relative z-10">
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-black mb-1.5 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 uppercase"
                    >
                        SIGN UP
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 text-[10px] font-bold tracking-[0.25em] uppercase opacity-70"
                    >
                        XPropTech Authentication
                    </motion.p>
                </div>

                {/* Form - 5 Fields Stacked (Vertical) */}
                <form className="space-y-3.5 relative z-10" onSubmit={(e) => e.preventDefault()}>

                    {/* Full Name */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="text" name="fullName" placeholder="Full Name"
                            value={formData.fullName} onChange={handleChange}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 outline-none focus:border-fire-red/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                        />
                    </motion.div>

                    {/* Username */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="text" name="username" placeholder="Create Username"
                            value={formData.username} onChange={handleChange}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 outline-none focus:border-fire-red/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="email" name="email" placeholder="Email Address"
                            value={formData.email} onChange={handleChange}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 outline-none focus:border-fire-red/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                        />
                    </motion.div>

                    {/* Password */}
                    <motion.div variants={itemVariants}>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} name="password" placeholder="Create Password"
                                value={formData.password} onChange={handleChange}
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 outline-none focus:border-fire-red/40 focus:bg-white/[0.06] transition-all duration-300 text-sm pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-300 transition-colors rounded-lg"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Confirm Password */}
                    <motion.div variants={itemVariants}>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password"
                                value={formData.confirmPassword} onChange={handleChange}
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 outline-none focus:border-fire-red/40 focus:bg-white/[0.06] transition-all duration-300 text-sm pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-300 transition-colors rounded-lg"
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants} className="pt-4">
                        <button className="w-full group/btn relative overflow-hidden bg-white text-black font-black text-sm py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]">
                            <span className="relative z-10 tracking-[0.2em] uppercase">Create Account</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fire-red/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        </button>
                    </motion.div>

                </form>

                {/* Footer */}
                <motion.div variants={itemVariants} className="mt-8 text-center relative z-10 border-t border-white/5 pt-6">
                    <p className="text-gray-600 text-[10px] font-bold inline mr-3 uppercase tracking-wider">Already a member?</p>
                    <button
                        onClick={onLoginClick}
                        className="text-white hover:text-fire-red transition-colors text-[10px] font-black uppercase tracking-widest"
                    >
                        Sign In
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
