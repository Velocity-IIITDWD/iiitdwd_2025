import LinkedInCarousel from '@/components/linkedin/EmblaCarousel';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { IconTableColumn, IconTrendingUp } from '@tabler/icons-react';
import { Handshake, Lightbulb, Telescope } from 'lucide-react';
import Link from 'next/link';
import NotificationSection from './notification';
import SocialMediaGrid from './social-media';

export default function BriefContent() {
  const items = [
    {
      title: 'Social Media',
      content1: <SocialMediaGrid />,
      className: 'col-span-6 md:col-span-12 xl:col-span-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      titleClassName: 'text-white'
    },
    {
      title: 'Notifications',
      content1: <NotificationSection />,
      className: 'col-span-6 md:col-span-12 xl:col-span-8 text-left',
      icon: <Telescope className="h-4 w-4 text-neutral-500" />
    },
    {
      title: 'Collaborations & MoUs',
      content1: (
        <div>
          IIIT Dharwad has established <strong>key MoUs</strong> with leading
          industries and institutions, fostering research, innovation, and
          global partnerships.
        </div>
      ),
      content2: (
        <Link href={'/mou'} className="bg-main text-white px-4 py-2 rounded">
          View all MoUs
        </Link>
      ),
      className: 'col-span-6 xl:col-span-3',
      icon: <Handshake className="h-4 w-4 text-neutral-500" />
    },
    {
      title: 'Research & Innovation',
      content1: (
        <div>
          IIIT Dharwad fosters <strong>cutting-edge research</strong> in AI,
          IoT, and emerging technologies, collaborating with top institutes and
          industries.
        </div>
      ),
      content2: (
        <Link
          href={'/academics/research'}
          className="bg-main text-white px-4 py-2 rounded"
        >
          Research
        </Link>
      ),
      className: 'col-span-6 xl:col-span-3',
      icon: <Lightbulb className="h-4 w-4 text-neutral-500" />
    },
    {
      title: 'Placements LinkedIn',
      content1: <LinkedInCarousel />,
      className: 'col-span-6 md:col-span-12 xl:col-span-6',
      icon: <IconTrendingUp className="h-4 w-4 text-neutral-500" />,
      titleClassName: 'text-white'
    }
  ];

  return (
    <div className="w-full flex min-h-screen h-full py-4 my-10">
      <BentoGrid className="sm:py-18 max-w-[1960px] w-[87.5vw] relative mx-auto py-16 md:py-24 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            content1={item.content1}
            content2={item?.content2 || ''}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
