'use client';
import { AlumniCard } from '@/app/(home)/alumni-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Data from '@/data/alumni.json';
import { Review } from '@/types/alumni';
import { useEffect, useState } from 'react';

const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

export default function Page() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  useEffect(() => {
    // Process the data from the imported JSON
    const sortedReviews = Data.sort((a: Review, b: Review) => {
      if (a.graduationYear === b.graduationYear) {
        return a.name.localeCompare(b.name);
      }
      return a.graduationYear - b.graduationYear; // Newest first
    });

    // Get unique years
    const years = [
      ...new Set(sortedReviews.map((review) => review.graduationYear))
    ].sort((a, b) => a - b);

    setReviews(sortedReviews);
    setFilteredReviews(sortedReviews);
    setAvailableYears(years);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Scroll to top and remove listener on unmount
    window.scrollTo(0, 0);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const filtered = reviews.filter((review) => {
      const matchesSearch = review.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      // review.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear =
        selectedYear === 'all' ||
        review.graduationYear.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
    setFilteredReviews(filtered);
  }, [searchQuery, selectedYear, reviews]);

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // smaller screens
  };

  const columnCount = getColumnCount();
  const distributedReviews = distributeReviews(filteredReviews, columnCount);

  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto min-h-screen flex flex-col pb-20 text-text-col bg-color1">
      <div className="w-full pt-20 flex flex-col gap-8">
        {/* Search and Filters Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Input
              type="text"
              placeholder="Search by name or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-body text-gray-600">
            Showing {filteredReviews.length} of {reviews.length} testimonials
          </div>
        </div>

        {/* Reviews Grid */}
        {distributedReviews.length > 0 ? (
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
        ) : (
          <div className="text-center text-gray-500 py-8">
            No testimonials found
          </div>
        )}
      </div>
    </div>
  );
}
