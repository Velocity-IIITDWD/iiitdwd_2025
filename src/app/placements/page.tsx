'use client';
import { motion } from 'framer-motion';
import {
  Award,
  Building,
  Calendar,
  CheckCircle,
  FileText,
  Presentation,
  UserCheck,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { pastRecruiters } from './pastRecruiters';

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [trackRecordVisible, setTrackRecordVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsElement = document.getElementById('placement-stats');
      const trackRecordElement = document.getElementById(
        'track-record-section'
      );

      if (statsElement) {
        const position = statsElement.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }

      if (trackRecordElement) {
        const position = trackRecordElement.getBoundingClientRect();
        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {
          setTrackRecordVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    })
  };

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  const yearVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5
      }
    })
  };

  const placementBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + custom * 0.15,
        duration: 0.4,
        type: 'spring',
        stiffness: 200
      }
    })
  };

  const yearlyData = [
    { year: 2019, avgCTC: 6.5, highestCTC: 10, placementRate: 100 },
    { year: 2020, avgCTC: 7.2, highestCTC: 12, placementRate: 100 },
    { year: 2021, avgCTC: 8.4, highestCTC: 25, placementRate: 100 },
    { year: 2022, avgCTC: 9.1, highestCTC: 26, placementRate: 92 },
    { year: 2023, avgCTC: 11.5, highestCTC: 35, placementRate: 87 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 mb-8 relative"
        >
          <span className="relative inline-block">
            WHY RECRUIT FROM US?
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute h-1 bg-blue-500 bottom-0 left-0"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-4xl mx-auto mb-12"
        >
          When it comes to recruiting top-notch candidates, IIIT Dharwad stands
          head and shoulders above the rest. Our institution isn't just a place
          of learning; it's a launchpad for exceptional careers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: '01',
              title: 'Outcome-Based Education',
              description:
                'Students meet industry needs through specific objectives.'
            },
            {
              num: '02',
              title: 'Specialization Opportunities',
              description: 'Electives allow niche expertise development.'
            },
            {
              num: '03',
              title: 'Project-Centric Learning',
              description: 'Real-world projects enhance practical skills.'
            },
            {
              num: '04',
              title: 'IT-Focused Curriculum',
              description: 'Curriculum aligned with tech-driven industries.'
            },
            {
              num: '05',
              title: 'Holistic Curriculum',
              description: 'Blend of theory, soft skills, and projects.'
            },
            {
              num: '06',
              title: 'Interdisciplinary Learning',
              description: 'Diverse subjects promote problem-solving.'
            },
            {
              num: '07',
              title: 'Industry Involvement',
              description: 'Updated curriculum with industry feedback.'
            },
            {
              num: '08',
              title: 'Practical Learning',
              description: 'Hackathons showcase practical skills.'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: 'easeOut'
              }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {feature.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div
        className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl"
        id="placement-stats"
      >
        <motion.div
          className="max-w-7xl mx-auto mb-16 text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Average Package of
            <span className="text-blue-500"> the top 20% students in</span>
          </h2>
          <h2 className="text-7xl font-extrabold text-blue-600 mb-8">2024</h2>

          <motion.div
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full h-48 w-48 shadow-lg transform hover:scale-105 transition"
            custom={1}
            variants={counterVariants}
          >
            <motion.span className="text-[2rem] font-bold text-black">
              17
            </motion.span>
            <span className="text-xl ml-2 text-black">LPA</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <div className="bg-white rounded-3xl shadow-lg p-10 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              Placement Stats for 2024
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  label: 'Median CTC',
                  value: '9 LPA',
                  bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
                  textColor: 'text-navy-800'
                },
                {
                  label: 'Highest CTC',
                  value: '46 LPA',
                  bgColor: 'bg-blue-100',
                  textColor: 'text-navy-800'
                },
                {
                  label: 'Average CTC',
                  value: '9.93 LPA',
                  bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
                  textColor: 'text-navy-800'
                },
                {
                  label: 'Placed',
                  value: '47%',
                  bgColor: 'bg-blue-100',
                  textColor: 'text-navy-800',
                  subtext: '*Ongoing'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
                  custom={index}
                  variants={counterVariants}
                >
                  <Tooltip id={`tooltip-${index}`} />
                  <div
                    className={`${stat.bgColor} ${stat.textColor} rounded-full w-28 h-28 flex flex-col items-center justify-center mb-3 shadow-lg`}
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={stat.label}
                  >
                    <span className="text-4xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-lg font-semibold">{stat.label}</p>
                  {stat.subtext && (
                    <p className="text-sm text-gray-500">{stat.subtext}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto"
          id="track-record-section"
          initial="hidden"
          animate={trackRecordVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              trackRecordVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
          >
            Our Track Record
          </motion.h2>

          <div className="bg-white rounded-3xl shadow-lg p-8 relative">
            <motion.div
              className="flex justify-center gap-8 mb-8"
              initial={{ opacity: 0 }}
              animate={trackRecordVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-3 bg-blue-400 mr-2"></div>
                <span>Average CTC</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-3 bg-navy-800 mr-2"></div>
                <span>Highest CTC</span>
              </div>
            </motion.div>
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-14">
              {[0, 5, 10, 15, 20, 25, 30, 35].map((value, index) => (
                <motion.span
                  key={value}
                  className="text-xs text-gray-500"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    trackRecordVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  {value}
                </motion.span>
              ))}
            </div>
            <div className="pl-6">
              {yearlyData.map((data, index) => (
                <div key={data.year} className="mb-12 relative">
                  <motion.div
                    className="text-sm font-medium text-gray-700 absolute -left-6 top-0"
                    custom={index}
                    variants={yearVariants}
                  >
                    {data.year}
                  </motion.div>
                  <motion.div
                    className="h-6 mb-2 rounded-md"
                    style={{ backgroundColor: '#60A5FA' }}
                    custom={(data.avgCTC / 35) * 100}
                    variants={barVariants}
                  ></motion.div>
                  <motion.div
                    className="h-6 rounded-md"
                    style={{ backgroundColor: '#1E3A8A' }}
                    custom={(data.highestCTC / 35) * 100}
                    variants={barVariants}
                  ></motion.div>
                  <motion.div
                    className="absolute flex items-center"
                    style={{
                      left: `${(data.highestCTC / 35) * 100}%`,
                      top: '10px'
                    }}
                    custom={index}
                    variants={placementBadgeVariants}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="ml-2"
                    >
                      <path d="M20 12l-8-8v5H4v6h8v5z" fill="#333" />
                    </svg>
                    <span className="ml-2 font-bold">
                      {data.placementRate}% placed
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="absolute left-6 right-6 top-14 bottom-8 grid grid-cols-7 gap-0">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border-l border-gray-200 h-full"
                  initial={{ opacity: 0 }}
                  animate={
                    trackRecordVisible ? { opacity: 0.5 } : { opacity: 0 }
                  }
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16"
      >
        <motion.h1
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 mb-16 relative"
        >
          <span className="relative inline-block">
            PLACEMENT PROCEDURE
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute h-1 bg-blue-500 bottom-0 left-0"
            />
          </span>
        </motion.h1>
        <div className="relative">
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gray-200 hidden md:block"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Placement Initialization
              </h3>
              <p className="text-gray-600">
                The placement process begins with initialization by the
                placement cell.
              </p>
            </div>
            <div className="md:w-12 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  1
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left flex items-center order-3">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <span className="font-medium">Start of Placement Season</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right flex justify-end items-center order-2">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <span className="font-medium mr-4">Company Workflow</span>
                <div className="bg-blue-100 rounded-full p-3">
                  <UserCheck className="text-blue-600" size={24} />
                </div>
              </div>
            </div>
            <div className="md:w-12 flex justify-center order-1 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  2
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left order-3">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                CGC Chairman
              </h3>
              <p className="text-gray-600">
                The CGC Chairman provides SRF (Student Recruitment Form) through
                the web portal.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Company/Organization
              </h3>
              <p className="text-gray-600">
                The company submits SRF, job description, job details, and
                campus visit dates.
              </p>
            </div>
            <div className="md:w-12 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  3
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left flex items-center order-3">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <Building className="text-indigo-600" size={24} />
                </div>
                <span className="font-medium">Company Details Submission</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right flex justify-end items-center order-2">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <span className="font-medium mr-4">Campus Visit</span>
                <div className="bg-purple-100 rounded-full p-3">
                  <Calendar className="text-purple-600" size={24} />
                </div>
              </div>
            </div>
            <div className="md:w-12 flex justify-center order-1 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  4
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left order-3">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                PPT & Interviews
              </h3>
              <p className="text-gray-600">
                Companies conduct presentations and interviews on campus during
                their scheduled visit.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Selected Students List
              </h3>
              <p className="text-gray-600">
                Companies provide a list of selected students to the CGC.
              </p>
            </div>
            <div className="md:w-12 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  5
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left flex items-center order-3">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-yellow-100 rounded-full p-3 mr-4">
                  <Users className="text-yellow-600" size={24} />
                </div>
                <span className="font-medium">Selection Announcement</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right flex justify-end items-center order-2">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <span className="font-medium mr-4">Results Distribution</span>
                <div className="bg-red-100 rounded-full p-3">
                  <FileText className="text-red-600" size={24} />
                </div>
              </div>
            </div>
            <div className="md:w-12 flex justify-center order-1 mb-4 md:mb-0">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-white font-bold"
                >
                  6
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left order-3">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Result Declaration
              </h3>
              <p className="text-gray-600">Results are declared in two ways:</p>
              <ul className="text-gray-600 list-disc pl-5 mt-2">
                <li>Same day result: Offer letters directly to students</li>
                <li>Delayed result: Offer letters through CGC</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 flex justify-center mb-4">
              <div className="bg-green-500 rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg relative z-10">
                <motion.div
                  initial={{ rotate: -90 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <Award className="text-white" size={20} />
                </motion.div>
              </div>
            </div>
            <div className="text-center max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Placement Procedure Ends
              </h3>
              <p className="text-gray-600">
                The placement process concludes when students receive their
                final offer letters.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Result Declaration Options
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Presentation className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-semibold">Same Day Result</h4>
              </div>
              <p className="text-gray-600">
                Companies that provide immediate results directly issue offer
                letters to selected students on the same day of interviews.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Building className="text-purple-600" size={24} />
                </div>
                <h4 className="text-xl font-semibold">Delayed Result</h4>
              </div>
              <p className="text-gray-600">
                Some companies declare results later. In such cases, offer
                letters are distributed through the CGC to the selected
                students.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Past Recruiters Section - Add this after the placement procedure section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16"
      >
        <motion.h1
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 mb-16 relative"
        >
          <span className="relative inline-block">
            PAST RECRUITERS
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute h-1 bg-blue-500 bottom-0 left-0"
            />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <p className="text-lg text-gray-700 text-center mb-10">
            We're proud to have partnered with leading companies across various
            industries who recognize the exceptional talent and skills of our
            graduates.
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {pastRecruiters.map((recruiter, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-all hover:bg-blue-100 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium text-navy-800">
                  {recruiter.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Building className="text-blue-600" size={30} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              Industry Leaders
            </h3>
            <p className="text-gray-600 text-center">
              Our students are recruited by industry giants who value innovation
              and technical excellence.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="text-green-600" size={30} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Top Startups</h3>
            <p className="text-gray-600 text-center">
              Fast-growing startups choose our graduates for their adaptability
              and cutting-edge skills.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="text-purple-600" size={30} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Global Reach</h3>
            <p className="text-gray-600 text-center">
              Our networks extend globally, connecting students with
              opportunities across the world.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
