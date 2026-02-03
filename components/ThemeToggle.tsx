'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center mr-2"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 overflow-hidden">
                {/* Sun Icon for Light Mode */}
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'light' ? 0 : 30,
                        opacity: theme === 'light' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-fire-red"
                >
                    <Sun size={20} className="fill-current" />
                </motion.div>

                {/* Moon Icon for Dark Mode */}
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'dark' ? 0 : -30,
                        opacity: theme === 'dark' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                >
                    <Moon size={20} className="fill-current" />
                </motion.div>
            </div>
        </button>
    );
}
