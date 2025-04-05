// industryProjects.ts

export interface IndustryProject {
  id: number;
  title: string;
  year: string;
  facultyInCharge: string;
}

export const industryProjects: IndustryProject[] = [
  {
    id: 1,
    title: 'Armsoftec Project',
    year: '2019-2020',
    facultyInCharge: 'Dr. Deepak KT'
  },
  {
    id: 2,
    title: 'Design a high level architecture for state healthcare applications',
    year: '2019-2020',
    facultyInCharge: 'Prof. Kavi Mahesh, Dr. Rajendra Hegadi, Dr. Deepak K T'
  },
  {
    id: 3,
    title: 'Armsoftec Project',
    year: '2020-21',
    facultyInCharge: ''
  },
  {
    id: 4,
    title:
      'Developing a High-Level Architecture for State Healthcare Applications and identification of healthcare centres',
    year: '2020-21',
    facultyInCharge:
      'Prof. Kavi Mahesh, Dr. Rajendra Hegadi, Dr. Deepak K T, Dr. Manjunath K Vanahalli and Mr. Abhilash CB'
  },
  {
    id: 5,
    title: 'Armsoftec Project',
    year: '2021-22',
    facultyInCharge: ''
  },
  {
    id: 6,
    title:
      'Designing a High-Level Architecture for State Healthcare and Telemedicine Applications with Emphasis on Interoperability',
    year: '2021-22',
    facultyInCharge:
      'Prof. Kavi Mahesh, Dr. Rajendra Hegadi, Dr. Deepak K T and Dr. Manjunath K Vanahalli'
  },
  {
    id: 7,
    title: 'HAL Institutional Module Project 2022- 2023',
    year: '2022-23',
    facultyInCharge: 'Dr. Manjunath, Dr. Prabhu Prasad, and Dr. Sunil Saumya'
  },
  {
    id: 8,
    title: 'Cybershikshaa ( Microsoft, DSCI and IIIT Dharwad)',
    year: '',
    facultyInCharge: 'Dr. Rajendra Hegadi, Dr. Pavan Kumar C, Dr. Malay Kumar'
  },
  {
    id: 9,
    title: 'CPIT- LTI Mindtree and Edunet',
    year: '2023',
    facultyInCharge:
      'Director, Prof. C.B.Akki, Dr. Rajendra Hegadi, Dr. Pava Kumar C.'
  },
  {
    id: 10,
    title: 'HAL Institutional Module Project 2024 - 2025',
    year: '2024-2025',
    facultyInCharge:
      'Dr. Manjunath K Vanahalli, Dr. Prabhu Prasad and Dr. Anand P Barangi'
  },
  {
    id: 11,
    title: 'HAL Data Analytics and Cybersecurity Module Project',
    year: '2021-2023',
    facultyInCharge: 'Dr. Manjunath K Vanahalli'
  },
  {
    id: 12,
    title: 'AICTE- QIP- PG Certificate in Cybersecurity',
    year: '2024',
    facultyInCharge:
      'Dr. Rajendra Hegadi, Suvadip Hazra, Dr. Pavan Kumar C, Dr. Malay Kumar'
  }
];

export default industryProjects;
