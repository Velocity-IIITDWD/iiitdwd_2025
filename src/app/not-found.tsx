import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600">Page not found</p>
      <Link
        href="/"
        className="text-primary hover:underline flex items-center gap-2"
      >
        <Home size={16} />
        Go back home
      </Link>
    </div>
  );
}
