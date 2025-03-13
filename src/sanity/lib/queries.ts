import { defineQuery } from 'next-sanity';

export const GetFacultyDetails =
  defineQuery(`*[_type == "faculty" && facultyId == $id] {
  "id": facultyId,
  "photo": content.card.photo,
  content
}`);

export const GetAllFaculties = defineQuery(`*[_type == "faculty"] {
  "id": facultyId
}`);

export const queryFaculty = defineQuery(`*[_type == "faculty"]`);

export const GetAllVisitors = defineQuery(`*[_type == "visitor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetAllStaff = defineQuery(`*[_type == "staff"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetAllSenate = defineQuery(`*[_type == "senate"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetFormerDirector = defineQuery(`*[_type == "formerDirector"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetChairperson = defineQuery(`*[_type == "chairPerson"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetBoard = defineQuery(`*[_type == "boardOfGovernor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetFormerBoard = defineQuery(`*[_type == "formerBoardOfGovernor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetAnnouncements = defineQuery(`*[_type == "announcement"]{
  link,
  month,
  new,
  text,
  year,
  date,
}`);

export const GetLinks = defineQuery(`*[_type == "linksStructure"]`);

export const GetDescription = defineQuery(`*[_type == "descriptionStructure"]`);

const GetAbout = defineQuery(`*[_type == "about"]{
  coreValues[] {
    id,
    text,
  },
}`);

export const GetResearch = defineQuery(`*[_type == "researchProfiles"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`);

export const GetResearchAdvertisement =
  defineQuery(`*[_type == "research_advertisement"]{
  time,
  lastDate,
  generalInstructions,
  applicationForm
}`);

export const GetCampusData = defineQuery(`*[_type == "campusData"] {
  title,
  href,
  imageUrl
}
`);

export const GetFacilities = defineQuery(`*[_type == "facility"] {
  title,
  blockName,
  items,
  imageUrl
}`);

export const GetKrcData = defineQuery(`*[_type == "krcData"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`);

export const GetKrcDataTel = defineQuery(`*[_type == "krcDataTel"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`);

export const GetKrcDataTelFull = defineQuery(`*[_type == "krcDataTelFull"] {
  heading,
  card[] {
    title,
    description,
    accessInfo,
    buttonText,
    link
  }
}`);

export const GetContactInfo = defineQuery(`*[_type == "contactData"][0] {
  generalQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  hostelRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  academicQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  careerGuidanceCell[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  feeRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  scholarshipLoansQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  }
}`);

export const queryCarousel = defineQuery(`*[_type == "mainCarouselImage"]`);
export const queryEvents = defineQuery(`*[_type == "event"]`);
export const queryEventIds = defineQuery(`*[_type == "event"] {"eventId": id}`);
export const queryEventById = defineQuery(
  `*[_type == "event" && id == $id][0]`
);
export const queryGallery = defineQuery(`*[_type == "gallery"]`);
export const queryPrograms = defineQuery(`*[_type == "program"]`);
export const queryReport = defineQuery(`*[_type == "annualReport"]`);
export const queryJobs = defineQuery(`*[_type == "job"]`);
export const queryTenders = defineQuery(`*[_type == "tender"]`);
export const queryNirfReports = defineQuery(`*[_type == "nirf"]`);
