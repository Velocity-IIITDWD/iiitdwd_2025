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
import { FileText, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

export type Jobs = {
  title: string;
  category: 'faculty' | 'staff' | 'others';
  details: string;
  lastDate: string;
  generalInstructions: string;
  application: string;
  extraInfo: [text: string, link: string][];
};

const currDate = new Date();

const checkValid = (s: string) => {
  let jobDateString = s.trim();

  if (jobDateString.length <= 12) jobDateString += ' 11:59 PM';

  const sanitizedString = jobDateString.replace(/'/g, '');
  const [datePart, timePart] = sanitizedString.split(/\s*[\n\s]+\s*/);

  const dateSeparator = datePart.includes('/') ? '/' : '.';
  const [day, month, year] = datePart.split(dateSeparator).map(Number);

  const [time, modifier] = timePart.split(' ');
  const [hour, minute] = time?.split(':').map(Number);

  const adjustedHour = modifier === 'PM' && hour !== 12 ? hour + 12 : hour;
  const finalHour = modifier === 'AM' && hour === 12 ? 0 : adjustedHour;

  const jobDate = new Date(year, month - 1, day, finalHour, minute);

  return jobDate >= currDate;
};

export default function CareersPage({ Fulldata }: { Fulldata: Jobs[] }) {
  const [updatedJobsData, setUpdatedJobsData] = useState<Jobs[]>(Fulldata);

  useEffect(() => {
    const data = Fulldata.map((job) => {
      //   const isDateValid = checkValid(job.lastDate);
      return {
        ...job,
        // application: isDateValid ? job.application : '#',
        actualDate: job.lastDate
      };
    }).sort(
      (a, b) =>
        new Date(b.actualDate).getTime() - new Date(a.actualDate).getTime()
    );

    setUpdatedJobsData(data);
  }, [Fulldata]);

  const [category, setCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(updatedJobsData);
  useEffect(() => {
    setFilteredJobs(
      updatedJobsData
        .filter((job) => category === 'all' || job.category === category)
        .filter((job) => {
          if (!searchText) return true;

          const title = job.title?.toLowerCase() || '';
          const details = job.details?.toLowerCase() || '';

          return title.includes(searchText) || details.includes(searchText);
        })
    );
  }, [category, searchText, updatedJobsData]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const updateSearch = useCallback(() => {
    searchInputRef.current && setSearchText(searchInputRef.current.value);
  }, []);

  return (
    <section className="flex flex-col py-10 h-fit items-center mb-8 w-[87.5vw] max-w-[1680px] mx-auto">
      {/* Filters */}
      <div className="w-full flex flex-col items-end">
        <h1 className="text-large-title w-full">Careers</h1>
        <div className="flex flex-col max-md:w-full items-center rounded text-main bg-white border lg:flex-row gap-4 w-fit my-2">
          <Select defaultValue="all" onValueChange={setCategory}>
            <SelectTrigger className="rounded-sm w-full self-end border-none shadow-none lg:self-auto">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>

          <search className="flex bg-white max-md:w-full border-2 border-dwd-secondary1 rounded-md sm:border-0">
            <input
              // onKeyDown={(e) => e.key === 'Enter' && updateSearch()}
              ref={searchInputRef}
              onChange={(event) =>
                setSearchText(event.target.value.toLowerCase())
              }
              className="rounded-l-md p-1 px-2 focus:outline-none w-full md:w-auto"
              type="text"
              placeholder="Search..."
            />
            <span className="px-2 flex items-center justify-center">
              {searchText ? (
                <X
                  size={16}
                  className="cursor-pointer"
                  onClick={() => {
                    setSearchText((searchInputRef.current!.value = ''));
                  }}
                />
              ) : (
                <span title="type something to search" className="select-none">
                  <Search size={16} />
                </span>
              )}
            </span>
          </search>
        </div>

        {/* Large screen table */}
        <Table>
          <TableHeader className="bg-main">
            <TableRow>
              <TableHead className="text-title-3 text-white">No.</TableHead>
              <TableHead className="text-white">
                Title and Description
              </TableHead>
              <TableHead className="text-white text-center">Deadline</TableHead>
              <TableHead className="text-center text-white w-min">
                General Instructions
              </TableHead>
              <TableHead className="text-white w-min">
                Application Form
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredJobs.map((job, index) => (
              <TableRow key={index} className="bg-white even:bg-gray-100">
                <TableCell>{index + 1}.</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2 flex-1">
                    <span className="text-primary text-title-3 font-medium">
                      {job.title}
                    </span>
                    {job.details && (
                      <div className="pr-4 text-wrap text-body font-normal text-main/70 text-justify">
                        {job.details}
                      </div>
                    )}

                    {/* <div className="flex gap-2">
                    {job.extraInfo &&
                      job.extraInfo.length > 0 &&
                      job?.extraInfo?.map((item, index) => (
                        <Link
                          key={index}
                          className="mt-8 px-4 py-2 border border-dwd-primary rounded-sm hover:bg-gray-100"
                          target="_blank"
                          href={item[1]}
                        >
                          {item[0]}
                        </Link>
                      ))}
                  </div> */}
                  </div>
                </TableCell>
                <TableCell className="text-wrap text-center text-primary text-body font-normal">
                  {job?.lastDate ? (
                    <>
                      {new Date(job.lastDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      <br />
                      {new Date(job.lastDate).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true // Ensures AM/PM format
                      })}
                    </>
                  ) : (
                    'N/A'
                  )}
                </TableCell>

                <TableCell className="text-center">
                  {job?.generalInstructions && (
                    <span className="inline-block">
                      <Link
                        target="_blank"
                        href={`https://iiitdwd.ac.in${job?.generalInstructions}`}
                      >
                        <FileText size={24} />
                      </Link>
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {job?.application && (
                    <span className="inline-block">
                      <Link
                        className="bg-gray-200 w-full px-4 py-2 rounded-sm hover:bg-gray-300"
                        target="_blank"
                        href={job.application}
                      >
                        {job.application != '#' ? 'Apply Now' : '  Closed  '}
                        {/* Apply Now */}
                      </Link>
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
