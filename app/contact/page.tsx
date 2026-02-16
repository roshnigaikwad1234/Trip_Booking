import Navbar from "@/components/ui/Navbar";
import Globe from "@/components/ui/Globe";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen text-cream">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

                {/* CONTACT INFO */}
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>
                    <p className="text-xl text-gold-100/80 mb-12">
                        Ready to plan your next journey? Reach out to our travel experts.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-gold-500 uppercase tracking-widest text-xs mb-2">Office</h3>
                            <p className="text-white text-lg">Downtown Dubai, Boulevard Plaza, Tower 1</p>
                        </div>
                        <div>
                            <h3 className="text-gold-500 uppercase tracking-widest text-xs mb-2">Email</h3>
                            <p className="text-white text-lg">info@auroratravels.com</p>
                        </div>
                        <div>
                            <h3 className="text-gold-500 uppercase tracking-widest text-xs mb-2">Phone</h3>
                            <p className="text-white text-lg">+971 54 432 5050</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:opacity-90 transition-opacity">
                            <span>Chat on WhatsApp</span>
                        </button>
                    </div>
                </div>

                {/* FORM */}
                <div className="flex-1 bg-white/5 p-8 md:p-12 rounded-lg border border-gold-900 border-white/10">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gold-300 mb-2">Name</label>
                            <input type="text" className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gold-300 mb-2">Email</label>
                            <input type="email" className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gold-300 mb-2">Message</label>
                            <textarea className="w-full bg-black/50 border border-gold-900 focus:border-gold-500 text-white p-4 rounded-sm outline-none transition-colors h-32" placeholder="Tell us about your dream trip..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gold-500 text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

            </section>

            <Globe />
        </main>
    );
}
