import ToTop from '@/components/layout/to-top';
import reviews from '@/data/alumni.json';
import { get } from '@/sanity/lib/client';
import { queryEvents } from '@/sanity/lib/queries';
import { QueryEventsResult } from '@/sanity/types';
import AlumniSection from './alumni';
import BriefContent from './brief-content';
import Hero from './hero';
import MainCarousel from './main-carousel';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default async function HomePage() {
  const data = await get<QueryEventsResult>(queryEvents);
  const heroData = data.flatMap((event) => event?.allImage || []);

  const processedReviews = shuffleArray(
    reviews.filter((review) => review.graduationYear <= 2024)
  );

  return (
    <main className="min-h-screen w-full">
      <Hero data={heroData} />
      <BriefContent />
      <MainCarousel />
      <AlumniSection reviews={processedReviews} />
      <ToTop />
    </main>
  );
}
