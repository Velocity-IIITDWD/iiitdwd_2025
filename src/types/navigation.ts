export interface NavigationItem {
  title: string;
  href: string;
  items?: NavigationItem[];
  meta?: {
    disableLayout?: boolean;
  };
}
