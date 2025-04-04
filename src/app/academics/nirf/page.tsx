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
    icon: <BookOpen className="h-8 w-8" />,
    description:
      'Evaluates faculty qualifications, student-teacher ratio, financial resources, and infrastructure'
  },
  {
    name: 'Research and Professional Practice',
    icon: <BarChart4 className="h-8 w-8" />,
    description:
      'Measures research output, quality publications, IPRs and patents'
  },
  {
    name: 'Graduation Outcomes',
    icon: <Award className="h-8 w-8" />,
    description:
      'Considers graduation rates, median salary, and higher studies placements'
  },
  {
    name: 'Outreach and Inclusivity',
    icon: <TrendingUp className="h-8 w-8" />,
    description: 'Assesses diversity, inclusion policies and regional outreach'
  },
  {
    name: 'Perception',
    icon: <Award className="h-8 w-8" />,
    description:
      'Measures perception among academic peers, employers, and the public'
  }
];

export default async function Page() {
  const nirfReports = await get<QueryNirfReportsResult>(queryNirfReports);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-2 tracking-tight">
            NIRF
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            National Institutional Ranking Framework
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-6 border rounded-xl shadow-md text-gray-700 leading-relaxed">
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

        {/* Current Ranking Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="md:col-span-1 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-700 text-white">
              <CardTitle className="text-2xl font-bold">
                Latest Ranking
              </CardTitle>
              <CardDescription className="text-blue-100">
                NIRF {nirfReports?.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="text-7xl font-bold text-primary mb-2">
                {nirfReports[0].rank}
              </div>
              <p className="text-gray-600 mb-4">Engineering Category</p>
              {nirfReports[0].score !== 'N/A' && (
                <div className="bg-blue-50 p-4 rounded-lg w-full text-center">
                  <p className="text-gray-600 text-sm">Overall Score</p>
                  <p className="text-3xl font-semibold text-primary">
                    {nirfReports[0].score}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-700 text-white">
              <CardTitle className="text-2xl font-bold">
                Ranking History
              </CardTitle>
              <CardDescription className="text-blue-100">
                IIIT Dharwad's progress over the years
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {nirfReports.map((report) => (
                  <Button
                    key={report.year}
                    variant={activeYear === report.year ? 'default' : 'outline'}
                    onClick={() => setActiveYear(report.year)}
                    className={
                      activeYear === report.year
                        ? 'bg-main hover:bg-main/90'
                        : ''
                    }
                  >
                    {report.year}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                {nirfReports.map((report) => (
                  <div
                    key={report.year}
                    className={`transition-all duration-300 p-4 rounded-lg border ${
                      activeYear === report.year
                        ? 'bg-blue-50 border-primary'
                        : 'bg-white border-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{report.year}</h3>
                        <p className="text-gray-500">Engineering Category</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">
                          {report.rank}
                        </p>
                        {report.score !== 'N/A' && (
                          <p className="text-sm text-gray-500">
                            Score: {report.score}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* NIRF Parameters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            NIRF Evaluation Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {parameters.map((param, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition-all duration-300 border"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center text-primary mb-2">
                    {param.icon}
                  </div>
                  <CardTitle className="text-center text-lg">
                    {param.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
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
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Growth Section */}
        {/* <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-700 text-white">
              <CardTitle className="text-2xl font-bold">
                IIIT Dharwad's Growth
              </CardTitle>
              <CardDescription className="text-blue-100">
                Steady improvement in rankings
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="h-1 bg-gray-200 w-full absolute top-1/2 transform -translate-y-1/2"></div>
                  <div className="relative flex justify-between w-full">
                    {nirfReports.map((report, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            report.rank !== 'N/A' &&
                            !report.rank.includes('Band')
                              ? 'bg-green-500'
                              : report.rank.includes('Band')
                              ? 'bg-yellow-500'
                              : 'bg-gray-300'
                          }`}
                        ></div>
                        <div className="mt-2 text-sm">{report.year}</div>
                        <div className="mt-1 text-xs font-medium">
                          {report.rank !== 'N/A' ? report.rank : 'Not Ranked'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center max-w-2xl">
                  <Badge className="mb-4 bg-main">
                    Continuous Improvement
                  </Badge>
                  <p className="text-gray-600">
                    IIIT Dharwad has shown remarkable progress in the NIRF
                    rankings over the years, moving from band rankings to
                    securing a position in the top 120 engineering institutes in
                    India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
