import Background from '@/assets/layout/Alumni_Background.webp';
import FooterLogo from '@/assets/layout/FooterLogo.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { footerLinks } from '@/data/footer-links';
import {
  ArrowRightIcon,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-body flex flex-col bg-cover bg-center py-24 px-5 lg:px-13 relative">
      <Image
        src={Background}
        width={0}
        height={0}
        sizes="100%"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
        alt="Footer Background"
        priority={false}
      />
      <div className="h-full absolute top-0 left-0 w-full bg-black opacity-90 z-[1]" />

      <div className="flex flex-col z-[2] text-[#a7a8b2] max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Address - Takes 5 of 12 columns on large screens */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Image
              src={FooterLogo}
              width={0}
              height={0}
              sizes="100%"
              className="h-44 lg:h-32 w-fit"
              alt="IIIT Dharwad Logo"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <p className="hover:underline">
                  IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony,
                  Dharwad 580009
                </p>
              </div>

              <div className="flex items-start gap-2 text-white">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="hover:underline">0836 2250879</p>
                  <p className="hover:underline">9449732959</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media - Takes 3 of 12 columns on large screens */}
          <div className="lg:col-span-3 flex items-end">
            <div className="space-y-4">
              <div className="font-bold text-title-3 text-white">FOLLOW US</div>
              <div className="flex gap-6 flex-wrap">
                <a
                  href="https://www.instagram.com/iiitdharwad_"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/iiitdharwad/"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@socialmediaiiitdharwad2584"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://x.com/dharwad_iiit"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Explore Button - Takes 4 of 12 columns on large screens */}
          <div className="lg:col-span-4 flex items-end">
            <Link
              href={'/student-life/clubs/tech/'}
              className="bg-black border text-title-2 font-medium group w-full px-6 py-4 rounded flex justify-between items-center border-white text-white hover:bg-black/90 transition-colors duration-200"
            >
              <span>Explore</span>
              <ArrowRightIcon className="animate-pulse group-hover:translate-x-1/2 transition duration-500" />
            </Link>
          </div>
        </div>

        {/* Mobile and tablet view with shadcn Accordions */}
        <div className="block lg:hidden mt-6">
          <Accordion type="multiple" className="w-full">
            {footerLinks.map((group, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-700 last:border-b-0"
              >
                <AccordionTrigger className="text-body font-medium tracking-wider py-4 text-white">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 py-2 pl-2">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop view - Links Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-10 mt-8">
          {footerLinks.map((group, index) => (
            <div key={index} className="space-y-4">
              <h2 className="font-bold text-title-3 text-white tracking-wider pb-2 border-b border-gray-700 inline-block">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="transition-transform duration-200 hover:translate-x-1"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 text-body font-normal hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-700 text-headline font-medium text-center">
          <p>
            © {new Date().getFullYear()} Indian Institute of Information
            Technology, Dharwad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
