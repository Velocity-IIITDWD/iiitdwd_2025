// projects.ts

export interface Project {
  id: number;
  title: string;
  year: string;
  facultyInCharge: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BEL-CRL Project',
    year: '2019-2020',
    facultyInCharge: 'Dr. Deepak KT'
  },
  {
    id: 2,
    title: 'Tribal Speech to Speech Translation',
    year: '2021-22',
    facultyInCharge: 'Dr. Deepak KT'
  },
  {
    id: 3,
    title: 'Tihan Project',
    year: '2021-22',
    facultyInCharge: 'Dr. Deepak KT'
  },
  {
    id: 4,
    title:
      'NLTM National language translation Mission Project speaker recognition',
    year: '2022-23',
    facultyInCharge: 'Dr. Deepak KT, Rajib Sharma'
  },
  {
    id: 5,
    title:
      'Development of Mobile Application for detecting Tridoshas (Pitta, Vata, Kapha) and personality traits from voice.',
    year: '2022-2024',
    facultyInCharge:
      'Dr. Manjunath K Vanahalli and Dr. Nataraj K S, Dr. Chinmayananda (Collaborator)'
  },
  {
    id: 6,
    title: 'Drone and UAV facility',
    year: '2021-2022',
    facultyInCharge: 'Dr. Pavankumar'
  },
  {
    id: 7,
    title:
      'Detecting Textual Entities with Representational mining on Big Temporal Knowledge Graphs of Ancient Literature and Social Media Data',
    year: '2023-2025',
    facultyInCharge: 'Dr. Animesh Chaturvedi, Dr. Vivekraj VK'
  },
  {
    id: 8,
    title: 'Vedic Analytics on Big Textual Data of Ancient Indian Scriptures',
    year: '2022-2023',
    facultyInCharge: 'Dr. Animesh Chaturvedi, Dr. Vivekraj VK'
  },
  {
    id: 9,
    title: 'Textual Data Analytics',
    year: '2023-2024',
    facultyInCharge: 'Dr. Animesh Chaturvedi'
  },
  {
    id: 10,
    title:
      'SERB CRG Deep Learning Model for Autonomous Navigation on Indian Roads',
    year: '2023-2026',
    facultyInCharge: 'Dr. Jagadish D.N., Dr. Lakshman Mahto'
  },
  {
    id: 11,
    title:
      'Study and Analysis of Sound in Indian Knowledge Systems and Modern Sciene',
    year: '2023-2024',
    facultyInCharge: 'Chinmayananda A, Nataraj K S'
  },
  {
    id: 12,
    title: 'Enhancing the Security of SELinux/SEAndroid Policies',
    year: '2023-2025',
    facultyInCharge: 'Dr. Radhika B S and Dr. Rajendra Hegadi'
  },
  {
    id: 13,
    title:
      'SERB IMPRINT IIC.2 Standalone Domain Specific Speech to Speech translator for English, Hindi and Tamil Languages.',
    year: '2023-2026',
    facultyInCharge: 'Dr. Deepak KT and Dr. Sunil Saumya'
  },
  {
    id: 14,
    title:
      '5G usecase lab at IIIT Dharwad [sponsored by Dept.of Telecommunication]',
    year: '2023',
    facultyInCharge: 'Jagadeesha R B'
  },
  {
    id: 15,
    title:
      'Design of Index Codes for Relay-based Index Coding Problems (SRG,SERB)',
    year: '2023-24',
    facultyInCharge: 'Dr. Chinmayananda A'
  },
  {
    id: 16,
    title: 'Large Language Models for Legal Assistance',
    year: '2025-26',
    facultyInCharge: 'Dr. Sunil Saumya and Dr. Pavan Kumar C'
  },
  {
    id: 17,
    title:
      'Generative AI - Powered Interactive Support For Banking & Insurance Services In Hindi & Kannada Regional Languages',
    year: '2025-27',
    facultyInCharge: 'Dr. Deepak K T and Dr. Sunil Saumya'
  },
  {
    id: 18,
    title:
      'Machine Learning based marine species classification from unconstrained underwater images.',
    year: '2024-27',
    facultyInCharge: 'Dr Girish G N'
  }
];

export default projects;
