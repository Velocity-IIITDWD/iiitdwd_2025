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
        'border-tertiary/20 bg-gradient-to-b from-secondary/10 to-tertiary/30'
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
          <figcaption className="text-sm font-medium text-primary">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-secondary text-left">
            {designation}{' '}
            <span className="text-secondary pl-4">
              Batch - {graduationYear}
            </span>
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm w-full text-left text-gray-500">
        {testimonial}
      </blockquote>
    </Link>
  );
};
