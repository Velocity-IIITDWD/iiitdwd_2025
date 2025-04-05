// @ts-nocheck
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pastRecruiters } from '@/data/pastRecruiters';
import { Award, Building, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function PreviousRecruiters() {
  const [expandedView, setExpandedView] = useState(false);
  const [activeLetter, setActiveLetter] = useState('All');

  // Organize recruiters alphabetically
  const organizeByLetter = () => {
    const organized = {};
    pastRecruiters.forEach((recruiter) => {
      const firstLetter = recruiter.name.charAt(0).toUpperCase();
      if (!organized[firstLetter]) {
        organized[firstLetter] = [];
      }
      organized[firstLetter].push(recruiter);
    });
    return organized;
  };

  const organizedRecruiters = organizeByLetter();
  const availableLetters = ['All', ...Object.keys(organizedRecruiters).sort()];

  // Get recruiters to display based on selected filter
  const getDisplayedRecruiters = () => {
    if (activeLetter === 'All') {
      return expandedView ? pastRecruiters : pastRecruiters.slice(0, 12);
    } else {
      return expandedView
        ? organizedRecruiters[activeLetter]
        : organizedRecruiters[activeLetter].slice(0, 12);
    }
  };

  const displayedRecruiters = getDisplayedRecruiters();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8"
      id="previous-recruiters"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, type: 'spring' }}
        className="text-3xl font-bold text-center text-primary mb-6"
      >
        PAST RECRUITERS
      </motion.h2>

      {/* shadcn/ui Tabs */}
      <Tabs defaultValue="recruiters" className="w-full mx-auto">
        <div className="flex justify-center mb-4">
          <TabsList>
            <TabsTrigger value="recruiters">Companies</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="recruiters">
          <Card>
            <CardContent className="pt-6">
              <p className="text-body text-gray-700 text-center mb-4">
                We've partnered with leading companies who recognize the
                exceptional talent of our graduates.
              </p>

              {/* Alphabetical Filter */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {availableLetters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setActiveLetter(letter)}
                    className={`px-2 py-1 text-callout rounded-md cursor-pointer ${
                      activeLetter === letter
                        ? 'bg-main text-white'
                        : 'bg-secondary/50 text-gray-500 hover:bg-secondary'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.02 }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {displayedRecruiters.map((recruiter, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="flex items-center justify-center p-2 border-tertiary/20 bg-gradient-to-b from-secondary/20 to-secondary/60 border rounded-md hover:border-secondary/30 hover:shadow-sm transition-all text-center"
                  >
                    <span className="font-medium text-primary text-body">
                      {recruiter.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Show More/Less Button */}
              {pastRecruiters.length > 12 && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setExpandedView(!expandedView)}
                    className="flex items-center gap-1 px-4 py-2 bg-secondary rounded-md text-body font-medium text-primary hover:bg-secondary/90 transition-colors"
                  >
                    {expandedView ? (
                      <>
                        <ChevronUp size={16} />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        Show More
                      </>
                    )}
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="bg-main/10 border p-2 rounded-full mr-3">
                  <Building className="text-main" size={20} />
                </div>
                <CardTitle>Industry Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-body">
                  Our students are recruited by industry giants who value
                  innovation and technical excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="bg-main/10 border p-2 rounded-full mr-3">
                  <Award className="text-main" size={20} />
                </div>
                <CardTitle>Top Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-body">
                  Fast-growing startups choose our graduates for their
                  adaptability and cutting-edge skills.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="bg-main/10 border p-2 rounded-full mr-3">
                  <Users className="text-main" size={20} />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-body">
                  Our networks extend globally, connecting students with
                  opportunities across the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
