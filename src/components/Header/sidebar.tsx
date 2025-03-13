import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Import sidebar components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar';

// Import collapsible components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';

// Import your menu data
import { MenuLevel1, MenuLevel2, MenuLevel3 } from '@/data/routes';

const SidebarNavigation = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
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
    <Sidebar className="border-r h-screen" side="right" {...props}>
      {/* <SidebarHeader className="h-14 flex items-center px-4 border-b">
        <h2 className={cn("font-semibold transition-opacity duration-200")}>
          Institute Menu
        </h2>
      </SidebarHeader> */}

      <SidebarContent className="pt-10 px-2">
        <SidebarGroup>
          <SidebarMenu>
            {MenuLevel1?.map((item, index) => {
              if (hasChildren(item?.group!)) {
                // Level 1 item with children
                return (
                  <SidebarGroup key={index} className="p-0">
                    <Collapsible asChild className="group/collapsible">
                      <div>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full">
                            <span>{item?.text}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          {/* Level 2 items */}
                          <SidebarMenuSub>
                            {getLevel2Items(item?.group!)?.map(
                              (subItem, subIndex) => {
                                if (
                                  hasSubChildren(
                                    subItem?.group,
                                    subItem?.subGroup!
                                  )
                                ) {
                                  // Level 2 item with children
                                  return (
                                    <Collapsible key={subIndex}>
                                      <CollapsibleTrigger
                                        asChild
                                        className="group/sub-collapsible"
                                      >
                                        <SidebarMenuSubButton>
                                          <span>{subItem?.text}</span>
                                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/sub-collapsible:rotate-90" />
                                        </SidebarMenuSubButton>
                                      </CollapsibleTrigger>

                                      <CollapsibleContent>
                                        <SidebarMenuSub>
                                          {/* Level 3 items */}
                                          {getLevel3Items(
                                            subItem?.group,
                                            subItem?.subGroup!
                                          )?.map((thirdItem, thirdIndex) => (
                                            <SidebarMenuSubItem
                                              key={thirdIndex}
                                            >
                                              <SidebarMenuSubButton asChild>
                                                <Link href={thirdItem?.href}>
                                                  <span>{thirdItem?.text}</span>
                                                </Link>
                                              </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                          ))}
                                        </SidebarMenuSub>
                                      </CollapsibleContent>
                                    </Collapsible>
                                  );
                                } else {
                                  // Level 2 item without children
                                  return (
                                    <SidebarMenuSubItem key={subIndex}>
                                      <SidebarMenuSubButton asChild>
                                        <Link href={subItem?.href}>
                                          <span>{subItem?.text}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                }
                              }
                            )}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </SidebarGroup>
                );
              } else {
                // Level 1 item without children
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link href={item?.href}>
                        <span>{item?.text}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNavigation;
