// File: mou-data.ts
export type MoU = {
  id: number;
  name: string;
  year: number;
  overview: string;
  partners: string[];
};

export const mouData: MoU[] = [
  {
    id: 1,
    name: 'IIIT Dharwad and YourDost Health Solutions Pvt. Ltd.',
    year: 2024,
    overview:
      'To provide psychological and emotional support to the Students and Staff of IIIT Dharwad, Counselor availability in campus',
    partners: ['YourDost', 'IIIT Dharwad']
  },
  {
    id: 2,
    name: 'UNDERTAKING SKILL DEVELOPMENT TRAINING IN EMERGING TECHNOLOGIES',
    year: 2024,
    overview:
      'The objective of this MoU is to undertake relevant skills upgradation via training program/s in the emerging technologies for the candidates/ students & faculty/ staff of Indian Institute of Information Technology Dharwad. To encourage any-time, any-where, continuous self-paced learning for acquiring newer and industry relevant skill sets, build digital fluency on emerging technologies & professional skills through the availability of byte sized micro learning content.',
    partners: ['IIIT Dharwad', 'NASSCOM / IT-ITeS SECTOR SKILLS COUNCIL']
  },
  {
    id: 3,
    name: 'Certification Program in IT (CPIT)',
    year: 2023,
    overview:
      'The Objective of the MoU is to enable, empower, accelerate marginalized youth (10th class pass) towards stable technology enabled livelihoods',
    partners: ['IIIT Dharwad', 'LTI Mindtree', 'Edunet']
  },
  {
    id: 4,
    name: '5G Use case Lab',
    year: 2024,
    overview:
      'To setup 5G usecase lab and provide maintenance and services in coordination with Dept.of Telecommunication',
    partners: [
      'IIIT Dharwad',
      'Telecommunications Consultants Indian Limited (TCIL)'
    ]
  },
  {
    id: 5,
    name: 'IIIT Dharwad and Aequs Pvt. Ltd.',
    year: 2024,
    overview: 'Not provided',
    partners: ['IIIT Dharwad', 'Aequs Pvt. Ltd.']
  },
  {
    id: 6,
    name: 'IIIT Dharwad and Karnataka State Rural Development and Panchayat Raj University (KSRDPUR)',
    year: 2024,
    overview: 'Not provided',
    partners: [
      'IIIT Dharwad',
      'Karnataka State Rural Development and Panchayat Raj University (KSRDPUR)'
    ]
  },
  {
    id: 7,
    name: 'IIIT Dharwad and IIT Dharwad',
    year: 2024,
    overview: 'Not provided',
    partners: ['IIIT Dharwad', 'IIT Dharwad']
  },
  {
    id: 8,
    name: 'IIIT Dharwad and Siddaganga Institute of Technology (SIT) Tumakuru',
    year: 2024,
    overview: 'Not provided',
    partners: [
      'IIIT Dharwad',
      'Siddaganga Institute of Technology (SIT) Tumakuru'
    ]
  },
  {
    id: 9,
    name: 'MoU was signed between IIIT Dharwad and KLE Technological University, Hubballi on 09/07/2024',
    year: 2024,
    overview: 'Not provided',
    partners: ['IIIT Dharwad', 'KLE Technological University, Hubballi']
  }
];
