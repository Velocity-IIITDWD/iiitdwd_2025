import Image from 'next/image';
import SectionHeading from './layout/section-heading';

interface ProfileCardProps {
  title: string | null;
  content: Array<string> | null;
  imageURL: string | null;
}

interface ProfileSectionProps {
  title: string | null;
  profiles: Array<ProfileCardProps> | null;
}

export function ProfileCard({ title, content, imageURL }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 bg-white">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <Image
          src={
            imageURL?.startsWith('/images')
              ? `https://iiitdwd.ac.in${imageURL}`
              : imageURL || '/placeholder-person.svg'
          }
          alt={title || 'Profile'}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-navy-700 mb-2">{title || ''}</h3>
      <div className="space-y-1">
        {content?.map((line, index) => (
          <p key={index} className="text-gray-600 text-sm">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ProfileSection({ title, profiles }: ProfileSectionProps) {
  return (
    <div className="py-8">
      <SectionHeading title={title || ''} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles?.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}

type DynamicProfileSectionsProps = {
  sections: Array<ProfileSectionProps>;
};

export function DynamicProfileSections({
  sections
}: DynamicProfileSectionsProps) {
  return (
    <div>
      {sections.map((section, index) => (
        <ProfileSection key={index} {...section} />
      ))}
    </div>
  );
}
