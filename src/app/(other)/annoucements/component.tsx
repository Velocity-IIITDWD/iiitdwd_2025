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

  // Sort announcements by date (most recent first)
  const sortedAnnouncements = [...announcements].sort((a, b) => {
    // If either announcement is missing date, year, or month, put it at the end
    if (!a.date || !a.year || !a.month || !b.date || !b.year || !b.month) {
      return 0;
    }

    // Create date strings in YYYY-MM-DD format for comparison
    const dateA = `${a.year}-${a.month}-${a.date}`;
    const dateB = `${b.year}-${b.month}-${b.date}`;

    return dateB.localeCompare(dateA); // Descending order (newest first)
  });

  // Separate rolling announcements
  const rollingAnnouncements = sortedAnnouncements.filter((announcement) =>
    announcement.text?.toLowerCase().startsWith('rolling')
  );
  const regularAnnouncements = sortedAnnouncements.filter(
    (announcement) => !announcement.text?.toLowerCase().startsWith('rolling')
  );

  // Filter announcements based on selected month and year
  const filteredRollingAnnouncements = rollingAnnouncements.filter(
    (announcement) => {
      if (selectedMonth !== 'all' && announcement.month !== selectedMonth) {
        return false;
      }
      if (selectedYear && announcement.year !== selectedYear) {
        return false;
      }
      return true;
    }
  );

  const filteredRegularAnnouncements = regularAnnouncements.filter(
    (announcement) => {
      if (selectedMonth !== 'all' && announcement.month !== selectedMonth) {
        return false;
      }
      if (selectedYear && announcement.year !== selectedYear) {
        return false;
      }
      return true;
    }
  );

  // Calculate pagination for regular announcements only
  const totalPages = Math.ceil(
    filteredRegularAnnouncements.length / itemsPerPage
  );
  const paginatedRegularAnnouncements = filteredRegularAnnouncements.slice(
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
        {filteredRollingAnnouncements.length +
          filteredRegularAnnouncements.length}{' '}
        announcement
        {filteredRollingAnnouncements.length +
          filteredRegularAnnouncements.length !==
        1
          ? 's'
          : ''}{' '}
        found
      </p>

      {/* Rolling Announcements Section */}
      {filteredRollingAnnouncements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Rolling Announcements
          </h2>
          <div className="space-y-4">
            {filteredRollingAnnouncements.map((announcement) => (
              <Card
                key={announcement._id}
                className="hover:shadow-md transition-shadow py-4 bg-blue-50"
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
            ))}
          </div>
        </div>
      )}

      {/* Regular Announcements Section */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Other Announcements
        </h2>
        {paginatedRegularAnnouncements.length > 0 ? (
          paginatedRegularAnnouncements.map((announcement) => (
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

      {/* Pagination - Only show if there are regular announcements */}
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
