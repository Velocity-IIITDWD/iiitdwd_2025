'use client';

import SidebarMain from '@/components/Header/sidebar';
import Image from 'next/image';
import { SidebarTrigger } from '../ui/sidebar';
import DesktopHeader from './header';

function Header() {
  return (
    <header className="flex items-center flex-col ">
      <div className="bg-primary text-slate-400 text-xs w-full flex justify-between max-md:justify-end px-4 md:px-16 py-2">
        <div className="max-lg:hidden">info@iiitdwd.ac.in</div>
        <div className="flex gap-2 flex-wrap">
          <div>AIMS</div>
          <div>RTI</div>
          <div>NIRF</div>
          <div>Students Fee Portal</div>
        </div>
      </div>
      <div className="flex shadow-lg z-[2] text-primary w-full justify-center max-lg:justify-between px-4 gap-10 py-2 max-md:items-center md:py-4">
        <Image
          src={'/Logo.png'}
          width={0}
          height={0}
          sizes="100%"
          style={{ height: '4rem', width: 'auto' }}
          alt="IIIT Dharwad Logo"
        />
        <div className="max-lg:hidden">
          <div>भारतीय सूचना प्रौद्योगिकी</div>
          <div>संस्थान, धारवाड़</div>
        </div>

        <div className="max-lg:hidden">
          <div>ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ</div>
          <div>ಸಂಸ್ಥೆ, ಧಾರವಾಡ</div>
        </div>
        <SidebarTrigger className="lg:hidden" />
      </div>
      <div className="flex max-lg:hidden justify-center bg-white w-full h-fit border-b">
        <div className="flex flex-row lg:flex-row items-center justify-start relative py-1">
          <DesktopHeader />
        </div>
      </div>

      <SidebarMain />
    </header>
  );
}

export default Header;
