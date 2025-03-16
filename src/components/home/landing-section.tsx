'use client';
import { BookOpen, Building, GraduationCap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import { StarBorder } from '../ui/star-border';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-center p-4 transition-all rounded-lg cursor-pointer">
      <div className="p-2 mb-4">{icon}</div>
      <div className="">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-500 text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function LandingSection() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const topBarHeight = document.getElementById('top-bar')?.clientHeight || 0;
    const headerHeight = document.getElementById('header')?.clientHeight || 0;
    setHeight(`calc(100vh - ${topBarHeight + headerHeight}px)`);
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: 'Academics',
      description: 'Leading the pack'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: 'Admissions',
      description: 'Your future starts here'
    },
    {
      icon: <Building className="w-12 h-12 text-white" />,
      title: 'Campus',
      description: 'To Nurture Greatness'
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: 'Culture',
      description: 'The University Way'
    }
  ];

  return (
    <div style={{ height }} className="flex relative flex-col items-center">
      <Carousel className="w-full flex-1">
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div
        id="quick-links"
        className="w-fit uppercase flex max-md:flex-col max-md:w-full items-center gap-4 py-4"
      >
        <div className="hidden md:block whitespace-nowrap text-gray-500">
          Quick Links:
        </div>
        <div className="flex gap-1 md:gap-4 max-md:flex-col w-full max-md:max-w-[260px] items-center">
          {/* <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-white bg-primary rounded px-4 md:px-6 py-2 items-center">
            Academics
            <ArrowRightIcon size={18} />
          </button> */}
          <StarBorder>Academics</StarBorder>
          <StarBorder>Admissions</StarBorder>
          <StarBorder>Campus</StarBorder>
          <StarBorder>Culture</StarBorder>
        </div>
        {/* {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))} */}
      </div>
    </div>
  );
}
