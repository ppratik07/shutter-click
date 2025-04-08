export default function Hero() {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <div className="text-xs uppercase tracking-widest">LOGO</div>
                    <div className="uppercase text-xs tracking-widest">Payment Plans Available</div>
                </div>
                <div className="text-center">
                    <h1 className="uppercase text-4xl tracking-widest text-left w-full">Portrait & Event Photography</h1>
                    <button className="mt-6 bg-dustyRose px-6 py-3 rounded hover:opacity-90 transition">Book a Session</button>
                </div>
                <div className="flex justify-end text-xs gap-1">
                    <span>01</span>
                    <span className="text-white/70">/08</span>
                </div>
            </div>
        </section>
    );
}

