import SectionHeading from '../section-heading';

export default function LandingSection() {
  return (
    <div className="w-full relative bg-[url('/Alumni_Background.jpg')] bg-cover h-screen px-2 md:px-4 lg:px-12 xl:px-16 py-16">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />

      <div className="sticky top-0">
        <SectionHeading reverse title="About Us" free />
      </div>

      <div className=""></div>
    </div>
  );
}
