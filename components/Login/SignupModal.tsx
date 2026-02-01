'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SignupCard } from './SignupCard';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginClick: () => void;
}

export function SignupModal({ isOpen, onClose, onLoginClick }: SignupModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent background scrolling when modal is open
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] p-4 flex items-center justify-center overflow-hidden"
                >
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/85 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal Content - Stationary & Centered */}
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.98, opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10 w-full flex justify-center items-center"
                    >
                        <SignupCard onClose={onClose} onLoginClick={onLoginClick} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
