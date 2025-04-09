"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#8a6b6b] text-white px-6 py-10"
    >
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-4">
        <ul className="flex flex-wrap justify-center gap-6 text-xs md:text-xs tracking-widest uppercase">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/booking">Pricing & Availability</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/specials">Specials</Link></li>
          <li><Link href="/404">View My Work</Link></li>
          <li><Link href="/404">Locations & Setups<span className="mx-1">•</span></Link></li>
          <li><Link href="/404">About<span className="mx-1">•</span></Link></li>
          <li><Link href="/404">Reviews</Link></li>
          <li><Link href="/404">Booking Policy</Link></li>
        </ul>

        <p className="text-[10px] mt-10 md:text-[10px]">&copy; 2025 Shutter Clicks</p>
      </div>
    </motion.footer>
  );
}
