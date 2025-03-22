import React from 'react';

export default function JourneyComponent({
  id,
  children
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="relative mb-0">
      <div className="sticky top-[50vh] -translate-x-[calc(50%-1.5px)] w-6 h-6 rounded-full bg-[#8e6f3e] m-0 border border-[#8e6f3e] bg-clip-content p-1"></div>
      {children}
    </div>
  );
}
