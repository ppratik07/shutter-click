"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

interface ReadyToWorkProps {
  title1: string;
  title2: string;
  imageUrl: string;
}
export default function ReadyToWork({ title1, title2, imageUrl }: ReadyToWorkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{
        backgroundImage:
          `url(${imageUrl})`,
      }}
    >
      <div className="bg-black/20 absolute inset-0 z-0" />

      <motion.div
        ref={ref}
        className="relative z-10 px-6 md:px-12 max-w-4xl"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <h2 className="text-2xl md:text-4xl font-light tracking-widest uppercase mb-4">
          {title1}
        </h2>
        <p className="text-xs md:text-xs mb-8">
          {title2}
        </p>
        <div className="flex justify-center">
          <Link href="/booking">
          <button className="bg-[#a7857d] cursor-pointer hover:bg-[#957469] transition text-white text-xs tracking-widest uppercase px-6 py-3 rounded-full shadow-md">
            Contact Me
          </button>
          </Link>      
        </div>
      </motion.div>
    </section>
  );
}
