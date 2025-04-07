import { MailIcon } from 'lucide-react';
import Image from 'next/image';

interface AdminFacultyProfileProps {
  name: string;
  position: string;
  department: string;
  email: string;
  imageUrl: string;
  highlightPosition?: boolean;
}

export function AdminFacultyProfile({
  name,
  department,
  position,
  email,
  imageUrl,
  highlightPosition = true
}: AdminFacultyProfileProps) {
  return (
    <div className="p-8 w-full bg-white shadow-md rounded-lg border">
      {/* <h2 className="text-2xl font-semibold text-navy-800 mb-8">
        {highlightPosition ? `${position} (${department})` : department}
      </h2> */}

      <div className="flex flex-col md:flex-row gap-8 h-full">
        <div className="flex-shrink-0 max-md:flex max-md:justify-center">
          <Image
            src={
              imageUrl?.startsWith('/images')
                ? `https://iiitdwd.ac.in${imageUrl}`
                : imageUrl || '/placeholder-person.svg'
            }
            alt={name}
            width={300}
            height={300}
            className="sm:w-[300px] w-full aspect-square rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center h-full">
          <h3 className="text-large-title font-bold text-main mb-2">{name}</h3>
          <p className="text-gray-600 text-title-1 mb-2">{position}</p>
          <p className="text-gray-600 text-title-2 mb-4">{department}</p>

          <div className="space-y-2 text-body">
            <p className="text-gray-700 inline-flex gap-2">
              <MailIcon size={20} /> {email}
            </p>

            {/* <div className="bg-gray-100 p-6 rounded-12px">
              <div className="flex gap-2 items-start">
                <Quote className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <p className="text-gray-700 text-title-3 font-normal">
                  {review.testimonial} 
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminFacultyProfileGrid({
  list,
  gridCols = 1,
  highlightPosition = true
}: {
  list: AdminFacultyProfileProps[];
  gridCols?: number;
  highlightPosition?: boolean;
}) {
  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-10">
      <div
        className={`grid grid-cols-1 gap-6 ${
          gridCols > 1 ? 'lg:grid-cols-2 gap-6' : ''
        }`}
      >
        {list.map((faculty, index) => (
          <AdminFacultyProfile
            {...faculty}
            key={index}
            highlightPosition={highlightPosition}
          />
        ))}
      </div>
    </div>
  );
}
