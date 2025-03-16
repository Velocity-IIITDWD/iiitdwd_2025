import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Import your menu data
import { MenuLevel1, MenuLevel2, MenuLevel3 } from '@/data/routes';
import { Dispatch, SetStateAction } from 'react';
export default function MobileHeader({
  setIsMenuOpen
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // Check if a Level1 item has children
  const hasChildren = (group: number) => {
    return MenuLevel2.some((item) => item.group === group);
  };

  // Get Level2 items for a specific group
  const getLevel2Items = (group: number) => {
    return MenuLevel2.filter((item) => item.group === group);
  };

  // Check if a Level2 item has children
  const hasSubChildren = (group: number, subGroup: number) => {
    return MenuLevel3.some(
      (item) => item.group === group && item.subGroup === subGroup
    );
  };

  // Get Level3 items for a specific group and subGroup
  const getLevel3Items = (group: number, subGroup: number) => {
    return MenuLevel3.filter(
      (item) => item.group === group && item.subGroup === subGroup
    );
  };

  return (
    <div className="py-4 pt-4 md:pt-10 px-4 h-[calc(100vh-6.5rem)] overflow-y-auto">
      <nav className="flex flex-col space-y-1">
        {MenuLevel1?.map((item, index) => {
          if (hasChildren(item?.group!)) {
            // Level 1 item with children
            return (
              <motion.div
                key={`level1-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index * 0.4) / MenuLevel1.length
                }}
                className="border-b border-gray-100"
              >
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-primary hover:bg-gray-50 rounded-md">
                    {item?.text}
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4">
                    <div className="flex flex-col space-y-1 py-2">
                      {getLevel2Items(item?.group!)?.map(
                        (subItem, subIndex) => {
                          if (
                            hasSubChildren(subItem?.group, subItem?.subGroup!)
                          ) {
                            // Level 2 item with children
                            return (
                              <Collapsible
                                key={`level2-${subIndex}`}
                                className="w-full"
                              >
                                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-2 text-left text-primary hover:bg-gray-50 rounded-md">
                                  {subItem?.text}
                                  <ChevronRight className="h-4 w-4 text-gray-500" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pl-4">
                                  <div className="flex flex-col space-y-1 py-1">
                                    {getLevel3Items(
                                      subItem?.group,
                                      subItem?.subGroup!
                                    )?.map((thirdItem, thirdIndex) => (
                                      <Link
                                        key={`level3-${thirdIndex}`}
                                        href={thirdItem?.href}
                                        className="py-2 px-2 text-primary hover:bg-gray-50 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {thirdItem?.text}
                                      </Link>
                                    ))}
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            );
                          } else {
                            // Level 2 item without children
                            return (
                              <Link
                                key={`level2-simple-${subIndex}`}
                                href={subItem?.href}
                                className="py-2 px-2 text-primary hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem?.text}
                              </Link>
                            );
                          }
                        }
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            );
          } else {
            // Level 1 item without children
            return (
              <motion.div
                key={`level1-simple-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100"
              >
                <Link
                  href={item?.href}
                  className="flex items-center w-full py-3 px-2 text-left font-medium text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item?.text}
                </Link>
              </motion.div>
            );
          }
        })}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3 text-sm">
          <a href="#" className="text-slate-600 hover:text-primary">
            AIMS
          </a>
          <a href="#" className="text-slate-600 hover:text-primary">
            RTI
          </a>
          <a href="#" className="text-slate-600 hover:text-primary">
            NIRF
          </a>
          <a href="#" className="text-slate-600 hover:text-primary">
            Students Fee Portal
          </a>
        </div>
      </div>
    </div>
  );
}
