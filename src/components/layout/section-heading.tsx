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
    <div className={cn(className)}>
      <h1
        className={cn(
          'uppercase font-semibold z-[1] before:-z-[1] -top-[2px] w-fit rounded-full',
          reverse ? 'text-amber-50 bg-main' : 'text-white bg-main',
          'before:w-[calc(100%+10px)] px-6 py-2 relative'
        )}
      >
        {title}
      </h1>
    </div>
  );
}
