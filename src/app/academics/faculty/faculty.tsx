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
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';

// Move these outside the component
const departmentMapping: Record<string, string> = {
  cse: 'Computer Science & Engineering',
  ece: 'Electronics and Communication Engineering',
  dsai: 'Data Science and Artificial Intelligence',
  asd: 'Department of Arts, Science, and Design'
};

// Wrapper component for search params with proper typing
function SearchParamsWrapper({
  onParamsChange
}: {
  onParamsChange: (param: string | null) => void;
}) {
  const searchParams = useSearchParams();
  const departmentParam = searchParams.get('department');

  useEffect(() => {
    onParamsChange(departmentParam);
  }, [departmentParam, onParamsChange]);

  return null;
}

function FacultySearchPage({
  facultyData
}: {
  facultyData: QueryFacultyResult;
}) {
  const [departmentParam, setDepartmentParam] = useState<string | null>(null);

  // Extract unique departments from faculty data
  const departments = useMemo(() => {
    const uniqueDepartments = [
      ...new Set(
        facultyData
          .map((faculty) => faculty?.content?.card?.department || '')
          .filter(Boolean)
      )
    ];
    return ['all', ...uniqueDepartments];
  }, [facultyData]);

  // Updated department param handling
  const getDepartmentFromParam = useCallback(
    (param: string | null): string => {
      if (!param) return 'all';

      const paramLower = param.toLowerCase();
      const mappedDepartment = departmentMapping[paramLower];

      if (mappedDepartment) {
        const match = departments.find(
          (dept) => dept.toLowerCase() === mappedDepartment.toLowerCase()
        );
        if (match) return match;
      }

      const directMatch = departments.find((dept) =>
        dept.toLowerCase().includes(paramLower)
      );
      return directMatch || 'all';
    },
    [departments]
  );

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [filteredFaculty, setFilteredFaculty] =
    useState<QueryFacultyResult>(facultyData);

  // Handle param changes with memoized callback to avoid useEffect dependency issues
  const handleParamChange = useCallback(
    (param: string | null) => {
      setDepartmentParam(param);
      setSelectedDepartment(getDepartmentFromParam(param));
    },
    [departments, getDepartmentFromParam]
  );

  useEffect(() => {
    if (departmentParam !== null) {
      setSelectedDepartment(getDepartmentFromParam(departmentParam));
    }
  }, [departmentParam, getDepartmentFromParam]);

  useEffect(() => {
    let filtered = facultyData;

    // Filter by department first
    if (selectedDepartment && selectedDepartment !== 'all') {
      filtered = filtered.filter(
        (faculty) =>
          faculty?.content?.card?.department?.toLowerCase() ===
          selectedDepartment.toLowerCase()
      );
    }

    // Then filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((faculty) => {
        const name = faculty?.content?.head?.name || '';
        const designation = faculty?.content?.card?.designation || '';
        const department = faculty?.content?.card?.department || '';
        const mailId = faculty?.content?.card?.mail_id || '';
        const phd = faculty?.content?.card?.PhD || '';

        const basicInfoMatch =
          name.toLowerCase().includes(query) ||
          designation.toLowerCase().includes(query) ||
          department.toLowerCase().includes(query) ||
          mailId.toLowerCase().includes(query) ||
          phd.toLowerCase().includes(query);

        // Safe access for arrays with optional chaining and null checks
        const areasMatch =
          faculty.content?.body?.interest_areas?.some((area) =>
            area.toLowerCase().includes(query)
          ) || false;

        // Handle position which could be string or array
        let positionsMatch = false;
        const position = faculty.content?.card?.position;

        if (typeof position === 'string') {
          positionsMatch = (position as string).toLowerCase().includes(query);
        } else if (Array.isArray(position)) {
          positionsMatch = position.some((pos) =>
            pos.toLowerCase().includes(query)
          );
        }

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
    <div className="min-h-screen w-[87.5vw] max-w-[1680px] mx-auto py-10">
      <Suspense fallback={null}>
        <SearchParamsWrapper onParamsChange={handleParamChange} />
      </Suspense>

      <div className="mb-8 w-full space-y-4">
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
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
              className="block w-full pl-10 pr-10 text-title-3 font-normal py-3 border bg-white border-gray-200 rounded-lg focus:ring-main focus:border-main outline-none transition-colors"
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
        </div>

        {/* Results Summary */}
        <div className="text-gray-500 w-full text-body">
          {(selectedDepartment !== 'all' || searchQuery) && (
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
                  <span className="font-medium text-blue-900">
                    {searchQuery}
                  </span>
                  "
                </>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((faculty, index) => (
            <FacultyProfile
              key={index}
              name={faculty.content?.head?.name || ''}
              title={faculty.content?.card?.designation || ''}
              areasOfInterest={faculty.content?.body?.interest_areas || []}
              department={faculty.content?.card?.department || ''}
              education={faculty.content?.card?.PhD || ''}
              email={faculty.content?.card?.mail_id || ''}
              imageUrl={faculty.content?.card?.photo || ''}
              keyPositions={faculty.content?.card?.position || []}
              office={faculty.content?.card?.cabin_number || ''}
              website={faculty.content?.head?.profile_pdf || ''}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-body">
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

// Static property
FacultySearchPage.disableHero = true;

export default FacultySearchPage;
