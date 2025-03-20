'use client';

import FacultyProfile from '@/components/faculty-profile';
import { QueryFacultyResult } from '@/sanity/types';
import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function FacultySearchPage({
  facultyData
}: {
  facultyData: QueryFacultyResult;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaculty, setFilteredFaculty] =
    useState<QueryFacultyResult>(facultyData);

  useEffect(() => {
    let filtered = facultyData;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((faculty) => {
        const basicInfoMatch =
          faculty?.content?.head?.name?.toLowerCase().includes(query) ||
          faculty?.content?.card?.designation?.toLowerCase().includes(query) ||
          faculty?.content?.card?.department?.toLowerCase().includes(query) ||
          faculty?.content?.card?.mail_id?.toLowerCase().includes(query) ||
          faculty?.content?.card?.PhD?.toLowerCase().includes(query);

        const areasMatch = faculty.content?.body?.interest_areas?.some((area) =>
          area.toLowerCase().includes(query)
        );

        const positionsMatch =
          typeof faculty.content?.card?.position === 'string'
            ? (faculty.content?.card?.position as string)
                .toLowerCase()
                .includes(query)
            : faculty.content?.card?.position?.some((position) =>
                position.toLowerCase().includes(query)
              );

        return basicInfoMatch || areasMatch || positionsMatch;
      });
    }

    setFilteredFaculty(filtered);
  }, [searchQuery, facultyData]);

  return (
    <div className="w-full mx-auto min-h-screen p-6 md:px-20">
      <div className="mb-8 w-full">
        <div className="flex items-start w-full">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-[#7a8b99]" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-[#e0e4e9] rounded-lg focus:ring-[rgb(4,30,63)] focus:border-[rgb(4,30,63)] outline-none transition-colors"
              placeholder="Search by name, department, position, or research area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-5 w-5 text-[#7a8b99] hover:text-[rgb(4,30,63)] transition-colors" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 text-[#7a8b99] w-full">
          {filteredFaculty.length !== facultyData.length && (
            <p>
              Found {filteredFaculty.length}{' '}
              {filteredFaculty.length === 1 ? 'result' : 'results'}
              {searchQuery && (
                <>
                  {' '}
                  for "
                  <span className="font-medium text-[rgb(4,30,63)]">
                    {searchQuery}
                  </span>
                  "
                </>
              )}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty, index) => (
          <FacultyProfile
            key={index}
            name={faculty.content?.head?.name}
            title={faculty.content?.card?.designation}
            areasOfInterest={faculty.content?.body?.interest_areas}
            department={faculty.content?.card?.department}
            education={faculty.content?.card?.PhD}
            email={faculty.content?.card?.mail_id}
            imageUrl={
              'https://www.iiitdwd.ac.in/' + faculty.content?.card?.photo
            }
            keyPositions={faculty.content?.card?.position}
            office={faculty.content?.card?.cabin_number}
            website={faculty.content?.head?.profile_pdf}
          />
        ))}
      </div>
    </div>
  );
}

FacultySearchPage.disableHero = true;

export default FacultySearchPage;
