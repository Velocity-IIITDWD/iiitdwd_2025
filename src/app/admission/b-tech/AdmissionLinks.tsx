'use client';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { LinkItem } from './admissionLinkData';

interface AdmissionLinksProps {
  heading: string;
  links: LinkItem[];
}

const AdmissionLinks: FC<AdmissionLinksProps> = ({ heading, links }) => {
  // Calculate grid columns based on number of links (max 2)
  const getGridCols = () => {
    if (links.length === 1) return 'grid-cols-1';
    return 'grid-cols-1 md:grid-cols-2';
  };

  return (
    <div className="my-8 px-4 md:px-6">
      {/* Heading with similar styling as seat matrix */}
      <div className="relative flex justify-center mb-8 scale-70">
        <div className="bg-[#bb4d00] text-white py-4 px-8 font-bold text-xl inline-block skew-x-[-10deg] origin-top-left transform flex justify-center items-center">
          <span className="skew-x-[10deg] inline-block">{heading}</span>
        </div>
      </div>

      {/* Links grid with adaptive columns (max 2) */}
      <div className={`grid ${getGridCols()} gap-6`}>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="relative focus:outline-none focus:border-none rounded-lg overflow-hidden bg-gradient-to-b from-secondary/10 to-tertiary/30 hover:shadow-md cursor-pointer overflow-clip border w-full border-tertiary/20 hover:border-secondary/30"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="font-medium text-gray-800 pr-4 flex-1">
                {link.title}
              </div>
              <div className="flex-shrink-0 self-center">
                <ArrowRightCircle
                  color="#f18f01"
                  size={24}
                  className="min-w-6 min-h-6"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdmissionLinks;
