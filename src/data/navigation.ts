import { NavigationItem } from '@/types/navigation';

const navigationData: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
    items: []
  },
  {
    title: 'Institute',
    href: '#',
    items: [
      {
        title: 'About Us',
        href: '/about',
        meta: { disableLayout: true }
      },
      {
        title: 'Campus',
        href: '/institute/campus',
        items: [
          { title: 'How to reach', href: '/how-to-reach' },
          {
            title: 'Amenities',
            href: '/amenities'
          }
          // { title: 'Video of campus', href: '/campus-video' }
        ]
      },
      { title: 'Events / Awards', href: '/events' },
      { title: 'Contact', href: '/contact' },
      {
        title: 'Careers',
        href: '/careers'
      },
      { title: 'Tenders', href: '/tenders' }
    ]
  },
  {
    title: 'Admissions',
    href: '/admission',
    meta: { disableLayout: true },
    items: [
      {
        title: 'B.Tech',
        href: '/admission/btech'
      },
      {
        title: 'M.Tech',
        href: '/admission/m-tech'
      },
      {
        title: 'Phd',
        href: '/admission/phd'
      },
      {
        title: 'Fees',
        href: '/docs/Fee_Structure_2025-26.pdf'
      }
    ]
  },
  {
    title: 'Administration',
    href: '#',
    items: [
      { title: 'Visitor', href: '/visitor' },
      { title: 'Chairperson', href: '/chairperson' },
      {
        title: 'Board of Governors',
        href: '/governing-bodies/board'
      },
      { title: 'Director', href: '/director' },
      { title: 'The Senate', href: '/governing-bodies/senate' },
      { title: 'Finance Committee', href: '/governing-bodies/financial' },
      {
        title: 'Building & Works Committee',
        href: '/governing-bodies/building'
      },
      { title: 'Deans / PiC', href: '/deans' },
      { title: 'Registrar', href: '/registrar' },
      { title: 'Head of Departments', href: '/hods' },
      {
        title: 'Faculty in Charge',
        href: '/faculty-in-charge'
      },
      { title: 'Staff', href: '/staff' },
      {
        title: 'Career Guidance Cell',
        href: '/cgc',
        meta: { disableLayout: false }
      },
      {
        title: 'Public disclosures',
        href: '/disclosures',
        items: [
          { title: 'RTI', href: '/docs/RTI.pdf' },
          {
            title: 'IIIT PPP Act',
            href: '/docs/iiit_ppp_2017.pdf'
          },
          {
            title: 'ARIIA',
            href: '/docs/ARIIA.pdf'
          },
          {
            title: 'ICC Committee',
            href: '/docs/ICC_committee.pdf'
          },
          {
            title: 'Sexual Harassment Act',
            href: '/docs/sexual-harrassment-of-women-act-and-rules-2013.pdf'
          },
          {
            title: 'IIIT Dharwad Statutes',
            href: '/docs/IIIT_Dharwad_statutes.pdf'
          }
        ]
      }
    ]
  },
  {
    title: 'Academics',
    href: '#',
    items: [
      { title: 'Programmes', href: '/academics/programmes' },
      // { title: 'Calendar', href: '/academics/calendar' },
      { title: 'Departments', href: '/academics/departments' },
      {
        title: 'Faculty',
        href: '/academics/faculty',
        meta: { disableLayout: false }
      },
      { title: 'Research', href: '/academics/research' },
      // {
      //   title: 'Curriculum',
      //   href: '/docs/Curricula_16May23.pdf'
      // },
      {
        title: 'Convocation',
        href: '#',
        items: [
          {
            title: '2nd Convocation',
            href: 'https://youtu.be/85AIdBqqDWQ?si=XfqUQoEIUZ0REW1u'
          },
          {
            title: '3rd Convocation',
            href: 'https://youtu.be/GzB2favRmds?si=m_2dUSQtPONcg85N'
          },
          {
            title: '4th Convocation',
            href: 'https://www.youtube.com/live/SdLfdDpaHQ4?si=UbMPvcgaRwv1lLWN'
          },
          {
            title: '5th Convocation',
            href: 'https://www.youtube.com/live/coH5br8K1B8?si=pFCzKllRV3LA-xWt'
          },
          {
            title: '6th Convocation',
            href: 'https://www.youtube.com/live/Sh5VyQxKQvk?si=Bvz_hVfB9lAw48xN'
          }
        ]
      },
      {
        title: 'Conclave',
        href: 'https://conclave.iiitdwd.ac.in'
      },
      { title: 'NIRF', href: '/academics/nirf' }
      // { title: 'Online', href: 'https://online.iiitdwd.ac.in/' }
    ]
  },
  {
    title: 'Student life',
    href: '#',
    items: [
      // {
      //   title: 'Overview',
      //   href: '/student-life/overview',
      //   meta: { disableLayout: true }
      // },
      // { title: 'Hostel', href: '/student-life/hostel' },
      {
        title: 'IIC and Clubs',
        href: '/student-life/clubs',
        items: [
          { title: 'Tech clubs', href: '/student-life/clubs/tech' },
          { title: 'Non Tech clubs', href: '/student-life/clubs/non-tech' },
          // { title: 'Sports club', href: '/student-life/clubs/sports' },
          { title: 'Cultural club', href: '/student-life/clubs/cultural' }
        ]
      },
      // { title: 'NSS', href: '/student-life/nss' },
      // { title: 'NCC', href: '/student-life/ncc' },
      // { title: 'Sports and games', href: '/student-life/sports' },
      {
        title: 'Anti ragging',
        href: '/docs/Anti_Ragging_Information.pdf'
      },
      {
        title: 'ICC Committee',
        href: '/docs/ICC_committee.pdf'
      },
      {
        title: 'Sexual Harassment Act',
        href: '/docs/sexual-harrassment-of-women-act-and-rules-2013.pdf'
      },
      {
        title: 'IIIT Dharwad Statutes',
        href: '/docs/IIIT_Dharwad_statutes.pdf'
      }
      // {
      //   title: 'Achievements',
      //   href: '/student-life/achievements'
      // }
    ]
  },
  {
    title: 'Career Guidance Cell',
    href: '/placements',
    items: [
      { title: 'Why Recruit Us?', href: '/placements/#why-recruit-us' },
      // { title: 'Placement Procedures', href: '/placements/procedures' },
      {
        title: 'Placement Brochure',
        href: '/docs/brochure_cgc.pdf'
      },
      {
        title: 'Placement Statistics',
        href: '/placements/#placement-statistics'
      },
      { title: 'Our Recruiters', href: '/placements/#previous-recruiters' },
      // { title: 'Batch Graduating 2025-26', href: '/placements/batch-2025-26' },
      // { title: 'Internships', href: '/placements/internships' },
      // { title: 'Industry Outreach', href: '/placements/industry-outreach' },
      // { title: 'Our Startups', href: '/placements/startups' },
      // { title: 'Startup Fair 2024', href: '/placements/startup-fair-2024' },
      { title: 'Higher Studies', href: '/placements/#higher-studies' },
      {
        title: 'Alumni Testimonials',
        href: '/alumni-testimonials'
      },
      { title: 'Contact T&P', href: '/placements/#contact' }
    ]
  },
  {
    title: 'Online',
    href: 'https://online.iiitdwd.ac.in'
  }
];

export default navigationData;
