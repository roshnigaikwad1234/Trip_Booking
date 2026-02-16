'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const destinations = [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000", // City
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000", // Beach
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000", // Mountain
];

export default function GallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate transforms outside the loop to respect Hook rules
    // We manually map ranges for 3 items:
    // Item 0: Visible 0-0.33
    // Item 1: Visible 0.33-0.66
    // Item 2: Visible 0.66-1.0

    const opacity0 = useTransform(scrollYProgress, [0, 0.33, 0.35], [1, 1, 0]);
    const opacity1 = useTransform(scrollYProgress, [0.30, 0.33, 0.66, 0.68], [0, 1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.63, 0.66, 1], [0, 1, 1]);

    const opacities = [opacity0, opacity1, opacity2];

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-black">

                {destinations.map((src, i) => (
                    <motion.div
                        key={i}
                        style={{ opacity: opacities[i] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${src})` }}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>
                ))}

                <div className="relative z-10 text-center mix-blend-overlay pointer-events-none">
                    <h2 className="text-[10vw] font-bold text-white tracking-widest uppercase">
                        EXPLORE
                    </h2>
                </div>

            </div>
        </div>
    );
}
