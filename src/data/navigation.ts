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
      { title: 'About Us', href: '/institute/about' },
      { title: 'Academic office', href: '/institute/academic-office' },
      { title: 'Admission', href: '/institute/admission' },
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
      { title: 'Institute brochure', href: '/institute/brochure' },
      { title: 'Events / Awards', href: '/institute/events-awards' },
      { title: 'Contact', href: '/institute/contact' },
      { title: 'Gallery - virtual tour', href: '/institute/gallery' },
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
      {
        title: 'Governing Bodies',
        href: '/governing-bodies',
        items: [
          {
            title: 'Board of Governers',
            href: '/governing-bodies/board'
          },
          { title: 'Senate', href: '/governing-bodies/senate' },
          {
            title: 'Financial Committee',
            href: '/governing-bodies/financial'
          },
          {
            title: 'Building and Works Committee',
            href: '/governing-bodies/building'
          }
        ]
      },
      { title: 'Visitors', href: '/visitors' },
      { title: 'Chairperson', href: '/chairperson' },
      { title: 'Director', href: '/director' },
      { title: 'Registrar', href: '/registrar' },
      { title: 'Deans', href: '/deans' },
      { title: 'HoDs', href: '/hods' },
      { title: 'Faculty', href: '/faculty' },
      {
        title: 'Achievements - faculty only',
        href: '/achievements'
      },
      {
        title: 'Administrative staff / officers',
        href: '/staff'
      },
      {
        title: 'Public disclosures',
        href: '/disclosures',
        items: [
          { title: 'RTI', href: '/disclosures/rti' },
          { title: 'IPR', href: '/disclosures/ipr' },
          { title: 'IT Policy', href: '/disclosures/it-policy' }
        ]
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
        title: 'Achievements - students specific',
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
