'use client';

import { motion } from 'framer-motion';

export function CinematicBackground() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-black -z-10">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

            {/* Moving Grid - Perspective Plane */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(0) scale(2)',
                    transformOrigin: 'top center',
                }}
            >
                <motion.div
                    animate={{ y: [0, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-none"
                />
            </div>

            {/* Floating Orbs/Glows */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-fire-red/20 rounded-full blur-[100px] mix-blend-screen"
            />
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen"
            />

            {/* Noise Overlay for Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>
    );
}
