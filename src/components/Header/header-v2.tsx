import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { navMenuItems } from '@/data/routes';
import { motion } from 'framer-motion';
import { useKBar } from 'kbar';
import { Command, Search } from 'lucide-react';
import Link from 'next/link';

export default function DesktopHeaderV2() {
  const { query } = useKBar();
  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        ".submenu-trigger[data-state='open']"
      );
      const dropdowns = document.querySelectorAll(
        ".nav-viewport[data-state='open']"
      );

      if (!triggers.length) return;

      const trigger = triggers[0] as HTMLElement;
      if (!trigger) return;

      const { offsetLeft, offsetWidth } = trigger;
      const menuLeftPosition =
        offsetLeft + offsetWidth / 2 - trigger.clientWidth / 2;

      document.documentElement.style.setProperty(
        '--menu-left-position',
        `${menuLeftPosition}px`
      );
    }, 0);
  }

  return (
    <NavigationMenu
      onValueChange={onNavChange}
      className="ml-auto md:flex items-center justify-center mr-4 gap-8"
    >
      <NavigationMenuList>
        {navMenuItems.map((item) => {
          if (!item?.subGroups?.length)
            return (
              <NavigationMenuItem key={item.text}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href!}>
                    <div className=" p-0 rounded-md w-full">{item.text}</div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );

          const groupWidthSum = item.subGroups.reduce(
            (sum, group) => sum + (group.width || 150),
            0
          );

          return (
            <NavigationMenuItem key={item.text}>
              <NavigationMenuTrigger className="submenu-trigger">
                {!item.href ? (
                  item.text
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href={item.href!}>
                      <div>{item.text}</div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul
                  className="flex gap-0 p-0 text-sm"
                  style={{ width: `${groupWidthSum}px` }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                >
                  {item.subGroups.map((group, i) => (
                    <motion.div
                      key={i}
                      className={`flex flex-col px-2 ${
                        i % 2 === 0 ? '' : 'border-l'
                      }`}
                      style={{ width: `${group.width || 150}px` }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {group.title && (
                        <h3 className="font-semibold p-2 text-base">
                          {group.title}
                        </h3>
                      )}
                      {group.items
                        .filter((gItem) => !gItem.hideOnDesktop)
                        .map((gItem, j) => (
                          <motion.div
                            key={gItem.text}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i + j) * 0.1 }}
                            className="hover:border-b hover:border-b-primary"
                          >
                            <NavigationMenuLink
                              className="group"
                              href={gItem.href}
                            >
                              <div className="flex font-medium flex-col text-gray-500 group-hover:text-primary p-1 rounded-md w-full">
                                {gItem.text}
                                {gItem.subText && (
                                  <div className="text-gray-500 font-light text-xs">
                                    {gItem.subText}
                                  </div>
                                )}
                              </div>
                            </NavigationMenuLink>
                          </motion.div>
                        ))}
                    </motion.div>
                  ))}
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
        {/* <NavigationMenuItem>
          <NavigationMenuLink>
            <Command /> K
          </NavigationMenuLink>
        </NavigationMenuItem> */}
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
