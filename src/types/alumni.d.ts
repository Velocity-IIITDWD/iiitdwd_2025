export interface Review {
  _id: string;
  name: string;
  contactNo: string;
  email: string;
  graduationYear: number;
  designation: string;
  course: string;
  achievements?: string;
  testimonial: string;
  memorableExperience?: string;
  encouragement?: string;
  photoUrl: string | null;
}

interface Testimonial {
  // Content fields
  encouragement?: string | undefined;
  testimonial?: string | undefined;
  memorableExperience?: string | undefined;

  // Personal information
  name: string;
  email: string;
  contactNo: string;
  designation: string;
  course: string;
  graduationYear: number;

  // Consent and approval
  consent: boolean;
  approved: boolean;

  // Photo information (now optional)
  photo?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };

  // Video property (optional since it appears in some objects)
  video?: any; // Replace 'any' with a more specific type if you know the structure

  // Sanity.io metadata
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}
