import SectionHeading from '@/components/layout/section-heading';
import Link from 'next/link';

interface jumpLinksProps {
  title: string;
  link: string;
}

const JumpLink = (props: jumpLinksProps) => {
  return (
    <li className="w-fit max-md:w-full">
      <Link
        className="px-4 rounded uppercase w-full flex justify-center text-body font-bold py-2 bg-secondary text-main"
        href={`/admission/#${props?.link}`}
      >
        {props?.title}
      </Link>
    </li>
  );
};

export default function HeroSection() {
  return (
    <div className="z-[2] w-[87.5vw] max-w-[1680px] mx-auto text-center h-full items-center justify-center flex flex-col gap-3 text-white">
      <SectionHeading className="w-fit" reverse title="About Us" free />
      <div className="font-bold text-main-title max-w-5xl text-center">
        See Where One Small Step Can Take You
      </div>
      <div className="text-title-2 font-medium max-w-4xl text-white">
        We&apos;re here to help you learn more about becoming a Boilermaker —
        from admissions and exploring majors and programs to finding information
        about tuition reviews. Every part of the process is explained.
      </div>

      {/* <div className="flex gap-10 max-md:flex-col w-full mt-10 items-center">
        <div className="whitespace-nowrap font-semibold">Jump To:</div>
        <ul className="w-full z-[1] relative flex max-md:flex-col max-md:gap-5 justify-between items-center after:-z-[1] after:content-[''] after:max-md:hidden after:absolute after:h-full after:w-full after:top-1/2 after:transform after:-translate-y-1/2 after:bg-center after:bg-[length:10px_2px] after:bg-repeat-x after:[background-image:linear-gradient(to_right,#fff_20%,rgba(255,255,255,0)_0%)]">
          <JumpLink title="Find your major" link="major" />
          <JumpLink title="visit us" link="visit" />
          <JumpLink title="review tuition" link="tuition" />
        </ul>
      </div> */}
    </div>
  );
}
