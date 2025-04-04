'use client';

import bTechCSEProgramData from '@/data/academics/cse-data';
import bTechDSAIProgramData from '@/data/academics/dsai-data';
import bTechECEProgramData from '@/data/academics/ece-data';
import Link from 'next/link';
import { useState } from 'react';
import MainContent from './main-content';
export default function Page() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('cse');

  const departments = {
    cse: bTechCSEProgramData,
    ece: bTechECEProgramData,
    dsai: bTechDSAIProgramData
  };

  const currentDept =
    departments[selectedDepartment as keyof typeof departments];

  return (
    <div className="flex max-md:flex-col px-4 md:px-8 container mx-auto py-10 md:py-20">
      {/* Left sidebar */}
      <div className="w-full md:w-64 max-md:border-b md:border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-6">Academic Programs</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Departments
            </h3>
            <ul className="text-sm">
              <li>
                <button
                  onClick={() => setSelectedDepartment('cse')}
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r ${
                    selectedDepartment === 'cse' &&
                    'bg-secondary/80 border-l-main font-medium'
                  }`}
                >
                  Computer Science and Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedDepartment('ece')}
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r ${
                    selectedDepartment === 'ece' &&
                    'bg-secondary/80 border-l-main font-medium'
                  }`}
                >
                  Electronics and Communication Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedDepartment('dsai')}
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r ${
                    selectedDepartment === 'dsai' &&
                    'bg-secondary/80 border-l-main font-medium'
                  }`}
                >
                  Data Science and Artificial Intelligence
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/faculty?department=${selectedDepartment}`}
                  className="block px-3 py-2 hover:bg-secondary/40 rounded"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/research"
                  className="block px-3 py-2 hover:bg-secondary/40 rounded"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="block px-3 py-2 hover:bg-secondary/40 rounded"
                >
                  Amenities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.707 3.293a1 1 0 010 1.414L7.414 8H15a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Top
          </button>
        </div>
      </div>

      {/* Main content */}
      <MainContent currentDept={currentDept} />
    </div>
  );
}
