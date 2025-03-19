'use client';
import SectionHeading from '@/components/layout/section-heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  const [newsCurrentSlide, setNewsCurrentSlide] = useState(0);
  const [announcementCurrentSlide, setAnnouncementCurrentSlide] = useState(0);
  const [isNewsHovered, setIsNewsHovered] = useState(false);
  const [isAnnouncementHovered, setIsAnnouncementHovered] = useState(false);

  const regularNewsItems = newsItems.filter((item) => !item.isPinned);
  const regularAnnouncementItems = announcementItems.filter(
    (item) => !item.isPinned
  );

  useEffect(() => {
    const newsInterval = setInterval(() => {
      if (!isNewsHovered && regularNewsItems.length > 2) {
        setNewsCurrentSlide((prev) => (prev + 1) % regularNewsItems.length);
      }
    }, 5000);

    const announcementInterval = setInterval(() => {
      if (!isAnnouncementHovered && regularAnnouncementItems.length > 2) {
        setAnnouncementCurrentSlide(
          (prev) => (prev + 1) % regularAnnouncementItems.length
        );
      }
    }, 5000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(announcementInterval);
    };
  }, [
    isNewsHovered,
    isAnnouncementHovered,
    regularNewsItems.length,
    regularAnnouncementItems.length
  ]);

  const handlePrevNews = () => {
    setNewsCurrentSlide((prev) =>
      prev === 0 ? regularNewsItems.length - 1 : prev - 1
    );
  };

  const handleNextNews = () => {
    setNewsCurrentSlide((prev) => (prev + 1) % regularNewsItems.length);
  };

  const handlePrevAnnouncement = () => {
    setAnnouncementCurrentSlide((prev) =>
      prev === 0 ? regularAnnouncementItems.length - 1 : prev - 1
    );
  };

  const handleNextAnnouncement = () => {
    setAnnouncementCurrentSlide(
      (prev) => (prev + 1) % regularAnnouncementItems.length
    );
  };

  const renderInfiniteCarousel = (
    items: AnnouncementItem[],
    currentSlide: number
  ) => {
    if (items.length <= 2) return null;

    const itemsToShow = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % items.length;
      itemsToShow.push(items[index]);
    }

    const carouselWidth = `${items.length * 50}%`;
    const translateX = `-${(currentSlide * 50) % 100}%`;

    return (
      <div className="overflow-hidden mt-4 relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: carouselWidth,
            transform: `translateX(${translateX})`
          }}
        >
          {itemsToShow.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="w-1/2 px-2 flex-shrink-0">
              <div className="text-gray-500 mb-1">{item.date}</div>
              <h3 className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const pinnedNewsItems = newsItems.filter((item) => item.isPinned).slice(0, 2);
  const pinnedAnnouncementItems = announcementItems
    .filter((item) => item.isPinned)
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* News Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsNewsHovered(true)}
          onMouseLeave={() => setIsNewsHovered(false)}
        >
          <SectionHeading title="News and Updates" />

          {/* First show pinned items in a 2-row grid */}
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

          {/* Then infinite scroll carousel for remaining items */}
          {renderInfiniteCarousel(regularNewsItems, newsCurrentSlide)}

          <div className="flex justify-between items-center mt-6">
            <a
              href="#"
              className="text-blue-600 hover:underline flex items-center"
            >
              View all News <span className="ml-2">→</span>
            </a>
            {regularNewsItems.length > 2 && (
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevNews}
                  className="p-1 border rounded-md hover:bg-gray-100"
                  aria-label="Previous news"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextNews}
                  className="p-1 border rounded-md hover:bg-gray-100"
                  aria-label="Next news"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Announcements Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsAnnouncementHovered(true)}
          onMouseLeave={() => setIsAnnouncementHovered(false)}
        >
          <SectionHeading title="Announcements" />

          {/* First show pinned items in a 2-row grid */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            {pinnedAnnouncementItems.map((item) => (
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

          {/* Then infinite scroll carousel for remaining items */}
          {renderInfiniteCarousel(
            regularAnnouncementItems,
            announcementCurrentSlide
          )}

          <div className="flex justify-between items-center mt-6">
            <a
              href="#"
              className="text-blue-600 hover:underline flex items-center"
            >
              View all Announcements <span className="ml-2">→</span>
            </a>
            {regularAnnouncementItems.length > 2 && (
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevAnnouncement}
                  className="p-1 border rounded-md hover:bg-gray-100"
                  aria-label="Previous announcement"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextAnnouncement}
                  className="p-1 border rounded-md hover:bg-gray-100"
                  aria-label="Next announcement"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
