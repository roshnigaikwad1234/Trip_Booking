'use client';

export default function Globe() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover opacity-60"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/globe-loop.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                    World Without Boundaries
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                    Experience the world without boundaries. Our network spans across continents, ensuring you reach your destination with unparalleled speed and comfort.
                </p>
            </div>
        </div>
    );
}
