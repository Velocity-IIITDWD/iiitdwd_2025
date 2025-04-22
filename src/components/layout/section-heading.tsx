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
          'before:w-[calc(100%+10px)] px-6 py-2 relative mb-6'
        )}
      >
        {title}
      </h1>
    </div>
  );
}

// import { cn } from '@/lib/utils';

// export default function SectionHeading({
//   title,
//   free,
//   reverse,
//   className
// }: {
//   title: string;
//   free?: boolean;
//   reverse?: boolean;
//   className?: string;
// }) {
//   return (
//     <div className={cn(className, 'w-fit z-10')}>
//       <div className="w-full relative overflow-hidden">
//         {/* <div className="absolute inset-0 z-[1] pointer-events-none before:right-auto before:absolute before:inset-0 before:w-[30px] before:h-full before:bg-[linear-gradient(to_right,var(--background)_0,transparent_100%)] after:left-auto after:absolute after:inset-0 after:w-[30px] after:h-full after:bg-[linear-gradient(to_left,var(--background)_0,transparent_100%)]"></div> */}
//         {/* <div className="absolute inset-0 z-[1] pointer-events-none before:bottom-auto before:absolute before:inset-0 before:w-full before:h-[30px] before:bg-[linear-gradient(to_bottom,var(--background)_0,transparent_100%)] after:top-auto after:absolute after:inset-0 after:w-full after:h-[30px] after:bg-[linear-gradient(to_top,var(--background)_0,transparent_100%)]"></div> */}
//         <div
//           className="
//           gap-[1px]
//           [counter-reset:fig]
//           z-[0]
//           relative
//           grid
//           grid-cols-[minmax(15px,15px)_repeat(1,minmax(0,1fr))_minmax(15px,15px)]
//           [&>*]:[box-shadow:0_0_0_1px_var(--color-gray-300),inset_0_0_0_1px_transparent]
//           "
//         >
//           <div className="!h-[20px]"></div>
//           {Array.from({ length: 6 }, (_, i) => (
//             <div key={i}></div>
//           ))}

//           <h1
//             className={cn(
//               'uppercase font-semibold z-[1] [grid-area:2/2] w-fit',
//               reverse ? 'text-white bg-main' : 'text-white bg-main',
//               'px-6 py-2 relative'
//             )}
//           >
//             {title}
//           </h1>

//           <div className="!h-[20px]"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
