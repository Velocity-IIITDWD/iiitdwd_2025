// ReviewCard.tsx
import { cn } from '@/lib/utils';
import { Review } from '@/types/alumni';
import Image from 'next/image';
import Link from 'next/link';

interface ReviewCardProps extends Review {
  onClick?: () => void;
}

export const AlumniCard = ({
  _id,
  name,
  graduationYear,
  testimonial,
  designation,
  photoUrl
}: ReviewCardProps) => {
  return (
    <Link
      href={`/testimonial/${_id}`}
      className={cn(
        'relative cursor-pointer rounded-lg border w-full p-4',
        'border-gray-400 bg-gradient-to-b from-white/70 to-white'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={photoUrl || 'https://avatar.vercel.sh/default'}
          className="w-8 h-8 rounded-full object-cover"
          height={32}
          width={32}
          alt={name}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-main">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-main/70 text-left">
            {designation}{' '}
            <span className="text-main/70 pl-4">Batch - {graduationYear}</span>
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm w-full text-left text-gray-600">
        {testimonial}
      </blockquote>
    </Link>
  );
};
