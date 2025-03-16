import Alumni from '@/components/home/alumni';
import LandingSection from '@/components/home/landing-section';
import Notification from '@/components/home/notification';
// import { get } from '@/sanity/lib/client';
// import { GetAllFaculties } from '@/sanity/lib/queries';
// import { GetAllFacultiesResult } from '@/sanity/types';

export default async function Home() {
  // example usage
  // const data = await get<GetAllFacultiesResult>(GetAllFaculties);
  // console.log(data);

  return (
    <div className="min-h-screen">
      <LandingSection />
      <Notification />
      <Alumni />
    </div>
  );
}
