'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { MoU, mouData } from '@/data/mou';
import { ArrowUpDown, Filter, Search } from 'lucide-react';
import { useState } from 'react';

export default function MoUPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof MoU | null;
    direction: 'ascending' | 'descending';
  }>({
    key: null,
    direction: 'ascending'
  });

  // Filter and sort data
  const filteredData = mouData.filter((mou) => {
    const matchesSearch =
      mou.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mou.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mou.partners.some((partner) =>
        partner.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Fix: properly handle "all" option
    const matchesYear =
      yearFilter === '' ||
      yearFilter === 'all' ||
      mou.year === parseInt(yearFilter);

    return matchesSearch && matchesYear;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    if (sortConfig.key === 'id') {
      return sortConfig.direction === 'ascending' ? a.id - b.id : b.id - a.id;
    }

    if (sortConfig.key === 'year') {
      return sortConfig.direction === 'ascending'
        ? a.year - b.year
        : b.year - a.year;
    }

    const aValue = a[sortConfig.key] as string;
    const bValue = b[sortConfig.key] as string;

    if (sortConfig.direction === 'ascending') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const uniqueYears = Array.from(
    new Set(mouData.map((mou) => mou.year))
  ).sort();

  const requestSort = (key: keyof MoU) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof MoU) => {
    if (sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortConfig.direction === 'ascending' ? (
      <ArrowUpDown className="ml-2 h-4 w-4 text-blue-500" />
    ) : (
      <ArrowUpDown className="ml-2 h-4 w-4 text-blue-500 transform rotate-180" />
    );
  };

  return (
    <div className="max-w-[1680px] w-[87.5vw] mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader className="text-main">
          <CardTitle className="text-large-title font-bold">
            IIIT Dharwad - Memorandum of Understanding
          </CardTitle>
          <CardDescription className="text-gray-500 text-title-3 text-lg">
            Collaborative partnerships for academic and research excellence
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex items-center relative w-full md:w-2/3">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, partner or overview..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-main"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-1/3">
              <Filter className="h-4 w-4 text-gray-400" />
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {uniqueYears.map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableCaption className="!text-callout text-main">
              Displaying {sortedData.length} of {mouData.length} MoUs
              {(searchTerm || (yearFilter && yearFilter !== 'all')) &&
                ' (filtered)'}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold w-16">
                  <Button
                    variant="ghost"
                    className="p-0 font-bold text-title-3 text-white hover:text-white hover:bg-white/10 w-full justify-start text-left"
                    onClick={() => requestSort('id')}
                  >
                    Sl. No {getSortIcon('id')}
                  </Button>
                </TableHead>
                <TableHead className="font-bold">
                  <Button
                    variant="ghost"
                    className="p-0 font-bold text-title-3 text-white hover:text-white hover:bg-white/10 w-full justify-start text-left"
                    onClick={() => requestSort('name')}
                  >
                    Name of the MoU {getSortIcon('name')}
                  </Button>
                </TableHead>
                <TableHead className="font-bold w-24">
                  <Button
                    variant="ghost"
                    className="p-0 font-bold text-title-3 text-white hover:text-white hover:bg-white/10 w-full justify-start text-left"
                    onClick={() => requestSort('year')}
                  >
                    Year {getSortIcon('year')}
                  </Button>
                </TableHead>
                <TableHead className="font-bold">Brief Overview</TableHead>
                <TableHead className="font-bold">MoU Partners</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.length > 0 ? (
                sortedData.map((mou) => (
                  <TableRow key={mou.id} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{mou.id}</TableCell>
                    <TableCell className="font-medium">{mou.name}</TableCell>
                    <TableCell>{mou.year}</TableCell>
                    <TableCell className="max-w-md">
                      {mou.overview !== 'Not provided' ? (
                        <p className="line-clamp-3 text-sm text-gray-700">
                          {mou.overview}
                        </p>
                      ) : (
                        <span className="text-sm text-gray-500 italic">
                          Not available
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {mou.partners.map((partner, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-blue-50 text-blue-800 border-blue-200"
                          >
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-8 text-gray-500"
                  >
                    No MoUs found matching your search criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-gray-500 pt-2 pb-4 px-6 border-t">
          <p>Last updated: April 2025</p>
          <p>© IIIT Dharwad</p>
        </CardFooter>
      </Card>
    </div>
  );
}
