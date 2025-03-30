'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import navigationData from '@/data/navigation';
import { NavigationItem } from '@/types/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function MobileHeader({
  toggleMenu
}: {
  toggleMenu: () => void;
}) {
  const hasChildren = (item: any) => {
    return item.items && item.items.length > 0;
  };

  return (
    <div className="py-4 flex flex-col justify-between pt-4 md:pt-10 px-4 h-[calc(100vh-6.5rem)] overflow-y-auto">
      <nav className="flex flex-col space-y-1">
        {navigationData.map((item: NavigationItem, index) => {
          if (hasChildren(item)) {
            return (
              <motion.div
                key={`level1-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index * 0.4) / navigationData.length
                }}
                className="border-b border-gray-100"
              >
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-primary hover:bg-gray-50 rounded-md">
                    {item.title}
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="">
                    <div className="flex flex-col py-2">
                      {item?.items!.map((subItem, subIndex) => {
                        if (hasChildren(subItem)) {
                          return (
                            <Collapsible
                              key={`level2-${subIndex}`}
                              className="w-full"
                            >
                              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 pl-6 text-left text-primary border-l hover:border-primary">
                                {subItem.title}
                                <ChevronRight className="h-4 w-4 text-gray-500" />
                              </CollapsibleTrigger>
                              <CollapsibleContent className="">
                                <div className="flex flex-col">
                                  {subItem.items!.map(
                                    (thirdItem, thirdIndex) => (
                                      <Link
                                        key={`level3-${thirdIndex}`}
                                        href={thirdItem.href}
                                        className="py-2 pl-12 text-primary border-l hover:border-primary"
                                        onClick={toggleMenu}
                                      >
                                        {thirdItem.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        } else {
                          return (
                            <Link
                              key={`level2-simple-${subIndex}`}
                              href={subItem.href}
                              className="py-2 pl-6 border-l hover:border-primary -left-1 text-primary"
                              onClick={toggleMenu}
                            >
                              {subItem.title}
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={`level1-simple-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100"
              >
                <Link
                  href={item.href}
                  className="flex items-center w-full py-3 px-2 text-left font-medium text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          }
        })}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3 text-sm">
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
    </div>
  );
}
