import React from "react";

export default function ReadyToWork() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
            <div className="bg-black/20 absolute inset-0 z-0" />

            <div className="relative z-10 px-6 md:px-12 max-w-4xl">
                <h2 className="text-2xl md:text-4xl font-light tracking-widest uppercase mb-4">
                    Ready to Work With Me
                </h2>
                <p className="text-sm md:text-base mb-8">
                    Let’s connect and make some magic
                </p>
                <button className="bg-[#a7857d] hover:bg-[#957469] transition text-white text-xs tracking-widest uppercase px-6 py-3 rounded-full shadow-md">
                    Contact Me
                </button>
            </div>
        </section>
    );
}
