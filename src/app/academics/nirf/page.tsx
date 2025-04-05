import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { get } from '@/sanity/lib/client';
import { queryNirfReports } from '@/sanity/lib/queries';
import { QueryNirfReportsResult } from '@/sanity/types';
import { Award, BarChart4, BookOpen, FileText, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const parameters = [
  {
    name: 'Teaching, Learning & Resources',
    icon: <BookOpen className="h-6 w-6" />,
    description:
      'Evaluates faculty qualifications, student-teacher ratio, financial resources, and infrastructure'
  },
  {
    name: 'Research and Professional Practice',
    icon: <BarChart4 className="h-6 w-6" />,
    description:
      'Measures research output, quality publications, IPRs and patents'
  },
  {
    name: 'Graduation Outcomes',
    icon: <Award className="h-6 w-6" />,
    description:
      'Considers graduation rates, median salary, and higher studies placements'
  },
  {
    name: 'Outreach and Inclusivity',
    icon: <TrendingUp className="h-6 w-6" />,
    description: 'Assesses diversity, inclusion policies and regional outreach'
  },
  {
    name: 'Perception',
    icon: <Award className="h-6 w-6" />,
    description:
      'Measures perception among academic peers, employers, and the public'
  }
];

export default async function Page() {
  const nirfReports = await get<QueryNirfReportsResult>(queryNirfReports);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-[87.5vw] max-w-[1680px] mx-auto py-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-main-title font-bold text-primary mb-2 tracking-tight">
            NIRF
          </h1>
          <h2 className="text-large-title font-bold text-primary mb-6">
            National Institutional Ranking Framework
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-6 border rounded-xl text-title-3 shadow-md text-gray-700 leading-relaxed">
            <p className="mb-4">
              The National Institutional Ranking Framework (NIRF) was approved
              by the MHRD and launched by Honourable Minister of Human Resource
              Development on 29th September 2015.
            </p>
            <p>
              This framework outlines a methodology to rank institutions across
              the country. The methodology draws from the overall
              recommendations and broad understanding arrived at by a Core
              Committee set up by MHRD, to identify the broad parameters for
              ranking various universities and institutions.
            </p>
          </div>
        </div>

        {/* NIRF Parameters */}
        <div className="mb-16">
          <h2 className="text-large-title font-bold text-primary mb-6 text-center">
            NIRF Evaluation Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parameters.map((param, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition-all duration-300 border"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center text-primary mb-2">
                    {param.icon}
                  </div>
                  <CardTitle className="text-center !text-title-1">
                    {param.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-end">
                  <p className="text-title-3 font-normal text-gray-600 text-center">
                    {param.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h2 className="text-large-title font-bold text-primary mb-6 text-center">
              NIRF Reports
            </h2>

            <Tabs defaultValue="2023" className="w-full">
              <TabsList className="w-full flex flex-wrap mb-8 border">
                {nirfReports.map((report) => (
                  <TabsTrigger
                    key={report.year}
                    value={report.year!.toString()}
                  >
                    {report.year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {nirfReports?.map((report) => (
                <TabsContent
                  key={report.year}
                  value={report?.year!?.toString()}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-title-3">
                    <Link
                      href={`https://iiitdwd.ac.in${report.overallReport!}`}
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full bg-main hover:bg-main/90 hover:shadow-lg transition-all flex justify-between group">
                        <span>NIRF Overall Report {report.year}</span>
                        <FileText className="transition-transform group-hover:scale-110" />
                      </Button>
                    </Link>

                    <Link
                      href={`https://iiitdwd.ac.in${report.engineeringReport!}`}
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full bg-main hover:bg-main/90 hover:shadow-lg transition-all flex justify-between group">
                        <span>NIRF Engineering Report {report.year}</span>
                        <FileText className="transition-transform group-hover:scale-110" />
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
