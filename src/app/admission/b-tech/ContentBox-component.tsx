'use client';
import { FileText } from 'lucide-react';
import { FC, ReactNode } from 'react';

interface ContentBoxProps {
  title: string;
  children: ReactNode;
}

const ContentBox: FC<ContentBoxProps> = ({ title, children }) => {
  return (
    <div className="rounded-lg bg-gradient-to-t from-gray-200 to-gray-100 p-6 shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-gray-700" size={20} />
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
      </div>

      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default ContentBox;
