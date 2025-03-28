'use client';
import SectionHeading from '@/components/layout/section-heading';
import { useState } from 'react';

export default function ProgrammesPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  const departments = [
    'Computer Science and Engineering',
    'Electronics and Communication Engineering',
    'Data Science and Artifical Intelligence'
  ];

  return (
    <main className="w-full px-4 md:px-8 lg:px-14 py-3 md:py-6 lg:py-10">
      <SectionHeading
        title="Departments"
        className="w-fit mx-auto"
        free
        reverse
      />

      <div className="w-full flex max-md:flex-col">
        {departments.map((department, index) => (
          <div
            key={index}
            className={`border-secondary/30 w-full text-center py-3 px-4 md:px-6 text-sm md:text-base text-gray-500 max-md:border-l-4 max-md:border-b-noneborder-b-4 hover:text-primary font-light cursor-pointer transition-all duration-300 ${
              selectedDepartment === index
                ? '!border-main font-semibold text-primary max-md:!text-base !text-xl'
                : ''
            }`}
            onClick={() => setSelectedDepartment(index)}
          >
            {department}
          </div>
        ))}
      </div>
    </main>
  );
}
