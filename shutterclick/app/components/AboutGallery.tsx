export default function AboutGallery() {
    return (
        <section className="py-16 bg-white flex justify-center">
            <div className="flex flex-col items-center">
                <img
                    src="https://images.unsplash.com/photo-1734970184604-af7a44389a84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gallery preview"
                    className="w-[1000px] h-[500px] object-cover shadow-lg"
                />
                <div className="text-center mt-8">
                    <p className="uppercase tracking-widest text-sm text-gray-500">
                        View Galleries
                    </p>
                    <p className="text-[10px] text-gray-700 mt-2">See more of my work</p>
                </div>
            </div>
        </section>
    );
}