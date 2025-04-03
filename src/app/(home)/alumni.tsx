'use client';
import { Button } from '@/components/ui/button';
import reviews from '@/data/alumni.json';
import { Review } from '@/types/alumni';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlumniCard } from './alumni-card';

// Function to process the original testimonials into the format returned by your Sanity query
const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

export default function AlumniSection() {
  // const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // smaller screens
  };
  const columnCount = getColumnCount();

  // Assuming you have your original testimonials

  // Process them to match the Sanity query structure

  const finalReviews = reviews
    .filter((review) => review.graduationYear <= 2024)
    .sort((a, b) => a.name.localeCompare(b.name));

  // Now you can use them with your component
  const distributedReviews = distributeReviews(finalReviews, columnCount);

  return (
    <div className="relative">
      <div className="z-[2] relative py-10 w-full flex flex-col items-center">
        <div className="mt-4 w-full text-primary text-center px-2 max-sm:px-4 font-semibold text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.3]">
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
