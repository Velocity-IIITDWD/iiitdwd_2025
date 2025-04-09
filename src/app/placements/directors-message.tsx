'use client';

import director from '@/assets/director.jpg';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const DirectorsMessage = () => {
  const messageRef = useRef(null);
  const isMessageVisible = useInView(messageRef, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={messageRef}
      initial={{ opacity: 0 }}
      animate={isMessageVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-16 my-16 py-12 px-8 rounded-3xl border border-tertiary/20 bg-gradient-to-b from-white/70 to-white shadow-md"
      id="directors-message"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={isMessageVisible ? { y: 0 } : { y: -20 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          type: 'spring',
          stiffness: 100
        }}
        className="text-main-title font-bold text-primary mb-8 text-center"
      >
        Director's <span className="text-main">Message</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={
            isMessageVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ delay: 0.4, duration: 0.6 }}
          className="md:col-span-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-main to-secondary/40 rounded-xl blur-md opacity-20 transform scale-105"></div>
            <img
              src={director.src}
              alt="Director's Photo"
              className="relative w-full h-auto rounded-xl border-4 border-white shadow-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={
            isMessageVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
          }
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="bg-gray-50/80 p-6 rounded-lg border-l-4 border-main shadow-sm mb-6">
            <p className="text-title-2 text-gray-700 italic">
              We are delighted to invite your esteemed organization to
              participate in our campus recruitment program for the upcoming
              placement season. IIIT Dharwad, an Institute of National
              Importance established by the Ministry of Education, Government of
              India, is committed to producing highly skilled professionals in
              Information Technology and allied areas like Artificial
              Intelligence and Data Science. IIIT Dharwad offers BTech in
              Computer Science and Engineering, Data Science and Artificial
              Intelligence, and Electronics and Communication Engineering. It
              will in turn contribute by offering academic and research programs
              in information technology, computer science, data science and
              artificial intelligence and electronics and communication areas.
              IIIT Dharwad will go all out to establish industryacademia and
              national and international academic collaborations.
            </p>
          </div>

          <p className="text-title-3 text-gray-700 mb-6">
            Our institute boasts a diverse pool of talented students who have
            undergone rigorous academic training and practical exposure in
            various domains such as Computer Science, Data Science, Artificial
            Intelligence, Electronics and Communication and more. The curriculum
            at IIIT Dharwad is designed to foster innovation, critical thinking,
            research, and problem-solving skills, ensuring our graduates are
            well-equipped to meet the dynamic demands of the industry. We
            believe that our students can significantly contribute to the growth
            and success of your organization. By participating in our campus
            recruitment process, you will have the opportunity to interact with
            and recruit some of the brightest minds in the country. We offer a
            streamlined and efficient placement process and a dedicated
            placement team to ensure a smooth and productive recruitment
            experience under the aegis of Career Guidance Cell (CGC). The CGC is
            managed by a group of faculty members, staff and students. We look
            forward to a mutually beneficial relationship and are excited about
            the possibility of our students contributing to your esteemed
            organization. Please feel free to reach out to our Placement Office
            at “cgcoffice@iiitdwd.ac.in” and “cgc@iiitdwd.ac.in” for any further
            information or assistance. On behalf of the CGC team and the entire
            IIIT Dharwad, I look forward to welcoming you and your team for a
            successful and long-lasting engagement between the two
            organizations.
          </p>

          <div className="flex flex-col items-end">
            <h3 className="text-title-1 font-semibold">
              Dr. S. R. Mahadeva Prasanna
            </h3>
            <p className="text-title-3 text-gray-600">Director, IIIT Dharwad</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DirectorsMessage;
