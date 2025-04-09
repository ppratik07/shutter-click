import MiniSessionCard from "./MiniSessionCard";

const MiniSessionGrid = () => {
    const sessions = [
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Package 1. Basic Session",
            description:
                "This package is ideal for individual and family portraits, announcements, headshots, seasonal, couples...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Package 2. Standard Session",
            description:
                "This package is ideal for most sessions including larger groups (SEE BELOW) THIS PACKAGE INCLUDES...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Package 3. Premium Session",
            description:
                "This package is ideal for most sessions including larger groups (SEE BELOW) THIS PACKAGE INCLUDES...",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/easter-mini.jpg",
            title: "Easter Mini",
            description:
                "NOW - APRIL 18TH Spring is in the air, and it's the perfect time for Mini Easter Photo Sessions! ✨🐣...",
            duration: "20 minutes",
            price: "$50.00",
            availability: "TBD",
        },
        {
            image: "/mothers-day.jpg",
            title: "Mother's Day Mini",
            description:
                "NOW - MAY 9TH 🌸✨ Mother's Day Mini Sessions are here! Celebrate the love and beauty of...",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Spring Mini",
            description:
                "NOW - JUNE 20TH Capture the season’s beauty with fresh, vibrant photos perfect for your family....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        },
        {
            image: "/mothers-day.jpg",
            title: "Newborn Session",
            description:
                "THIS PACKAGE INCLUDES 90 min session Digital delivery of 15 high-resolution, print-ready..",
            duration: "30 minutes",
            price: "$75.00",
            availability: "TBD",
        },
        {
            image: "/spring-mini.jpg",
            title: "Luxurious Picnic and Mini Photo...",
            description:
                "Book a beautiful luxurious 2hr picnic for TWO with Hermosa Picnics and capture the moment in time with a complimentary add-on ....",
            duration: "30 minutes",
            price: "$150.00",
            availability: "TBD",
            link: "https://shalamarjonesphotography.pixieset.com/booking/spring-minis",
        }
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
