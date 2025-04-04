'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full flex flex-col lg:block">
          <div className="relative lg:absolute left-0 top-0 w-full lg:w-[60%] h-auto lg:h-full z-10 flex items-center p-8 lg:p-0">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-12 xl:ml-24 space-y-8">
              <div className="inline-block bg-main px-5 py-2 rounded-full">
                <span className="text-white font-medium text-sm tracking-wide">
                  LIFE AT IIIT DHARWAD
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-left">
                EXPERIENCE THE
                <br />
                STUDENT
                <br />
                COMMUNITY
              </h1>
              <p className="text-gray-600 text-lg max-w-lg text-left">
                At our university, every student can take small steps to reach
                their giant leaps through unique educational opportunities,
                student organizations, campus resources and more.
              </p>
            </div>
          </div>

          <div className="relative lg:absolute right-0 top-0 w-full lg:w-[50%] h-80 lg:h-full mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-[#f5f5f5]">
              <Image
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
                alt="Students on campus"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
