'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="top-bar"
        className="bg-primary text-slate-400 text-xs w-full flex justify-between max-md:justify-end px-4 md:px-8 py-2"
      >
        <div className="max-xl:hidden">
          <span className="flex gap-2">
            <Mail size={16} />
            info@iiitdwd.ac.in
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div>AIMS</div>
          <div>RTI</div>
          <div>NIRF</div>
          <div>Students Fee Portal</div>
        </div>
      </div>
      <header
        id="header"
        className={`flex flex-col z-[50] bg-white sticky top-0 left-0 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="flex shadow-lg z-[1] text-primary w-full justify-between items-center px-4 gap-10 py-2 max-xl:items-center">
          <Image
            src={'/Logo.png'}
            width={0}
            height={0}
            sizes="100%"
            style={{ height: '4rem', width: 'auto' }}
            alt="IIIT Dharwad Logo"
          />

          <div
            className={`transition-opacity w-fit duration-300 flex-grow ${
              isScrolled ? 'opacity-0 max-xl:hidden' : 'opacity-100'
            }`}
          >
            <div className="text-end max-xl:hidden">
              <div>ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ</div>
              <div>भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़</div>
              <div>Indian Institute of Information Technology, Dharwad</div>
            </div>
          </div>

          {/* Desktop header that appears on scroll */}
          <div
            className={`max-xl:hidden transition-all w-full duration-300 ${
              isScrolled
                ? 'opacity-100 max-w-2xl'
                : 'opacity-0 max-w-0 overflow-hidden'
            }`}
          >
            <DesktopHeader />
          </div>

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

        {/* Bottom nav bar that hides on scroll */}
        <div
          className={`flex z-[-1] max-xl:hidden sticky left-0 justify-center !shadow-none bg-white w-full h-fit border-b transition-all duration-300 ${
            isScrolled
              ? 'opacity-0 max-h-0 py-0 overflow-hidden'
              : 'opacity-100 py-1 max-h-16'
          }`}
        >
          <DesktopHeader />
        </div>
      </header>

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
