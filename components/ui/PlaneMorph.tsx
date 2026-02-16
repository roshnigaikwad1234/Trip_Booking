'use client';

import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useImagePreloader } from '@/hooks/useImagePreloader';

interface PlaneMorphProps {
    sequencePath: string;
    frameCount: number;
}

export default function PlaneMorph({ sequencePath, frameCount }: PlaneMorphProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // 1. Memoize image paths
    const images = useMemo(() => {
        return Array.from({ length: frameCount }, (_, i) => {
            const frameNumber = (i + 1).toString().padStart(3, '0');
            return `${sequencePath}/ezgif-frame-${frameNumber}.jpg`;
        });
    }, [sequencePath, frameCount]);

    // 2. Preload
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
            // Initial render to ensure canvas isn't empty
        }
    }, [loaded, images]);

    // 3. Scroll hook
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Start animating when it enters view
    });

    // For the plane morph, we might want it to complete the sequence while it is in view.
    // "start end" -> enters viewport
    // "end start" -> leaves viewport

    // Actually, usually for this specific dramatic effect, we want it pinned? 
    // The user prompt said: "Sticky container (h-[400vh])". So yes, pinning logic is better.
    // Re-evaluating offset to match HeroScroll for consistency if it's a sticky section.

    const { scrollYProgress: stickyProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(stickyProgress, [0, 1], [0, frameCount - 1]);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || imagesElements.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize handling (High DPI)
        const parent = canvas.parentElement;
        if (parent) {
            const dpr = window.devicePixelRatio || 1;
            const targetWidth = parent.clientWidth * dpr;
            const targetHeight = parent.clientHeight * dpr;

            if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
                canvas.width = targetWidth; // Internal resolution
                canvas.height = targetHeight;
            }
        }

        const img = imagesElements[Math.round(index)];

        if (img) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Initial render helper
    useEffect(() => {
        if (loaded && imagesElements.length > 0) {
            // Allow a small delay or check visibility to render first frame? 
            // For now just render frame 0
            render(0);
        }
    }, [loaded, imagesElements]);


    return (
        <div ref={containerRef} className="h-[400vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                        Loading Sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
