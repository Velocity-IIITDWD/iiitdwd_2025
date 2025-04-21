import CommonCarousel from '@/components/carousel/common-carousel';
import { get } from '@/sanity/lib/client';
import { queryCarousel } from '@/sanity/lib/queries';
import { QueryCarouselResult } from '@/sanity/types';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function EventsSection() {
  let carouselData = await get<QueryCarouselResult>(queryCarousel);

  return (
    <CommonCarousel>
      {carouselData?.slice(0, 5).map((item, index) => (
        <div className="embla__slide" key={index}>
          <div
            className="slide_number_main mx-auto flex w-full h-full bg-cover bg-center relative gap-6"
            // style={{
            //   backgroundImage: `url(https://iiitdwd.ac.in${item?.url!})`
            // }}
          >
            <Image
              src={`https://iiitdwd.ac.in${item?.url!}`}
              alt={item?.caption!}
              width={0}
              height={0}
              sizes="100%"
              className="object-cover h-full flex-1 rounded"
            />

            <div className="text-title-2 flex-1 flex flex-col justify-between gap-4 h-full">
              {item?.caption}

              <Link
                href={item?.link!}
                className="flex gap-4 uppercase w-fit text-title-3 text-bold text-amber-50 hover:bg-main/90 transition-colors bg-main rounded px-4 md:px-6 py-2 items-center"
              >
                Read More
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </CommonCarousel>
  );
}
