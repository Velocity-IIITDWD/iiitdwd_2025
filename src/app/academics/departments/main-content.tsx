'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { BTechCSEProgram } from '@/data/academics/cse-data';
import { useState } from 'react';
import ContentTypes from './content-types';

export default function MainContent({
  currentDept
}: {
  currentDept: BTechCSEProgram;
}) {
  const [selectedSemester, setSelectedSemester] = useState(0);

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-4 hover:text-main transition-colors">
        Academic Programs in {currentDept?.name}
      </h1>
      <div className="mb-12">
        <p className="text-lg mb-6">{currentDept?.description}</p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-md p-6 rounded-lg mb-8 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3 text-main">
            Department Head
          </h3>
          <div className="flex items-center mb-3">
            {currentDept?.hod_image && (
              <img
                src={currentDept?.hod_image}
                alt={currentDept?.hod}
                className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-main hover:scale-105 transition-transform duration-300"
              />
            )}
            <div>
              <p className="font-medium text-lg hover:text-main transition-colors">
                {currentDept.hod}
              </p>
              <p className="text-gray-600 hover:text-main transition-colors">
                {currentDept.email}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 hover:text-main transition-colors">
          Program Structure
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-md mb-4 ">
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-colors">
                <TableHead className="text-left w-full">Name</TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  Credits
                </TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  Percentage of Total
                </TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  Recommended Percentage
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDept.courseCategories.map((category, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="w-full">{category.name}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span className="inline-flex items-center w-full justify-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {category.credits}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span className="inline-flex items-center w-full justify-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {category.percentageOfTotal}%
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span className="inline-flex items-center w-full justify-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      {category.recommendedPercentage}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <ContentTypes currentDept={currentDept} />

        <h2 className="text-2xl font-bold mb-4 mt-8 hover:text-main transition-colors">
          Semester-wise Course Structure
        </h2>

        <div className="mb-6">
          <label
            htmlFor="semester"
            className="block mb-2 font-medium text-gray-700"
          >
            Select Semester:
          </label>
          <Select
            value={selectedSemester.toString()}
            onValueChange={(value) => setSelectedSemester(parseInt(value))}
          >
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Select a semester" />
            </SelectTrigger>
            <SelectContent>
              {currentDept.SemesterData.map((_, index) => (
                <SelectItem key={index} value={index.toString()}>
                  Semester {index + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md">
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-colors">
                <TableHead className="text-left">Course Name</TableHead>
                <TableHead className="text-left">Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDept.SemesterData[selectedSemester].courses.map(
                (course, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>{course.name}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {course.credit}
                      </span>
                    </TableCell>
                  </TableRow>
                )
              )}
              <TableRow className="bg-gradient-to-r from-gray-100 to-gray-200">
                <TableCell className="font-medium text-gray-700">
                  Semester Credits:
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-main/10 text-main">
                    {currentDept.SemesterData[selectedSemester].totalCredits}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
          <p>Credit Format: Lecture-Tutorial-Practical-Project-Total</p>
        </div>
      </div>
    </div>
  );
}
