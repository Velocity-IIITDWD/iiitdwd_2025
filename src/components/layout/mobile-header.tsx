'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import navigationData from '@/data/navigation';
import { trackEvent } from '@/lib/ga';
import { NavigationItem } from '@/types/navigation';
import { useKBar } from 'kbar';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MobileHeader({
  toggleMenu
}: {
  toggleMenu: () => void;
}) {
  const hasChildren = (item: any) => {
    return item.items && item.items.length > 0;
  };

  const { query } = useKBar();
  const [openMenu, setOpenMenu] = useState<string>('');
  const [isMacOS, setIsMacOS] = useState(false);

  useEffect(() => {
    setIsMacOS(window.navigator.platform.toLowerCase().includes('mac'));
  }, []);

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
                  <CollapsibleTrigger
                    className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-primary hover:bg-secondary/50 rounded-md"
                    onClick={() =>
                      trackEvent({
                        action: 'click',
                        category: 'mobile_navigation',
                        label: `expand_menu_${item.title}`
                      })
                    }
                  >
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
                              <CollapsibleTrigger
                                className="flex items-center hover:bg-secondary/50 justify-between w-full py-2 pl-6 pr-3 text-left text-primary border-l-2 hover:border-primary"
                                onClick={() =>
                                  trackEvent({
                                    action: 'click',
                                    category: 'mobile_navigation',
                                    label: `expand_submenu_${subItem.title}`
                                  })
                                }
                              >
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
                                        className="py-2 pl-12 text-primary border-l-2 hover:border-primary hover:bg-secondary/50"
                                        onClick={() => {
                                          toggleMenu();
                                          trackEvent({
                                            action: 'click',
                                            category: 'mobile_navigation',
                                            label: `link_${thirdItem.title}`
                                          });
                                        }}
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
                              className="py-2 pl-6 border-l-2 hover:border-primary hover:bg-secondary/50 -left-1 text-primary"
                              onClick={() => {
                                toggleMenu();
                                trackEvent({
                                  action: 'click',
                                  category: 'mobile_navigation',
                                  label: `link_${subItem.title}`
                                });
                              }}
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
                  onClick={() => {
                    toggleMenu();
                    trackEvent({
                      action: 'click',
                      category: 'mobile_navigation',
                      label: `link_${item.title}`
                    });
                  }}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          }
        })}
      </nav>

      <button
        className="text-gray-600 hover:text-primary rounded bg-tertiary/20 px-4.5 py-2.5 flex items-center text-body cursor-pointer"
        onClick={() => {
          query.toggle();
        }}
      >
        <Search size={14} className="mr-3" />
        What are you looking for?
      </button>

      <div className="mt-6 pt-4 border-t border-main/30">
        <div className="flex flex-col space-y-3 text-body">
          <Link
            href={'https://aims.iiitdwd.ac.in/aims/'}
            onClick={() =>
              trackEvent({
                action: 'click',
                category: 'mobile_navigation',
                label: 'link_aims'
              })
            }
          >
            AIMS
          </Link>
          <Link
            href={'https://iiitdwd.ac.in/pdfs/RTI.pdf'}
            onClick={() =>
              trackEvent({
                action: 'click',
                category: 'mobile_navigation',
                label: 'link_rti'
              })
            }
          >
            RTI
          </Link>
          <Link
            href={'/academics/nirf'}
            onClick={() =>
              trackEvent({
                action: 'click',
                category: 'mobile_navigation',
                label: 'link_nirf'
              })
            }
          >
            NIRF
          </Link>
          <Link
            href={
              'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=873279'
            }
            onClick={() =>
              trackEvent({
                action: 'click',
                category: 'mobile_navigation',
                label: 'link_fee_portal'
              })
            }
          >
            Students Fee Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
