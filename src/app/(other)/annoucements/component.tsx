'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Announcement } from '@/sanity/types';
import { useState } from 'react';

// Monthly data helper
const months = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
];

export default function AnnouncementsComponents({
  announcements
}: {
  announcements: Announcement[];
}) {
  // Get current year for default value
  const currentYear = new Date().getFullYear();

  // Generate a list of years (current year and 4 previous years)
  const years = Array.from({ length: 5 }, (_, i) =>
    (currentYear - i).toString()
  );

  // State for filters
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter announcements based on selected month and year
  const filteredAnnouncements = announcements.filter((announcement) => {
    if (selectedMonth !== 'all' && announcement.month !== selectedMonth) {
      return false;
    }
    if (selectedYear && announcement.year !== selectedYear) {
      return false;
    }
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredAnnouncements.length / itemsPerPage);
  const paginatedAnnouncements = filteredAnnouncements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle filter changes
  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle page changes
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of announcements list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Announcements</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Month
          </label>
          <Select value={selectedMonth} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Months" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <Select value={selectedYear} onValueChange={handleYearChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-600 text-title-3 mb-4">
        {filteredAnnouncements.length} announcement
        {filteredAnnouncements.length !== 1 ? 's' : ''} found
      </p>

      {/* Announcements list */}
      <div className="space-y-4 mb-8">
        {paginatedAnnouncements.length > 0 ? (
          paginatedAnnouncements.map((announcement) => (
            <Card
              key={announcement._id}
              className="hover:shadow-md transition-shadow py-4"
            >
              <CardContent className="px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-title-3 font-medium text-gray-600 hover:text-main cursor-pointer">
                      {announcement.text}
                    </h3>
                    {announcement.link && (
                      <a
                        href={announcement.link}
                        className="text-blue-500 hover:underline text-callout mt-1 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View details
                      </a>
                    )}
                  </div>
                  <div className="text-gray-500 text-callout md:text-right whitespace-nowrap">
                    {announcement.date}
                    {announcement.new && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">
              No announcements found for the selected filters.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                className={
                  currentPage <= 1
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => goToPage(page)}
                  isActive={page === currentPage}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && goToPage(currentPage + 1)
                }
                className={
                  currentPage >= totalPages
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
