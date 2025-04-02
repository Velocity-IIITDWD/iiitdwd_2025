'use client';

import FacultyProfile from '@/components/faculty-profile';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { QueryFacultyResult } from '@/sanity/types';
import { Filter, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function FacultySearchPage({
  facultyData
}: {
  facultyData: QueryFacultyResult;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [filteredFaculty, setFilteredFaculty] =
    useState<QueryFacultyResult>(facultyData);

  // Extract unique departments from faculty data
  const departments = [
    'all',
    ...new Set(
      facultyData
        .map((faculty) => faculty?.content?.card?.department || '')
        .filter(Boolean)
    )
  ];

  useEffect(() => {
    let filtered = facultyData;

    // Filter by department first
    if (selectedDepartment && selectedDepartment !== 'all') {
      filtered = filtered.filter(
        (faculty) => faculty?.content?.card?.department === selectedDepartment
      );
    }

    // Then filter by search query
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
  }, [searchQuery, selectedDepartment, facultyData]);

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('all');
  };

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <div className="mb-8 w-full space-y-4">
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Search Input */}

          {/* Department Filter */}
          <div className="w-full md:w-64">
            <Select
              value={selectedDepartment}
              onValueChange={handleDepartmentChange}
            >
              <SelectTrigger className="w-full !h-full border border-gray-200">
                <div className="flex items-center overflow-hidden text-ellipsis">
                  <Filter className="h-4 w-4 mr-2 text-gray-400" />
                  <SelectValue
                    className="text-ellipsis overflow-hidden"
                    placeholder="Filter by Department"
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments
                  .filter((d) => d !== 'all')
                  .map((department, index) => (
                    <SelectItem key={index} value={department}>
                      {department}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
              placeholder="Search by name, position, or research area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-blue-900 transition-colors" />
              </button>
            )}
          </div>

          {/* Clear Filters Button (only shown when filters are applied) */}
          {(searchQuery || selectedDepartment !== 'all') && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="h-12 border border-gray-200"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Summary */}
        <div className="text-gray-500 w-full">
          <p>
            Showing {filteredFaculty.length} of {facultyData.length} faculty
            members
            {selectedDepartment !== 'all' && (
              <>
                {' '}
                in{' '}
                <span className="font-medium text-blue-900">
                  {selectedDepartment}
                </span>
              </>
            )}
            {searchQuery && (
              <>
                {' '}
                matching "
                <span className="font-medium text-blue-900">{searchQuery}</span>
                "
              </>
            )}
          </p>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((faculty, index) => (
            <FacultyProfile
              key={index}
              name={faculty.content?.head?.name}
              title={faculty.content?.card?.designation}
              areasOfInterest={faculty.content?.body?.interest_areas}
              department={faculty.content?.card?.department}
              education={faculty.content?.card?.PhD}
              email={faculty.content?.card?.mail_id}
              imageUrl={faculty.content?.card?.photo}
              keyPositions={faculty.content?.card?.position}
              office={faculty.content?.card?.cabin_number}
              website={faculty.content?.head?.profile_pdf}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No faculty members found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={clearFilters}
              className="mt-2 text-blue-900"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

FacultySearchPage.disableHero = true;

export default FacultySearchPage;
