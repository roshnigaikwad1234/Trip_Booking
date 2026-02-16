'use client';

import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useImagePreloader } from '@/hooks/useImagePreloader';

interface HeroScrollProps {
    sequencePath: string;
    frameCount: number;
}

export default function HeroScroll({ sequencePath, frameCount }: HeroScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // 1. Memoize image paths to prevent infinite loop
    const images = useMemo(() => {
        return Array.from({ length: frameCount }, (_, i) => {
            const frameNumber = (i + 1).toString().padStart(3, '0');
            return `${sequencePath}/ezgif-frame-${frameNumber}.jpg`;
        });
    }, [sequencePath, frameCount]);

    // 2. Preload images
    const loaded = useImagePreloader(images);
    const [imagesElements, setImagesElements] = useState<HTMLImageElement[]>([]);

    useEffect(() => {
        if (loaded) {
            const loadedImages = images.map((src: string) => {
                const img = new Image();
                img.src = src;
                return img;
            });
            setImagesElements(loadedImages);
        }
    }, [loaded, images]);


    // 3. Scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map 0-1 scroll progress to 0-(frameCount-1) image index
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // 5. Render to canvas with High DPI support
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || imagesElements.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Ensure we're using the correct image
        const img = imagesElements[Math.round(index)];

        if (img) {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                // Set actual size in memory (scaled to account for extra pixel density)
                canvas.width = parent.clientWidth * dpr;
                canvas.height = parent.clientHeight * dpr;
                // Normalize coordinate system to use css pixels
                // ctx.scale(dpr, dpr); 
                // Actually for "cover" logic on a pixel buffer, simpler to just draw to the larger buffer directly
            }


            // Draw image "cover" style
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            // Better quality smoothing
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Initial render when loaded
    useEffect(() => {
        if (loaded && imagesElements.length > 0) {
            render(0);
        }
    }, [loaded, imagesElements]);


    return (
        <div ref={containerRef} className="h-[400vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">

                {/* Background Canvas (Cloud Sequence) - Original Colors */}
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover absolute inset-0"
                />

                {/* LOADING STATE */}
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-gold-300 bg-black z-50">
                        Loading Experience...
                    </div>
                )}

                {/* CONTENT OVERLAY - SPECIFIC LAYOUT */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12">

                    {/* TOP ROW: LOGO/CONTACT - Placeholder */}
                    <div className="flex justify-between items-center text-xs md:text-sm text-gold-100 uppercase tracking-widest opacity-80">
                        <div className="flex gap-6">
                            <span>About</span>
                            <span>Our Fleet</span>
                            <span>Advantages</span>
                            <span>Global</span>
                        </div>
                        <div className="flex gap-6">
                            <span>+971 54 432 5050</span>
                            <span>info@auroratravels.com</span>
                        </div>
                    </div>

                    {/* CENTER: SPLIT TEXT & WINDOW */}
                    <div className="flex-1 flex items-center justify-center w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full max-w-[1600px] mx-auto">

                            {/* LEFT TEXT */}
                            <div className="text-left">
                                <motion.h1
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-[6vw] md:text-[5vw] leading-[0.9] font-bold text-white tracking-tighter"
                                >
                                    We are<br />
                                    <span className="text-white/90">movement</span>
                                </motion.h1>
                            </div>

                            {/* CENTER WINDOW */}
                            <div className="flex justify-center items-center relative h-[50vh] md:h-[70vh] w-full">
                                {/* CSS Window Frame Effect */}
                                <div className="relative w-[70%] h-full rounded-[100px] border-[20px] border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm z-20">
                                    {/* Inner Shadow/Highlight */}
                                    <div className="absolute inset-0 rounded-[80px] border-[2px] border-white/20 pointer-events-none z-30" />

                                    {/* BRAND NAME INSIDE WINDOW */}
                                    <div className="absolute inset-0 flex items-center justify-center z-40">
                                        <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-white/80 uppercase">
                                            AURORA TRAVELS
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT TEXT */}
                            <div className="text-right">
                                <motion.h1
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-[6vw] md:text-[5vw] leading-[0.9] font-bold text-white tracking-tighter"
                                >
                                    We are<br />
                                    <span className="text-white/90">distinction</span>
                                </motion.h1>
                            </div>

                        </div>
                    </div>

                    {/* BOTTOM ROW: SUBTEXT & CTA */}
                    <div className="flex flex-col md:flex-row justify-between items-end w-full border-t border-white/10 pt-8 mt-8">
                        <div className="max-w-md text-left mb-8 md:mb-0">
                            <h3 className="text-white text-xl md:text-2xl font-medium mb-4">
                                Your freedom to<br />enjoy life
                            </h3>
                            <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xs">
                                Every journey is designed around your comfort, time, and ambitions — so you can focus on what truly matters, while we take care of everything else.
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-2">
                            <span className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Scroll Down / To Start The Journey</span>
                            <button className="bg-white text-black px-10 py-4 rounded-full uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-3">
                                Book Your Trip
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
