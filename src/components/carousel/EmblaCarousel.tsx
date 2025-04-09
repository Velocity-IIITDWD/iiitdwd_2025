'use client';
import image1 from '@/assets/home/image1.webp';
import image2 from '@/assets/home/image2.webp';
import image3 from '@/assets/home/image3.webp';
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
} from '@tabler/icons-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import { useAutoplay } from './EmblaCarouselAutoplay';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props: PropType) => {
  const { options } = props;
  const progressRef = useRef<HTMLDivElement>(null);
  const [autoplayDelay] = useState(5000);
  const [playProgress, setPlayProgress] = useState(0);
  const startTimeRef = useRef(0);
  const rafIdRef = useRef(0);
  const slides = [image1, image2, image3];

  const autoplayPlugin = useRef(
    Autoplay({ playOnInit: true, delay: autoplayDelay })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    autoplayPlugin.current
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  // Manual progress tracking
  useEffect(() => {
    if (!emblaApi || !autoplayIsPlaying) {
      setPlayProgress(0);
      cancelAnimationFrame(rafIdRef.current);
      return;
    }

    // Start tracking time when autoplay starts
    startTimeRef.current = performance.now();

    const updateProgress = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const progress = Math.min(elapsed / autoplayDelay, 1);
      setPlayProgress(progress);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    return () => {
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [emblaApi, autoplayDelay, autoplayIsPlaying, selectedIndex]);

  // Reset progress on slide change
  useEffect(() => {
    // Reset the timer when the slide changes
    if (autoplayIsPlaying) {
      setPlayProgress(0);
      startTimeRef.current = performance.now();
    }
  }, [selectedIndex]);

  return (
    <div className="embla h-full relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((img, index) => (
            <div className="embla__slide border" key={index}>
              <div className="embla__slide__number">
                <Image src={img} alt="slide" layout="fill" objectFit="cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-2 bg-white/30 backdrop-blur py-2 rounded left-1/2 -translate-x-1/2 flex items-center gap-4">
        <PrevButton
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <React.Fragment key={index}>
              {index === selectedIndex ? (
                <div className="w-8 h-2 bg-primary rounded-full border border-white" />
              ) : (
                <DotButton
                  onClick={() => onDotButtonClick(index)}
                  className="rounded-full border border-white bg-tertiary/30 h-2 w-2"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <NextButton
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>

      <button
        className="embla__play bg-white absolute bottom-4 rounded-full border border-slate-400 p-2 right-4"
        onClick={() => {
          toggleAutoplay();
          if (!autoplayIsPlaying) {
            // Reset progress when starting autoplay
            setPlayProgress(0);
            startTimeRef.current = performance.now();
          }
        }}
        type="button"
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

export default EmblaCarousel;
