'use client';
import { QuickLink } from '@/components/quick-link';
import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

export default function LandingSection({ data }: { data: string[] }) {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <div className="flex relative flex-col items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="relative flex-1 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee className="!mt-0">
            {Array.from({ length: 19 }, (_, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in/images/CAMPUS_${19 - index}.webp`}
                alt={`Campus Image ${19 - index}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                loading="lazy"
                quality={75}
                priority={false}
                sizes={'100%'}
              />
            ))}
          </Marquee>
          <Marquee className="!mt-0 pr-[calc(33vw-2.67px)] md:pr-64">
            {Array.from({ length: 19 }, (_, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in/images/CAMPUS_${38 - index}.webp`}
                alt={`Campus Image ${38 - index}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                loading="lazy"
                quality={75}
                priority={false}
                sizes={'100%'}
              />
            ))}
          </Marquee>
        </div>
        <div className=" px-5 md:px-13 py-12 font-grotesk">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-main-title uppercase text-center font-bold">
              <div>Creating thinkers and leaders</div>
              <div>in technology to positively</div>
              <div>impact society</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="quick-links"
        className="w-fit uppercase my-10 flex max-md:flex-col max-md:w-full items-center gap-4 py-4"
      >
        <div className="hidden text-title-3 md:block whitespace-nowrap text-gray-500">
          Quick Links:
        </div>
        <div className="flex gap-1 md:gap-4 max-md:flex-col w-full max-md:max-w-[260px] items-center">
          <QuickLink href="/academics/programmes" label="Academics" />
          <QuickLink href="/admission" label="Admissions" />
          <QuickLink href="/amenities" label="Campus" />
          <QuickLink
            href="/docs/List_of_Scholarship.pdf"
            label="Scholarships"
          />
        </div>
      </div>
    </div>
  );
}
