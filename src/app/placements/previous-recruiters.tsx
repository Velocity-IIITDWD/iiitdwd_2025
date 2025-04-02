// @ts-nocheck
'use client';
import { Card } from '@/components/ui/card';
import { pastRecruiters } from '@/data/pastRecruiters';
import { Award, Building, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function PreviousRecruiters() {
  const [activeTab, setActiveTab] = useState('recruiters');
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

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('recruiters')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'recruiters'
                ? 'bg-white shadow-sm text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
          >
            Companies
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'features'
                ? 'bg-white shadow-sm text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
          >
            Features
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'recruiters' ? (
        <Card className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-700 text-center mb-4">
            We've partnered with leading companies who recognize the exceptional
            talent of our graduates.
          </p>

          {/* Alphabetical Filter */}
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {availableLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter)}
                className={`px-2 py-1 text-xs rounded-md ${
                  activeLetter === letter
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                className="flex items-center justify-center p-2 border-tertiary/20 bg-gradient-to-b from-secondary/5 to-tertiary/10 border rounded-md hover:border-secondary/30 hover:shadow-sm transition-all text-center"
              >
                <span className="font-medium text-primary text-sm">
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
                className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-primary hover:bg-gray-200 transition-colors"
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
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex max-md:flex-col gap-4"
        >
          <Card className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="bg-amber-50 border p-2 rounded-full mr-3">
                <Building className="text-main" size={20} />
              </div>
              <h3 className="text-lg font-bold">Industry Leaders</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our students are recruited by industry giants who value innovation
              and technical excellence.
            </p>
          </Card>

          <Card className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="bg-amber-50 border p-2 rounded-full mr-3">
                <Award className="text-main" size={20} />
              </div>
              <h3 className="text-lg font-bold">Top Startups</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Fast-growing startups choose our graduates for their adaptability
              and cutting-edge skills.
            </p>
          </Card>

          <Card className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="bg-amber-50 border p-2 rounded-full mr-3">
                <Users className="text-main" size={20} />
              </div>
              <h3 className="text-lg font-bold">Global Reach</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our networks extend globally, connecting students with
              opportunities across the world.
            </p>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
