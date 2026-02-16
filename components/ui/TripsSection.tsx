'use client';

import { motion } from 'framer-motion';

const trips = [
    {
        id: 1,
        title: "Dubai Luxury Trip",
        duration: "6 Days / 5 Nights",
        price: "From $3,499",
        image: "https://images.unsplash.com/photo-1512453979798-5ea932a23644?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 2,
        title: "Switzerland Scenic Tour",
        duration: "8 Days / 7 Nights",
        price: "From $5,299",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "Europe Grand Tour",
        duration: "14 Days / 13 Nights",
        price: "From $6,999",
        image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        title: "Bali Escape",
        duration: "7 Days / 6 Nights",
        price: "From $2,199",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 5,
        title: "Maldives Honeymoon",
        duration: "5 Days / 4 Nights",
        price: "From $4,599",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 6,
        title: "Singapore City Experience",
        duration: "5 Days / 4 Nights",
        price: "From $2,899",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=1000",
    },
];

export default function TripsSection() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="trips">
            <h2 className="text-4xl md:text-6xl font-light mb-16 text-gold-100 tracking-wide text-center">
                Curated Destinations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trips.map((trip) => (
                    <motion.div
                        key={trip.id}
                        className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer border border-gold-900 hover:border-gold-500/50 transition-colors duration-500"
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${trip.image})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-xs tracking-widest uppercase text-gold-300 mb-2 font-medium">
                                {trip.duration}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2 leading-tight font-serif">
                                {trip.title}
                            </h3>
                            <p className="text-white/80 font-mono text-sm mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                {trip.price}
                            </p>

                            <button className="py-3 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-wider hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 w-fit">
                                View Package
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
