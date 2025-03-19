import SocialSidebar from '@/components/layout/social-sidebar';
import ToTop from '@/components/layout/to-top';
import AlumniSection from './alumni';
import BriefContent from './brief-content';
import Hero from './hero';
import NotificationSection from './notification';

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BriefContent />
      <NotificationSection />
      <AlumniSection />
      <ToTop />

      <SocialSidebar platform="twitter" position="right" />
      <SocialSidebar platform="linkedin" position="left" />
    </main>
  );
}
