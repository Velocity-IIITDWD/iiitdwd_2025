import AboutPlacements from '@/components/home/about-placement';
import Alumni from '@/components/home/alumni';
import LandingSection from '@/components/home/landing-section';
import Notification from '@/components/home/notification';
import SocialMedia from '@/components/home/social-media';
import VisionMission from '@/components/home/vision-mission';
import ToTop from '@/components/to-top';

export default async function Home() {
  return (
    <main className="min-h-screen">
      <LandingSection />
      <AboutPlacements />
      <VisionMission />
      <Notification />
      <Alumni />
      <SocialMedia />

      <ToTop />
    </main>
  );
}
