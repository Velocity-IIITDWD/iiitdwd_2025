'use client';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';

export default function LinkedInSide() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed left-0 flex top-1/2 -translate-y-1/2 z-[100] transition duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div
        onClick={toggleBox}
        className="absolute right-0 top-1/2 -translate-y-full translate-x-full rotate-90 origin-bottom-left"
      >
        <button className="relative inline-flex h-10 overflow-hidden rounded-t p-[2px] focus:outline-none focus:ring-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-t bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <IconBrandLinkedin size={16} />
            LinkedIn
          </span>
        </button>
      </div>

      <div className="w-sm aspect-square bg-white border"></div>
    </div>
  );
}
