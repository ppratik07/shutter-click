import { Clock, DollarSign, CalendarDays } from "lucide-react";
import Link from "next/link";

interface MiniSessionCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  availability: string;
  link?: string;
  slug?: string;
}

const MiniSessionCard: React.FC<MiniSessionCardProps> = ({
  image,
  title,
  description,
  duration,
  price,
  availability,
  link,
  slug
}) => {
  const content = (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4 text-left space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-700 pt-2">
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign size={14} />
            <span>{price}</span>
          </div>
          <div className="flex items-center space-x-1">
            <CalendarDays size={14} />
            <span>{availability}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : slug ? (
    <Link href={`/booking/${slug}`}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default MiniSessionCard;
