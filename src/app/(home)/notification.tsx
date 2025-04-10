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
}

export default async function NotificationSection() {
  const response = await get<Announcement[]>(GetAnnouncements);

  const transformedAnnouncements = response.map((item) => ({
    id: item._id,
    title: item.text || '',
    date: `${item.date ?? ''}-${item.month ?? ''}-${item.year ?? ''}`,
    isPinned: item.new || false,
    type: 'announcement' as const
  }));

  return <AnnouncementComponent announcements={transformedAnnouncements} />;
}
