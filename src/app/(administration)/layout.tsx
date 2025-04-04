'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Campus0 from '@/assets/campus_0.webp';

import navigationData from '@/data/navigation';
import { NavigationItem } from '@/types/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const matchPathToTitle = (
    items: NavigationItem[],
    path: string
  ): [string, boolean, { title: string; href: string }[]] => {
    for (const item of items) {
      const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
      const normalizedHref = item.href.endsWith('/')
        ? item.href.slice(0, -1)
        : item.href;

      if (normalizedHref === normalizedPath)
        return [
          item.title,
          item?.meta?.disableLayout || false,
          [{ title: item.title, href: item.href }]
        ];
      if (item.items) {
        const [title, disableLayout, breadcrumbs] = matchPathToTitle(
          item.items,
          path
        );
        if (title !== '')
          return [
            title,
            disableLayout,
            [{ title: item.title, href: item.href }, ...breadcrumbs]
          ];
      }
    }
    return ['', true, []];
  };

  const [currentTitle, disableHero, breadcrumbs] = matchPathToTitle(
    navigationData,
    pathname
  );

  if (disableHero) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen text-justify">
      <div className="relative w-full h-[60vh]">
        <Image
          src={Campus0}
          alt="National Institute of Technology Karnataka, Surathkal campus entrance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="absolute left-0 right-0 bottom-16 px-4 md:px-8 container mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {currentTitle}
          </h1>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="px-4 md:px-8 container mx-auto">
          <nav className="flex items-center text-sm md:text-base">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary font-medium">
                    {crumb.title}
                  </span>
                ) : (
                  <span
                    // href={crumb.href}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {crumb.title}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {children}
    </div>
  );
}
