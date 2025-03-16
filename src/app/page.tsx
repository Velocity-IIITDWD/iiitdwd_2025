import Alumni from '@/components/home/alumni';
import LandingSection from '@/components/home/landing-section';
import Notification from '@/components/home/notification';
import SocialMedia from '@/components/home/social-media';
import ToTop from '@/components/to-top';
// import { get } from '@/sanity/lib/client';
// import { GetAllFaculties } from '@/sanity/lib/queries';
// import { GetAllFacultiesResult } from '@/sanity/types';

export default async function Home() {
  // example usage
  // const data = await get<GetAllFacultiesResult>(GetAllFaculties);
  // console.log(data);

  return (
    <main className="min-h-screen">
      <LandingSection />
      <Notification />
      <Alumni />
      <SocialMedia />
      <ToTop />
    </main>
  );
}
