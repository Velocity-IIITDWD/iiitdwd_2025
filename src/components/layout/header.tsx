'use client';

import Logo from '@/assets/layout/Logo1.png';
import { Button } from '@/components/ui/button';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const { scrollY } = useScroll();

  // Use useMotionValueEvent to detect when scroll passes threshold
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Only trigger state change when crossing the threshold
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

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

  // Animation variants for the desktop header
  const desktopHeaderVariants = {
    initial: {
      x: '50%',
      right: '50%',
      bottom: '0.7rem'
    },
    scrolled: {
      x: '0%',
      right: '0%',
      bottom: '1.5rem'
    }
  };

  // Animation variants for the logo
  const logoVariants = {
    initial: { height: '6.5rem' },
    scrolled: { height: '5rem' }
  };

  // Animation variants for the text
  const textVariants = {
    initial: { opacity: 1, y: '0%' },
    scrolled: { opacity: 0, y: '-100%' }
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
        className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <motion.div
                className="relative"
                variants={logoVariants}
                initial="initial"
                animate={isScrolled ? 'scrolled' : 'initial'}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Image
                  src={Logo}
                  alt="IIIT Dharwad Logo"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="object-contain h-full w-auto"
                />
              </motion.div>
            </div>

            {/* Right side container */}
            <div className="flex items-center space-x-4">
              {/* Text section - disappears on scroll */}
              <motion.div
                className="flex flex-col max-md:hidden text-center text-primary md:text-right"
                variants={textVariants}
                animate={isScrolled ? 'scrolled' : 'initial'}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <span className="text-xs md:text-sm">
                  ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ
                </span>
                <span className="text-xs md:text-sm">
                  भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़
                </span>
                <span className="text-sm md:text-base font-semibold">
                  Indian Institute of Information Technology, Dharwad
                </span>
              </motion.div>

              {/* Desktop Header - moves from bottom center to right */}
              <motion.div
                className="absolute xl:flex xl:justify-center"
                variants={desktopHeaderVariants}
                initial="initial"
                animate={isScrolled ? 'scrolled' : 'initial'}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <DesktopHeader />
              </motion.div>

              {/* Mobile menu button */}
              <div className="xl:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Animated mobile menu - appears from top */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 overflow-y-auto"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              top: isScrolled ? '5rem' : '8rem'
            }}
          >
            <MobileHeader toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatedNavbar;
