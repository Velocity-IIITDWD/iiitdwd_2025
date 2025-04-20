'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import SectionHeading from './layout/section-heading';

interface ProfileCardProps {
  title: string | null;
  content: Array<string> | null;
  imageURL: string | null;
  index?: number;
}

interface ProfileSectionProps {
  title: string | null;
  profiles: Array<ProfileCardProps> | null;
}

export function ProfileCard({
  title,
  content,
  imageURL,
  index
}: ProfileCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index! * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="flex flex-col items-center relative border border-border/50 text-center rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] bg-white transition-[shadow,scale] duration-300 overflow-clip"
    >
      <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-[--main]/20 -translate-y-1/2 translate-x-1/2 blur-xl" />

      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={
            imageURL?.startsWith('/images')
              ? `https://iiitdwd.ac.in${imageURL}`
              : imageURL || '/placeholder-person.png'
          }
          alt={title || 'Profile'}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-4 py-6 text-left w-full">
        <h3 className="text-title-2 font-bold text-main mb-1">{title || ''}</h3>
        <div className="space-y-1">
          {content?.map((line, idx) => (
            <p key={idx} className="text-gray-600 text-body font-normal">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProfileSection({ title, profiles }: ProfileSectionProps) {
  return (
    <div className="py-8">
      <SectionHeading title={title || 'Building & Works Committee'} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles?.map((profile, index) => (
          <ProfileCard key={index} {...profile} index={index} />
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
