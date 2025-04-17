// @ts-nocheck
import { get } from '@/sanity/lib/client';
import { GetAnnouncements } from '@/sanity/lib/queries';
import { Announcement } from '@/sanity/types';
import AnnouncementComponent from './announcement-component';

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  isPinned?: boolean;
  type?: 'news' | 'announcement';
  link: string;
}

const parseDate = (dateString: string | null | undefined): Date | null => {
  if (!dateString) return null;

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
    date: item.date,
    isPinned: item.new || false,
    type: 'announcement' as const,
    link: item.link || '#'
  }));

  const sortedAnnouncements = transformedAnnouncements.sort((a, b) => {
    try {
      // Validate date format using regex (dd-mm-yyyy)
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (!dateRegex.test(a.date) || !dateRegex.test(b.date)) {
        console.error('Invalid date format:', { date1: a.date, date2: b.date });
        return 0;
      }

      const [aDay, aMonth, aYear] = a.date.split('-').map(Number);
      const [bDay, bMonth, bYear] = b.date.split('-').map(Number);

      // Validate date values
      if (
        aMonth < 1 ||
        aMonth > 12 ||
        bMonth < 1 ||
        bMonth > 12 ||
        aDay < 1 ||
        aDay > 31 ||
        bDay < 1 ||
        bDay > 31
      ) {
        console.warn('Invalid date values:', { date1: a.date, date2: b.date });
        return 0;
      }

      const dateA = new Date(aYear, aMonth - 1, aDay);
      const dateB = new Date(bYear, bMonth - 1, bDay);

      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        console.warn('Invalid date objects:', { dateA, dateB });
        return 0;
      }

      return dateB.getTime() - dateA.getTime();
    } catch (error) {
      console.warn('Error sorting dates:', error);
      return 0;
    }
  });

  return <AnnouncementComponent announcements={sortedAnnouncements} />;
}
