'use client';
import ProgramCards from '@/components/academics-components/programCards';
import SectionHeading from '@/components/layout/section-heading';
import { ArrowRightCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProgrammesPage() {
  const words = [
    'DISCOVERY',
    'EXCELLENCE',
    'KNOWLEDGE',
    'INNOVATION',
    'LEARNING'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="px-4 md:px-8 pt-16 flex flex-col items-center gap-5 md:gap-10 lg:gap-14">
      <SectionHeading title="Programmes" className="w-fit" free reverse />

      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          THE PERSISTENT PURSUIT OF
        </h2>

        <AnimatePresence mode="wait">
          <motion.h2
            key={words[currentWordIndex]}
            className="text-2xl md:text-3xl lg:text-5xl font-bold"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut'
            }}
          >
            {words[currentWordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="text-base md:text-lg max-w-3xl mx-auto text-center">
        We&apos;re driven by our meaningful land-grant mission to provide an
        education that propels our state, nation and world forward.
      </div>
      <ProgramCards />

      <div className="container px-4 md:px-8 mx-auto py-8 md:py-16 flex flex-col items-center">
        <div className="text-2xl font-semibold text-main mb-10">
          More Resources
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <Link
            href="https://iiitdwd.ac.in/docs/Academic_Calendar_year_1_2024-25.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative bg-gray-300 max-md:hidden" />
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-lg md:text-xl text-main font-semibold">
                  Acdemic Calendar (1st Year)
                </span>
                <span className="text-sm">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>

          <Link
            href="https://iiitdwd.ac.in/docs/Academic_Calendar_year_234_2024-25.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative bg-gray-300 max-md:hidden" />
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-lg md:text-xl text-main font-semibold">
                  Acdemic Calendar 2024-25
                </span>
                <span className="text-sm">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>

          <Link
            href="https://iiitdwd.ac.in/docs/Curricula_16May23.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative bg-gray-300 max-md:hidden" />
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-lg md:text-xl text-main font-semibold">
                  Curriculum
                </span>
                <span className="text-sm">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
