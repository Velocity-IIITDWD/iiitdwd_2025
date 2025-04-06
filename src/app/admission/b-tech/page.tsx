'use client';
import SectionHeading from '@/components/layout/section-heading';
import { useState } from 'react';
import {
  bTechAdmissionLinks,
  eligibilityCriteria,
  LinkItem,
  programsOffered,
  quickLinks
} from './admissionLinkData';
import InstituteContent from './InstituteContent-component';
import QueriesBox from './QueriesBox-component';
import SeatMatrix from './seatMatrix-component';

interface AdmissionLinksProps {
  heading: string;
  links: LinkItem[];
}

// Improved AdmissionLinks component
const AdmissionLinks = ({ heading, links }: AdmissionLinksProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border">
      <div
        className={`${
          isExpanded ? 'bg-secondary/80' : 'bg-white'
        } text-main px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-secondary/50 transition-colors`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-title-1 font-semibold">{heading}</h3>
        <svg
          className={`w-5 h-5 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link?.href}
                className="flex gap-2 text-main hover:text-main/90 hover:underline transition-colors py-2"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-1"
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
                <span className="text-title-3">{link?.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <section className="w-[87.5vw] max-w-[1680px] mx-auto py-10">
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h1 className="text-large-title font-bold text-main">
            B.Tech Admissions 2024
          </h1>
          <p className="text-gray-500 mt-2">
            Explore admission details, eligibility, and programs offered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="space-y-6">
              <SectionHeading title="Seat Matrix" />
              <SeatMatrix />

              <div className="space-y-4">
                <AdmissionLinks
                  heading="B.Tech Admission 2024"
                  links={bTechAdmissionLinks}
                />
                <AdmissionLinks heading="Quick Links" links={quickLinks} />
                <AdmissionLinks
                  heading="Eligibility Criteria"
                  links={eligibilityCriteria}
                />
                <AdmissionLinks
                  heading="Programs Offered"
                  links={programsOffered}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg shadow-md p-6">
              <h3 className="text-title-1 font-semibold text-gray-800 mb-4">
                Important Dates
              </h3>
              <ul className="space-y-3 text-title-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Application Start</span>
                  <span className="font-medium">April 10, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Application End</span>
                  <span className="font-medium">May 30, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Counseling Start</span>
                  <span className="font-medium">June 15, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Classes Begin</span>
                  <span className="font-medium">August 1, 2024</span>
                </li>
              </ul>
            </div>
            <QueriesBox />
          </div>
        </div>

        <InstituteContent />
      </div>
    </section>
  );
}
