export type NavMenuItem = {
  text: string;
  href?: string;
  subGroups?: SubmenuGroup[];
};

export type SubmenuGroup = {
  title?: string;
  items: SubmenuItem[];
  width?: number;
};

export type SubmenuItem = {
  text: string;
  subText?: string;
  href: string;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
};

export interface AnnouncementCardProps {
  type?: 'normal' | 'important';
  title: string;
  content: string;
  date: string;
  isNew?: boolean;
}
