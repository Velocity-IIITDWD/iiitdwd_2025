'use client';
import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Marquee } from '../ui/marquee';

export default function LandingSection() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const topBarHeight = document.getElementById('top-bar')?.clientHeight || 0;
    const headerHeight = document.getElementById('header')?.clientHeight || 0;
    setHeight(`calc(100vh - ${topBarHeight + headerHeight}px)`);
  }, []);

  return (
    <div className="flex relative flex-col items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="relative flex-1 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee className="!mt-0">
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
          </Marquee>
          <Marquee className="!mt-0 -left-18">
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
            <div className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"></div>
          </Marquee>
        </div>
        <div className="px-13 py-12 font-grotesk">
          <div className="mx-auto max-w-[1344px] w-full">
            <div className="text-[clamp(2.2rem,10vw,5.4rem)] uppercase text-center leading-[0.9] font-bold">
              Creating thinkers and leaders in technology to positively impact
              society
            </div>
          </div>
        </div>
      </div>
      <div
        id="quick-links"
        className="w-fit uppercase flex max-md:flex-col max-md:w-full items-center gap-4 py-4"
      >
        <div className="hidden md:block whitespace-nowrap text-gray-500">
          Quick Links:
        </div>
        <div className="flex gap-1 md:gap-4 max-md:flex-col w-full max-md:max-w-[260px] items-center">
          {/* <StarBorder>Academics</StarBorder>
          <StarBorder>Admissions</StarBorder>
          <StarBorder>Campus</StarBorder>
          <StarBorder>Culture</StarBorder> */}
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-white bg-primary rounded px-4 md:px-6 py-2 items-center">
            Academics
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-white bg-primary rounded px-4 md:px-6 py-2 items-center">
            Admissions
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-white bg-primary rounded px-4 md:px-6 py-2 items-center">
            Campus
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-white bg-primary rounded px-4 md:px-6 py-2 items-center">
            Culture
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
