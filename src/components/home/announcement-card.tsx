// components/announcement-card.tsx
import { AnnouncementCardProps } from '@/types/global';
import { ArrowRight, Pin } from 'lucide-react';

export default function AnnouncementCard({
  type = 'normal',
  title,
  content,
  date,
  isNew = false
}: AnnouncementCardProps) {
  return (
    <div className="flex gap-4 hover:bg-accent flex-1 rounded-lg px-4 py-3 cursor-pointer items-start border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mt-1">
        {type === 'important' ? (
          <Pin size={20} className="text-red-500" />
        ) : (
          <ArrowRight size={20} className="text-blue-500" />
        )}
      </div>

      <div className="space-y-1 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-lg">{title}</h3>
          {isNew && (
            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              NEW
            </span>
          )}
        </div>
        <p className="text-gray-700">{content}</p>
        <span className="text-xs text-slate-400 block">{date}</span>
      </div>
    </div>
  );
}
