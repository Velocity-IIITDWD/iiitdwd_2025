'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DualFeatureSection() {
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <div className="relative">
          <div className="flex flex-col md:flex-row">
            <FeatureCard
              title="Hostel and Facilities"
              description="Great minds get together to explore 1,000-plus interests."
              imgSrc="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg"
            />
            <FeatureCard
              title="Sports and Games"
              description="Our campus offers world-class sports facilities for all levels."
              imgSrc="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  imgSrc
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="relative w-full md:w-1/2 min-h-[400px]">
      <div className="absolute inset-0">
        <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute bg-black/40 inset-0" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-white p-8 max-w-md rounded-lg">
          <h2 className="text-title-1 font-bold mb-4">{title}</h2>
          <p className="text-gray-600 text-title-3 mb-6">{description}</p>
          <button className="group bg-black text-white px-6 py-2 rounded-full text-title-2 flex items-center gap-2 hover:bg-black/90 cursor-pointer transition-all duration-300">
            Learn More
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
