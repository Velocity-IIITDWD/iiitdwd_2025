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
      className={`${free ? 'border-none' : 'border-t-[2px]'} mb-3 ml-[10px] ${
        reverse ? 'border-t-white' : 'border-t-primary'
      } w-full relative ${className}`}
    >
      <h1
        className={`uppercase font-semibold z-[1] before:-z-[1] -top-[2px] w-fit before:-left-[5px] before:h-full before:absolute before:top-0 ${
          reverse
            ? 'text-primary before:bg-white'
            : 'text-white before:bg-primary'
        } before:w-[calc(100%+10px)] px-6 py-2 relative before:skew-x-[-15deg]`}
      >
        {title}
      </h1>
    </div>
  );
}
