import MiniSessionCard from "./MiniSessionCard";

const MiniSessionGrid = () => {
    const sessions = [
        {
            slug: "easter-mini",
            image: "https://images.unsplash.com/photo-1604298027700-98d678b0f7a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFzdGVyfGVufDB8MXwwfHx8MA%3D%3D",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            slug: "mothers-day-mini",
            image: "https://plus.unsplash.com/premium_photo-1681296923673-238a39876f08?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90aGVyc3xlbnwwfDF8MHx8fDA%3D",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            slug:"spring-mini",
            image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nfGVufDB8MXwwfHx8MA%3D%3D",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
        },
        {
            slug:"basic-session",
            image: "https://images.unsplash.com/photo-1656918839048-cd1c3df3c0e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh0b2dyYXBoeXxlbnwwfDF8MHx8fDA%3D",
            title: "Package 1. Basic Session",
            description:
                "This package is ideal for individual and family portraits, announcements, headshots, seasonal, couples...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            slug:"standard-session",
            image: "https://images.unsplash.com/photo-1656918839048-cd1c3df3c0e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh0b2dyYXBoeXxlbnwwfDF8MHx8fDA%3D",
            title: "Package 2. Standard Session",
            description:
                "This package is ideal for most sessions including larger groups (SEE BELOW) THIS PACKAGE INCLUDES...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            slug:"premium-session",
            image: "https://images.unsplash.com/photo-1656918839048-cd1c3df3c0e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh0b2dyYXBoeXxlbnwwfDF8MHx8fDA%3D",
            title: "Package 3. Premium Session",
            description:
                "This package is ideal for most sessions including larger groups (SEE BELOW) THIS PACKAGE INCLUDES...",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            slug:"mini-session",
            image: "https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mini Session",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            slug:"premium-branding",
            image: "https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mini Premium Brnading",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            slug:"mini-basic-branding",
            image: "https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mini Basic Branding",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            slug:"proposal",
            image: "https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Proposal",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            slug:"engagement",
            image: "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nYWdlbWVudHxlbnwwfDF8MHx8fDA%3D",
            title: "Engagement",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            slug:"wedding",
            image: "https://images.unsplash.com/photo-1614929511547-974944a54c92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5nYWdlbWVudHxlbnwwfDF8MHx8fDA%3D",
            title: "Wedding",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        }
        // {
        //     image: "/easter-mini.jpg",
        //     title: "Easter Mini",
        //     description:
        //         "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
        //     duration: "20 minutes",
        //     price: "$50.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/mothers-day.jpg",
        //     title: "Mother's Day Mini",
        //     description:
        //         "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
        //     duration: "30 minutes",
        //     price: "$75.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/spring-mini.jpg",
        //     title: "Spring Mini",
        //     description:
        //         "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
        //     duration: "30 minutes",
        //     price: "$150.00",
        //     availability: "TBD",
        //     link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        // },
        // {
        //     image: "/easter-mini.jpg",
        //     title: "Easter Mini",
        //     description:
        //         "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
        //     duration: "20 minutes",
        //     price: "$50.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/mothers-day.jpg",
        //     title: "Mother's Day Mini",
        //     description:
        //         "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
        //     duration: "30 minutes",
        //     price: "$75.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/spring-mini.jpg",
        //     title: "Spring Mini",
        //     description:
        //         "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
        //     duration: "30 minutes",
        //     price: "$150.00",
        //     availability: "TBD",
        //     link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        // },
        // {
        //     image: "/easter-mini.jpg",
        //     title: "Easter Mini",
        //     description:
        //         "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
        //     duration: "20 minutes",
        //     price: "$50.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/mothers-day.jpg",
        //     title: "Mother's Day Mini",
        //     description:
        //         "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
        //     duration: "30 minutes",
        //     price: "$75.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/spring-mini.jpg",
        //     title: "Spring Mini",
        //     description:
        //         "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
        //     duration: "30 minutes",
        //     price: "$150.00",
        //     availability: "TBD",
        //     link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        // },
        // {
        //     image: "/easter-mini.jpg",
        //     title: "Easter Mini",
        //     description:
        //         "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
        //     duration: "20 minutes",
        //     price: "$50.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/mothers-day.jpg",
        //     title: "Mother's Day Mini",
        //     description:
        //         "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
        //     duration: "30 minutes",
        //     price: "$75.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/spring-mini.jpg",
        //     title: "Spring Mini",
        //     description:
        //         "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
        //     duration: "30 minutes",
        //     price: "$150.00",
        //     availability: "TBD",
        //     link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        // },
        // {
        //     image: "/mothers-day.jpg",
        //     title: "Newborn Session",
        //     description:
        //         "THIS PACKAGE INCLUDES 90 min session Digital delivery of 15 high-resolution, print-ready..",
        //     duration: "30 minutes",
        //     price: "$75.00",
        //     availability: "TBD",
        // },
        // {
        //     image: "/spring-mini.jpg",
        //     title: "Luxurious Picnic and Mini Photo...",
        //     description:
        //         "Book a beautiful luxurious 2hr picnic for TWO with Hermosa Picnics and capture the moment in time with a complimentary add-on ....",
        //     duration: "30 minutes",
        //     price: "$150.00",
        //     availability: "TBD",
        //     link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        // }
    ];

    return (
        <section className="bg-[#8D6E72] py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sessions.map((session, index) => (
                    <MiniSessionCard key={index} {...session} />
                ))}
            </div>
        </section>
    );
};

export default MiniSessionGrid;
