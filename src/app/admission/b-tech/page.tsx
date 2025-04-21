'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  bTechAdmissionLinks,
  eligibilityCriteria,
  programsOffered,
  quickLinks
} from './admissionLinkData';
import InstituteContent from './InstituteContent-component';
import SeatMatrix from './seatMatrix-component';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    {
      title: 'B.Tech Admission 2024',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      links: bTechAdmissionLinks
    },
    {
      title: 'Quick Links',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      links: quickLinks
    },
    {
      title: 'Eligibility Criteria',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      links: eligibilityCriteria
    },
    {
      title: 'Programs Offered',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      links: programsOffered
    }
  ];

  return (
    <div className="py-10">
      <div className="space-y-6">
        <div className="w-[87.5vw] max-w-[1680px] mx-auto p-6">
          <h1 className="text-large-title font-bold text-main">
            B.Tech Admissions 2024
          </h1>
          <p className="text-gray-500 mt-2">
            Explore admission details, eligibility, and programs offered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,300px)] w-[87.5vw] max-w-[1680px] mx-auto gap-6">
          <div className="max-md:order-2 flex flex-col max-md:flex-col-reverse gap-6">
            <SeatMatrix />

            {/* Content sections */}
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (sectionRefs.current) {
                    sectionRefs.current[index] = el;
                  }
                }}
                className="bg-gradient-to-b from-white/30 to-white hover:shadow p-6 rounded"
              >
                <h2 className="text-xl font-semibold text-main mb-4 flex items-center">
                  {tab.icon}
                  <span className="ml-2">{tab.title}</span>
                </h2>
                <div className="space-y-4">
                  {tab.links.map((link, linkIndex) => (
                    <div
                      className="p-3 border border-main/10 rounded-md hover:bg-secondary/30 transition-colors flex items-center"
                      key={linkIndex}
                    >
                      <svg
                        className="w-5 h-5 text-main mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5-5 5M5 7l5 5-5 5"
                        />
                      </svg>
                      <Link
                        href={link?.href}
                        className="text-title-3 text-gray-500 hover:text-main flex-grow"
                      >
                        {link?.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-0 max-md:order-1 md:sticky md:top-4 md:h-fit">
            {/* Important dates section */}
            <div className="md:min-h-[300px] max-md:mb-6">
              <h3 className="text-body font-semibold text-main mb-4 flex items-center">
                Important Dates
              </h3>
              <ul className="space-y-1 text-title-3">
                <li className="flex justify-between items-center p-2 hover:bg-secondary/50 rounded-md">
                  <span className="text-gray-600 flex items-center">
                    Application Start
                  </span>
                  <span className="font-medium text-main">April 10, 2024</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-secondary/50 rounded-md">
                  <span className="text-gray-600 flex items-center">
                    Application End
                  </span>
                  <span className="font-medium text-main">May 30, 2024</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-secondary/50 rounded-md">
                  <span className="text-gray-600 flex items-center">
                    Counseling Start
                  </span>
                  <span className="font-medium text-main">June 15, 2024</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-secondary/50 rounded-md">
                  <span className="text-gray-600 flex items-center">
                    Classes Begin
                  </span>
                  <span className="font-medium text-main">August 1, 2024</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden">
              <h3 className="font-semibold text-body uppercase text-main mb-3">
                Navigation
              </h3>

              {tabs?.map((tab, index) => (
                <div
                  key={index}
                  className={`flex items-center text-main text-title-3 gap-3 px-4 py-2 border-l-2 cursor-pointer transition-all ${
                    activeTab === index &&
                    'bg-secondary/50 text-primary font-medium border-l-main'
                  }`}
                  onClick={() => scrollToSection(index)}
                >
                  <div
                    className={`${
                      activeTab === index ? 'text-primary' : 'text-main'
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span>{tab.title}</span>
                  {activeTab === index && (
                    <div className="ml-auto">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <InstituteContent />
      </div>
    </div>
  );
}
