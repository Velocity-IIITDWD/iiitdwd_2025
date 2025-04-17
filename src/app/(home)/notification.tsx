// @ts-nocheck
import { get } from '@/sanity/lib/client';
import { GetAnnouncements } from '@/sanity/lib/queries';
import { Announcement } from '@/sanity/types';
import AnnouncementComponent from './announcement-component';

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string | null;
  isPinned?: boolean;
  type?: 'news' | 'announcement';
  link: string;
}

// Helper function to parse dates in various formats
const parseDate = (dateString: string | null | undefined): Date | null => {
  if (!dateString) return null;

  // Try standard date parsing first (handles ISO formats)
  try {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date;
    }
  } catch (e) {
    // Continue to other parsing attempts
  }

  // Try DD-MM-YYYY format
  const ddmmyyyyRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
  const ddmmyyyyMatch = dateString.match(ddmmyyyyRegex);

  if (ddmmyyyyMatch) {
    const [_, day, month, year] = ddmmyyyyMatch;
    try {
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      if (!isNaN(date.getTime())) {
        return date;
      }
    } catch (e) {
      console.warn('Failed to parse DD-MM-YYYY date:', dateString);
    }
  }

  return null;
};

export default async function NotificationSection() {
  const response = await get<Announcement[]>(GetAnnouncements);

  const transformedAnnouncements = response.map((item) => ({
    id: item._id,
    title: item.text || '',
    date: item.date || null,
    isPinned: item.new || false,
    type: 'announcement' as const,
    link: item.link || '#'
  }));

  // More robust sorting that handles various date formats and nulls
  const sortedAnnouncements = [...transformedAnnouncements].sort((a, b) => {
    // Handle cases where dates might be null
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1; // Push items with no date to the bottom
    if (!b.date) return -1; // Keep items with dates at the top

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    // If dates couldn't be parsed, keep original order
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;

    // Sort by date, newest first
    return dateB.getTime() - dateA.getTime();
  });

  // Group pinned items to the top regardless of date
  const pinnedItems = sortedAnnouncements.filter((item) => item.isPinned);
  const regularItems = sortedAnnouncements.filter((item) => !item.isPinned);

  // Combine the arrays with pinned items first
  const finalSortedAnnouncements = [...pinnedItems, ...regularItems];

  return <AnnouncementComponent announcements={finalSortedAnnouncements} />;
}
