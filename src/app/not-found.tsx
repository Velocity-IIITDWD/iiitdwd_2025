import { IconChevronRight } from '@tabler/icons-react';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="max-w-xl text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] font-semibold text-center">
        The page you&apos;re looking for can&apos;t be found.
      </div>
      <Link
        href="/"
        className="text-primary hover:underline flex items-center gap-2"
      >
        <Home size={16} />
        return to Home <IconChevronRight size={16} />
      </Link>
    </div>
  );
}
