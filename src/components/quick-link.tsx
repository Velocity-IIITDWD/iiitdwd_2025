import { trackEvent } from '@/lib/ga';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface QuickLinkProps {
  href: string;
  label: string;
}

export function QuickLink({ href, label }: QuickLinkProps) {
  return (
    <Link
      href={href}
      className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-title-3 text-bold text-amber-50 hover:bg-main/90 transition-colors bg-main rounded px-4 md:px-6 py-2 items-center"
      onClick={() =>
        trackEvent({
          action: 'click',
          category: 'quick_links',
          label: `quick_link_${label.toLowerCase()}`
        })
      }
    >
      {label}
      <ArrowRightIcon size={18} />
    </Link>
  );
}
