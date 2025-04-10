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

  const regularAnnouncementItems = announcements.filter(
    (item) => !item.isPinned
  );

  return (
    <div className="relative">
      {/* First show pinned items in a 2-row grid */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        {pinnedAnnouncementItems.map((item, idx) => (
          <div key={idx}>
            <div className="text-gray-500 mb-1 text-body text-left">
              {item.date}
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">📌</span>
              <h3 className="text-gray-700 text-title-3 line-clamp-1 font-medium hover:text-main cursor-pointer">
                {item.title}
              </h3>
            </div>
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
              <div className="p-1">
                <Card className="border-none shadow-none py-0 bg-transparent">
                  <CardContent className="flex flex-col px-2 text-left">
                    <div className="text-gray-500 mb-1 text-body">
                      {item.date}
                    </div>
                    <h3 className="text-gray-700 text-title-3 line-clamp-1 font-medium hover:text-main cursor-pointer">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
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
