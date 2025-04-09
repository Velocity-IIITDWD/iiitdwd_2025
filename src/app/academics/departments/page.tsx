'use client';

import bTechASDProgramData from '@/data/academics/asd-data';
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
    dsai: bTechDSAIProgramData,
    asd: bTechASDProgramData
  };

  const currentDept =
    departments[selectedDepartment as keyof typeof departments];

  return (
    <div className="flex max-md:flex-col left-0 right-0 w-[87.5vw] max-w-[1680px] mx-auto py-10 md:py-20">
      {/* Left sidebar */}
      <div className="w-full md:w-64 max-md:border-b md:border-r border-gray-200">
        <h2 className="text-title-1 font-semibold mb-6">Academic Programs</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-title-2 font-medium text-gray-700 mb-3">
              Departments
            </h3>
            <ul className="text-body">
              <li>
                <button
                  onClick={() => setSelectedDepartment('cse')}
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r cursor-pointer ${
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
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r cursor-pointer ${
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
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r cursor-pointer ${
                    selectedDepartment === 'dsai' &&
                    'bg-secondary/80 border-l-main font-medium'
                  }`}
                >
                  Data Science and Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedDepartment('asd')}
                  className={`w-full border-l-2 text-left px-3 py-2 rounded-r cursor-pointer ${
                    selectedDepartment === 'asd' &&
                    'bg-secondary/80 border-l-main font-medium'
                  }`}
                >
                  Department of Arts, Science, and Design
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-title-2 font-medium text-gray-700 mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-body">
              <li>
                <Link
                  href={`/academics/faculty?department=${selectedDepartment}`}
                  className="block px-3 py-2 hover:bg-secondary/40 rounded"
                >
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <MainContent currentDept={currentDept} />
    </div>
  );
}
