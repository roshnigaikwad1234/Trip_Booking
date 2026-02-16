'use client';

import { motion } from 'framer-motion';

const features = [
    {
        title: "Curated Destinations",
        description: "Handpicked locations designed to offer the most authentic and luxurious experiences."
    },
    {
        title: "Hassle-Free Visa",
        description: "Our dedicated team handles all documentation, ensuring a smooth entry for every journey."
    },
    {
        title: "Premium Stays",
        description: "Access to exclusive 5-star hotels and private resorts unavailable to the general public."
    },
    {
        title: "24/7 Assistance",
        description: "Round-the-clock support from our global team of travel experts, wherever you are."
    }
];

export default function ExperienceSection() {
    return (
        <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm tracking-[0.5em] text-zinc-500 uppercase mb-12 text-center md:text-left">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="border-l border-white/10 pl-6"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
