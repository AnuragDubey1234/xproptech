'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScroll() {
    useEffect(() => {
        // Mobile Performance Optimization: Disable Lenis on small screens to reduce TBT
        if (window.innerWidth < 768) return;

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            lerp: 0.1, // Added lerp for smoother interpolation
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
