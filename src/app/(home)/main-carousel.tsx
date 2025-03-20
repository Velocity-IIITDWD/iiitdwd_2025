import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import SectionHeading from '@/components/layout/section-heading';
import { EmblaOptionsType } from 'embla-carousel';

export default function MainCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="h-[calc(100vh-5rem)] w-full overflow-hidden relative mt-16">
      <SectionHeading
        className="!absolute left-10 top-10"
        title="explore "
        free
        reverse
      />

      <EmblaCarousel options={OPTIONS} />
    </div>
  );
}
