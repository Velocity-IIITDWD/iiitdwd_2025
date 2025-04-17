'use client';
import linkedinposts from '@/data/linkedinposts';
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
} from '@tabler/icons-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextButton, PrevButton } from './EmblaCarouselArrowButtons';
import { useAutoplay } from './EmblaCarouselAutoplay';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
// import LinkedInEmbedCards from './LinkedInEmbedCards';

type PropType = {
  options?: EmblaOptionsType;
  autoplayDelay?: number;
  children?: React.ReactNode;
};

const CommonCarousel: React.FC<PropType> = ({
  options,
  autoplayDelay = 5000,
  children
}) => {
  const [playProgress, setPlayProgress] = useState(0);
  const startTimeRef = useRef(0);
  const rafIdRef = useRef(0);
  const linkedInPosts = linkedinposts.map((post) => post.uri);

  // Enable loop functionality by default
  const carouselOptions: EmblaOptionsType = {
    ...options,
    loop: true // Enable infinite looping
  };

  const autoplayPlugin = useRef(
    Autoplay({ playOnInit: true, delay: autoplayDelay })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [
    autoplayPlugin.current
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    resetProgress();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    resetProgress();
  }, [emblaApi]);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const updateProgress = useCallback(() => {
    if (!autoplayIsPlaying) return;

    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / autoplayDelay, 1);
    setPlayProgress(progress);

    if (progress < 1) {
      rafIdRef.current = requestAnimationFrame(updateProgress);
    }
  }, [autoplayIsPlaying, autoplayDelay]);

  const resetProgress = useCallback(() => {
    setPlayProgress(0);
    cancelAnimationFrame(rafIdRef.current);

    if (autoplayIsPlaying) {
      startTimeRef.current = performance.now();
      rafIdRef.current = requestAnimationFrame(updateProgress);
    }
  }, [autoplayIsPlaying, updateProgress]);

  // Handle autoplay progress tracking
  useEffect(() => {
    if (!emblaApi) return;

    resetProgress();

    return () => {
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [emblaApi, autoplayIsPlaying, selectedIndex, resetProgress]);

  const handleToggleAutoplay = useCallback(() => {
    toggleAutoplay();
    resetProgress();
  }, [toggleAutoplay, resetProgress]);

  const handleDotClick = useCallback(
    (index: number) => {
      onDotButtonClick(index);
      resetProgress();
    },
    [onDotButtonClick, resetProgress]
  );

  const handlePrevClick = useCallback(() => {
    if (onAutoplayButtonClick) {
      onAutoplayButtonClick(onPrevButtonClick);
    } else {
      onPrevButtonClick();
    }
    resetProgress();
  }, [onAutoplayButtonClick, onPrevButtonClick, resetProgress]);

  const handleNextClick = useCallback(() => {
    if (onAutoplayButtonClick) {
      onAutoplayButtonClick(onNextButtonClick);
    } else {
      onNextButtonClick();
    }
    resetProgress();
  }, [onAutoplayButtonClick, onNextButtonClick, resetProgress]);

  return (
    <div className="embla h-full w-full relative flex flex-col">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">{children}</div>
      </div>

      <div className="embla__controls flex items-center gap-4">
        <PrevButton onClick={handlePrevClick} disabled={false} />

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <React.Fragment key={index}>
              {index === selectedIndex ? (
                <div className="w-8 h-2 bg-primary rounded-full border border-white" />
              ) : (
                <DotButton
                  onClick={() => handleDotClick(index)}
                  className="rounded-full border border-white bg-tertiary/30 h-2 w-2"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <NextButton onClick={handleNextClick} disabled={false} />
      </div>

      <button
        className="embla__play bg-white absolute bottom-2 rounded-full border border-slate-400 p-2 right-2"
        onClick={handleToggleAutoplay}
        type="button"
        aria-label={autoplayIsPlaying ? 'Pause carousel' : 'Play carousel'}
      >
        {autoplayIsPlaying ? (
          <IconPlayerPauseFilled />
        ) : (
          <IconPlayerPlayFilled />
        )}
      </button>
    </div>
  );
};

export default CommonCarousel;
