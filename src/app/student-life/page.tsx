'use client';
import ClubsSection from './clubsSection';
import DualFeatureSection from './dualFeatureSection';
import HeroSection from './heroSection';

export default function StudentLifePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <ClubsSection />
      <DualFeatureSection />
    </div>
  );
}
