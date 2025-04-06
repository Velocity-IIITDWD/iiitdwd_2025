'use client';

import Logo from '@/assets/layout/Logo.webp';
import { Mail, Menu, X } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
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
    if (latest > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest == 0 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      // if (newState) {
      //   document.documentElement.style.overflow = 'hidden';
      // } else {
      //   document.documentElement.style.overflow = '';
      // }
      return newState;
    });
  };

  // Updated logo variants with responsive heights
  const logoVariants = {
    initial: {
      height: 'clamp(4rem, 6vw, 6rem)' // Responsive height: 4rem on small screens, up to 6rem on larger screens
    },
    scrolled: {
      height: 'clamp(3rem, 4.5vw, 4.5rem)' // Responsive height: 3rem on small screens, up to 4.5rem on larger screens
    }
  };

  const textVariants = {
    initial: { opacity: 1, x: '0%', scale: 1 },
    scrolled: { opacity: 0, x: '100%', scale: 0.5 }
  };

  return (
    <>
      <div
        id="top-bar"
        className="bg-primary text-slate-400 z-50 text-callout w-full flex justify-between max-md:justify-end px-4 md:px-8 py-2"
      >
        <div className="max-md:hidden">
          <a
            href="mailto:info@iiitdwd.ac.in"
            className="flex gap-2 items-center"
          >
            <Mail size={16} />
            info@iiitdwd.ac.in
          </a>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href={'https://aims.iiitdwd.ac.in/aims/'}>AIMS</Link>
          <Link href={''}>RTI</Link>
          <Link href={'/nirf'}>NIRF</Link>
          <Link
            href={
              'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=873279'
            }
          >
            Students Fee Portal
          </Link>
        </div>
      </div>
      <motion.header
        ref={headerRef}
        initial={{ height: 'clamp(5rem, 7vw, 7rem)' }} // Also make header height responsive
        animate={{
          height: isScrolled
            ? 'clamp(4rem, 5vw, 5rem)'
            : 'clamp(5rem, 7vw, 7rem)'
        }}
        className="sticky top-0 flex items-center left-0 w-full right-0 z-50 !bg-white shadow-md overflow-hidden"
      >
        <motion.div
          className="absolute left-4"
          variants={logoVariants}
          initial="initial"
          animate={isScrolled ? 'scrolled' : 'initial'}
          transition={{
            type: 'spring',
            visualDuration: 0.8,
            bounce: 0.1
          }}
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
        <div
          className="w-full flex h-full xl:-translate-x-[3rem] 2xl:-translate-x-0"
          style={{
            justifyContent: isScrolled ? 'flex-end' : 'center',
            alignItems: isScrolled ? 'center' : 'flex-end'
          }}
        >
          <motion.div
            className="px-4 py-2"
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.8,
              bounce: 0.1
            }}
          >
            <DesktopHeader />
          </motion.div>
        </div>

        <motion.div
          className="absolute right-4 flex flex-col max-xl:hidden w-fit text-center text-primary md:text-right"
          variants={textVariants}
          animate={isScrolled ? 'scrolled' : 'initial'}
          transition={{
            type: 'spring',
            visualDuration: 0.8,
            bounce: 0.1
          }}
        >
          <span className="text-title-3 font-normal mb-[2px]">
            ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ
          </span>
          <span className="text-title-3 font-normal">
            भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़
          </span>
          <span className="text-title-3 font-medium">
            Indian Institute of Information Technology, Dharwad
          </span>
          <div className="text-callout font-light">
            [Institute of National Importance by An Act of Parliament]
          </div>
        </motion.div>

        <div className="md:hidden absolute right-2 ">
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
      </motion.header>

      {/* Animated mobile menu - appears from top */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 bg-background z-40 ${
              isScrolled ? '' : ''
            } md:pt-20 pb-6 px-4 overflow-y-auto`}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              visualDuration: 0.8
            }}
            style={{
              top: isScrolled
                ? 'clamp(4rem, 5vw, 5rem)'
                : 'clamp(7rem, 7vw, 8rem)'
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
