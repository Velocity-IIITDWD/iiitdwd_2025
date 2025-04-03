import { cn } from '@/lib/utils';
import { LinkIcon, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FacultyProfileProps {
  name: string | undefined;
  title: string | undefined;
  role?: string;
  education?: string;
  department?: string;
  areasOfInterest?: string[];
  email?: string;
  office?: string;
  website?: string;
  imageUrl?: string;
  variant?: 'default' | 'compact' | 'minimal';
  className?: string;
  keyPositions?: string[] | string;
}

export default function FacultyProfile({
  name = '',
  title = '',
  role,
  education,
  department,
  areasOfInterest = [],
  email,
  office,
  website,
  imageUrl = '/placeholder-person.svg',
  variant = 'default',
  className,
  keyPositions = ''
}: FacultyProfileProps) {
  const positions = Array.isArray(keyPositions) ? keyPositions : [keyPositions];

  imageUrl = imageUrl.startsWith('/images')
    ? `https://iiitdwd.ac.in${imageUrl}`
    : imageUrl || '/placeholder-person.svg';

  if (variant === 'minimal') {
    return (
      <div
        className={cn(
          'flex items-center gap-3 p-3 border rounded-lg bg-white shadow-sm hover:shadow transition-all duration-300 group',
          className
        )}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary/30 group-hover:border-primary/50 shadow-sm transition-all duration-300 overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={imageUrl || '/placeholder-person.svg'}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-300 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-500 transition-all duration-300 truncate">
            {title}
          </p>
          {positions.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {positions.slice(0, 1).map((position, index) => (
                <span
                  key={index}
                  className={cn(
                    'text-xs px-2 py-0.5 rounded-full border transition-all duration-300 group-hover:shadow-sm'
                  )}
                >
                  {position}
                </span>
              ))}
              {positions.length > 1 && (
                <span className="text-xs text-gray-500 px-1.5 group-hover:text-primary/70 transition-colors duration-300">
                  +{positions.length - 1} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'p-4 border rounded-lg bg-white shadow-sm hover:shadow transition-all duration-300 group',
          className
        )}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-primary/30 group-hover:border-primary/50 shadow-sm transition-all duration-300 overflow-hidden">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={imageUrl || '/placeholder-person.svg'}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-primary group-hover:translate-x-0.5 transition-transform duration-300">
              {name}
            </h2>
            <p className="text-gray-500 font-medium transition-all duration-300">
              {title}
            </p>
            {department && (
              <p className="text-sm mt-1 text-gray-500 transition-all duration-300">
                {department}
              </p>
            )}

            {positions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {positions.map((position, index) => (
                  <span
                    key={index}
                    className={cn(
                      'text-xs px-2.5 py-0.5 rounded-full border transition-all duration-300 group-hover:shadow-sm'
                    )}
                  >
                    {position}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 border-t pt-3">
          {email && email !== '-' && (
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <a
                href={`mailto:${email}`}
                className="transition-colors duration-300 text-gray-500 hover:text-primary"
              >
                {email}
              </a>
            </div>
          )}
          {office && office !== '?' && (
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">{office}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cn(
        'p-5 border rounded-lg bg-secondary/50 shadow-sm hover:shadow transition-all duration-300 relative overflow-hidden group',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#7a8b99_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary/70 group-hover:bg-primary transition-colors duration-500" />
      <div className="flex flex-col gap-5 relative justify-between h-full">
        <div className="flex flex-col gap-5 relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-main/80 group-hover:border-primary/50 shadow-md transition-all duration-500 group-hover:shadow-lg overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={imageUrl || '/placeholder-person.svg'}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-primary group-hover:translate-x-1 transition-transform duration-300">
                {name}
              </h2>
              <p className="text-gray-500 font-base text-sm mt-0 transition-all group-hover:translate-x-1 duration-300">
                {title}
              </p>

              {positions.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {positions.map(
                    (position, index) =>
                      position && (
                        <span
                          key={index}
                          className={cn(
                            'text-xs px-2.5 text-pretty py-0.5 rounded border transition-all duration-300 group-hover:shadow-sm'
                          )}
                        >
                          {position}
                        </span>
                      )
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1 text-sm pl-1 py-2">
            {department && (
              <p className="text-black text-base transition-all duration-300">
                {department}
              </p>
            )}
            {role && (
              <p className="text-gray-500 transition-all duration-300">
                {role}
              </p>
            )}
            {education && (
              <p className="text-gray-500 text-xs transition-all duration-300">
                {education}
              </p>
            )}
          </div>

          {areasOfInterest.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-base font-medium border-b pb-1   text-primary">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2 py-2">
                {areasOfInterest.map((area, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-secondary/70 rounded-full text-xs border hover:shadow-sm transition-all duration-300 text-primary"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t text-xs pt-1">
          {email && email !== '-' && (
            <div className="flex items-center gap-3 py-2">
              <Mail size={16} className="text-gray-500" />
              <a
                href={`mailto:${email}`}
                className="transition-colors duration-300 text-gray-500 hover:text-primary"
              >
                {email}
              </a>
            </div>
          )}
          {office && office !== '?' && (
            <div className="flex items-center gap-3 py-2">
              <MapPin size={16} className="text-gray-500" />
              <span className="text-gray-500">{office}</span>
            </div>
          )}
          {website && (
            <div className="flex items-center gap-2 py-1">
              <LinkIcon size={16} className="text-gray-500" />
              <a
                href={
                  website.startsWith('/docs')
                    ? `https://iiitdwd.ac.in${website}`
                    : website.startsWith('http')
                    ? website
                    : `https://${website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-gray-500 hover:text-primary"
              >
                {website.endsWith('.pdf')
                  ? 'View Profile'
                  : website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
