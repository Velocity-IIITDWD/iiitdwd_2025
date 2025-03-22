import { NavigationItem } from '@/types/navigation';

const navigationData: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
    items: []
  },
  {
    title: 'Institute',
    href: '/institute',
    items: [
      {
        title: 'About Us',
        href: '/about',
        meta: { disableLayout: true }
      },
      { title: 'Admission', href: '/admission', meta: { disableLayout: true } },
      {
        title: 'Campus',
        href: '/institute/campus',
        items: [
          { title: 'Working hours', href: '/institute/campus/working-hours' },
          { title: 'How to reach', href: '/institute/campus/how-to-reach' },
          {
            title: 'Amenities / facilities',
            href: '/institute/campus/amenities'
          },
          { title: 'Video of campus', href: '/institute/campus/video' }
        ]
      },
      { title: 'Events / Awards', href: '/institute/events-awards' },
      { title: 'Contact', href: '/contact', meta: { disableLayout: true } },
      { title: 'Gallery', href: '/institute/gallery' },
      {
        title: 'Careers',
        href: '/institute/careers',
        items: [
          { title: 'Teaching', href: '/institute/careers/teaching' },
          { title: 'Non-teaching', href: '/institute/careers/non-teaching' }
        ]
      },
      { title: 'Tenders', href: '/institute/tenders' }
    ]
  },
  {
    title: 'Administration',
    href: '/administration',
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
      { title: 'Registrar', href: '/registrar' },
      { title: 'Deans', href: '/deans' },
      { title: 'Head of Departments', href: '/hods' },
      { title: 'Faculty', href: '/faculty', meta: { disableLayout: false } },
      {
        title: 'Career Guidance Cell',
        href: '/cgc',
        meta: { disableLayout: false }
      },
      {
        title: 'Public disclosures',
        href: '/disclosures',
        items: [{ title: 'RTI', href: 'https://iiitdwd.ac.in/pdfs/RTI.pdf' }]
      }
    ]
  },
  {
    title: 'Academics',
    href: '/academics',
    items: [
      { title: 'Programmes', href: '/academics/programmes' },
      { title: 'Calendar', href: '/academics/calendar' },
      { title: 'Departments', href: '/academics/departments' },
      {
        title: 'Admission',
        href: '/academics/admission',
        items: [
          { title: 'Procedure', href: '/academics/admission/procedure' },
          { title: 'Fee structure', href: '/academics/admission/fees' },
          { title: 'Scholarships', href: '/academics/admission/scholarships' }
        ]
      },
      { title: 'Research', href: '/academics/research' },
      { title: 'Curriculum', href: '/academics/curriculum' },
      { title: 'Convocation / Conclave', href: '/academics/convocation' },
      { title: 'NIRF', href: '/academics/nirf' },
      { title: 'Online', href: '/academics/online' }
    ]
  },
  {
    title: 'Student life',
    href: '/student-life',
    items: [
      { title: 'Overview', href: '/student-life/overview' },
      { title: 'Hostel', href: '/student-life/hostel' },
      {
        title: 'IIC and Clubs',
        href: '/student-life/clubs',
        items: [
          { title: 'Tech clubs', href: '/student-life/clubs/tech' },
          { title: 'Non Tech clubs', href: '/student-life/clubs/non-tech' },
          { title: 'Sports club', href: '/student-life/clubs/sports' },
          { title: 'Cultural club', href: '/student-life/clubs/cultural' }
        ]
      },
      { title: 'NSS', href: '/student-life/nss' },
      { title: 'NCC', href: '/student-life/ncc' },
      { title: 'Sports and games', href: '/student-life/sports' },
      { title: 'Anti ragging', href: '/student-life/anti-ragging' },
      { title: 'Alumni', href: '/student-life/alumni' },
      {
        title: 'Achievements',
        href: '/student-life/achievements'
      }
    ]
  },
  {
    title: 'Placements',
    href: '/placements',
    items: []
  }
];

export default navigationData;
