// 'use client';
// // components/announcements-section.tsx
// import { ArrowRight, ChevronLeft, ChevronRight, Pin } from 'lucide-react';
// import { useState } from 'react';
// import SectionHeading from '../section-heading';
// import AnnouncementCard from './announcement-card';
// // import CreateAnnouncementForm from './create-announcement-form';
// import { AnnouncementCardProps } from '@/types/global';

// export default function AnnouncementsSection() {
//   const [announcements, setAnnouncements] = useState<AnnouncementCardProps[]>([
//     {
//       type: 'important',
//       title: 'System Maintenance',
//       content:
//         'The system will be down for maintenance on March 20, 2025 from 2:00 AM to 4:00 AM EST.',
//       date: 'March 15, 2025',
//       isNew: true
//     },
//     {
//       type: 'important',
//       title: 'New Features Released',
//       content:
//         'We&apos;ve added several new features to enhance your experience. Check them out!',
//       date: 'March 12, 2025'
//     },
//     {
//       type: 'important',
//       title: 'Security Update',
//       content:
//         'Important security patches have been applied to all systems. No action required.',
//       date: 'March 10, 2025'
//     },
//     {
//       type: 'important',
//       title: 'Office Relocation',
//       content:
//         'Our headquarters will be moving to a new location starting April 1, 2025.',
//       date: 'March 8, 2025'
//     },
//     {
//       type: 'normal',
//       title: 'Team Meeting',
//       content:
//         'Reminder: Weekly team meeting tomorrow at 10:00 AM in Conference Room A.',
//       date: 'March 11, 2025'
//     },
//     {
//       type: 'normal',
//       title: 'New Employee',
//       content:
//         'Please welcome Sarah Johnson, who joins our development team today.',
//       date: 'March 10, 2025'
//     },
//     {
//       type: 'normal',
//       title: 'Upcoming Holiday',
//       content:
//         'The office will be closed on March 27, 2025 for the spring holiday.',
//       date: 'March 8, 2025'
//     },
//     {
//       type: 'normal',
//       title: 'IT Support Hours',
//       content:
//         'IT support will be available from 8:00 AM to 6:00 PM starting next week.',
//       date: 'March 7, 2025'
//     },
//     {
//       type: 'normal',
//       title: 'Company Picnic',
//       content:
//         'Annual company picnic scheduled for April 15. Please RSVP by April 1.',
//       date: 'March 5, 2025'
//     }
//   ]);

//   // Pagination state
//   const [importantPage, setImportantPage] = useState(0);
//   const [normalPage, setNormalPage] = useState(0);
//   const itemsPerPage = 3;

//   const handleCreateAnnouncement = (newAnnouncement: AnnouncementCardProps) => {
//     setAnnouncements([newAnnouncement, ...announcements]);
//     // Reset to first page when new announcement is added to see it immediately
//     if (newAnnouncement.type === 'important') {
//       setImportantPage(0);
//     } else {
//       setNormalPage(0);
//     }
//   };

//   const importantAnnouncements = announcements.filter(
//     (a) => a.type === 'important'
//   );
//   const normalAnnouncements = announcements.filter((a) => a.type === 'normal');

//   // Calculate total pages for each category
//   const importantTotalPages = Math.ceil(
//     importantAnnouncements.length / itemsPerPage
//   );
//   const normalTotalPages = Math.ceil(normalAnnouncements.length / itemsPerPage);

//   // Get current page items
//   const currentImportantAnnouncements = importantAnnouncements.slice(
//     importantPage * itemsPerPage,
//     (importantPage + 1) * itemsPerPage
//   );

//   const currentNormalAnnouncements = normalAnnouncements.slice(
//     normalPage * itemsPerPage,
//     (normalPage + 1) * itemsPerPage
//   );

//   // Navigation handlers
//   const prevImportantPage = () => {
//     setImportantPage((prev) => Math.max(0, prev - 1));
//   };

//   const nextImportantPage = () => {
//     setImportantPage((prev) => Math.min(importantTotalPages - 1, prev + 1));
//   };

//   const prevNormalPage = () => {
//     setNormalPage((prev) => Math.max(0, prev - 1));
//   };

//   const nextNormalPage = () => {
//     setNormalPage((prev) => Math.min(normalTotalPages - 1, prev + 1));
//   };

//   // Pagination controls component
//   const PaginationControls = ({
//     currentPage,
//     totalPages,
//     onPrev,
//     onNext
//   }: {
//     currentPage: number;
//     totalPages: number;
//     onPrev: () => void;
//     onNext: () => void;
//   }) => (
//     <div className="flex items-center justify-between mt-4 flex-none">
//       <button
//         onClick={onPrev}
//         disabled={currentPage === 0}
//         className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         <ChevronLeft size={20} />
//       </button>
//       <span className="text-sm text-gray-500">
//         {currentPage + 1} / {totalPages || 1}
//       </span>
//       <button
//         onClick={onNext}
//         disabled={currentPage >= totalPages - 1}
//         className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         <ChevronRight size={20} />
//       </button>
//     </div>
//   );

//   return (
//     <section className="flex flex-col pt-10 px-4 md:px-6 lg:px-10">
//       <SectionHeading title="Announcements" />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//         <div className="lg:col-span-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-4">
//               <h3 className="font-medium text-lg text-red-500 flex items-center gap-2">
//                 <Pin size={16} />
//                 Important
//               </h3>

//               <div className="space-y-4 min-h-64">
//                 {currentImportantAnnouncements.length > 0 ? (
//                   currentImportantAnnouncements.map((announcement, index) => (
//                     <AnnouncementCard
//                       key={`important-${importantPage}-${index}`}
//                       {...announcement}
//                     />
//                   ))
//                 ) : (
//                   <p className="text-gray-500 italic">
//                     No important announcements
//                   </p>
//                 )}
//               </div>

//               {importantTotalPages > 1 && (
//                 <PaginationControls
//                   currentPage={importantPage}
//                   totalPages={importantTotalPages}
//                   onPrev={prevImportantPage}
//                   onNext={nextImportantPage}
//                 />
//               )}
//             </div>

//             <div className="space-y-4 h-full flex flex-col">
//               <h3 className="font-medium flex-none text-lg text-blue-500 flex items-center gap-2">
//                 <ArrowRight size={16} />
//                 General
//               </h3>

//               <div className="gap-4 flex-1 flex flex-col">
//                 {currentNormalAnnouncements.length > 0 ? (
//                   currentNormalAnnouncements.map((announcement, index) => (
//                     <AnnouncementCard
//                       key={`normal-${normalPage}-${index}`}
//                       {...announcement}
//                     />
//                   ))
//                 ) : (
//                   <p className="text-gray-500 italic">
//                     No general announcements
//                   </p>
//                 )}
//               </div>

//               {normalTotalPages > 1 && (
//                 <PaginationControls
//                   currentPage={normalPage}
//                   totalPages={normalTotalPages}
//                   onPrev={prevNormalPage}
//                   onNext={nextNormalPage}
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* <div className="lg:col-span-1">
//           <CreateAnnouncementForm onSubmit={handleCreateAnnouncement} />
//         </div> */}
//       </div>
//     </section>
//   );
// }

'use client';
// types/global.ts
export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  isPinned?: boolean;
  type?: 'news' | 'announcement';
}

// components/news-announcements.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import SectionHeading from '../section-heading';

export default function NewsAnnouncements() {
  // Sample data
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

  // Get regular items (non-pinned)
  const regularNewsItems = newsItems.filter((item) => !item.isPinned);
  const regularAnnouncementItems = announcementItems.filter(
    (item) => !item.isPinned
  );

  // Auto-scroll functionality
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

  // Infinite carousel rendering function
  const renderInfiniteCarousel = (
    items: AnnouncementItem[],
    currentSlide: number
  ) => {
    if (items.length <= 2) return null;

    // Calculate which items to show for the infinite effect
    const itemsToShow = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % items.length;
      itemsToShow.push(items[index]);
    }

    const carouselWidth = `${items.length * 50}%`; // Each card takes 50% width
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

  // Get pinned items
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
          {/* <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              News and Updates
            </h2>
            <div className="flex-grow mx-4 border-t border-gray-200"></div>
          </div> */}
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
          {/* <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
            <div className="flex-grow mx-4 border-t border-gray-200"></div>
          </div> */}
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
