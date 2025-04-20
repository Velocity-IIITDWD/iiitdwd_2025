import ToTop from '@/components/layout/to-top';
import reviews from '@/data/alumni.json';
import { get } from '@/sanity/lib/client';
import { queryEvents } from '@/sanity/lib/queries';
import { QueryEventsResult } from '@/sanity/types';
import AlumniSection from './alumni';
import Hero from './hero';
import InfoSection from './info-section';
import MainCarousel from './main-carousel';

export default async function HomePage() {
  const data = await get<QueryEventsResult>(queryEvents);
  const heroData = data.flatMap((event) => event?.allImage || []);

  return (
    <main className="min-h-screen w-full">
      <Hero data={heroData} />
      <InfoSection />
      <MainCarousel />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
