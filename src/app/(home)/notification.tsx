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

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  isPinned?: boolean;
  type?: 'news' | 'announcement';
}

export default function NotificationSection() {
  const newsItems: AnnouncementItem[] = [
    {
      id: 'news-1',
      title: 'Admission to MBA Programme-2025',
      date: 'FEB 07, 2025',
      type: 'news',
      isPinned: true
    },
    {
      id: 'news-2',
      title: 'NITK QS Ranking',
      date: 'NOV 06, 2024',
      type: 'news',
      isPinned: true
    },
    {
      id: 'news-3',
      title: 'Dr. Gururaj S Punekar & Priyanka Halu have got Best paper award',
      date: 'SEP 13, 2024',
      type: 'news'
    },
    {
      id: 'news-4',
      title:
        'Indian Patent Granted to Prof. Bibhuti Bhusan Das & Dr. B. P. Sharath',
      date: 'SEP 06, 2024',
      type: 'news'
    },
    {
      id: 'news-5',
      title: 'New Research Grant Awarded to Computer Science Department',
      date: 'AUG 15, 2024',
      type: 'news'
    },
    {
      id: 'news-6',
      title: 'NITK Hosts International Conference on Sustainable Technologies',
      date: 'JUL 22, 2024',
      type: 'news'
    }
  ];

  const announcementItems: AnnouncementItem[] = [
    {
      id: 'announcement-1',
      title: 'M.Tech., M.B.A, M.Sc. and Ph.D admissions 2025-26',
      date: 'MAR 07, 2025',
      type: 'announcement',
      isPinned: true
    },
    {
      id: 'announcement-2',
      title: 'Notification for the post of skilled manpower at Central Library',
      date: 'MAR 04, 2025',
      type: 'announcement',
      isPinned: true
    },
    {
      id: 'announcement-3',
      title:
        'Advertisement for Project Administrative Coordinator in the Civil dept.',
      date: 'APR 01, 2024',
      type: 'announcement'
    },
    {
      id: 'announcement-4',
      title: 'Advertisement for a summer internship under the CRG project',
      date: 'MAR 23, 2024',
      type: 'announcement'
    },
    {
      id: 'announcement-5',
      title: 'Registration Open for Annual Technical Festival',
      date: 'MAR 15, 2024',
      type: 'announcement'
    },
    {
      id: 'announcement-6',
      title: 'Workshop on Advanced Machine Learning Techniques',
      date: 'MAR 10, 2024',
      type: 'announcement'
    }
  ];

  const regularNewsItems = newsItems.filter((item) => !item.isPinned);
  const regularAnnouncementItems = announcementItems.filter(
    (item) => !item.isPinned
  );

  const pinnedNewsItems = newsItems.filter((item) => item.isPinned).slice(0, 2);
  const pinnedAnnouncementItems = announcementItems
    .filter((item) => item.isPinned)
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 py-8">
      {/* News Section */}
      {/* <div className="relative">
          <SectionHeading title="News and Updates" />

          <div className="grid grid-cols-1 gap-4 mb-4">
            {pinnedNewsItems.map((item) => (
              <div key={item.id}>
                <div className="text-gray-500 mb-1">{item.date}</div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">📌</span>
                  <h3 className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <Carousel
            className="w-full mt-4"
            plugins={[
              Autoplay({
                delay: 3000
              })
            ]}
          >
            <CarouselContent>
              {regularNewsItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none shadow-none py-0">
                      <CardContent className="flex flex-col px-2">
                        <div className="text-gray-500 mb-1">{item.date}</div>
                        <h3 className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                          {item.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-between items-center mt-6">
              <a
                href="#"
                className="text-blue-600 hover:underline flex items-center"
              >
                View all News <span className="ml-2">→</span>
              </a>
              <div className="flex space-x-2">
                <CarouselPrevious className="relative left-0 !top-0 !translate-none" />
                <CarouselNext className="relative right-0 !top-0 !translate-none" />
              </div>
            </div>
          </Carousel>
        </div> */}

      {/* Announcements Section */}
      <div className="relative">
        {/* First show pinned items in a 2-row grid */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          {pinnedAnnouncementItems.map((item) => (
            <div key={item.id}>
              <div className="text-gray-500 mb-1 text-body text-left">
                {item.date}
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">📌</span>
                <h3 className="text-gray-700 text-title-3 font-medium hover:text-blue-600 cursor-pointer">
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
            {regularAnnouncementItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-none py-0">
                    <CardContent className="flex flex-col px-2 text-left">
                      <div className="text-gray-500 mb-1 text-body">
                        {item.date}
                      </div>
                      <h3 className="text-gray-700 text-title-3 font-medium hover:text-blue-600 cursor-pointer">
                        {item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-6">
            <a
              href="#"
              className="text-blue-600 hover:underline flex text-body items-center"
            >
              View all Announcements <span className="ml-2">→</span>
            </a>
            <div className="flex space-x-2">
              <CarouselPrevious className="relative left-0 !top-0 !translate-none" />
              <CarouselNext className="relative right-0 !top-0 !translate-none" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
