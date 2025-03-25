import { ReactNode } from 'react';

interface AboutSection {
  title: string;
  heading: string;
  content: ReactNode;
}

const aboutPageSections: AboutSection[] = [
  {
    title: 'Key Achievements and Recognitions',
    heading: 'Achievements',
    content: (
      <ul className="list-[square] pl-4">
        <li className="mb-4">
          Recognized as an Institute of National Importance
        </li>
        <li className="mb-4">
          Located in the educational hub of Hubballi-Dharwad
        </li>
        <li className="mb-4">
          Active collaborations with industry leaders and academic institutions
        </li>
      </ul>
    )
  },
  {
    title: 'Explore IIIT Dharwad',
    heading: 'Explore',
    content: (
      <>
        <p>IIIT Dharwad is led by a team of experienced professionals:</p>
        <ul className="list-[square] pl-4 mt-3">
          <li className="mb-4">Director: Dr. Prasana Mahadev</li>
          <li className="mb-4">Key Administrative Personnel</li>
        </ul>
        <p>
          Learn about our history, milestones, and commitment to diversity and
          inclusion.
        </p>
      </>
    )
  },
  {
    title: 'Academic Programs',
    heading: 'Programs',
    content: (
      <ul className="list-[square] pl-4">
        <li className="mb-3">
          <strong>B.Tech in Computer Science & Engineering:</strong> Focus on
          computing, software development, and systems design.
        </li>
        <li className="mb-3">
          <strong>B.Tech in Electronics & Communication Engineering:</strong>{' '}
          Emphasis on electronic systems, communication technologies, and signal
          processing.
        </li>
        <li className="mb-3 ">
          <strong>B.Tech in Data Science & AI:</strong> Specialization in data
          analytics, machine learning, and AI applications.
        </li>
      </ul>
    )
  },
  {
    title: 'Research and Development',
    heading: 'Research',
    content: (
      <>
        <p>
          IIIT Dharwad fosters innovation through cutting-edge research in
          various domains:
        </p>
        <ul className="list-[square] pl-4">
          <li className="mb-3">
            Ongoing projects in AI, cybersecurity, and IoT.
          </li>
          <li className="mb-3">
            Dedicated research centers and state-of-the-art laboratories.
          </li>
          <li className="mb-3">
            Collaboration with top universities and industries.
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Campus Life',
    heading: 'Life @ IIITDWD',
    content: (
      <>
        <p>
          Our students enjoy a vibrant campus experience with numerous
          opportunities for personal and professional growth.
        </p>
        <ul className="list-[square] pl-4">
          <li className="mb-3">Student clubs and organizations</li>
          <li className="mb-3">Annual technical and cultural fests</li>
          <li className="mb-3">
            Modern facilities including hostels, libraries, and sports complexes
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Industry Collaborations and Initiatives',
    heading: 'Collaborations',
    content: (
      <>
        <p>
          IIIT Dharwad partners with industry leaders to enhance academic and
          research opportunities:
        </p>
        <ul className="list-[square] pl-4">
          <li className="mb-3">Upcoming tech park with startup incubation.</li>
          <li className="mb-3">
            Internship and placement programs with top IT firms.
          </li>
          <li className="mb-3">
            Joint research initiatives with leading technology companies.
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Call to Action',
    heading: 'Get Involved',
    content: (
      <>
        <p>Ready to be a part of IIIT Dharwad?</p>
        <ul className="list-[square] pl-4">
          <li className="mb-3">
            <strong>Admissions:</strong> Learn about eligibility and application
            processes.
          </li>
          <li className="mb-3">
            <strong>Campus Tour:</strong> Schedule a visit or explore our
            virtual tour.
          </li>
          <li className="mb-3">
            <strong>Contact Us:</strong> Reach out for more details and
            inquiries.
          </li>
        </ul>
      </>
    )
  }
];

export default aboutPageSections;

export const carouselData = [
  {
    title: 'Vision',
    content: (
      <p className="text-xs md:text-sm">
        To be a globally renowned academy of information technology for societal
        development.
      </p>
    )
  },
  {
    title: 'Our Mission',
    content: (
      <div className="flex flex-col gap-3 text-xs md:text-sm">
        <p>
          To produce globally competent information technology professionals
          with the right mix of professional skills and ethical, societal and
          environmental concerns.
        </p>
        <p>
          To solve local problems using global technologies and solve global
          problems using local technologies across disciplines.
        </p>
        <p>
          To project the nation to the forefront of information technology
          research and development.
        </p>
      </div>
    )
  },
  {
    title: 'Core Values',
    content: (
      <ul className="text-xs md:text-sm flex flex-col gap-2 items-center ">
        <li className="border rounded-full px-4 w-full py-1">Integrity</li>
        <li className="border rounded-full px-4 w-full py-1">Service</li>
        <li className="border rounded-full px-4 w-full py-1">Positivity</li>
        <li className="border rounded-full px-4 w-full py-1">
          Commitment and Passion for Technology
        </li>
      </ul>
    )
  }
];
