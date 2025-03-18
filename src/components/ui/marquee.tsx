// import { cn } from '@/lib/utils';
// import * as React from 'react';

// interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode;
//   pauseOnHover?: boolean;
//   direction?: 'left' | 'right';
//   speed?: number;
// }

// export function Marquee({
//   children,
//   pauseOnHover = false,
//   direction = 'left',
//   speed = 30,
//   className,
//   ...props
// }: MarqueeProps) {
//   return (
//     <div
//       className={cn('w-full overflow-hidden sm:mt-24 mt-10', className)}
//       {...props}
//     >
//       <div className="relative flex overflow-hidden py-2">
//         <div
//           className={cn(
//             'flex w-max animate-marquee gap-4',
//             pauseOnHover && 'hover:[animation-play-state:paused]',
//             direction === 'right' && 'animate-marquee-reverse'
//           )}
//           style={{ '--duration': `${speed}s` } as React.CSSProperties}
//         >
//           {children}
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 py-3 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
