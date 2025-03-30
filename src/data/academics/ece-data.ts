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

// Define type for the entire B.Tech ECE program structure
export interface BTechECEProgram {
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
const bTechECEProgramData: BTechECEProgram = {
  name: 'Electronics and Communication Engineering',
  description:
    'The Department of Electronics and Communication Engineering provides strong foundations in circuit design, signal processing, communications, and embedded systems. The curriculum emphasizes both theoretical concepts and hands-on laboratory experience.',
  hod: 'Dr. Sibasankar Padhy',
  hod_image: 'https://www.iiitdwd.ac.in//images/Dr.SibasankarPadhy.jpg',
  email: 'sibasankar@iiitdwd.ac.in',
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
      name: 'Math and Stats',
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
      name: 'Open Elective',
      credits: 40,
      percentageOfTotal: 28.6,
      recommendedPercentage: 27
    },
    {
      name: 'Projects',
      credits: 0,
      percentageOfTotal: 0,
      recommendedPercentage: 0
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
    { id: 1, name: 'Network Analysis', credits: 3, semester: 2 },
    { id: 2, name: 'Random Process', credits: 2, semester: 3 },
    { id: 3, name: 'Signals & Systems', credits: 3, semester: 3 },
    { id: 4, name: 'Semiconductor Devices', credits: 2, semester: 3 },
    { id: 5, name: 'Analog Electronic Circuits', credits: 2, semester: 3 },
    { id: 6, name: 'Machine Learning', credits: 4, semester: 3 },
    {
      id: 7,
      name: 'Analog and Digital Communication',
      credits: 3,
      semester: 4
    },
    { id: 8, name: 'Introduction to VLSI Design', credits: 4, semester: 4 },
    { id: 9, name: 'Linear Integrated Circuits', credits: 2, semester: 4 },
    { id: 10, name: 'Control System', credits: 2, semester: 4 },
    { id: 11, name: 'Digital Signal Processing', credits: 2, semester: 4 },
    { id: 12, name: 'Embedded System Design', credits: 3, semester: 4 }
  ],
  disciplineElectiveCourses: [
    { id: 1, name: 'Analog & Mixed Signal Design', credits: 3 },
    { id: 2, name: 'RF IC Design', credits: 3 },
    { id: 3, name: 'Digital System Design', credits: 3 },
    { id: 4, name: 'System on Chip (SoC)', credits: 3 },
    { id: 5, name: 'Low Power VLSI Design', credits: 3 },
    { id: 6, name: 'VLSI Testing & Verification', credits: 3 },
    { id: 7, name: 'Memory Design and Testing', credits: 3 },
    { id: 8, name: 'Electromagnetic Field and Waves', credits: 3 },
    { id: 9, name: 'Antenna & Microwave Engineering', credits: 3 },
    { id: 10, name: 'Wireless Communication', credits: 3 },
    { id: 11, name: '5G and Beyond Systems', credits: 3 },
    { id: 12, name: 'Wireless Networks', credits: 3 },
    { id: 13, name: 'Information Theory Coding', credits: 3 },
    { id: 14, name: 'Queueing Theory and Applications', credits: 3 },
    { id: 15, name: 'Optical Communication', credits: 3 },
    { id: 16, name: 'Advanced Embedded Systems', credits: 3 },
    { id: 17, name: 'Real Time Systems', credits: 3 },
    { id: 18, name: 'Embedded AI', credits: 3 },
    { id: 19, name: 'DSP Processors', credits: 3 },
    { id: 20, name: 'Hardware-Software Co-Design', credits: 3 },
    { id: 21, name: 'Robotics', credits: 3 },
    {
      id: 22,
      name: 'State space Approach to Control System Analysis and Design',
      credits: 3
    },
    { id: 23, name: 'Biomedical Signal & Image Processing', credits: 3 },
    { id: 24, name: 'Statistical Signal Processing', credits: 3 },
    { id: 25, name: 'Speech Processing', credits: 3 },
    { id: 26, name: 'Deep Learning', credits: 3 },
    { id: 27, name: 'Reinforcement Learning', credits: 3 },
    { id: 28, name: 'Advanced DSP', credits: 3 },
    { id: 29, name: 'Detection and Estimation Theory', credits: 3 },
    {
      id: 30,
      name: 'Image Processing/Video Processing/Computer Vision',
      credits: 3
    }
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
        { name: 'Open Elective-I', credit: 2 },
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Problem Solving through Programming', credit: 4 },
        { name: 'Digital Design', credit: 2 },
        { name: 'Introduction to DS and AI', credit: 2 }
      ],
      totalCredits: 17
    },
    {
      semester: 2,
      courses: [
        { name: 'Linear Algebra', credit: 2 },
        { name: 'Optimization', credit: 2 },
        { name: 'Open Elective-II', credit: 2 },
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Data Structures and Algorithms', credit: 4 },
        { name: 'Computer Architecture', credit: 2 },
        { name: 'Network Analysis', credit: 3 }
      ],
      totalCredits: 18
    },
    {
      semester: 3,
      courses: [
        { name: 'Multivariate Calculus', credit: 2 },
        { name: 'Differential Equations', credit: 2 },
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Open Elective-III', credit: 2 },
        { name: 'Random Process', credit: 2 },
        { name: 'Signals & Systems', credit: 3 },
        { name: 'Semiconductor Devices', credit: 2 },
        { name: 'Analog Electronics Circuits', credit: 2 },
        { name: 'Machine Learning', credit: 4 }
      ],
      totalCredits: 22
    },
    {
      semester: 4,
      courses: [
        { name: 'HSS/Innovation & Entrepreneurship', credit: 3 },
        { name: 'Open Elective-IV', credit: 2 },
        { name: 'Analog and Digital Communication', credit: 3 },
        { name: 'Introduction to VLSI Design', credit: 4 },
        { name: 'Linear Integrated Circuits', credit: 2 },
        { name: 'Control System', credit: 2 },
        { name: 'Digital Signal Processing', credit: 2 },
        { name: 'Embedded System Design', credit: 3 }
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
          name: 'Open Elective-VI//Development Projects/ R&D Projects',
          credit: 4
        },
        {
          name: 'Open Elective-VII//Development Projects/ R&D Projects',
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
          name: 'Open Elective-VIII/Development Projects/ R&D Projects',
          credit: 4
        },
        {
          name: 'Open Elective-IX//Development Projects/ R&D Projects',
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
          name: 'Open Elective-X/Development Projects/ R&D Projects',
          credit: 4
        },
        { name: 'Open Elective-XI', credit: 4 }
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

export default bTechECEProgramData;
