import { cn } from '@/lib/utils';

export default function SectionHeading({
  title,
  free,
  reverse,
  className
}: {
  title: string;
  free?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        free ? 'border-none' : 'border-t-[2px]',
        'mb-6 ml-[10px]',
        reverse ? 'border-t-white' : 'border-t-primary',
        'w-full relative',
        className
      )}
    >
      <h1
        className={cn(
          'uppercase font-semibold z-[1] before:-z-[1] -top-[2px] w-fit before:-left-[5px] before:h-full before:absolute before:top-0',
          reverse
            ? 'text-primary before:bg-[#f18f01]'
            : 'text-white before:bg-primary',
          'before:w-[calc(100%+10px)] px-6 py-2 relative before:skew-x-[-15deg]'
        )}
      >
        {title}
      </h1>
    </div>
  );
}
