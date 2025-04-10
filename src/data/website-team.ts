export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const data: TeamMember[] = [
  {
    id: 'pratik',
    name: 'Pratik Pakhale',
    role: 'Lead',
    bio: 'Web Enthusiast',
    skills: ['Infra', 'JS', 'Python', 'Go'],
    image: 'https://iiitdwd.ac.in/images/pratik-pakhale.webp',
    social: {
      twitter: 'https://twitter.com/_pratikpakhale',
      github: 'https://github.com/pratikpakhale',
      linkedin: 'https://linkedin.com/in/pratikpakhale',
      email: 'pratikpakhale20@gmail.com'
    }
  },

  {
    id: 'nikhil',
    name: 'Nikhil Karthik',
    role: 'Tead',
    bio: '',
    skills: ['Web', 'Frontend'],
    image: 'https://iiitdwd.ac.in/images/nikhil-karthik.jpg',
    social: {}
  },
  {
    id: 'shreyansh',
    name: 'Shreyansh Tiwari',
    role: 'Member',
    bio: '',
    skills: ['NextJS'],
    image: 'https://iiitdwd.ac.in/images/shreyansh-tiwari.jpeg',
    social: {}
  },
  {
    id: 'ashith',
    name: 'Ashith Shetty',
    role: 'Member',
    bio: '',
    skills: ['NextJS'],
    image: 'https://iiitdwd.ac.in/images/ashith-shetty.jpg',
    social: {}
  },
  {
    id: 'ashitosh',
    name: 'Ashitosh Sable',
    role: 'Member',
    bio: 'Contributor',
    skills: ['UI'],
    image: 'https://iiitdwd.ac.in/images/ashitosh-sable.jpg',
    social: {}
  }
];
