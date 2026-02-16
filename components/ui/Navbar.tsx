'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Trips', href: '/#trips' }, // Scroll to trips
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} className="relative group">
                        <span className="text-sm uppercase tracking-widest text-white/80 group-hover:text-gold-300 transition-colors duration-300">
                            {link.name}
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-300" />
                    </Link>
                ))}

                <Link href="/book" className="ml-4">
                    <button className="bg-gold-500 text-black text-xs uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-white transition-colors duration-300 font-bold">
                        Book Trip
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
}
