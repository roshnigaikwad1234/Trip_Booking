import HeroScroll from "@/components/ui/HeroScroll";
import TripsSection from "@/components/ui/TripsSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
// import GallerySection from "@/components/ui/GallerySection"; // Unused
import PlaneMorph from "@/components/ui/PlaneMorph"; // Restore import
import Globe from "@/components/ui/Globe";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO SEQUENCE */}
      <section className="relative z-10">
        <HeroScroll sequencePath="/sequence 1" frameCount={120} />

        {/* Overlay Text for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mix-blend-difference w-full px-4">
          <h1 className="text-[10vw] font-bold tracking-tighter leading-none text-white opacity-90">
            TRAVEL
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.2em] text-white uppercase mt-4 mb-8">
            Curated International Trips, Designed for You
          </p>
          <div className="pointer-events-auto flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors">
              Explore Trips
            </button>
            <button className="border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
              Plan My Journey
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT / INTRO */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center" id="about">
        <h2 className="text-sm tracking-[0.5em] text-zinc-500 uppercase mb-6">
          About Our Travel Agency
        </h2>
        <p className="text-2xl md:text-4xl text-white font-light max-w-4xl mx-auto leading-relaxed">
          We specialize in international travel experiences, offering premium group tours and personalized journeys across the globe. From luxury stays to curated itineraries, we handle everything.
        </p>
      </section>

      {/* SECTION 3: TRIPS */}
      <TripsSection />

      {/* SECTION 4: JET SEQUENCE (Restored) */}
      <section className="relative z-10">
        <PlaneMorph sequencePath="/sequence 2" frameCount={120} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mix-blend-difference">
          <h2 className="text-[8vw] font-bold tracking-tighter text-white opacity-80">
            PREMIUM FLEET
          </h2>
        </div>
      </section>

      {/* SECTION 5: EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION 6: CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Plan Your International Journey Today
        </h2>
        <button className="bg-white text-black px-10 py-4 text-lg uppercase tracking-widest hover:scale-105 transition-transform">
          Contact Travel Expert
        </button>
      </section>

      {/* SECTION 7: FOOTER / GLOBE */}
      <Globe />

      <footer className="py-12 border-t border-white/10 bg-black text-center text-zinc-600 text-sm flex flex-col gap-6">
        <div className="flex justify-center gap-8 text-white/50 uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Trips</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Luxury Travel Agency. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
