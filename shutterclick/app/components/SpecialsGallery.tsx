import Link from "next/link";

const sessions = [
  {
    title: "SPRING MINI SESSIONS",
    date: "$150 now · June 20th",
    image: "https://images.unsplash.com/photo-1729009511491-71925f72873b?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capture the season’s beauty with fresh, vibrant photos—perfect for your family, couples, or solo portraits.",
    includes: [
      "30 min session",
      "Digital delivery of 12 high-resolution, print-ready images",
      "Option to purchase additional or full Gallery",
      "Online Gallery for easy download & Sharing",
      "1 Location",
      "Print release",
      "10% Off Prints",
    ],
  },
  {
    title: "Mother's Day Minis",
    date: "$200 · Available July",
    image: "https://images.unsplash.com/photo-1560707857-b897819e06fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW90aGVycyUyMGRheXxlbnwwfDF8MHx8fDA%3D",
    description:
      "Golden hour beach portraits for families, couples, or maternity shots. Let the waves and sunset do the magic.",
    includes: [
      "45 min session",
      "15 edited photos",
      "Beach location of your choice",
      "Online delivery + print options",
    ],
  },
  {
    title: "Easter Minis",
    date: "$180 · Starting September",
    image: "https://images.unsplash.com/photo-1617097288997-861d70c2cd2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFzdGVyfGVufDB8MXwwfHx8MA%3D%3D",
    description:
      "Autumn leaves and cozy vibes — perfect for annual family photos or holiday card shots.",
    includes: [
      "30 min session",
      "12 edited high-res images",
      "Outdoor location with fall foliage",
      "Private gallery + print discount",
    ],
  },
];

export default function SpecialsGallery() {
  return (
    <div className="flex flex-col gap-20 px-6 py-16 bg-white">
      {sessions.map((session, index) => (
        <div
          key={session.title}
          className={`flex flex-col md:flex-row items-center justify-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={session.image}
              alt={session.title}
              width={600}
              height={800}
              className="object-cover w-full"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-lg uppercase tracking-widest text-gray-500">{session.title}</h2>
            <p className="uppercase text-sm text-gray-400">{session.date}</p>
            <p className="text-gray-700 leading-relaxed">{session.description}</p>
            <div className="text-gray-700 text-sm leading-relaxed">
              <p className="font-medium mb-2">YOUR PHOTO SESSION WOULD INCLUDE:</p>
              <ul className="list-disc list-inside space-y-1">
                {session.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <Link href="/booking">
              <button className="mt-4 bg-[#8b6b65] cursor-pointer hover:bg-[#7a5953] text-white px-6 py-2 rounded-md tracking-wide">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
