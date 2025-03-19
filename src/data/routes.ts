import { NavMenuItem } from '@/types/global';
import { HeaderMain } from '@/types/header';

export const navMenuItems: NavMenuItem[] = [
  { text: 'Home', href: '/' },
  {
    text: 'Institute',
    href: '/institute',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'About', href: '/institute/about' },
          { text: 'Academic Office', href: '/institute/academic-office' },
          { text: 'Events / Awards', href: '/institute/events-awards' },
          { text: 'Contact', href: '/institute/contact' },
          { text: 'Institute Brochure', href: '/institute/brochure' },
          { text: 'Gallery - Virtual Tour', href: '/institute/gallery' }
        ]
      },
      {
        title: 'Campus',
        width: 250,
        items: [
          { text: 'Working Hours', href: '/institute/campus/working-hours' },
          { text: 'How to Reach', href: '/institute/campus/how-to-reach' },
          {
            text: 'Amenities / Facilities',
            href: '/institute/campus/facilities'
          },
          { text: 'Campus Video', href: '/institute/campus/video' }
        ]
      }
    ]
  },
  {
    text: 'Administration',
    href: '/administration',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'Director', href: '/administration/director' },
          { text: 'Visitors', href: '/administration/visitors' },
          {
            text: 'Governing Bodies',
            href: '/administration/governing-bodies'
          },
          { text: 'HoDs', href: '/administration/hods' },
          { text: 'Faculty', href: '/administration/faculty' },
          {
            text: 'Faculty Achievements',
            href: '/administration/faculty-achievements'
          },
          {
            text: 'Administrative Staff / Officers',
            href: '/administration/staff'
          },
          {
            text: 'Public Disclosures',
            href: '/administration/public-disclosures'
          }
        ]
      }
    ]
  },
  {
    text: 'Academics',
    href: '/academics',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'Programmes', href: '/academics/programmes' },
          { text: 'Academic Calendar', href: '/academics/calendar' },
          { text: 'Timetable', href: '/academics/timetable' },
          { text: 'Research', href: '/academics/research' },
          { text: 'Curriculum', href: '/academics/curriculum' },
          { text: 'Convocation / Conclave', href: '/academics/convocation' },
          { text: 'NIRF', href: '/academics/nirf' },
          { text: 'Online', href: 'https://online.iiitdwd.ac.in' }
        ]
      },
      {
        title: 'Departments',
        width: 250,
        items: [
          {
            text: 'CSE',
            subText: 'Computer Science and Engineering',
            href: '/academics/departments/cse'
          },
          {
            text: 'DSAI',
            subText: 'Data Science and Artificial Intelligence',
            href: '/academics/departments/dsai'
          },
          {
            text: 'ECE',
            subText: 'Electronics and Communication Engineering',
            href: '/academics/departments/ece'
          }
        ]
      }
    ]
  },
  {
    text: 'Admissions',
    href: '/admissions',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'Procedure', href: '/admissions/procedure' },
          { text: 'Fee Structure', href: '/admissions/fee-structure' },
          { text: 'Scholarships', href: '/admissions/scholarships' }
        ]
      }
    ]
  },
  {
    text: 'Student Life',
    href: '/student-life',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'Overview', href: '/student-life/overview' },
          { text: 'Hostel', href: '/student-life/hostel' },
          { text: 'NSS', href: '/student-life/nss' },
          { text: 'NCC', href: '/student-life/ncc' },
          { text: 'Sports and Games', href: '/student-life/sports' },
          { text: 'Anti-Ragging', href: '/student-life/anti-ragging' },
          { text: 'Alumni', href: '/student-life/alumni' },
          { text: 'Student Achievements', href: '/student-life/achievements' }
        ]
      },
      {
        title: 'Activities',
        width: 250,
        items: [
          { text: 'Tech Clubs', href: '/student-life/activities/tech-clubs' },
          {
            text: 'Non-Tech Clubs',
            href: '/student-life/activities/non-tech-clubs'
          }
        ]
      }
    ]
  },
  { text: 'Placements', href: '/placements' },
  {
    text: 'Careers',
    href: '/careers',
    subGroups: [
      {
        width: 250,
        items: [
          { text: 'Teaching', href: '/careers/teaching' },
          { text: 'Non-Teaching', href: '/careers/non-teaching' }
        ]
      }
    ]
  },
  { text: 'Tenders', href: '/tenders' }
];

export const navigationData: HeaderMain[] = [
  {
    title: 'Home',
    href: '/',
    items: []
  },
  {
    title: 'Institute',
    href: '/institute',
    items: [
      { title: 'About Us', href: '/institute/about-us' },
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
        href: '/administration/governing-bodies',
        items: [
          {
            title: 'Board of Governers',
            href: '/administration/governing-bodies/board'
          },
          { title: 'Senate', href: '/administration/governing-bodies/senate' },
          {
            title: 'Financial Committee',
            href: '/administration/governing-bodies/financial'
          },
          {
            title: 'Building and Works Committee',
            href: '/administration/governing-bodies/building'
          }
        ]
      },
      { title: 'Visitors', href: '/administration/visitors' },
      { title: 'Chairperson', href: '/administration/chairperson' },
      { title: 'Director', href: '/administration/director' },
      { title: 'Registrar', href: '/administration/registrar' },
      { title: 'Deans', href: '/administration/deans' },
      { title: 'HoDs', href: '/administration/hods' },
      { title: 'Faculty', href: '/administration/faculty' },
      {
        title: 'Achievements - faculty only',
        href: '/administration/achievements'
      },
      {
        title: 'Administrative staff / officers',
        href: '/administration/staff'
      },
      {
        title: 'Public disclosures',
        href: '/administration/disclosures',
        items: [
          { title: 'RTI', href: '/administration/disclosures/rti' },
          { title: 'IPR', href: '/administration/disclosures/ipr' },
          { title: 'IT Policy', href: '/administration/disclosures/it-policy' }
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
