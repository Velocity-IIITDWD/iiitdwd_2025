'use client';

import { Button } from '@/components/ui/button';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform
} from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

function AnimatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Using Framer Motion's useScroll hook
  const { scrollY } = useScroll();

  const imageHeight = useTransform(scrollY, [0, 50], ['6.5rem', '5rem']);
  const menuTop = useTransform(scrollY, [0, 50], ['8rem', '5rem']);
  // Transform values based on scroll position
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const textY = useTransform(scrollY, [0, 50], ['0%', '-100%']);

  // DesktopHeader position transitions
  const desktopHeaderX = useTransform(scrollY, [0, 50], ['50%', '0%']);
  const desktopHeaderRight = useTransform(scrollY, [0, 50], ['50%', '0%']);
  const dektopBottom = useTransform(scrollY, [0, 50], ['0.7rem', '1.5rem']);

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
      <motion.header
        ref={headerRef}
        id="header"
        className="flex z-[50] text-primary w-full justify-between shadow-[0_5px_10px_rgb(0,0,0,0.12)] items-center px-4 gap-10 pb-2 max-xl:items-center bg-white sticky top-0 left-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo - always on the left */}
        <motion.div
          style={{
            height: imageHeight,
            width: '100%'
          }}
        >
          <Image
            src={'/Logo1.png'}
            width={0}
            height={0}
            sizes="100%"
            style={{ height: '100%', width: 'auto' }}
            alt="IIIT Dharwad Logo"
          />
        </motion.div>

        {/* Right side container */}
        <motion.div className="flex flex-col w-full relative">
          {/* Text section - disappears on scroll */}
          <motion.div className="self-end overflow-hidden">
            <motion.div
              style={{
                opacity: textOpacity,
                translateY: textY
              }}
              className="text-end max-xl:hidden ease-in"
            >
              <div>ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ</div>
              <div>भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़</div>
              <div>Indian Institute of Information Technology, Dharwad</div>
            </motion.div>
          </motion.div>

          {/* Desktop Header - moves from bottom center to right */}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="xl:hidden p-2 self-end"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </motion.div>

        <motion.div
          className="absolute xl:flex xl:justify-center"
          style={{
            translateX: desktopHeaderX,
            // translateY: desktopHeaderY,
            //   width: desktopHeaderWidth,
            right: desktopHeaderRight,
            bottom: dektopBottom
          }}
        >
          <DesktopHeader />
        </motion.div>
      </motion.header>

      {/* Animated mobile menu - appears from top */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              top: menuTop
            }}
            className="xl:hidden fixed left-0 right-0 bg-white shadow-lg z-[1000] overflow-hidden"
          >
            <MobileHeader toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatedHeader;
