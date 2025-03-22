'use client';
import SectionHeading from '@/components/layout/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import aboutPageSections from '@/data/about';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function DetailSection() {
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
    <div className=" py-20">
      <section className="container mx-auto px-6">
        <div className="max-md:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-8 pr-10 relative">
            <SectionHeading
              className="mb-10"
              title="I want to learn"
              free
              reverse
            />
            {aboutPageSections.map((section, index) => (
              <div key={index}>
                <h3
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={`${
                    index === activeSection && 'after:w-full !text-primary'
                  } flex flex-col items-center after:bg-tertiary after:h-[2px] w-fit after:w-0 after:transition-all hover:after:w-full text-gray-500 hover:text-primary text-[clamp(1.5rem,6vw,2rem)] transition-all font-semibold cursor-pointer`}
                  onClick={() => setActiveSection(index)} // Trigger active section change
                >
                  {section.title}
                </h3>
              </div>
            ))}

            {/* Arrow element - positioned absolutely and transitions based on active section */}
          </div>

          {/* Right Content */}
          <div className="pl-10 border-l-2 border-primary relative flex flex-col">
            <motion.div
              className="absolute w-6 h-6 left-0 -translate-x-1/2 rotate-45 bg-white border-r-2 border-t-2 border-primary transition-all duration-300 ease-in-out"
              animate={{
                top: arrowPosition - 12 // Center the arrow (half of its height)
              }}
              initial={{ top: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="w-full aspect-[5/3] bg-gray-300 mb-16" />
            {aboutPageSections.map((section, index) => {
              // Only show the details of the active section
              if (index === activeSection) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 flex flex-col"
                  >
                    <h3 className="text-primary text-[2rem] leading-6 font-semibold mb-8">
                      {section.heading}
                    </h3>
                    <div className="text-[#303030] text-base leading-7">
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
                <h3 className="text-primary text-[clamp(1.5rem,6vw,2rem)] font-semibold cursor-pointer">
                  {section.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-[#303030] text-base leading-7">
                  {section.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
