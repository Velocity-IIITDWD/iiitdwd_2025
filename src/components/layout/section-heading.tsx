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
        reverse ? 'border-t-main' : 'border-t-main',
        'w-full relative',
        className
      )}
    >
      <h1
        className={cn(
          'uppercase font-semibold z-[1] before:-z-[1] -top-[2px] w-fit before:-left-[5px] before:h-full before:absolute before:top-0',
          reverse
            ? 'text-amber-50 before:bg-main'
            : 'text-white before:bg-main',
          'before:w-[calc(100%+10px)] px-6 py-2 relative before:skew-x-[-15deg]'
        )}
      >
        {title}
      </h1>
    </div>
  );
}
