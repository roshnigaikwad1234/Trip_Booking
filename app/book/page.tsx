import Navbar from "@/components/ui/Navbar";

export default function BookPage() {
    return (
        <main className="bg-background min-h-screen text-cream">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
                    Book Your Journey
                </h1>

                <div className="bg-white/5 border border-gold-500/20 p-8 md:p-16 rounded-xl shadow-2xl backdrop-blur-sm">
                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gold-300 mb-3">Destination</label>
                                <select className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors appearance-none">
                                    <option>Select a Trip...</option>
                                    <option>Dubai Luxury Trip</option>
                                    <option>Switzerland Scenic Tour</option>
                                    <option>Europe Grand Tour</option>
                                    <option>Bali Escape</option>
                                    <option>Maldives Honeymoon</option>
                                    <option>Singapore City Experience</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gold-300 mb-3">Travel Date</label>
                                <input type="date" className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gold-300 mb-3">Number of Travelers</label>
                                <select className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors appearance-none">
                                    <option>1 Traveler</option>
                                    <option>2 Travelers</option>
                                    <option>3-5 Travelers</option>
                                    <option>6+ Group</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gold-300 mb-3">Contact Number</label>
                                <input type="tel" className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors" placeholder="+1 234 567 8900" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gold-300 mb-3">Full Name</label>
                            <input type="text" className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors" placeholder="Enter your full name" />
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-gold-500 text-black font-bold uppercase tracking-widest py-5 text-lg hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-gold-500/20">
                                Confirm Booking Inquiry
                            </button>
                            <p className="text-center text-xs text-white/40 mt-4">
                                *A travel expert will contact you within 24 hours to finalize details.
                            </p>
                        </div>

                    </form>
                </div>
            </section>
        </main>
    );
}
