'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';

export default function LandingSection() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const topBarHeight = document.getElementById('top-bar')?.clientHeight || 0;
    const headerHeight = document.getElementById('header')?.clientHeight || 0;
    setHeight(`calc(100vh - ${topBarHeight + headerHeight}px)`);
  }, []);

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
        className="w-lg bg-gray-600 h-10 -translate-y-1/2"
      ></div>
    </div>
  );
}
