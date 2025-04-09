import React from "react";

export default function NaturalSession() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center w-full px-6 md:px-20 py-20 bg-white gap-12">
            <div className="text-center md:text-left max-w-xl space-y-6">
                <h2 className="text-sm md:text-base tracking-widest uppercase text-gray-600 text-center">
                    Lay Back, Act Natural, and Let’s Take Some<br />
                    <span>Pictures</span>
                </h2>
                <p className="text-[10px] md:text-[10px] text-gray-700 leading-relaxed text-center">
                    This isn’t about a photo session, or even the pictures, it’s about You.
                    Forget about posing and feeling stiff in front of the camera. Imagine
                    going on a walk with an old friend, who just happens to have a camera
                    with them. My process is free and flowy, and my only goal is to capture
                    your true self.
                </p>
            </div>

            <div className="w-full md:w-[40%] max-w-md">
                <img
                    src="https://images.unsplash.com/photo-1544952843-321277baf609?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Portrait with flowers"
                    className=" w-full h-auto object-cover shadow-lg"
                />
            </div>
        </section>
    );
}
