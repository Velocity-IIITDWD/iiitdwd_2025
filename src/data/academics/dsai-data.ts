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

// Define type for the entire B.Tech DSAI program structure
export interface BTechDSAIProgram {
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
const bTechDSAIProgramData: BTechDSAIProgram = {
  name: 'Data Science and Artificial Intelligence',
  description:
    'The Department of Data Science and Artificial Intelligence offers a unique interdisciplinary program that combines computer science, mathematics, and domain-specific knowledge. Students gain expertise in data analytics, machine learning, and AI applications.',
  hod: 'Dr. Siddharth R',
  hod_image: 'https://www.iiitdwd.ac.in//images/Dr.SiddharthR.jpg',
  email: 'siddharth_r@iiitdwd.ac.in',
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
      name: 'Humanities and Social Sciences',
      credits: 10.5,
      percentageOfTotal: 7.5,
      recommendedPercentage: 8
    },
    {
      name: 'Innovation and Entrepreneurship',
      credits: 10.5,
      percentageOfTotal: 7.5,
      recommendedPercentage: 8
    }
  ],
  disciplineCoreCourses: [
    { id: 1, name: 'Data Curation Techniques', credits: 3, semester: 2 },
    { id: 2, name: 'Statistical Programming', credits: 2, semester: 3 },
    { id: 3, name: 'Data Handling and Visualization', credits: 3, semester: 3 },
    { id: 4, name: 'Artificial Intelligence', credits: 4, semester: 3 },
    { id: 5, name: 'Machine Learning', credits: 4, semester: 3 },
    {
      id: 6,
      name: 'Database Management and Warehousing',
      credits: 4,
      semester: 4
    },
    { id: 7, name: 'Data Security and Privacy', credits: 4, semester: 4 },
    { id: 8, name: 'Big Data Analytics', credits: 4, semester: 4 },
    { id: 9, name: 'Deep Learning', credits: 4, semester: 4 }
  ],
  disciplineElectiveCourses: [
    { id: 1, name: 'Financial Data Analytics', credits: 3 },
    { id: 2, name: 'Numerical Methods in Finance', credits: 3 },
    { id: 3, name: 'Computational Financial Modelling', credits: 3 },
    { id: 4, name: 'Cloud Computing', credits: 3 },
    { id: 5, name: 'Time-series Analysis', credits: 3 },
    { id: 6, name: 'Internet of Things', credits: 3 },
    { id: 7, name: 'AI Systems SDLC', credits: 3 },
    { id: 8, name: 'Distributed AI Systems', credits: 3 },
    {
      id: 9,
      name: 'Signal Processing for Data Science and Machine Learning',
      credits: 3
    },
    { id: 10, name: 'Systems Engineering Approaches to AI', credits: 3 },
    { id: 11, name: 'Bioinformatics', credits: 3 },
    { id: 12, name: 'Healthcare Data Analytics', credits: 3 },
    { id: 13, name: 'Computational Biology', credits: 3 },
    { id: 14, name: 'Biomedical Image and Signal Proc.', credits: 3 },
    { id: 15, name: 'Human-Computer Interaction', credits: 3 },
    { id: 16, name: 'Advanced Deep Learning', credits: 3 },
    { id: 17, name: 'Generative AI', credits: 3 },
    { id: 18, name: 'Deep Speech Processing', credits: 3 },
    { id: 19, name: 'Reinforcement Learning', credits: 3 },
    { id: 20, name: 'Small Language Models', credits: 3 }
  ],
  engineeringCoreCourses: [
    {
      id: 1,
      name: 'Problem Solving through Programming',
      credits: 4,
      semester: 1
    },
    { id: 2, name: 'Digital Design', credits: 2, semester: 1 },
    { id: 3, name: 'Introduction to DS and AI', credits: 2, semester: 1 },
    { id: 4, name: 'Data Structures and Algorithms', credits: 4, semester: 2 },
    { id: 5, name: 'Computer Architecture', credits: 2, semester: 2 }
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
        { name: 'Statistics', credit: 2 },
        { name: 'Introduction to DS and AI', credit: 2 },
        { name: 'Open elective I', credit: 2 },
        { name: 'Probability', credit: 2 },
        { name: 'Digital Design', credit: 2 },
        { name: 'Problem Solving through Programming', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 17
    },
    {
      semester: 2,
      courses: [
        { name: 'Optimization', credit: 2 },
        { name: 'Computer architecture', credit: 2 },
        { name: 'Open elective II', credit: 2 },
        { name: 'Linear Algebra', credit: 2 },
        { name: 'Data Curation Techniques', credit: 3 },
        { name: 'Data Structures and Algorithms', credit: 4 },
        { name: 'HSS / I&E', credit: 3 }
      ],
      totalCredits: 18
    },
    {
      semester: 3,
      courses: [
        { name: 'Multivariable Calculus', credit: 2 },
        { name: 'Differential Equations', credit: 2 },
        { name: 'HSS/IE', credit: 3 },
        { name: 'Open Elective-III', credit: 2 },
        { name: 'Statistical Programming', credit: 2 },
        { name: 'Data Handling and Visualization', credit: 3 },
        { name: 'Artificial Intelligence', credit: 4 },
        { name: 'Machine Learning', credit: 4 }
      ],
      totalCredits: 22
    },
    {
      semester: 4,
      courses: [
        { name: 'HSS/IE', credit: 3 },
        { name: 'Open Elective-IV', credit: 2 },
        { name: 'Data Security and Privacy', credit: 4 },
        { name: 'Big Data Analytics', credit: 4 },
        { name: 'Database Management and Warehousing', credit: 4 },
        { name: 'Deep Learning', credit: 4 }
      ],
      totalCredits: 21
    },
    {
      semester: 5,
      courses: [
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Discipline Elective-I', credit: 3 },
        { name: 'Discipline Elective-II', credit: 4 },
        { name: 'Discipline Elective-III', credit: 4 },
        {
          name: 'Open Elective-V/Development Projects/ R&D Projects',
          credit: 4
        },
        {
          name: 'Open Elective-VI/Development Projects/ R&D Projects',
          credit: 4
        }
      ],
      totalCredits: 22
    },
    {
      semester: 6,
      courses: [
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Discipline Elective-IV', credit: 3 },
        { name: 'Discipline Elective-V', credit: 3 },
        { name: 'Discipline Elective-VI', credit: 4 },
        {
          name: 'Open Elective-VII/Development Projects/ R&D Projects',
          credit: 4
        },
        {
          name: 'Open Elective-VIII/Development Projects/ R&D Projects',
          credit: 4
        }
      ],
      totalCredits: 21
    },
    {
      semester: 7,
      courses: [
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        {
          name: 'Open Elective-IX/Development Projects/ R&D Projects',
          credit: 4
        },
        {
          name: 'Open Elective-X/Development Projects/ R&D Projects',
          credit: 4
        }
      ],
      totalCredits: 11
    },
    {
      semester: 8,
      courses: [{ name: 'Electives/Major Project', credit: 8 }],
      totalCredits: 8
    }
  ]
};

export default bTechDSAIProgramData;
