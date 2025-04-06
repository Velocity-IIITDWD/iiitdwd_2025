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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        <div className="z-[2] w-[87.5vw] max-w-[1680px] mx-auto flex flex-col gap-3 text-white">
          <SectionHeading reverse title="About Us" free />
          <div className="font-semibold text-main-title">
            Shaping the Future of Technology
          </div>
          <div className="text-title-1 font-medium text-slate-200">
            Empowering the next generation of innovators and leaders in
            Information Technology.
          </div>
        </div>
      </div>

      <div className="bg-white py-4 text-title-3 font-medium">
        <div className="w-[87.5vw] max-w-[1680px] mx-auto">
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
              <span className="text-main font-semibold">About Us</span>
            </div>
          </nav>
        </div>
      </div>

      <DetailSection />
      <VisionMissionValues />
      {/* https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=0 */}
      <div className="w-full bg-background py-10">
        <iframe
          className="aspect-video w-[87.5vw] max-w-[1680px] mx-auto rounded overflow-hidden"
          src={
            'https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=0'
          }
        />
      </div>
    </main>
  );
}
