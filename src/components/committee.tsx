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
    <div className="flex flex-col items-center text-center border border-gray-400 rounded-xl shadow-sm hover:shadow-md bg-white transition-shadow duration-300 overflow-clip">
      <div className="w-full aspect-square overflow-hidden">
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
      <div className="px-4 py-6 text-left w-full">
        <h3 className="text-xl font-bold text-main mb-1">{title || ''}</h3>
        <div className="space-y-1">
          {content?.map((line, index) => (
            <p key={index} className="text-gray-600 text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfileSection({ title, profiles }: ProfileSectionProps) {
  return (
    <div className="py-8">
      <SectionHeading title={title || 'Building & Works Committee'} />
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
