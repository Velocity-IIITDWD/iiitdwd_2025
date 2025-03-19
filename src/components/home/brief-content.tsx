import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from '@tabler/icons-react';
export default function BriefContent() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );

  const placementsItems = [
    {
      title: '₹18.6 LPA',
      description: 'Average Package',
      className: 'col-span-1',
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '₹42 LPA',
      description: 'Highest Package',
      className: 'col-span-1',
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '98%',
      description: 'Placement Rate',
      className: 'col-span-1',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '120+',
      description: 'Recruiting Companies',
      className: 'col-span-1',
      icon: (
        <IconTableColumn
          className="h-4 w-4 text-neutral
-500"
        />
      )
    }
  ];
  const items = [
    {
      title: 'About Us',
      // description:
      //   'Understand the impact of effective communication in our lives.',
      header: (
        <div className="flex-1 z-[2]">
          IIIT Dharwad is a premier technical institute established as an
          Institute of National Importance. Our vision is to be globally
          recognized for excellence in IT education, research, and innovation.
          <h5 className="text-sm mt-2">Founded: 2015</h5>
        </div>
      ),

      className:
        'md:col-span-2 bg-[url("/Alumni_Background.jpg")] bg-cover text-white bg-center relative after:z-[1] after:block after:top-0 after:left-0 after:w-full after:h-full after:absolute after:bg-black/80 overflow-hidden',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      titleClassName: 'text-white'
    },
    {
      title: 'Discover and Explore',
      description:
        "Explore our vibrant campus in North Karnataka's educational hub with state-of-the-art facilities and dynamic student community.",
      header: <Skeleton />,
      className: 'col-span-1',
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
    },
    {
      title: 'Join Us',
      description:
        'Join IIIT Dharwad, an Institute of National Importance offering programs in Computer Science, Electronics & Communication Engineering, and Data Science.',
      header: <Skeleton />,
      className: 'col-span-1',
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '₹18.6 LPA',
      description: 'Average Package',
      className: 'col-span-1',
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '₹42 LPA',
      description: 'Highest Package',
      className: 'col-span-1',
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '98%',
      description: 'Placement Rate',
      className: 'col-span-1',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
    },
    {
      title: '120+',
      description: 'Recruiting Companies',
      className: 'col-span-1',
      icon: (
        <IconTableColumn
          className="h-4 w-4 text-neutral
-500"
        />
      )
    }
  ];

  return (
    <div className="w-full bg-tertiary/20 py-4">
      <BentoGrid className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 xl:grid-cols-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            titleClassName={item?.titleClassName || ''}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
