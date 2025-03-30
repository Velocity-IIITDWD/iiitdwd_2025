import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: {
    id: string;
    href: string;
    text: string;
    timestamp: string;
    allImage: string[];
    details: {
      startDate: string;
      endDate: string;
      ticketPrice: string;
    };
    venue: {
      place: string;
      street: string;
      city: string;
    };
    organiser: {
      name: string;
      designation: string;
      contact: string;
    };
    aboutEvent: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    // Handle DD-MM-YYYY format
    if (dateString.match(/^\d{2}-\d{2}-\d{4}$/)) {
      const [day, month, year] = dateString.split('-');
      const date = new Date(`${year}-${month}-${day}`);

      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  }

  return (
    <Card className="overflow-hidden max-w-md group border hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-gray-200 rounded-lg shadow-sm py-0 gap-0">
      <div className="relative h-64 flex-none w-full">
        <div className="absolute h-full w-full group-hover:bg-main/20 z-[2] bg-none transition-colors duration-300" />
        {event.allImage && event.allImage.length > 0 ? (
          <Image
            src={`https://iiitdwd.ac.in${event.allImage[0]}`}
            alt={event.text}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <span className="text-gray-400">No image available</span>
          </div>
        )}

      </div>

      <CardContent className="px-4 py-6 justify-between flex flex-col h-full">
        <Link href={event.href} className="block">
          <h2 className="text-xl font-bold mb-2 text-primary">
            {event.text}
          </h2>
        </Link>

        <div>
          <div className="flex text-sm text-secondary mb-1">
            <CalendarIcon className="mr-2 flex-none" size={16} />
            <span>{formatDate(event.details.startDate)}</span>
          </div>

          <div className="flex text-sm text-secondary">
            <MapPinIcon className="flex-none mr-2" size={16} />
            <span>
              {event.venue.street && `${event.venue.street}${event.venue.place || event.venue.city ? ', ' : ''}`}
              {event.venue.place && `${event.venue.place}${event.venue.city ? ', ' : ''}`}
              {event.venue.city && event.venue.city}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;

