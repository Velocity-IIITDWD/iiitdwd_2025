'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Download, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MTechResearchPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen py-12 mx-auto max-w-[1680px] w-[87.5vw]">
      {/* Header Banner */}
      <div className="mb-10">
        <div className="rounded-lg bg-white border shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <h1 className="text-large-title text-main font-bold">
              M.Tech by Research
            </h1>
            <p className="mt-2 text-title-2 text-gray-500">
              Advanced research opportunities in cutting-edge technology domains
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <Tabs
        defaultValue="overview"
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-fit gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="apply">How to Apply</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-title-1 text-main">
                Advertisement for Admission to M.Tech (by Research)
              </CardTitle>
              <CardDescription>
                Applications are accepted on a rolling basis throughout the
                academic year
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 text-title-3">
                IIIT Dharwad invites applications for admission to its M.Tech by
                Research programme. Prospective candidates can submit their
                applications at any time throughout the academic year, as the
                institute accepts applications on a rolling basis.
              </p>

              <Alert className="bg-gradient-to-b from-secondary/40 to-white border">
                <AlertCircle color="black" />
                <AlertTitle className="text-main">Important Note</AlertTitle>
                <AlertDescription>
                  The final decision regarding admitting a candidate will be
                  taken by the competent authority.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-medium text-title-1 text-main mb-2">
                  Research Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Artificial Intelligence</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Data Analytics</Badge>
                  <Badge variant="outline">IoT & Automation</Badge>
                  <Badge variant="outline">Cyber Security</Badge>
                  <Badge variant="outline">Blockchain</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                  <Badge variant="outline">Networks</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-main hover:bg-main/90"
                onClick={() => setSelectedTab('apply')}
              >
                Apply Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium text-main text-title-3">
                  Professor In-Charge (Academics)
                </h4>
                <p className="text-gray-600 text-body mt-2">
                  IIIT Dharwad, Ittigatti Road,
                  <br />
                  Near Sattur Colony, Dharwad - 580009
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <MailIcon className="text-main" size={16} />
                <a
                  href="mailto:pic-ac@iiitdwd.ac.in"
                  className="text-main text-body hover:underline"
                >
                  pic-ac@iiitdwd.ac.in
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Admission Categories</CardTitle>
              <CardDescription>
                M.Tech by Research offers flexible options for various
                requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-main/10 p-2 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-main"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-title-1 font-medium text-main">
                      Category 1: Regular (Full-time)
                    </h3>
                  </div>
                  <div className="mt-4 pl-12 space-y-3 text-title-3 text-main">
                    <div className="flex items-center">
                      <Badge className="mt-1 mr-2 bg-main">Option 1</Badge>
                      <div>
                        <p className="font-medium">Institute Fellowship</p>
                        <p className="text-gray-500 text-body">
                          Financial support provided by the institute, subject
                          to availability of funds/grants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="mt-1 mr-2 bg-main">Option 2</Badge>
                      <div>
                        <p className="font-medium">Self-financed</p>
                        <p className="text-gray-500 text-body">
                          Candidates fund their own research without financial
                          support from the institute
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-main/10 p-2 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-main"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-title-1 font-medium text-main">
                      Category 2: Part-time
                    </h3>
                  </div>
                  <div className="mt-4 pl-12 space-y-3 text-title-3 text-main">
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="mt-1 mr-2 border-main"
                      >
                        Option 1
                      </Badge>
                      <div>
                        <p className="font-medium">External</p>
                        <p className="text-gray-500 text-body">
                          For working professionals from industry who wish to
                          pursue research while continuing their job
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="mt-1 mr-2 border-main"
                      >
                        Option 2
                      </Badge>
                      <div>
                        <p className="font-medium">College Teacher</p>
                        <p className="text-gray-500 text-body">
                          For faculty members from educational institutions who
                          want to enhance their research qualifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-gradient-to-b from-secondary/40 to-white border">
                <AlertCircle color="black" />
                <AlertTitle className="text-main">
                  Financial Support Notice
                </AlertTitle>
                <AlertDescription>
                  Applicants admitted under Category 2 (Part-time) shall not
                  receive any financial support from IIIT Dharwad. Applicants
                  under Category 1 (Regular) may receive fellowship, subject to
                  the availability of funds/grants.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        {/* How to Apply Tab */}
        <TabsContent value="apply" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>
                Follow these steps to apply for the M.Tech by Research program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <ol className="space-y-4 text-main list-decimal pl-5">
                  <li className="pl-2">
                    <p className="font-medium text-title-3">
                      Download and fill the application form
                    </p>
                    <p className="text-gray-600 mt-1 text-body">
                      Complete all sections of the application form with
                      accurate information
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="font-medium text-title-3">
                      Prepare supporting documents
                    </p>
                    <p className="text-gray-600 mt-1 text-body">
                      Academic transcripts, work experience certificates,
                      research proposal, etc.
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="font-medium text-title-3">
                      Submit your application
                    </p>
                    <p className="text-gray-600 mt-1 text-body">
                      Applications are accepted throughout the academic year on
                      a rolling basis
                    </p>
                  </li>
                  <li className="pl-2">
                    <p className="font-medium text-title-3">
                      Selection process
                    </p>
                    <p className="text-gray-600 mt-1 text-body">
                      Shortlisted candidates will be intimated about further
                      process, date and time over email
                    </p>
                  </li>
                </ol>

                <div className="flex justify-center">
                  <Link
                    href={
                      'https://docs.google.com/forms/d/e/1FAIpQLSd2cuUZE2Fse5e8fr6M-Bs70-41Kz80qEMU_nRNNbBbiCfoZA/viewform'
                    }
                    className="bg-main hover:bg-main/90 flex items-center text-white font-medium text-title-3 px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out gap-4"
                  >
                    <Download size={16} />
                    Download Application Form
                  </Link>
                </div>

                <Alert className="bg-green-50 border-green-200">
                  <AlertCircle color="black" />
                  <AlertTitle className="text-main">
                    Rolling Admissions
                  </AlertTitle>
                  <AlertDescription className="text-body text-gray-500">
                    Application submission is open throughout the year. There is
                    no specific deadline.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions about the M.Tech by Research program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-main">
                    What is the difference between M.Tech and M.Tech by
                    Research?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    While a regular M.Tech program focuses on coursework with a
                    smaller research component, M.Tech by Research is primarily
                    research-oriented with fewer courses and a more extensive
                    thesis requirement. It's ideal for candidates interested in
                    pursuing advanced research in their field of specialization.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-main">
                    How long does the program take to complete?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    The M.Tech by Research program typically takes 2-3 years for
                    full-time students and 3-4 years for part-time students,
                    depending on the nature and scope of the research project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-main">
                    What are the eligibility criteria?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    Candidates should have a B.Tech/B.E or equivalent degree in
                    a relevant discipline with a minimum of 60% marks or 6.5
                    CGPA. Part-time applicants should have at least two years of
                    professional experience after obtaining their qualifying
                    degree.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-main">
                    What is the amount of fellowship provided?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    Full-time students selected for fellowship typically receive
                    financial assistance as per government norms, subject to
                    availability of funds. The current fellowship amount and
                    details can be obtained from the academic office.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-main">
                    How often do I need to visit campus as a part-time student?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    Part-time students are required to visit the campus as per
                    the academic calendar and research requirements, which
                    typically includes attending certain courses, seminars,
                    meetings with supervisors, and research presentations. The
                    specific schedule is determined in consultation with the
                    research supervisor.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
