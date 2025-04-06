'use client';
import { HelpCircle } from 'lucide-react';
import { FC } from 'react';

const QueriesBox: FC = () => {
  return (
    <div className="rounded-2xl border bg-gradient-to-tl from-white to-secondary/50 p-6 shadow-sm w-full transition-all duration-200">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="text-main" size={20} />
        <h2 className="font-bold text-title-1 text-main">Any Queries?</h2>
      </div>

      <div className="text-gray-500 text-title-3 font-normal">
        <p>
          Dear prospective students, you can directly ask any questions to our
          faculty at{' '}
          <a
            href="mailto:contact@iiitdwd.ac.in"
            className="font-bold text-main hover:underline"
          >
            contact@iiitdwd.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default QueriesBox;
