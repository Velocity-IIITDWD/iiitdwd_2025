'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import DesktopHeader from './header';
import MobileHeader from './mobile-header';

// Import collapsible components

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
      return newState;
    });
  };

  return (
    <>
      {/* Top info bar */}
      <div
        id="top-bar"
        className="bg-primary text-slate-400 text-xs w-full flex justify-between max-md:justify-end px-4 md:px-16 py-2"
      >
        <div className="max-xl:hidden">info@iiitdwd.ac.in</div>
        <div className="flex gap-2 flex-wrap">
          <div>AIMS</div>
          <div>RTI</div>
          <div>NIRF</div>
          <div>Students Fee Portal</div>
        </div>
      </div>
      <header
        id="header"
        className="flex flex-col z-[50] bg-white sticky top-0 left-0"
      >
        <div className="flex shadow-lg z-[1] text-primary w-full justify-center max-xl:justify-between px-4 gap-10 py-2 max-xl:items-center md:py-4">
          <Image
            src={'/Logo.png'}
            width={0}
            height={0}
            sizes="100%"
            style={{ height: '4rem', width: 'auto' }}
            alt="IIIT Dharwad Logo"
          />
          <div className="max-xl:hidden">
            <div>भारतीय सूचना प्रौद्योगिकी</div>
            <div>संस्थान, धारवाड़</div>
          </div>
          <div className="max-xl:hidden">
            <div>ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ</div>
            <div>ಸಂಸ್ಥೆ, ಧಾರವಾಡ</div>
          </div>

          {/* Menu trigger button for mobile */}
          <Button
            variant="ghost"
            className="xl:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="flex z-[-1] max-xl:hidden sticky justify-center bg-white w-full h-fit border-b">
          <div className="flex flex-row items-center justify-start relative py-1">
            <DesktopHeader />
          </div>
        </div>
      </header>

      {/* Desktop navigation - visible on large screens */}
      {/* <div className="flex max-xl:hidden sticky justify-center bg-white w-full h-fit border-b z-[5]">
        <div className="flex flex-row items-center justify-start relative py-1">
          <DesktopHeader />
        </div>
      </div> */}

      {/* Animated mobile menu - appears from top */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="xl:hidden fixed top-[6.5rem] left-0 right-0 bg-white shadow-lg z-[5] overflow-hidden"
          >
            <MobileHeader setIsMenuOpen={setIsMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
