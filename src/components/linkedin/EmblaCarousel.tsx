// 'use client';
// import LinkedPosts from '@/data/linkedinposts';
// import {
//   EmblaCarouselType,
//   EmblaEventType,
//   EmblaOptionsType
// } from 'embla-carousel';
// import Autoplay from 'embla-carousel-autoplay';
// import useEmblaCarousel from 'embla-carousel-react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import React, { useCallback, useRef } from 'react';
// import LinkedInEmbedCards from './LinkedInEmbedCards';

// const TWEEN_FACTOR_BASE = 0.1;

// const numberWithinRange = (number: number, min: number, max: number): number =>
//   Math.min(Math.max(number, min), max);

// type PropType = {
//   //   slides: SlideType[];
//   options?: EmblaOptionsType;
// };

// const LinkedInCarousel: React.FC<PropType> = ({ options }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
//     Autoplay({ delay: 4000, stopOnInteraction: false })
//   ]);

//   const linkedInPosts = LinkedPosts.map((post) => post.uri);

//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   const tweenFactor = useRef(0);
//   const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
//   const tweenNodes = useRef<HTMLElement[]>([]);

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//       return slideNode.querySelector('.slide_number_main') as HTMLElement;
//     });
//   }, []);

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
//   }, []);

//   const tweenScale = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       const engine = emblaApi.internalEngine();
//       const scrollProgress = emblaApi.scrollProgress();
//       const slidesInView = emblaApi.slidesInView();
//       const isScrollEvent = eventName === 'scroll';

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress;
//         const slidesInSnap = engine.slideRegistry[snapIndex];

//         slidesInSnap.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//           if (engine.options.loop) {
//             engine.slideLooper.loopPoints.forEach((loopItem) => {
//               const target = loopItem.target();

//               if (slideIndex === loopItem.index && target !== 0) {
//                 const sign = Math.sign(target);

//                 if (sign === -1) {
//                   diffToTarget = scrollSnap - (1 + scrollProgress);
//                 }
//                 if (sign === 1) {
//                   diffToTarget = scrollSnap + (1 - scrollProgress);
//                 }
//               }
//             });
//           }

//           const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
//           const scale = numberWithinRange(tweenValue, 0, 1).toString();
//           const tweenNode = tweenNodes.current[slideIndex];
//           tweenNode.style.transform = `scale(${scale})`;
//         });
//       });
//     },
//     []
//   );

//   const tweenOpacity = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       const engine = emblaApi.internalEngine();
//       const scrollProgress = emblaApi.scrollProgress();
//       const slidesInView = emblaApi.slidesInView();
//       const isScrollEvent = eventName === 'scroll';

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress;
//         const slidesInSnap = engine.slideRegistry[snapIndex];

//         slidesInSnap.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//           if (engine.options.loop) {
//             engine.slideLooper.loopPoints.forEach((loopItem) => {
//               const target = loopItem.target();

//               if (slideIndex === loopItem.index && target !== 0) {
//                 const sign = Math.sign(target);

//                 if (sign === -1) {
//                   diffToTarget = scrollSnap - (1 + scrollProgress);
//                 }
//                 if (sign === 1) {
//                   diffToTarget = scrollSnap + (1 - scrollProgress);
//                 }
//               }
//             });
//           }

//           const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
//           const opacity = numberWithinRange(tweenValue, 0, 1).toString();
//           emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
//         });
//       });
//     },
//     []
//   );

//   const onSelect = React.useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   React.useEffect(() => {
//     if (!emblaApi) return;
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on('select', onSelect);
//     emblaApi.on('reInit', onSelect);

//     setTweenNodes(emblaApi);
//     setTweenFactor(emblaApi);
//     tweenScale(emblaApi);
//     tweenOpacity(emblaApi);

//     emblaApi
//       .on('reInit', setTweenNodes)
//       .on('reInit', setTweenFactor)
//       .on('reInit', tweenScale)
//       .on('scroll', tweenScale)
//       .on('slideFocus', tweenScale)
//       .on('reInit', tweenOpacity)
//       .on('scroll', tweenOpacity)
//       .on('slideFocus', tweenOpacity);
//   }, [
//     emblaApi,
//     onSelect,
//     setTweenFactor,
//     setTweenNodes,
//     tweenOpacity,
//     tweenScale,
//     linkedInPosts
//   ]);

//   const onPrevButtonClick = () => emblaApi && emblaApi.scrollPrev();
//   const onNextButtonClick = () => emblaApi && emblaApi.scrollNext();
//   const onDotButtonClick = (index: number) =>
//     emblaApi && emblaApi.scrollTo(index);

//   return (
//     <section className="embla relative flex flex-col">
//       <div className="embla__viewport flex-1" ref={emblaRef}>
//         <div className="embla__container">
//           {/* <TestimonialCards />
//           <TestimonialCards />
//           <TestimonialCards />
//           <TestimonialCards />
//           <TestimonialCards /> */}
//           {linkedInPosts.map((postLink, index) => (
//             <LinkedInEmbedCards key={index} postLink={postLink} />
//           ))}
//         </div>
//       </div>

//       <button
//         className="hidden md:flex md:absolute bg-slate-900/20 z-[5] rounded md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:left-2"
//         onClick={onPrevButtonClick}
//         disabled={emblaApi?.canScrollPrev() === false}
//       >
//         <ChevronLeft size={32} />
//       </button>
//       <button
//         className="hidden md:flex md:absolute bg-slate-900/20 z-[5] rounded md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:right-2"
//         onClick={onNextButtonClick}
//         disabled={emblaApi?.canScrollNext() === false}
//       >
//         <ChevronRight size={32} />
//       </button>

//       <div className="flex items-center gap-3 px-4 justify-between md:justify-center mt-3">
//         <div className="flex md:hidden gap-4">
//           <button
//             className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-text-col border-dwd-primary"
//             onClick={onPrevButtonClick}
//             disabled={emblaApi?.canScrollPrev() === false}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-text-col border-dwd-primary"
//             onClick={onNextButtonClick}
//             disabled={emblaApi?.canScrollNext() === false}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//         <div className="flex gap-2 z-[5]">
//           {scrollSnaps.map((_, index) => (
//             <button
//               key={index}
//               className={`aspect-square rounded-full border-2 cursor-pointer h-[10px]  ${
//                 index === selectedIndex
//                   ? 'border-main/70 w-6 bg-main'
//                   : 'border-main/70'
//               }`}
//               onClick={() => onDotButtonClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LinkedInCarousel;

'use client';
import image1 from '@/assets/home/image1.webp';
import image2 from '@/assets/home/image2.webp';
import image3 from '@/assets/home/image3.webp';
import linkedinposts from '@/data/linkedinposts';
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
} from '@tabler/icons-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useRef, useState } from 'react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../carousel/EmblaCarouselArrowButtons';
import { useAutoplay } from '../carousel/EmblaCarouselAutoplay';
import { DotButton, useDotButton } from '../carousel/EmblaCarouselDotButton';
import LinkedInEmbedCards from './LinkedInEmbedCards';

type PropType = {
  options?: EmblaOptionsType;
};

const LinkedInCarousel: React.FC<PropType> = (props: PropType) => {
  const { options } = props;
  const progressRef = useRef<HTMLDivElement>(null);
  const [autoplayDelay] = useState(5000);
  const [playProgress, setPlayProgress] = useState(0);
  const startTimeRef = useRef(0);
  const rafIdRef = useRef(0);
  const slides = [image1, image2, image3];

  const linkedInPosts = linkedinposts.map((post) => post.uri);

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
    <div className="embla h-full w-full relative flex flex-col">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {linkedInPosts.map((postLink, index) => (
            <LinkedInEmbedCards key={index} postLink={postLink} />
          ))}
        </div>
      </div>

      <div className="embla__controls flex items-center gap-4">
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
        className="embla__play bg-white absolute bottom-2 rounded-full border border-slate-400 p-2 right-2"
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

export default LinkedInCarousel;
