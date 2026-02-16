import Navbar from "@/components/ui/Navbar";
import Globe from "@/components/ui/Globe";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-cream">
            <Navbar />

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                    About Aurora Travels
                </h1>
                <p className="text-xl md:text-2xl text-gold-100/80 max-w-3xl mx-auto leading-relaxed">
                    We are an international trip booking agency specializing in curated global travel experiences. From luxury vacations to group tours and customized itineraries, we design journeys that are seamless, memorable, and stress-free.
                </p>
            </section>

            {/* VISION */}
            <section className="py-24 px-6 md:px-12 border-t border-gold-900 bg-gold-900/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm tracking-[0.5em] text-gold-500 uppercase mb-6">Our Vision</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Redefining Global Exploration
                        </h3>
                        <p className="text-lg text-cream/70 leading-relaxed mb-6">
                            Our vision is to make the world accessible without compromise. We believe travel should be an elevation of the spirit, a seamless flow from one breathtaking moment to the next, orchestrated with precision and care.
                        </p>
                    </div>
                    <div className="bg-gold-800 h-[400px] w-full rounded-sm relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-70"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000")' }}
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-center text-4xl font-bold text-white mb-16">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 border border-gold-900 hover:border-gold-500 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-gold-300 mb-4">Trusted Global Partners</h3>
                        <p className="text-cream/60">Direct connections with world-class hotels and airlines.</p>
                    </div>
                    <div className="p-8 border border-gold-900 hover:border-gold-500 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-gold-300 mb-4">Customer Satisfaction</h3>
                        <p className="text-cream/60">Dedicated to crafting itineraries that exceed expectations.</p>
                    </div>
                    <div className="p-8 border border-gold-900 hover:border-gold-500 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-gold-300 mb-4">24/7 Support</h3>
                        <p className="text-cream/60">Always there for you, from departure to return.</p>
                    </div>
                </div>
            </section>

            <Globe />

            <footer className="py-12 border-t border-gold-900 bg-black text-center text-gold-700 text-sm">
                &copy; {new Date().getFullYear()} Aurora Travels. All Rights Reserved.
            </footer>
        </main>
    );
}
