'use client';
import { IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { useState } from 'react';

interface SocialSidebarProps {
  platform: 'twitter' | 'linkedin';
  position: 'left' | 'right';
}

export default function SocialSidebar({
  platform,
  position
}: SocialSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    switch (platform) {
      case 'twitter':
        return <IconBrandX size={16} />;
      case 'linkedin':
        return <IconBrandLinkedin size={16} />;
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (platform) {
      case 'twitter':
        return (
          <div className="w-[300px] h-fit">
            <a
              className="twitter-timeline"
              href="https://twitter.com/dharwad_iiit?ref_src=twsrc%5Etfw"
            >
              Tweets by dharwad_iiit
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        );
      case 'linkedin':
        return <div className="w-[300px] aspect-[2/3] bg-white border"></div>;
      default:
        return null;
    }
  };

  const getPositionClasses = () => {
    if (position === 'left') {
      return {
        container: isOpen ? 'translate-x-0' : '-translate-x-full',
        button:
          'right-0 -translate-y-full translate-x-full rotate-90 origin-bottom-left'
      };
    } else {
      return {
        container: isOpen ? '-translate-x-0' : 'translate-x-full',
        button:
          'left-0 -translate-y-full -translate-x-full -rotate-90 origin-bottom-right'
      };
    }
  };

  const positionClasses = getPositionClasses();

  return (
    <div
      className={`fixed ${
        position === 'left' ? 'left-0' : 'right-0'
      } flex top-1/2 -translate-y-1/2 z-[100] max-md:hidden transition duration-300 ${
        positionClasses.container
      }`}
    >
      <div
        onClick={toggleBox}
        className={`absolute top-1/2 ${positionClasses.button}`}
      >
        <button className="relative inline-flex h-10 overflow-hidden rounded-t p-[2px] focus:outline-none focus:ring-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-t bg-black px-3 py-1 text-body font-medium text-white backdrop-blur-3xl">
            {renderIcon()}
            {platform === 'twitter' ? 'Twitter' : 'LinkedIn'}
          </span>
        </button>
      </div>

      {renderContent()}
    </div>
  );
}
