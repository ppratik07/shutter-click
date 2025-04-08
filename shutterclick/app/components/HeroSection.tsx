'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const images: string[] = [
    'https://media.istockphoto.com/id/1190367451/photo/law-student-standing-at-entrance-to-university-building.jpg?s=1024x1024&w=is&k=20&c=-PbWOUx8ioEJepOjOjUFtK9nV61fEiEOxSPFCfwtxxM=',
    'https://media.istockphoto.com/id/480849669/photo/small-girl-playing-with-colors.jpg?s=1024x1024&w=is&k=20&c=K1ys-TJxUUwBHnjn6bDZGaxI0-jOt3RS1c1kyensEYQ=',
    'https://plus.unsplash.com/premium_photo-1664298807846-b7989767c04e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/667764368/photo/were-tying-the-knot.jpg?s=1024x1024&w=is&k=20&c=e0NwRhGIqmTZuI6tUJtOewjp6BZ3lI6_Y11GkHvUGPI=',
    'https://media.istockphoto.com/id/2127644067/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=1024x1024&w=is&k=20&c=FBP8hHjytrLHt-KUGpv68J4n2XWVTIOstfN99fxRghk='
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => [
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        ], 3000)
        return () => clearInterval(interval)
    }, [])
    return (
        <section
            className="relative h-screen bg-cover bg-center transition-all duration-1000"
            style={{
                backgroundImage: `url('${images[currentImageIndex]}')`,
            }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="text-xs uppercase tracking-widest text-white">LOGO</div>
                    <div className="mt-[10px] text-xs uppercase tracking-widest text-right leading-tight">
                        <span className="block text-white">Payment Plans</span>
                        <span className="block text-white">Available</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="text-center">
                    <h1 className="uppercase text-4xl tracking-widest text-left w-full text-white">
                        Portrait & Event Photographer
                    </h1>
                    <div className="fixed bottom-12 left-6">
                        <Button className="px-6 py-6 rounded-xl hover:opacity-90 transition bg-[#a7857d]">
                            <div className="text-xs uppercase tracking-widest ">
                                Book a Session
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Footer (Image Counter) */}
                <div className="flex justify-end text-xs gap-1 text-white">
                    <span>{String(currentImageIndex + 1).padStart(2, "0")}</span>
                    <span className="text-white/70">/{images.length.toString().padStart(2, "0")}</span>
                </div>
            </div>
        </section>
    );
}

