export default function VisionMissionValues() {
  return (
    <div className="px-6 w-full relative overflow-x-hidden">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none before:right-auto before:absolute before:inset-0 before:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] before:h-full before:bg-[linear-gradient(to_right,var(--background)_0,transparent_100%)] after:left-auto after:absolute after:inset-0 after:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] after:h-full after:bg-[linear-gradient(to_left,var(--background)_0,transparent_100%)]"></div>
        <div className="absolute inset-0 z-[1] pointer-events-none before:bottom-auto before:absolute before:inset-0 before:w-full before:h-[90px] before:bg-[linear-gradient(to_bottom,var(--background)_0,transparent_100%)] after:top-auto after:absolute after:inset-0 after:w-full after:h-[90px] after:bg-[linear-gradient(to_top,var(--background)_0,transparent_100%)]"></div>
        <div
          className="
          gap-[1px] 
          [counter-reset:fig] 
          z-[0] 
          relative 
          grid
          grid-cols-[1fr_repeat(1,calc(min(calc(100vw-30px*2),1265px)/1))_1fr] 
          md:grid-cols-[1fr_repeat(2,calc(min(calc(100vw-30px*2),1265px)/2))_1fr] 
          lg:grid-cols-[1fr_repeat(8,calc(min(calc(100vw-30px*2),1265px)/8))_1fr] 
          [&>*]:min-h-8 
          [&>*]:[box-shadow:0_0_0_1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-background)]
          "
        >
          <div className="!h-[90px]"></div>

          {Array.from({ length: 44 }, (_, i) => (
            <div key={i}></div>
          ))}

          <div className="[grid-area:2/2] lg:[grid-area:2/2/span_1/span_3] bg-gradient-to-br from-primary h-full to-main p-6 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-large-title mb-4">Our Vision</h2>
              <p className="text-title-2">
                To be a globally renowned academy of information technology for
                societal development.
              </p>
            </div>
          </div>

          <div className="[grid-area:4/2] md:[grid-area:2/3] lg:[grid-area:2/5/span_1/span_5] bg-gradient-to-b from-white/30 to-white hover:shadow p-6 flex flex-col justify-between">
            <h2 className="text-large-title font-bold mb-4 text-gray-800">
              Our Mission
            </h2>
            <ul className="space-y-2 text-title-2 font-medium text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>
                  To produce globally competent information technology
                  professionals with the right mix of professional skills and
                  ethical, societal and environmental concerns.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>
                  To solve local problems using global technologies and solve
                  global problems using local technologies across disciplines.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>
                  To project the nation to the forefront of information
                  technology research and development.
                </p>
              </li>
            </ul>
          </div>

          <div className="[grid-area:4/2] md:[grid-area:4/2/span_1/span_2] lg:[grid-area:4/2/span_1/span_8] text-title-1 px-2">
            Core Values
          </div>

          <div className="[grid-area:6/2] lg:[grid-area:6/2/span_1/span_2] bg-gradient-to-b from-white/30 to-white p-6 flex flex-col justify-between">
            <h3 className="text-title-1 text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty, transparency, and ethical behavior in all our
              actions and decisions.
            </p>
          </div>

          {/* Service Card */}
          <div className="[grid-area:7/2] md:[grid-area:6/3] lg:[grid-area:6/4/span_1/span_2] bg-gradient-to-b from-white/30 to-white p-6 flex flex-col justify-between">
            <h3 className="text-title-1 text-gray-800 mb-2">Service</h3>
            <p className="text-gray-600">
              We are dedicated to serving society through technology and
              knowledge sharing.
            </p>
          </div>

          {/* Positivity Card */}
          <div className="[grid-area:8/2] md:[grid-area:7/2] lg:[grid-area:6/6/span_1/span_2] bg-gradient-to-b from-white/30 to-white p-6 flex flex-col justify-between">
            <h3 className="text-title-1 text-gray-800 mb-2">Positivity</h3>
            <p className="text-gray-600">
              We embrace an optimistic mindset to overcome challenges and drive
              innovation.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="[grid-area:9/2] md:[grid-area:7/3] lg:[grid-area:6/8/span_1/span_2] bg-gradient-to-b from-white/30 to-white p-6 flex flex-col justify-between">
            <h3 className="text-title-1 text-gray-800 mb-2">
              Commitment & Passion
            </h3>
            <p className="text-gray-600">
              We are dedicated to excellence and driven by our passion for
              technological advancement.
            </p>
          </div>

          <div className="!h-[90px]"></div>
        </div>
      </div>
    </div>
  );
}
