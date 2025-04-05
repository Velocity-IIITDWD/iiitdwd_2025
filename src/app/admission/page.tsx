import Background from '@/assets/campus_0.webp';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './hero-section';
import JourneySection from './journey-section';

export default function Page() {
  return (
    <main>
      <div className="w-full relative max-md:min-h-[calc(100vh-6rem)] max-md:h-full h-[calc(100vh-6rem)] py-16 flex">
        <Image
          className="h-full w-full object-cover absolute top-0 left-0"
          height={0}
          width={0}
          sizes={'100%'}
          src={Background}
          alt={'Main Background'}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/[.55] z-[1]" />

        <HeroSection />
      </div>

      <div className="bg-white py-4">
        <div className="w-[87.5vw] max-w-[1680px] mx-auto ">
          <nav className="flex items-center text-title-3">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-gray-700 hover:text-gray-900">
                Institute
              </span>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-primary font-medium">About Us</span>
            </div>
          </nav>
        </div>
      </div>

      <JourneySection />
    </main>
  );
}
