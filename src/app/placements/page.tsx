'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import HigherStudiesContact from './higher-studies-contact';
import PlacementProcedure from './placement-procedure';
import PreviousRecruiters from './previous-recruiters';

export default function Page() {
  // Create refs for sections we want to observe
  const statsRef = useRef(null);
  const trackRecordRef = useRef(null);

  // Use the useInView hook with the refs
  const isStatsVisible = useInView(statsRef, { once: false, amount: 0.2 });
  const isTrackRecordVisible = useInView(trackRecordRef, {
    once: false,
    amount: 0.2
  });

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

  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
        id="why-recruit-us"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="text-main-title font-bold text-center text-primary mb-8 relative"
        >
          <span className="relative inline-block">
            WHY RECRUIT FROM US?
            {/* <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute h-1 bg-main bottom-0 left-0"
            /> */}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-title-2 text-gray-700 max-w-4xl mx-auto mb-12 text-center"
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
              <div className="text-main-title font-bold text-main mb-2">
                {feature.num}
              </div>
              <h3 className="text-title-1 font-bold mb-2">{feature.title}</h3>
              <p className="text-title-3 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div
        ref={statsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 border border-tertiary/20 bg-gradient-to-b from-white/70 to-white rounded-3xl"
        id="placement-statistics"
      >
        <motion.div
          className="max-w-7xl mx-auto mb-16 text-center"
          initial="hidden"
          animate={isStatsVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <h2 className="text-main-title font-bold text-gray-800 mb-4">
            Average Package of
            <span className="text-main"> the top 20% students in</span>
          </h2>
          <h2 className="text-main-title font-bold text-main mb-8">2024</h2>
          <motion.div
            className="inline-flex items-center justify-center bg-gradient-to-r from-main to-main/60 text-white rounded-full h-48 w-48 shadow-lg transform hover:scale-105 transition"
            custom={1}
            variants={counterVariants}
          >
            <motion.span className="text-title-1 font-bold text-amber-50">
              17
            </motion.span>
            <span className="text-title-2 ml-2 text-amber-50">LPA</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto mb-16"
          initial="hidden"
          animate={isStatsVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <div className="bg-secondary/70 rounded-3xl shadow-lg p-10 mb-16">
            <h2 className="text-large-title font-bold text-center mb-10">
              Placement Stats for 2024
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  label: 'Median CTC',
                  value: '9 LPA',
                  bgColor: 'bg-gradient-to-b from-secondary/10 to-secondary/60',
                  textColor: 'text-primary'
                },
                {
                  label: 'Highest CTC',
                  value: '46 LPA',
                  bgColor: 'bg-gradient-to-b from-secondary/10 to-secondary/60',
                  textColor: 'text-primary'
                },
                {
                  label: 'Average CTC',
                  value: '9.93 LPA',
                  bgColor: 'bg-gradient-to-b from-secondary/10 to-secondary/60',
                  textColor: 'text-primary'
                },
                {
                  label: 'Placed',
                  value: '47%',
                  bgColor: 'bg-gradient-to-b from-secondary/10 to-secondary/60',
                  textColor: 'text-primary',
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
                    className={`${stat.bgColor} ${stat.textColor} border border-tertiary/20 rounded-full w-28 h-28 flex flex-col items-center justify-center mb-3 shadow-lg`}
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={stat.label}
                  >
                    <span className="text-title-1 font-bold">{stat.value}</span>
                  </div>
                  <p className="text-title-2 font-semibold">{stat.label}</p>
                  {stat.subtext && (
                    <p className="!text-subheadline text-gray-500">
                      {stat.subtext}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          ref={trackRecordRef}
          className="max-w-7xl mx-auto"
          id="track-record-section"
          initial="hidden"
          animate={isTrackRecordVisible ? 'visible' : 'hidden'}
          variants={statsVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isTrackRecordVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
          >
            Our Track Record
          </motion.h2>
          <PlacementStats />
        </motion.div> */}
      </div>

      <PlacementProcedure />
      <PreviousRecruiters />
      <HigherStudiesContact />
    </div>
  );
}
