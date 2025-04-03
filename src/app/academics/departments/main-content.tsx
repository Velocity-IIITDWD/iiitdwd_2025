'use client';
import { Badge } from '@/components/ui/badge';
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
    <div className="flex-1 pt-8 md:p-8">
      <h1 className="text-3xl font-bold mb-4 hover:text-main transition-colors">
        Academic Programs in {currentDept?.name}
      </h1>
      <div className="mb-12">
        <p className="text-lg mb-6">{currentDept?.description}</p>

        <div className="bg-gradient-to-br from-secondary/30 to-secondary/70 shadow-md p-6 rounded-lg mb-8 hover:shadow-lg transition-all duration-300">
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
              <p className="text-gray-600 hover:text-amber-900 transition-colors">
                {currentDept.email}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 hover:text-main transition-colors">
          Program Structure
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-md mb-4 ">
          <Table className="bg-background">
            <TableHeader>
              <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
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
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TableCell className="w-full">{category.name}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className="bg-gray-50 text-primary w-full h-full"
                    >
                      {' '}
                      {category.credits}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className="bg-gray-100 text-primary w-full h-full"
                    >
                      {' '}
                      {category.percentageOfTotal}%
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-main w-full h-full"
                    >
                      {category.recommendedPercentage}%
                    </Badge>
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
          <Table className="bg-background">
            <TableHeader>
              <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
                <TableHead className="text-left">Course Name</TableHead>
                <TableHead className="text-left">Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDept.SemesterData[selectedSemester].courses.map(
                (course, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-secondary/20 transition-colors"
                  >
                    <TableCell>{course.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-amber-50 text-amber-800"
                      >
                        {course.credit} credits
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              )}
              <TableRow className="bg-secondary/50">
                <TableCell className="font-medium text-gray-700">
                  Semester Credits:
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="border-none text-amber-900"
                  >
                    {currentDept.SemesterData[selectedSemester].totalCredits}{' '}
                    credits
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 text-sm text-main bg-secondary p-3 rounded-md transition-colors">
          <p>Credit Format: Lecture-Tutorial-Practical-Project-Total</p>
        </div>
      </div>
    </div>
  );
}
