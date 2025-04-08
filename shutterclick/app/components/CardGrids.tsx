type Card = {
    image: string,
    title: string,
    subtitle: string
}
const cards: Card[] = [
    {
        image: "https://example.com/flowers.jpg",
        title: "About Me",
        subtitle: "Get to know me",
    },
    {
        image: "https://images.unsplash.com/photo-1634289967226-dbdbe5128041?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Experience",
        subtitle: "Find out my process",
    },
    {
        image: "https://example.com/portrait.jpg",
        title: "Portfolio / Galleries",
        subtitle: "See my work",
    },
    {
        image: "https://example.com/couple.jpg",
        title: "Love Stories",
        subtitle: "Couples & Engagements",
    },
    {
        image: "https://example.com/branding.jpg",
        title: "Branding",
        subtitle: "Headshots & Commercial",
    },
    {
        image: "https://example.com/family.jpg",
        title: "Family",
        subtitle: "Cherished Moments",
    },
    {
        image: "https://example.com/couple.jpg",
        title: "Love Stories",
        subtitle: "Couples & Engagements",
    },
    {
        image: "https://example.com/branding.jpg",
        title: "Branding",
        subtitle: "Headshots & Commercial",
    },
    {
        image: "https://example.com/family.jpg",
        title: "Family",
        subtitle: "Cherished Moments",
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
                        <p className="text-sm text-gray-700 mt-1">{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}