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
      <div className="sticky top-[50vh] -translate-x-[calc(50%-1.5px)] w-6 h-6 rounded-full bg-[#f18f01] m-0 border border-[#f18f01] bg-clip-content p-1"></div>
      {children}
    </div>
  );
}
