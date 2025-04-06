// Define types for the course categories and courses
interface CourseCategory {
  name: string;
  credits: number;
  percentageOfTotal: number;
  recommendedPercentage: number;
}

interface Course {
  id: number;
  name: string;
  credits: number;
  semester?: number; // Semester is optional as it's not always applicable
}

interface SemesterCredit {
  semester: number;
  courses: { name: string; credit: number }[];
  totalCredits: number;
}

// Define type for the entire B.Tech CSE program structure
export interface BTechCSEProgram {
  name: string;
  description: string;
  hod: string;
  hod_image: string;
  email: string;
  courseCategories: CourseCategory[];
  disciplineCoreCourses: Course[];
  disciplineElectiveCourses: Course[];
  engineeringCoreCourses: Course[];
  mathsAndStatsCourses: Course[];
  openElectivesAndProjectsCredits: number;
  hssAndIECredits: number;
  totalCredits: number;
  SemesterData: SemesterCredit[];
}

// Data from the PDF
const bTechCSEProgramData: BTechCSEProgram = {
  name: 'Computer Science and Engineering',
  description:
    'The Department of Computer Science and Engineering offers comprehensive programs that blend theoretical foundations with practical applications. Students learn programming, algorithms, data structures, computer architecture, and specialized areas like artificial intelligence and machine learning.',
  hod: 'Dr. Prabhu Prasad B M',
  hod_image: 'https://www.iiitdwd.ac.in//images/Dr.PrabhuPrasadBM.png',
  email: 'prabhuprasad@iiitdwd.ac.in',
  courseCategories: [
    {
      name: 'Discipline core',
      credits: 32,
      percentageOfTotal: 22.9,
      recommendedPercentage: 23
    },
    {
      name: 'Engineering core',
      credits: 14,
      percentageOfTotal: 10.0,
      recommendedPercentage: 10
    },
    {
      name: 'Maths, Stats',
      credits: 12,
      percentageOfTotal: 8.6,
      recommendedPercentage: 10
    },
    {
      name: 'Discipline Elective',
      credits: 21,
      percentageOfTotal: 15.0,
      recommendedPercentage: 14
    },
    {
      name: 'Open elective / Projects',
      credits: 40,
      percentageOfTotal: 28.6,
      recommendedPercentage: 27
    },
    {
      name: 'Humanities and Social sciences',
      credits: 10.5,
      percentageOfTotal: 7.5,
      recommendedPercentage: 8
    },
    {
      name: 'Innovation and entrepreneurship',
      credits: 10.5,
      percentageOfTotal: 7.5,
      recommendedPercentage: 8
    }
  ],
  disciplineCoreCourses: [
    {
      id: 1,
      name: 'Mathematical foundations of Computing',
      credits: 3,
      semester: 2
    },
    { id: 2, name: 'Operating systems', credits: 2, semester: 3 },
    { id: 3, name: 'Systems and usable security', credits: 2, semester: 3 },
    { id: 4, name: 'Computer Networks', credits: 4, semester: 3 },
    {
      id: 5,
      name: 'Software design tools and techniques',
      credits: 3,
      semester: 3
    },
    { id: 6, name: 'Design & Analysis of Algorithms', credits: 4, semester: 3 },
    { id: 7, name: 'Software engineering', credits: 2, semester: 4 },
    { id: 8, name: 'DBMS', credits: 4, semester: 4 },
    { id: 9, name: 'Artificial Intelligence', credits: 4, semester: 4 },
    { id: 11, name: 'Theory of Computing', credits: 4, semester: 4 }
  ],
  disciplineElectiveCourses: [
    { id: 1, name: 'Machine learning', credits: 7 },
    { id: 2, name: 'Deep learning', credits: 8 },
    { id: 3, name: 'Computer Graphics', credits: 9 },
    { id: 4, name: 'Image Processing and Computer Vision', credits: 10 },
    { id: 5, name: 'Human computer interaction', credits: 11 },
    { id: 6, name: 'Deep Computer Vision', credits: 12 },
    { id: 7, name: 'Advanced Data Structures', credits: 3 },
    { id: 8, name: 'Cloud Computing', credits: 3 },
    { id: 9, name: 'Cyber Security', credits: 3 },
    { id: 10, name: 'Data Mining', credits: 3 },
    { id: 11, name: 'Distributed Systems', credits: 3 },
    { id: 12, name: 'Embedded Systems', credits: 3 },
    { id: 13, name: 'Game Development', credits: 3 },
    { id: 14, name: 'Information Retrieval', credits: 3 },
    { id: 15, name: 'Mobile Computing', credits: 3 },
    { id: 16, name: 'Natural Language Processing', credits: 3 },
    { id: 17, name: 'Parallel Computing', credits: 3 },
    { id: 18, name: 'Quantum Computing', credits: 3 },
    { id: 19, name: 'Robotics', credits: 3 },
    { id: 20, name: 'Software Testing', credits: 3 },
    { id: 21, name: 'Virtual Reality', credits: 3 },
    { id: 22, name: 'Web Development', credits: 3 }
  ],
  engineeringCoreCourses: [
    {
      id: 1,
      name: 'Problem Solving through Programming',
      credits: 4,
      semester: 1
    },
    { id: 2, name: 'Digital Design', credits: 2, semester: 1 },
    { id: 3, name: 'Computer Architecture', credits: 2, semester: 1 },
    { id: 4, name: 'Data Structures and Algorithms', credits: 4, semester: 2 },
    { id: 5, name: 'Introduction to DS and AI', credits: 2, semester: 1 }
  ],
  mathsAndStatsCourses: [
    { id: 1, name: 'Statistics', credits: 2, semester: 1 },
    { id: 2, name: 'Probability', credits: 2, semester: 1 },
    { id: 3, name: 'Linear Algebra', credits: 2, semester: 2 },
    { id: 4, name: 'Optimization', credits: 2, semester: 2 },
    { id: 5, name: 'Differential Equations', credits: 2, semester: 3 },
    { id: 6, name: 'Multivariate Calculus', credits: 2, semester: 3 }
  ],
  openElectivesAndProjectsCredits: 40,
  hssAndIECredits: 21,
  totalCredits: 140,
  SemesterData: [
    {
      semester: 1,
      courses: [
        { name: 'Probability', credit: 2 },
        { name: 'Statistics', credit: 2 },
        { name: 'Problem Solving through Programming', credit: 4 },
        { name: 'Digital Design', credit: 2 },
        { name: 'Open elective I', credit: 2 },
        { name: 'Introduction to DS and AI', credit: 2 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 17
    },
    {
      semester: 2,
      courses: [
        { name: 'Linear Algebra', credit: 2 },
        { name: 'Optimization', credit: 2 },
        { name: 'Data Structures and Algorithms', credit: 4 },
        { name: 'Computer architecture', credit: 2 },
        { name: 'Mathematical foundations of Computing', credit: 3 },
        { name: 'Open elective II', credit: 2 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 18
    },
    {
      semester: 3,
      courses: [
        { name: 'Differential Equations', credit: 2 },
        { name: 'Multivariate Calculus', credit: 2 },
        { name: 'Operating system', credit: 2 },
        { name: 'Software design tools and techniques', credit: 3 },
        { name: 'Design & Analysis of Algorithms', credit: 4 },
        { name: 'Computer Networks', credit: 4 },
        { name: 'Open elective III', credit: 2 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 22
    },
    {
      semester: 4,
      courses: [
        { name: 'Software Engineering', credit: 2 },
        { name: 'DBMS', credit: 4 },
        { name: 'Artificial Intelligence', credit: 4 },
        { name: 'Open elective IV', credit: 2 },
        { name: 'Systems and usable security', credit: 2 },
        { name: 'Theory of Computing', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 21
    },
    {
      semester: 5,
      courses: [
        { name: 'DE-I', credit: 4 },
        { name: 'DE-II', credit: 4 },
        { name: 'DE-III', credit: 3 },
        { name: 'Development project I / OE-V / R&D project', credit: 4 },
        { name: 'Development project II / OE-VI / R&D project', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 22
    },
    {
      semester: 6,
      courses: [
        { name: 'DE-IV', credit: 3 },
        { name: 'DE-V', credit: 3 },
        { name: 'DE-VI', credit: 4 },
        { name: 'Development project III / OE-VII / R&D project', credit: 4 },
        { name: 'Development project IV / OE-VIII / R&D project', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 21
    },
    {
      semester: 7,
      courses: [
        { name: 'R&D project / OE-IX', credit: 4 },
        { name: 'R&D project / OE-X', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 11
    },
    {
      semester: 8,
      courses: [
        { name: 'R&D project / OE-XI', credit: 4 },
        { name: 'OE-XII', credit: 4 }
      ],
      totalCredits: 8
    }
  ]
};

export default bTechCSEProgramData;
