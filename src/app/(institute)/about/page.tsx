'use client';
import Background from '@/assets/layout/Alumni_Background.webp';
import SectionHeading from '@/components/layout/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import aboutPageSections, { carouselData } from '@/data/about';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ImageCarousel from './carousel';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [arrowPosition, setArrowPosition] = useState<number>(0);
  const sectionRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  // Initialize refs array with the correct length
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(
      0,
      aboutPageSections.length
    );

    // Set initial arrow position
    if (sectionRefs.current[activeSection]) {
      updateArrowPosition();
    }
  }, []);

  // Update arrow position when active section changes
  useEffect(() => {
    updateArrowPosition();
  }, [activeSection]);

  const updateArrowPosition = () => {
    if (sectionRefs.current[activeSection]) {
      const sectionElement = sectionRefs.current[activeSection];
      // Get the vertical center position of the active section
      const top = sectionElement?.offsetTop || 0;
      const height = sectionElement?.clientHeight || 0;
      const centerPosition = top + height / 2;

      setArrowPosition(centerPosition);
    }
  };

  return (
    <main>
      <div className="w-full relative min-h-screen py-16">
        <Image
          className="h-full w-full object-cover absolute top-0 left-0"
          height={0}
          width={0}
          sizes={'100%'}
          src={Background}
          alt={'Main Background'}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]" />

        <div className="grid grid-cols-1 md:grid-cols-2 relative z-[2] gap-10 items-center h-full">
          <div className="flex flex-col pl-4 md:pl-8 lg:pl-12 xl:pl-16 gap-6 text-white flex-1">
            <SectionHeading reverse title="About Us" free />
            <div className="font-semibold leading-[1.1] text-[clamp(2.2rem,10vw,4.5rem)]">
              Shaping the Future of Technology
            </div>
            <div className="text-[clamp(1.5rem,5vw,1.5rem)]">
              Empowering the next generation of innovators and leaders in
              Information Technology.
            </div>
          </div>

          <ImageCarousel slides={carouselData} />
        </div>
      </div>

      <div className="bg-black py-20">
        <section className="container mx-auto px-6">
          <div className="max-md:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Sidebar */}
            <div className="space-y-8 pr-10 relative">
              <SectionHeading
                className="mb-10"
                title="I want to learn"
                reverse
                free
              />
              {aboutPageSections.map((section, index) => (
                <div key={index}>
                  <h3
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    className={`${
                      index === activeSection && 'after:w-full'
                    } flex flex-col items-center after:bg-tertiary after:h-[2px] w-fit after:w-0 after:transition-all hover:after:w-full text-white text-[clamp(1.5rem,6vw,2rem)] font-semibold cursor-pointer`}
                    onClick={() => setActiveSection(index)} // Trigger active section change
                  >
                    {section.title}
                  </h3>
                </div>
              ))}

              {/* Arrow element - positioned absolutely and transitions based on active section */}
            </div>

            {/* Right Content */}
            <div className="pl-10 border-l-2 border-white relative flex flex-col">
              <motion.div
                className="absolute w-6 h-6 left-0 -translate-x-1/2 rotate-45 bg-black border-r-2 border-t-2 border-[#c4bfc0] transition-all duration-300 ease-in-out"
                animate={{
                  top: arrowPosition - 12 // Center the arrow (half of its height)
                }}
                initial={{ top: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="w-full aspect-[3/2] bg-gray-300 mb-16" />
              {aboutPageSections.map((section, index) => {
                // Only show the details of the active section
                if (index === activeSection) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5 }}
                      className="space-y-4 flex flex-col"
                    >
                      <h3 className="text-white text-[2rem] leading-6 font-semibold mb-4">
                        {section.heading}
                      </h3>
                      <div className="text-gray-300 text-base leading-7">
                        {section.content}
                      </div>
                    </motion.div>
                  );
                }
                return null; // Render nothing if the section is not active
              })}
            </div>
          </div>

          <Accordion type="single" className="md:hidden" collapsible>
            {aboutPageSections?.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <h3 className="text-white text-[clamp(1.5rem,6vw,2rem)] font-semibold cursor-pointer">
                    {section.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-300 text-base leading-7">
                    {section.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
