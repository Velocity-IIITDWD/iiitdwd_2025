import { get } from '@/sanity/lib/client';
import { GetAnnouncements } from '@/sanity/lib/queries';
import { Announcement } from '@/sanity/types';
import AnnouncementsComponents from './component';

export default async function AnnoucementsPage() {
  const response = await get<Announcement[]>(GetAnnouncements);

  return <AnnouncementsComponents announcements={response} />;
}
