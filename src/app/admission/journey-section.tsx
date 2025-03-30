'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import Link from 'next/link';
import JourneyComponent from './journey-component';

const JourneySection = () => {
  const [selectedProgram, setSelectedProgram] = useState('b-tech');
  return (
    <div className="mx-auto container px-4 md:px-8 py-16 md:py-24">
      <div className="container mx-auto relative">
        <div className="absolute z-[-2] w-[3px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-tertiary/20">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-main"></div>
        </div>

        <h1 className="text-center text-xl font-bold tracking-tight mb-16">
          START YOUR JOURNEY HERE
        </h1>

        <div className="relative flex flex-col space-y-20">
          {/* Timeline */}

          {/* Content */}

          {/* Section 1 */}
          <JourneyComponent id="major">
            <section className="flex max-md:px-6 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-700 mb-4">
                  Find Your Program
                </h3>
                <h2 className="text-5xl font-bold mb-8">
                  Explore every area you can study
                </h2>
                <p className="text-gray-700 mb-6">
                  See majors and programs for:
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Select onValueChange={(value) => setSelectedProgram(value)} defaultValue="b-tech">

                    <SelectTrigger className="w-full sm:w-64 border-2 rounded !h-12">
                      <SelectValue placeholder="B.Tech Students" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="b-tech">B.Tech Students</SelectItem>
                      <SelectItem value="m-tech">
                        M.Tech (Research) Students
                      </SelectItem>
                      <SelectItem value="phd">Ph.D. Students</SelectItem>
                    </SelectContent>
                  </Select>

                  <Link
                    href={`/admission/${selectedProgram}`}
                    className="bg-main flex items-center hover:bg-primary hover:text-white text-primary rounded h-12 border-0 px-6"
                  >
                    LEARN MORE <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gray-300 w-full aspect-[3/2]" />
              </div>
            </section>
          </JourneyComponent>

          <JourneyComponent id="visit">
            <section className="flex max-md:px-6 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-gray-300 w-full aspect-[3/2]" />
              </div>

              <div className="flex-1 order-1 md:order-2">
                <h3 className="text-base font-bold text-gray-700 mb-4">
                  Visit IIIT Dharwad
                </h3>
                <h2 className="text-5xl font-bold mb-8">
                  Explore our Dharwad campus
                </h2>
                <p className="text-gray-700 mb-6">
                  Experience our vibrant campus in person and see what makes
                  IIIT Dharwad special.
                </p>

                <Button
                  variant="outline"
                  className="bg-main hover:bg-primary hover:text-white text-primary rounded h-12 border-0 px-6"
                >
                  SCHEDULE A VISIT <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>
          </JourneyComponent>

          {/* Section 3 */}
          <JourneyComponent id="tuition">
            <section className="flex max-md:px-6 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-700 mb-4">
                  Review Tuition and Aid
                </h3>
                <h2 className="text-5xl font-bold mb-8">
                  Get financial information you need
                </h2>
                <p className="text-gray-700 mb-6">
                  Learn about tuition fees, scholarships, and financial
                  assistance programs available at IIIT Dharwad.
                </p>

                <Button
                  variant="outline"
                  className="bg-main hover:bg-primary hover:text-white text-primary rounded h-12 border-0 px-6"
                >
                  EXPLORE FINANCIAL AID{' '}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="bg-gray-300 w-full aspect-[3/2]" />
              </div>
            </section>
          </JourneyComponent>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
