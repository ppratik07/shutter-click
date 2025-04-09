import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const BookingDetailsPage = ({ params }: Props) => {
  const { slug } = params;

  const validSlugs = ["easter-mini", "mothers-day-mini"];
  if (!validSlugs.includes(slug)) return notFound();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold capitalize">{slug.replace("-", " ")}</h1>
      <p>Details about the {slug.replace("-", " ")} session.</p>
    </main>
  );
};

export default BookingDetailsPage;
