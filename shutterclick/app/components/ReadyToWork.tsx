"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ReadyToWork() {
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
          "url('https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          Ready to Work With Me
        </h2>
        <p className="text-sm md:text-base mb-8">
          Let’s connect and make some magic
        </p>
        <div className="flex justify-center">
          <button className="bg-[#a7857d] hover:bg-[#957469] transition text-white text-xs tracking-widest uppercase px-6 py-3 rounded-full shadow-md">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
