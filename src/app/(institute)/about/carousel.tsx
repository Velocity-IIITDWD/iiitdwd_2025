'use client';
// components/ImageCarousel.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Slide {
  title: string;
  content: React.ReactNode;
}

interface ImageCarouselProps {
  slides: Slide[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideWidth = 75; // Percentage of viewport width

  // Clone slides for infinite effect
  const slideCount = slides.length;
  const extendedSlides = [...slides, ...slides, ...slides];
  const offset = slideCount;

  // Calculate the real index for the cloned slides (for dot indicators)
  const getRealIndex = (index: number) => {
    return ((index % slideCount) + slideCount) % slideCount;
  };

  // Smooth scroll to slide
  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;

    setIsTransitioning(true);
    setCurrentSlide(index);
  }, []);

  // Navigation handlers
  const goToNextSlide = useCallback(() => {
    const nextSlide = currentSlide + 1;
    scrollToSlide(nextSlide);
  }, [currentSlide, scrollToSlide]);

  const goToPrevSlide = useCallback(() => {
    const prevSlide = currentSlide - 1;
    scrollToSlide(prevSlide);
  }, [currentSlide, scrollToSlide]);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      scrollToSlide(offset + slideIndex);
    },
    [offset, scrollToSlide]
  );

  // Handle infinite loop effect
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // If we've moved past the cloned slides, snap back to the original slides
      if (currentSlide >= offset * 2) {
        setCurrentSlide(currentSlide - offset);
      } else if (currentSlide < offset) {
        setCurrentSlide(currentSlide + offset);
      }
    };

    const carouselElement = document.querySelector('.carousel-track');
    carouselElement?.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      carouselElement?.removeEventListener(
        'transitionend',
        handleTransitionEnd
      );
    };
  }, [currentSlide, offset]);

  // Initial setup - start from the middle set of slides
  useEffect(() => {
    setCurrentSlide(offset);
  }, [offset]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="relative w-full flex flex-col pl-2 md:pl-4 lg:pl-12 xl:pl-16 overflow-hidden gap-8">
      {/* Carousel content */}
      <div className="relative z-10 overflow-hidden" ref={carouselRef}>
        <div
          className={`carousel-track flex ${
            isTransitioning
              ? 'transition-transform duration-500 ease-out'
              : 'transition-none'
          }`}
          style={{
            transform: `translateX(calc(-${currentSlide * slideWidth}%))`
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="md:min-w-[75%] px-2"
              style={{ flex: '0 0 75%' }}
            >
              <Card
                className={`border rounded-lg border-white bg-black/50 text-white ${
                  getRealIndex(index - currentSlide) === 0
                    ? 'opacity-100'
                    : 'opacity-70'
                }`}
              >
                <CardContent className="flex flex-col justify-center p-4 md:p-12 h-96">
                  <div className="max-w-md mx-auto text-center">
                    <h2 className="text-lg md:text-4xl font-bold mb-6">
                      {slide.title}
                    </h2>
                    {slide.content}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 border-white hover:bg-white/20"
          onClick={goToPrevSlide}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </Button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                getRealIndex(currentSlide - offset) === index
                  ? 'bg-white'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 border-white hover:bg-white/20"
          onClick={goToNextSlide}
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ImageCarousel;
