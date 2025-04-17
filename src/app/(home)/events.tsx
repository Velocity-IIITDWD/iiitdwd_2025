import CommonCarousel from '@/components/carousel/common-carousel';
import { get } from '@/sanity/lib/client';
import { queryCarousel } from '@/sanity/lib/queries';
import { QueryCarouselResult } from '@/sanity/types';

export default async function EventsSection() {
  let carouselData = await get<QueryCarouselResult>(queryCarousel);

  return (
    <CommonCarousel>
      {carouselData?.slice(0, 5).map((item, index) => (
        // item?.link ? (
        //   <Link key={index} className="embla__slide" href={item?.link}>
        //     <div className="slide_number_main mx-auto border rounded-lg flex w-full h-full flex-col relative">
        //       {/*
        //     <Card className="slide_number_main border-none w-full p-0 h-full">
        //       <CardContent className="flex border rounded-lg overflow-hidden p-0 relative shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-gray-50 h-full items-center justify-center"> */}
        //       <Image
        //         alt="main image"
        //         src={`https://iiitdwd.ac.in${item?.url!}`}
        //         width={0}
        //         height={0}
        //         sizes="100%"
        //         className="w-full h-auto md:h-full relative object-contain"
        //       />

        //       <div className="absolute text-body md:text-callout bottom-4 left-1/2 w-fit max-w-[98%] xl:w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
        //         {item?.caption}
        //       </div>
        //       {/* </CardContent>
        //     </Card> */}
        //     </div>
        //   </Link>
        // ) : (
        //   <div className="embla__slide" key={index}>
        //     <div className="slide_number_main mx-auto border rounded-lg flex w-full h-full flex-col relative">
        //       <Image
        //         alt="main image"
        //         src={item?.url!}
        //         width={0}
        //         height={0}
        //         sizes="100%"
        //         className="w-full h-[80%] md:h-full relative object-cover object-top"
        //       />

        //       <div className="absolute text-body md:text-callout bottom-4 left-1/2 w-fit max-w-[98%] -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
        //         {item?.caption}
        //       </div>
        //       {/* </CardContent>
        //   </Card> */}
        //     </div>
        //   </div>
        // )
        <div className="embla__slide">
          <div
            className="slide_number_main mx-auto flex w-full h-full bg-cover bg-center flex-col relative"
            style={{
              backgroundImage: `url(https://iiitdwd.ac.in${item?.url!})`
            }}
          >
            <div className="absolute text-body md:text-callout bottom-4 left-1/2 w-fit max-w-[98%] xl:w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
              {item?.caption}
            </div>
          </div>
        </div>
      ))}
    </CommonCarousel>
  );
}
