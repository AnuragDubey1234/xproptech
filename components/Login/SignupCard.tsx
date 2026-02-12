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

            {/* The Beautiful Card - Balanced & Premium */}
            <div className="bg-white/80 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12),0_18px_36px_-18px_rgba(0,0,0,0.15)] relative overflow-hidden ring-1 ring-white/50">

                {/* Subtle sheen reflection for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                {/* Close Button - Top Left */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-6 left-6 text-neutral-400 hover:text-neutral-900 transition-colors z-20 p-2 hover:bg-white/50 rounded-full"
                        aria-label="Close"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Header - Balanced */}
                <div className="text-center mb-6 relative z-10 pt-2">
                    <motion.div variants={itemVariants} className="mb-4 flex justify-center">
                        <div className="p-2.5 bg-white/50 rounded-2xl shadow-sm border border-white/60 backdrop-blur-sm">
                            <img src="/logo.png" alt="XPropTech" className="h-9 w-auto object-contain" />
                        </div>
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl font-bold mb-1 tracking-tight text-neutral-900"
                    >
                        Join XPropTech
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-neutral-500 text-xs font-medium tracking-wide"
                    >
                        Access exclusive proptech insights.
                    </motion.p>
                </div>

                {/* Form - Standard Spacing */}
                <form className="space-y-3.5 relative z-10" onSubmit={(e) => e.preventDefault()}>

                    {/* Full Name */}
                    <motion.div variants={itemVariants}>
                        <div className="relative group">
                            <input
                                type="text" name="fullName" placeholder="Full Name"
                                value={formData.fullName} onChange={handleChange}
                                className="w-full bg-white/60 border border-neutral-200/60 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-fire-red focus:bg-white focus:ring-4 focus:ring-fire-red/5 transition-all duration-300 text-sm font-bold backdrop-blur-sm group-hover:bg-white/80"
                            />
                        </div>
                    </motion.div>

                    {/* Username */}
                    <motion.div variants={itemVariants}>
                        <div className="relative group">
                            <input
                                type="text" name="username" placeholder="Username"
                                value={formData.username} onChange={handleChange}
                                className="w-full bg-white/60 border border-neutral-200/60 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-fire-red focus:bg-white focus:ring-4 focus:ring-fire-red/5 transition-all duration-300 text-sm font-bold backdrop-blur-sm group-hover:bg-white/80"
                            />
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                        <div className="relative group">
                            <input
                                type="email" name="email" placeholder="Email Address"
                                value={formData.email} onChange={handleChange}
                                className="w-full bg-white/60 border border-neutral-200/60 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-fire-red focus:bg-white focus:ring-4 focus:ring-fire-red/5 transition-all duration-300 text-sm font-bold backdrop-blur-sm group-hover:bg-white/80"
                            />
                        </div>
                    </motion.div>

                    {/* Password */}
                    <motion.div variants={itemVariants}>
                        <div className="relative group">
                            <input
                                type={showPassword ? "text" : "password"} name="password" placeholder="Password"
                                value={formData.password} onChange={handleChange}
                                className="w-full bg-white/60 border border-neutral-200/60 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-fire-red focus:bg-white focus:ring-4 focus:ring-fire-red/5 transition-all duration-300 text-sm font-bold backdrop-blur-sm group-hover:bg-white/80 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-neutral-600 transition-colors rounded-lg hover:bg-neutral-100/50"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Confirm Password */}
                    <motion.div variants={itemVariants}>
                        <div className="relative group">
                            <input
                                type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password"
                                value={formData.confirmPassword} onChange={handleChange}
                                className="w-full bg-white/60 border border-neutral-200/60 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-fire-red focus:bg-white focus:ring-4 focus:ring-fire-red/5 transition-all duration-300 text-sm font-bold backdrop-blur-sm group-hover:bg-white/80 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-neutral-600 transition-colors rounded-lg hover:bg-neutral-100/50"
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants} className="pt-4">
                        <button className="w-full group/btn relative overflow-hidden bg-neutral-900 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-neutral-900/20 hover:scale-[1.02] transition-all duration-300">
                            <span className="relative z-10 tracking-widest uppercase text-xs">Create Account</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black group-hover/btn:opacity-0 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-fire-red opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ease-out" />
                        </button>
                    </motion.div>

                </form>

                {/* Footer */}
                <motion.div variants={itemVariants} className="mt-6 text-center relative z-10">
                    <p className="text-neutral-400 text-xs font-medium inline mr-2">Already a member?</p>
                    <button
                        onClick={onLoginClick}
                        className="text-neutral-900 hover:text-fire-red transition-colors text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
                    >
                        Sign In
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
