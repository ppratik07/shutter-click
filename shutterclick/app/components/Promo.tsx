"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Promo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1690031000842-1ac0508f18b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
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
        <div className="bg-white/90 max-w-3xl w-full mx-4 md:mx-auto p-10 md:p-16 shadow-lg rounded-md">
          <div className="flex justify-center">
            <h2 className="text-sm md:text-md font-light uppercase tracking-widest text-gray-600 mb-6">
              Luxurious Picnic & Mini Photo Session for Two
            </h2>
          </div>

          <p className="text-xs md:text-xs text-gray-700 leading-relaxed mb-8 text-center">
            Book a beautiful luxurious 2hr picnic for TWO with  Picnics and capture the moment in time with a complimentary add-on mini photo session with Shutter Clicks Photography.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#a7857d] text-white uppercase tracking-wider px-6 py-2 text-xs rounded-full shadow hover:bg-[#957469] transition">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
