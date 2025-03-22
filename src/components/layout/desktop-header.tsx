import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar';
import navigationData from '@/data/navigation';
import { NavigationItem } from '@/types/navigation';
import { motion } from 'framer-motion';
import { useKBar } from 'kbar';
import { Command, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DesktopHeader() {
  const { query } = useKBar();
  const [openMenu, setOpenMenu] = useState<string>('');

  const renderMenuItems = (items: NavigationItem[]) => {
    return items.map((item, index) => {
      if (item.items && item.items.length > 0) {
        return (
          <MenubarSub key={index}>
            <MenubarSubTrigger>{item.title}</MenubarSubTrigger>
            <MenubarSubContent asChild>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  staggerChildren: 0.1
                }}
              >
                {item.items.map((subItem, subIndex) => {
                  if (subItem?.items && subItem.items.length > 0) {
                    return (
                      <MenubarSub key={subIndex}>
                        <MenubarSubTrigger>{subItem.title}</MenubarSubTrigger>
                        <MenubarSubContent asChild>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: 'easeInOut',
                              staggerChildren: 0.1
                            }}
                          >
                            {subItem.items.map(
                              (
                                nestedItem: NavigationItem,
                                nestedIndex: number
                              ) => (
                                <MenubarItem key={nestedIndex} asChild>
                                  <Link href={nestedItem.href!}>
                                    {nestedItem.title}
                                  </Link>
                                </MenubarItem>
                              )
                            )}
                          </motion.div>
                        </MenubarSubContent>
                      </MenubarSub>
                    );
                  } else {
                    return (
                      <MenubarItem key={subIndex} asChild>
                        <Link href={subItem.href!}>{subItem.title}</Link>
                      </MenubarItem>
                    );
                  }
                })}
              </motion.div>
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem key={index} asChild>
            <Link href={item.href!}>{item.title}</Link>
          </MenubarItem>
        );
      }
    });
  };

  return (
    <Menubar
      className="border-b max-md:hidden border-none px-2"
      value={openMenu}
      onValueChange={setOpenMenu}
    >
      {navigationData.map((item, index) => (
        <MenubarMenu key={index} value={item.title}>
          <MenubarTrigger
            className="font-medium"
            onMouseEnter={() => setOpenMenu(item.title)}
            // onMouseLeave={() => setOpenMenu('')} // keep this commented because it will immediately close the menu when the mouse leaves the trigger making it unsable to move the cursor to the menu items
          >
            {item?.href ? (
              <Link href={item?.href}>{item.title}</Link>
            ) : (
              item.title
            )}
            {/* <Link href={item?.href}>{item.title}</Link> */}
          </MenubarTrigger>
          {item.items && item.items.length > 0 && (
            <MenubarContent
              asChild
              onMouseEnter={() => setOpenMenu(item.title)}
              // onMouseLeave={() => setOpenMenu('')}  // keep this commented because it will immediately close the menu when the mouse leaves the trigger making it unsable to move the cursor to the menu items
            >
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  staggerChildren: 0.1
                }}
              >
                {renderMenuItems(item.items)}
              </motion.div>
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}

      <button
        className="text-gray-600 hover:text-primary rounded-full bg-tertiary/20 px-2 py-1 flex items-center text-sm cursor-pointer"
        onClick={() => {
          query.toggle();
        }}
      >
        <Search size={14} className="mr-3" />
        {navigator.platform.toLowerCase().includes('mac') ? (
          <Command size={14} className="mr-1" />
        ) : (
          <span className="mr-1">Ctrl</span>
        )}
        K
      </button>
    </Menubar>
  );
}
