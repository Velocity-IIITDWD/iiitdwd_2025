'use client';
import Background from '@/assets/campus_0.webp';
import SectionHeading from '@/components/layout/section-heading';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DetailSection from './details-section';
import VisionMissionValues from './vision-mission-values';

export default function AboutPage() {
  return (
    <main>
      <div className="w-full relative h-[60vh] py-16 flex items-end">
        <Image
          className="h-full w-full object-cover absolute top-0 left-0"
          height={0}
          width={0}
          sizes={'100%'}
          src={Background}
          alt={'Main Background'}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]" />

        <div className="z-[2] px-6 md:px-20 flex flex-col gap-3 text-white">
          <SectionHeading reverse title="About Us" free />
          <div className="font-semibold leading-[1.1] text-[clamp(2rem,10vw,3.5rem)]">
            Shaping the Future of Technology
          </div>
          <div className="text-[clamp(1.5rem,5vw,1.5rem)] text-slate-200">
            Empowering the next generation of innovators and leaders in
            Information Technology.
          </div>
        </div>
      </div>

      <div className="bg-secondary/20 py-4">
        <div className="px-6 md:px-20">
          <nav className="flex items-center text-sm md:text-base">
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

      <DetailSection />
      <VisionMissionValues />
      {/* https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=0 */}
      <div className="w-full bg-tertiary/30 py-10">
        <iframe
          className="aspect-video px-6 md:px-20 w-full rounded overflow-hidden"
          src={
            'https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=0'
          }
        />
      </div>
    </main>
  );
}
