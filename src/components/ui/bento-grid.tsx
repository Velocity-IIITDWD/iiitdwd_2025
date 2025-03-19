import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem]',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  titleClassName,
  descriptionClassName,
  title,
  description,
  header,
  icon
}: {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-end space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
    >
      {header}
      {(icon || title || description) && (
        <div className="transition duration-200 z-[2] group-hover/bento:translate-x-2">
          {icon}
          <div
            className={cn(
              'mt-2 mb-2 font-sans font-bold text-neutral-600',
              titleClassName
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              'font-sans text-xs font-normal text-neutral-600',
              descriptionClassName
            )}
          >
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
