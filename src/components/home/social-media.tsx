import SectionHeading from '../section-heading';
import { Card } from '../ui/card';

export default function SocialMedia() {
  return (
    <section className="w-full ">
      <div className="mt-4 w-full text-center px-2 max-sm:px-4 font-medium text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.1] mb-20">
        <h1 className="">Stay connected with the latest</h1>
        <h2>insights and updates from our community.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <SectionHeading title="Twitter" />
          <Card className="p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div className="flex flex-col gap-2">
                  <div className="w-24 h-4 bg-gray-300 rounded" />
                  <div className="w-16 h-4 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="w-full h-44 bg-gray-300 rounded" />
            </div>
          </Card>
        </div>

        <div className="relative  ">
          <SectionHeading title="LinkedIn" />
          <Card className="p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div className="flex flex-col gap-2">
                  <div className="w-24 h-4 bg-gray-300 rounded" />
                  <div className="w-16 h-4 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="w-full h-44 bg-gray-300 rounded" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
