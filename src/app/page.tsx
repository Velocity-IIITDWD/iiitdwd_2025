import Alumni from '@/components/home/alumni';
import BriefContent from '@/components/home/brief-content';
import LandingSection from '@/components/home/landing-section';
import Notification from '@/components/home/notification';
import LinkedInSide from '@/components/linkedin-side';
import ToTop from '@/components/to-top';
import TwitterSide from '@/components/twitter-side';

export default async function Home() {
  return (
    <main className="min-h-screen">
      <LandingSection />
      <BriefContent />
      <Notification />
      <Alumni />
      <ToTop />

      <TwitterSide />
      <LinkedInSide />
    </main>
  );
}
