'use client';
import { useEffect, useState } from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
const BookingDetailsPage = ({ params }: Props) => {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    fetchParams();
  }, [params]);
  // const validSlugs = [
  //   "easter-mini",
  //   "mothers-day-mini",
  //   "spring-mini",
  //   "basic-session",
  //   "standard-session",
  //   "premium-session",
  //   "mini-session",
  //   "premium-branding",
  //   "mini-basic-branding",
  //   "proposal",
  //   "engagement",
  //   "wedding"
  // ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (slug === null) {
    return <p>Loading...</p>; // Render a loading state while waiting for params
  }
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold capitalize mb-2">{slug.replace("-", " ")}</h1>
      <p className="mb-6 text-gray-600">Details about the {slug.replace("-", " ")} session.</p>

      {/* Calendly Inline Widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ppratikcodes"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </main>
  );
};

export default BookingDetailsPage;
