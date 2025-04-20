import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import EventsSection from './events';
import NotificationSection from './notification';
import ModernSocialMediaGrid from './social-media';

export default function InfoSection() {
  const socialMedia = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iiitdharwad/',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 transition-colors duration-300 fill-gray-600 hover:fill-[#0A66C2]"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://x.com/dharwad_iiit',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 transition-colors duration-300 fill-gray-600 hover:fill-black"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@socialmediaiiitdharwad2584',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 transition-colors duration-300 fill-gray-600 hover:fill-[#FF0000]"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iiitdharwad_',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 transition-colors duration-300 fill-gray-600 hover:fill-[#E4405F]"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ];

  return (
    <div className="px-6 w-full relative overflow-x-hidden">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none before:right-auto before:absolute before:inset-0 before:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] before:h-full before:bg-[linear-gradient(to_right,var(--background)_0,transparent_100%)] after:left-auto after:absolute after:inset-0 after:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] after:h-full after:bg-[linear-gradient(to_left,var(--background)_0,transparent_100%)]"></div>
        <div className="absolute inset-0 z-[1] pointer-events-none before:bottom-auto before:absolute before:inset-0 before:w-full before:h-[90px] before:bg-[linear-gradient(to_bottom,var(--background)_0,transparent_100%)] after:top-auto after:absolute after:inset-0 after:w-full after:h-[90px] after:bg-[linear-gradient(to_top,var(--background)_0,transparent_100%)]"></div>
        <div
          className="
            gap-[1px] 
            [counter-reset:fig] 
            z-[0] 
            relative 
            grid
            grid-cols-[1fr_repeat(1,calc(min(calc(100vw-30px*2),1265px)/1))_1fr] 
            md:grid-cols-[1fr_repeat(2,calc(min(calc(100vw-30px*2),1265px)/2))_1fr] 
            lg:grid-cols-[1fr_repeat(3,calc(min(calc(100vw-30px*2),1265px)/3))_1fr] 
            [&>*]:min-h-8 
            [&>*]:[box-shadow:0_0_0_1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-background)]
            "
        >
          <div className="!h-[90px]"></div>

          {Array.from({ length: 34 }, (_, i) => (
            <div key={i}></div>
          ))}

          <div className="relative [grid-area:4/2] md:[grid-area:3/2] hover:bg-secondary/30 group transition-all duration-300 flex flex-col justify-end p-6">
            <IconArrowUpRight
              className="top-6 absolute right-6 transition-all group-hover:top-5 group-hover:right-5 text-gray-500 group-hover:text-black"
              size={20}
            />

            <div className="text-title-1 font-semibold mb-2">
              Explore IIIT Dharwad
            </div>
            <div className="text-title-2 text-gray-600">
              Whether it's coding marathons, cultural fests, or insightful
              seminars—there's always something happening to spark your passion
              and build connections.
            </div>
          </div>

          <div className="[grid-area:3/2] md:[grid-area:3/3/span_1/span_2] h-[400px] p-6 relative">
            <div
              className="absolute inset-0 flex items-center justify-center 
                [background-image:radial-gradient(var(--color-gray-300)_0.8px,transparent_0)] 
                [background-repeat:repeat] 
                [background-position:-8.5px_-8.5px] 
                [background-size:17px_17px]"
            ></div>
            <EventsSection />
          </div>

          <div className="[grid-area:6/2] md:[grid-area:5/2/span_1/span_2] p-6 relative">
            <div
              className="absolute inset-0 flex items-center justify-center 
                [background-image:radial-gradient(var(--color-gray-300)_0.8px,transparent_0)] 
                [background-repeat:repeat] 
                [background-position:-8.5px_-8.5px] 
                [background-size:17px_17px]"
            ></div>
            <NotificationSection />
          </div>

          <Link
            href={'/annoucements'}
            className="relative [grid-area:7/2] md:[grid-area:5/4] hover:bg-secondary/30 group transition-all duration-300 flex flex-col justify-end p-6"
          >
            <IconArrowUpRight
              className="top-6 absolute right-6 transition-all group-hover:top-5 group-hover:right-5 text-gray-500 group-hover:text-black"
              size={20}
            />
            <div className="text-title-1 font-semibold mb-2">
              Stay in the Loop{' '}
            </div>
            <div className="text-title-2 text-gray-600">
              Get the latest updates on deadlines, events, and
              opportunities—never miss a beat at IIIT Dharwad.
            </div>
          </Link>

          <div className="[grid-area:9/2] md:[grid-area:7/2] flex flex-col p-6 justify-between h-[300px]">
            <div className="">
              <div className="text-title-1 font-semibold">Connect With Us</div>
              <div className="text-title-2 text-gray-600 mt-2">
                Stay updated with the latest news, events, and innovations from
                IIIT Dharwad. Follow us on social media to join our vibrant
                community.
              </div>
            </div>

            <ModernSocialMediaGrid />
          </div>

          <Link
            href={'/director'}
            className="[grid-area:10/2] md:[grid-area:7/3] flex flex-col p-6 justify-end relative hover:bg-secondary/30 group transition-all duration-300"
          >
            <IconArrowUpRight
              className="top-6 absolute right-6 transition-all group-hover:top-5 group-hover:right-5 text-gray-500 group-hover:text-black"
              size={20}
            />
            <div className="text-title-1 font-semibold">
              Director&apos;s Message
            </div>
            <div className="text-title-2 text-gray-600 mt-2">
              Welcome to IIIT Dharwad — a hub of innovation, learning, and
              excellence. We are committed to nurturing future leaders in
              technology and research.
            </div>
          </Link>

          <Link
            href={'/placements'}
            className="[grid-area:11/2] md:[grid-area:7/4] flex flex-col p-6 justify-end relative hover:bg-secondary/30 group transition-all duration-300"
          >
            <IconArrowUpRight
              className="top-6 absolute right-6 transition-all group-hover:top-5 group-hover:right-5 text-gray-500 group-hover:text-black"
              size={20}
            />
            <div className="text-title-1 font-semibold">Placements</div>
            <div className="text-title-2 text-gray-600 mt-2">
              Explore our strong placement record and discover how IIIT Dharwad
              connects students with top recruiters and exciting career
              opportunities.
            </div>
          </Link>

          <div className="!h-[90px]"></div>
        </div>
      </div>
    </div>
  );
}
