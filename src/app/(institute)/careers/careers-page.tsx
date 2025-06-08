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
import { ExternalLink, FileText, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

export type Jobs = {
  title: string;
  category: 'faculty' | 'staff' | 'others';
  details: string;
  lastDate: string;
  generalInstructions: string;
  application: string;
  extraInfo: {
    _key: string;
    link: string;
    text: string;
  }[];
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
              <TableHead className="text-title-3 text-white w-16">
                No.
              </TableHead>
              <TableHead className="text-white">
                Title and Description
              </TableHead>
              <TableHead className="text-white text-center w-32">
                Deadline
              </TableHead>
              <TableHead className="text-center text-white w-20">
                Instructions
              </TableHead>
              <TableHead className="text-white text-center w-24">
                Apply
              </TableHead>
              <TableHead className="text-white text-center w-32">
                Documents
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredJobs.map((job, index) => (
              <TableRow key={index} className="bg-white even:bg-gray-100">
                <TableCell className="w-16 text-center font-medium">
                  {index + 1}
                </TableCell>
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
                  </div>
                </TableCell>
                <TableCell className="text-wrap text-center text-primary text-sm font-normal w-32">
                  {job?.lastDate ? (
                    <div className="space-y-1">
                      <div className="font-medium">
                        {new Date(job.lastDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="text-xs text-gray-600">
                        {new Date(job.lastDate).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </div>
                    </div>
                  ) : (
                    'N/A'
                  )}
                </TableCell>

                <TableCell className="text-center w-20">
                  {job?.generalInstructions && (
                    <Link
                      target="_blank"
                      href={`https://iiitdwd.ac.in${job?.generalInstructions}`}
                      className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 transition-colors"
                      title="General Instructions"
                    >
                      <FileText size={20} className="text-primary" />
                    </Link>
                  )}
                </TableCell>

                <TableCell className="text-center w-24">
                  {job?.application && (
                    <Link
                      className={`inline-block px-3 py-2 rounded-sm text-sm font-medium transition-colors ${
                        job.application !== '#'
                          ? 'bg-main text-white hover:bg-main/90'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                      target="_blank"
                      href={job.application}
                    >
                      {job.application !== '#' ? 'Apply' : 'Closed'}
                    </Link>
                  )}
                </TableCell>

                <TableCell className="w-32">
                  {job?.extraInfo && job.extraInfo.length > 0 && (
                    <div className="flex flex-col gap-1">
                      {job.extraInfo.map((item) => (
                        <Link
                          key={item._key}
                          target="_blank"
                          href={`https://iiitdwd.ac.in${item.link}`}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs border border-primary/20 hover:bg-primary/5 rounded transition-colors"
                          title={item.text}
                        >
                          <FileText size={12} className="text-primary" />
                          <span className="truncate max-w-20 text-main">
                            {item.text}
                          </span>
                          <ExternalLink
                            size={10}
                            className="text-main/60 flex-shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
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
