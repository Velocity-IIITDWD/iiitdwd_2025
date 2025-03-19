export type HeaderMain = {
  title: string;
  href: string;
  items?: SubmenuGroup[];
};

export type SubmenuGroup = {
  title: string;
  href: string;
  items?: SubmenuItem[];
};
