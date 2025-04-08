type Card = {
    image: string,
    title: string,
    subtitle: string
}
const cards: Card[] = [
    {
        image: "https://plus.unsplash.com/premium_photo-1665990295265-cbc73657edcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXR8ZW58MHx8MHx8fDA%3D",
        title: "About Me",
        subtitle: "Get to know me",
    },
    {
        image: "https://images.unsplash.com/photo-1708590274982-06b2aeb6aa3e?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Experience",
        subtitle: "Find out my process",
    },
    {
        image: "https://images.unsplash.com/photo-1642846591706-1294dfab2685?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwbWVuJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
        title: "Portfolio / Galleries",
        subtitle: "See my work",
    },
    {
        image: "https://images.unsplash.com/photo-1548313093-370cf4ba3892?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "PACKAGES",
        subtitle: "View Pricing",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1675107359943-2319a2b473cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "REVIEWS",
        subtitle: "Client Testimonials",
    },
    {
        image: "https://images.unsplash.com/photo-1526277015674-026cb84653ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dyc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "LOCATION AND SETUPS",
        subtitle: "Recommendations",
    },
    {
        image: "https://images.unsplash.com/photo-1667568859522-2550db500160?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "PAYMENT PLANS",
        subtitle: "Afterpay",
    },
    {
        image: "https://images.unsplash.com/photo-1692715984205-451b1055249e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hcnJpYWdlJTIwY2FuZGlkfGVufDB8fDB8fHww",
        title: "POLICY",
        subtitle: "...",
    },
    {
        image: "https://images.unsplash.com/photo-1523264114838-feca761983c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "F.A.Q",
        subtitle: "..",
    }
];

export default function CardGrids() {
    return (
        <section className="px-6 py-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[300px] object-cover"
                        />
                        <h3 className="mt-4 text-xs uppercase tracking-widest text-gray-500">
                            {card.title}
                        </h3>
                        <p className="text-[10px] text-gray-700 mt-1">{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}