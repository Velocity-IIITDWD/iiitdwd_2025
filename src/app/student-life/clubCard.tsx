'use client';
import { ArrowRight } from 'lucide-react';

export default function ClubCard({
  title,
  description,
  imgSrc,
  btnText
}: {
  title: string;
  description: string;
  imgSrc: string;
  btnText: string;
}) {
  return (
    <div className="space-y-6 transform transition-all duration-700 ease-out hover:translate-y-[-8px]">
      <div className="relative overflow-hidden rounded-lg h-48 group">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>
      <h2 className="text-3xl font-bold text-[#c5b783]">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <button className="group bg-[#c5b783] text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#d6c894] transition-all duration-300">
        {btnText}
        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
