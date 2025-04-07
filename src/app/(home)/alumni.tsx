'use client';
import { Button } from '@/components/ui/button';
import { Review } from '@/types/alumni';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlumniCard } from './alumni-card';

const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

interface AlumniSectionProps {
  reviews: Review[];
}

export default function AlumniSection({ reviews }: AlumniSectionProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4;
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };
  const columnCount = getColumnCount();
  const distributedReviews = distributeReviews(reviews, columnCount);

  return (
    <div className="relative">
      <div className="z-[2] relative py-10 w-full flex flex-col items-center">
        <div className="mt-4 w-full text-primary text-center px-2 max-sm:px-4 font-semibold text-large-title">
          <h1 className="">Explore inspiring journeys and achievements</h1>
          <h2>from our thriving alumni community.</h2>
        </div>

        <div className="w-full max-h-[80vh] px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden flex gap-4">
          <div className="w-full flex gap-4">
            {distributedReviews.map((column, columnIndex) => (
              <div key={columnIndex} className="flex-1 flex flex-col gap-4">
                {column.map((review, reviewIndex) => (
                  <AlumniCard
                    key={`${columnIndex}-${reviewIndex}`}
                    {...review}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-color1"></div> */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>

        <Link href="/alumni-testimonials" className="mt-10">
          <Button className="cursor-pointer">View All</Button>
        </Link>
      </div>
    </div>
  );
}
