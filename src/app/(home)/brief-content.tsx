import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { IconTableColumn, IconTrendingUp } from '@tabler/icons-react';
import { Check, Handshake, Lightbulb, Telescope } from 'lucide-react';
import NotificationSection from './notification';

export default function BriefContent() {
  const items = [
    {
      title: 'About Us',
      content1: (
        <div className="max-w-[300px]">
          <strong>IIIT Dharwad</strong> is a premier technical institute
          established as an Institute of <strong>National Importance</strong>.
        </div>
      ),

      content2: (
        <ul className="max-w-[300px] text-primary">
          <li className="flex gap-2">
            <Check size={18} />
            Strong industry collaborations
          </li>
          <li className="flex gap-2">
            <Check size={18} />
            Modern campus facilities
          </li>
          <li className="flex gap-2">
            <Check size={18} />
            Research-driven environment
          </li>
        </ul>
      ),
      className: 'col-span-6 md:col-span-12 xl:col-span-6',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      titleClassName: 'text-white'
    },
    {
      title: 'Notifications',
      content1: <NotificationSection />,
      className: 'col-span-6 md:col-span-12 xl:col-span-6 text-left',
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
      className: 'col-span-6 xl:col-span-3',
      icon: <Lightbulb className="h-4 w-4 text-neutral-500" />
    },
    {
      title: 'Placements',
      content1: (
        <div className="max-w-[300px]">
          IIIT Dharwad has a <strong>strong placement record</strong>, with top
          companies hiring graduates with excellent packages.
        </div>
      ),

      content2: (
        <ul className="max-w-[300px] text-primary grid grid-cols-2 gap-4">
          <li>
            <strong className="text-title-2">98%</strong>
            <div className="text-callout text-gray-400">Placement Rate</div>
          </li>
          <li>
            <strong className="text-title-2">₹12 LPA</strong>
            <div className="text-callout text-gray-400">Highest Package</div>
          </li>
          <li>
            <strong className="text-title-2">₹7 LPA</strong>
            <div className="text-callout text-gray-400">Average Package</div>
          </li>
          <li>
            <strong className="text-title-2">50+</strong>
            <div className="text-callout text-gray-400">Top Recruiters</div>
          </li>
        </ul>
      ),
      className: 'col-span-6 md:col-span-12 xl:col-span-6',
      icon: <IconTrendingUp className="h-4 w-4 text-neutral-500" />,
      titleClassName: 'text-white'
    }
  ];

  return (
    <div className="w-full flex min-h-screen h-full py-4 my-10">
      <BentoGrid className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
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
