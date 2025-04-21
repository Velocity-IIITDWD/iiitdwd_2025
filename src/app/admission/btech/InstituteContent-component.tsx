'use client';

import { Album, Building, Lightbulb, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function InstituteContent() {
  const [emptyDivs, setEmptyDivs] = useState(20);

  useEffect(() => {
    // Function to update sizes
    const updateSize = () => {
      const mobile = window.innerWidth < 768;

      // Calculate empty divs needed based on grid
      // Mobile: 1 column of content (2 slots wide including side margins)
      // Desktop: 2 columns of content (4 slots wide including side margins)
      // For a complete grid we need enough empty divs to fill gaps between content
      setEmptyDivs(mobile ? 20 : 14);
    };

    // Set size on initial load
    updateSize();

    // Add event listener for resize
    window.addEventListener('resize', updateSize);

    // Clean up
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div className="w-full relative overflow-x-hidden mt-12">
      <div className="w-full relative overflow-hidden">
        {/* Horizontal & Vertical Fades (Optional visual polish) */}
        <div className="absolute inset-0 z-[1] pointer-events-none before:right-auto before:absolute before:inset-0 before:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] before:h-full before:bg-[linear-gradient(to_right,var(--background)_0,transparent_100%)] after:left-auto after:absolute after:inset-0 after:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] after:h-full after:bg-[linear-gradient(to_left,var(--background)_0,transparent_100%)]"></div>
        <div className="absolute inset-0 z-[1] pointer-events-none before:bottom-auto before:absolute before:inset-0 before:w-full before:h-[90px] before:bg-[linear-gradient(to_bottom,var(--background)_0,transparent_100%)] after:top-auto after:absolute after:inset-0 after:w-full after:h-[90px] after:bg-[linear-gradient(to_top,var(--background)_0,transparent_100%)]"></div>

        {/* Grid Layout */}
        <div
          className="
            gap-[1px] 
            z-[0] 
            relative 
            grid
            grid-cols-[1fr_repeat(1,calc(min(calc(100vw-30px*2),1265px)/1))_1fr] 
            md:grid-cols-[1fr_repeat(2,calc(min(calc(100vw-30px*2),1265px)/2))_1fr] 
            [&>*]:min-h-8 
            [&>*]:[box-shadow:0_0_0_1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-background)]
          "
        >
          <div className="!h-[90px]" />

          {Array.from({ length: emptyDivs }, (_, i) => (
            <div key={i}></div>
          ))}

          {/* IIIT Dharwad Info */}
          <div className="[grid-area:2/2] p-6 flex flex-col bg-gradient-to-b from-white/30 to-white hover:shadow">
            <div className="flex items-center text-main gap-3 mb-4">
              <Building className="w-6 h-6" />
              <h2 className="text-title-1 font-bold">IIIT Dharwad</h2>
            </div>
            <p className="text-title-3">
              IIIT Dharwad is an Institute of National Importance by an act of
              Parliament (23 of 2017) set up in PPP mode between the Ministry of
              Education, Government of India, Government of Karnataka, and
              KEONICS. The Institute’s Board and Senate include eminent leaders
              from academia and industry, steering the institute with a
              visionary outlook.
            </p>
          </div>

          {/* Faculty Info */}
          <div className="[grid-area:4/2] md:[grid-area:2/3] p-6 flex flex-col bg-gradient-to-b from-white/30 to-white hover:shadow">
            <div className="flex items-center text-main gap-3 mb-4">
              <User className="w-6 h-6 text-main" />
              <h2 className="text-title-1 font-semibold">Faculty</h2>
            </div>
            <p className="text-gray-700 text-title-3">
              Faculty at IIIT Dharwad are highly qualified with PhDs and
              Postdocs from reputed Indian and international institutes. They
              combine academic excellence with industry experience to deliver
              cutting-edge education and research.
            </p>
          </div>

          {/* Research and Innovation */}
          <div className="[grid-area:6/2] md:[grid-area:4/2] p-6 flex flex-col bg-gradient-to-b from-white/30 to-white hover:shadow">
            <div className="flex items-center text-main gap-3 mb-4">
              <Lightbulb className="w-6 h-6" />
              <h2 className="text-title-1 font-semibold">
                Research and Innovation
              </h2>
            </div>
            <p className="text-gray-700 text-title-3">
              IIIT Dharwad thrives on innovation—across curriculum, pedagogy,
              and R&D. Faculty research spans fields like ML, data science,
              computer vision, robotics, embedded systems, VLSI, cloud, IoT, and
              even social sciences. The Institute fosters multidisciplinary
              problem-solving.
            </p>
          </div>

          {/* Curriculum */}
          <div className="[grid-area:8/2] md:[grid-area:4/3] p-6 flex flex-col bg-gradient-to-b from-white/30 to-white hover:shadow">
            <div className="flex items-center text-main gap-3 mb-4">
              <Album className="w-6 h-6" />
              <h2 className="text-title-1 font-semibold text-gray-800">
                Curriculum
              </h2>
            </div>
            <p className="text-gray-700 text-title-3">
              The evolving curriculum ensures relevance, eliminating outdated
              modules. It features early IT exposure with electives in AI, ML,
              blockchain, and more—delivered through hands-on projects and
              hackathons. IIIT-D promotes experiential, future-ready learning.
            </p>
          </div>

          <div className="!h-[90px]" />
        </div>
      </div>
    </div>
  );
}
