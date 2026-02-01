'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LoginCard } from './LoginCard';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSignupClick?: () => void;
}

export function LoginModal({ isOpen, onClose, onSignupClick }: LoginModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent background scrolling when modal is open
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] p-4 flex items-center justify-center overflow-hidden"
                >
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content - Perfectly Centered & Stationary */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 w-full flex justify-center items-center"
                    >
                        {/* Pass onSignupClick for switching, onClose for closing */}
                        <LoginCard onSignupClick={onSignupClick} onClose={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
