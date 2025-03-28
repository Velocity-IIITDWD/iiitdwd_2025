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
    <div className="py-8 w-full max-w-[900px]">
      <h2 className="text-2xl font-semibold text-navy-800 mb-8">
        {highlightPosition ? `${position} (${department})` : department}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <Image
            src={
              imageUrl?.startsWith('/images')
                ? `https://iiitdwd.ac.in${imageUrl}`
                : imageUrl || '/placeholder-person.svg'
            }
            alt={name}
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-lg object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-navy-700 mb-2">{name}</h3>
          <p className="text-gray-600 text-lg mb-2">{position}</p>
          <p className="text-gray-600 text-base mb-4">{department}</p>

          <div className="space-y-2">
            <p className="text-gray-700">Email: {email}</p>
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
    <div className="px-6 md:px-20">
      <div
        className={`grid grid-cols-1 ${
          gridCols > 1 ? 'lg:grid-cols-2 gap-6' : ''
        }`}
      >
        {list.map((faculty, index) => (
          <div key={index}>
            <AdminFacultyProfile
              {...faculty}
              highlightPosition={highlightPosition}
            />
            {index < list.length - 1 && gridCols === 1 && (
              <hr className="border-primary border-2 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
