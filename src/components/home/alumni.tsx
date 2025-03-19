import Card from '@/components/alumni/card';
import { Button } from '../ui/button';
import { Marquee } from '../ui/marquee';
export default function Alumni() {
  return (
    <div className="bg-tertiary/30 relative">
      {/* <div className="h-full absolute top-0 left-0 w-full bg-black opacity-80 z-[1]" /> */}
      <div className=" z-[2] relative py-10  w-full flex flex-col items-center">
        <div className="mt-4 w-full text-primary text-center px-2 max-sm:px-4 font-semibold text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.3]">
          <h1 className="">Explore inspiring journeys and achievements</h1>
          <h2>from our thriving alumni community.</h2>
        </div>

        <div className="relative flex w-full flex-col items-center py-10 justify-center overflow-hidden">
          <Marquee className="[--duration:20s]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Marquee>
          <Marquee className="[--duration:20s]" reverse>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Marquee>
        </div>

        <Button>View All</Button>
      </div>
    </div>
  );
}
