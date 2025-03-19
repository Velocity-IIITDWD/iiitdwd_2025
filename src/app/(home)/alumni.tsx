import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';

function AlumniCard() {
  return <div className="bg-card w-md shrink-0 shadow-lg rounded h-44"></div>;
}

export default function AlumniSection() {
  return (
    <div className="bg-tertiary/30 relative">
      <div className="z-[2] relative py-10 w-full flex flex-col items-center">
        <div className="mt-4 w-full text-primary text-center px-2 max-sm:px-4 font-semibold text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.3]">
          <h1 className="">Explore inspiring journeys and achievements</h1>
          <h2>from our thriving alumni community.</h2>
        </div>

        <div className="relative flex w-full flex-col items-center py-10 justify-center overflow-hidden">
          <Marquee className="[--duration:20s]">
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
          </Marquee>
          <Marquee className="[--duration:20s]" reverse>
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
          </Marquee>
        </div>

        <Button>View All</Button>
      </div>
    </div>
  );
}
