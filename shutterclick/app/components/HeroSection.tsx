'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images: string[] = [
    'https://images.unsplash.com/photo-1647283312789-573c253bee1a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1617066783456-65a5eeb48950?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664298807846-b7989767c04e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1544570768-c01eb520ee37?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=3095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    <div className="flex items-center gap-2">
                        <Image src="/SC1.png" alt="Shutter Clicks Logo" className="h-40 w-auto" width={100} height={100} />
                    </div>
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
                        <Link href="/booking">
                            <Button className="px-6 py-6 rounded-xl hover:opacity-90 transition bg-[#a7857d]">
                                <div className="text-xs uppercase tracking-widest ">
                                    Book a Session
                                </div>
                            </Button>
                        </Link>
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

