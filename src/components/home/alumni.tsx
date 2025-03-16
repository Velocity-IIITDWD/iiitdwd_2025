import Card from '@/components/alumni/card';
import { Button } from '../ui/button';
import { Marquee } from '../ui/marquee';
export default function Alumni() {
  return (
    <div className="bg-[url('/Alumni_Background.JPG')] bg-cover bg-center relative">
      <div className="h-full absolute top-0 left-0 w-full bg-primary opacity-85 z-[1]" />
      <div className=" z-[2] relative py-10  w-full flex flex-col items-center px-4 md:px-6 lg:px-10">
        <div className="mt-4 w-full text-white text-center px-2 max-sm:px-4 font-medium text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.3]">
          <h1 className="">Explore inspiring journeys and achievements</h1>
          <h2>from our thriving alumni community.</h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Marquee>
          <Marquee className="!mt-0" direction="right">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Marquee>
        </div>

        <Button variant={'secondary'}>View All</Button>
      </div>
    </div>
  );
}
