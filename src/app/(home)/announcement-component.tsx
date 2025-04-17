'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { AnnouncementItem } from './notification';

export default function AnnouncementComponent({
  announcements
}: {
  announcements: AnnouncementItem[];
}) {
  const pinnedAnnouncementItems = announcements
    .filter((item) => item.isPinned)
    .slice(0, 2);

  const regularAnnouncementItems = [
    ...announcements.filter((item) => item.isPinned).slice(2),
    ...announcements.filter((item) => !item.isPinned)
  ];

  // Improved date formatter that handles various formats and edge cases
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return '';

    // Try parsing as ISO date (for formats like 'Mon, 23 Dec 2024 12:46:44 GMT')
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(date);
      }
    } catch (e) {
      // Continue to other parsing methods if this fails
    }

    // Try parsing DD-MM-YYYY format (like '13-02-2025')
    const ddmmyyyyRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    const ddmmyyyyMatch = dateString.match(ddmmyyyyRegex);

    if (ddmmyyyyMatch) {
      const [_, day, month, year] = ddmmyyyyMatch;
      const parsedDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );

      if (!isNaN(parsedDate.getTime())) {
        return new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(parsedDate);
      }
    }

    // Handle partial dates with missing parts
    const parts = dateString.split('-').filter((part) => part !== '');

    if (parts.length === 1) {
      // Only year is present
      return parts[0];
    } else if (parts.length === 2) {
      // Month and year
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const monthIndex = parseInt(parts[0], 10);
      if (!isNaN(monthIndex) && monthIndex >= 1 && monthIndex <= 12) {
        return `${monthNames[monthIndex - 1]} ${parts[1]}`;
      } else {
        return parts.join(' ');
      }
    }

    // Return original string if all parsing attempts fail
    return dateString;
  };

  return (
    <div className="relative">
      {/* First show pinned items in a 2-row grid */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        {pinnedAnnouncementItems.map((item, idx) => (
          <div key={idx}>
            {item.date && (
              <div className="text-gray-500 mb-1 text-body text-left">
                {formatDate(item.date)}
              </div>
            )}
            <a className="flex items-start" href={item.link}>
              <span className="text-green-500 mr-2 mt-1">📌</span>
              <h3 className="text-gray-700 text-title-3 line-clamp-1 font-medium hover:text-main cursor-pointer">
                {item.title}
              </h3>
            </a>
          </div>
        ))}
      </div>

      {/* Then infinite scroll carousel for remaining items */}
      <Carousel
        className="w-full mt-4"
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
      >
        <CarouselContent>
          {regularAnnouncementItems.map((item, idx) => (
            <CarouselItem key={idx}>
              <a href={item.link} className="p-1">
                <Card className="border-none shadow-none py-0 bg-transparent">
                  <CardContent className="flex flex-col px-2 text-left">
                    {item.date && (
                      <div className="text-gray-500 mb-1 text-body">
                        {formatDate(item.date)}
                      </div>
                    )}
                    <h3 className="text-gray-700 text-title-3 line-clamp-1 font-medium hover:text-main cursor-pointer">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-between items-center mt-6 max-md:flex-col max-md:items-start gap-2">
          <Link
            href="/annoucements"
            className="text-main hover:underline flex text-body items-center"
          >
            View all Announcements <span className="ml-2">→</span>
          </Link>
          <div className="flex space-x-2">
            <CarouselPrevious className="relative left-0 !top-0 !translate-none" />
            <CarouselNext className="relative right-0 !top-0 !translate-none" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
