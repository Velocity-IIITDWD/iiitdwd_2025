'use client';
import { HelpCircle } from 'lucide-react';
import { FC } from 'react';

const QueriesBox: FC = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-tl from-[#0a0a0a] to-[#041e3f] p-6 shadow-sm w-full transition-all duration-200">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="text-white" size={20} />
        <h2 className="font-bold text-lg text-white">Any Queries?</h2>
      </div>

      <div className="text-white">
        <p>
          Dear prospective students, you can directly ask any questions to our
          faculty at{' '}
          <a
            href="mailto:contact@iiitdwd.ac.in"
            className="font-bold text-blue-300 hover:underline"
          >
            contact@iiitdwd.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default QueriesBox;
