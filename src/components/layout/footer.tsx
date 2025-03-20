import Background from '@/assets/layout/Alumni_Background.webp';
import FooterLogo from '@/assets/layout/FooterLogo.png';
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
  Twitter,
  Youtube
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-sm flex flex-col bg-cover bg-center py-24 px-5 lg:px-13 relative">
      <Image
        src={Background}
        width={0}
        height={0}
        sizes="100%"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
        alt="Footer Background"
      />
      <div className="h-full absolute top-0 left-0 w-full bg-black opacity-90 z-[1]" />
      <div className="flex flex-col z-[2] text-[#a7a8b2] max-w-7xl mx-auto w-full">
        <div className="lg:w-4/5 flex-none lg:p-3">
          <div className="flex pb-12">
            <div className="flex-1 flex max-lg:flex-col text-sm justify-between lg:items-end lg:p-3">
              <Image
                src={FooterLogo}
                width={0}
                height={0}
                sizes="100%"
                className="h-44 lg:h-48 w-fit"
                alt="IIIT Dharwad Logo"
              />

              <div className="space-y-4 lg:w-1/2 lg:p-3">
                <p className="underline hover:no-underline">
                  IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony,
                  Dharwad 580009
                </p>
                <div className="underline text-base text-white hover:no-underline">
                  <p>0836 2250879</p>
                  <p>9449732959</p>
                </div>
              </div>

              <div className="lg:hidden block space-y-4 lg:p-3 mt-4">
                <button className="bg-black border text-base font-semibold w-full px-4 py-4 rounded flex justify-between items-center border-white text-white">
                  Explore
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
            <div className="flex-1 items-end flex lg:p-3">
              <div className="space-y-4 lg:w-1/2 max-lg:pl-6 lg:p-3">
                <div className="font-bold text-base text-white">FOLLOW US</div>
                <div className="flex gap-4 flex-wrap">
                  <Instagram size={20} />
                  <Linkedin size={20} />
                  <Youtube size={20} />
                  <Twitter size={20} />
                </div>
              </div>
              <div className="hidden lg:block space-y-4 w-1/2 p-3">
                <button className="bg-black border text-base font-semibold w-full px-4 py-4 rounded flex justify-between items-center border-white text-white">
                  Explore
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile and tablet view with shadcn Accordions */}
          <div className="block lg:hidden">
            <Accordion type="multiple" className="w-full">
              {footerLinks.map((group, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <AccordionTrigger className="text-sm font-medium tracking-wider py-4">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 py-1">
                      {group.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                          >
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

          {/* Desktop view - Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {footerLinks.map((group, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-lg font-medium text-white tracking-wider">
                  {group.title}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            © {new Date().getFullYear()} Indian Institute of Information
            Technology, Dharwad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
