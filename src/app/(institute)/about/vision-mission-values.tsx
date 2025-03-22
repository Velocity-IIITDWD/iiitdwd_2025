export default function VisionMissionValues() {
  return (
    <div className="container mx-auto px-4 md:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Vision Card - Takes full width on mobile, 1/3 on desktop */}
        <div className="bg-gradient-to-br from-primary h-full to-black rounded-xl p-6 text-white shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              To be a globally renowned academy of information technology for
              societal development.
            </p>
          </div>
        </div>

        {/* Mission Card - Takes full width on mobile, 2/3 on desktop */}
        <div className="bg-gradient-to-b from-secondary/10 to-tertiary/30 border hover:border-secondary/30 focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow rounded-xl p-6 md:col-span-2 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <ul className="space-y-2 text-gray-700">
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
                To project the nation to the forefront of information technology
                research and development.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values - 4 equal cards in a grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Integrity Card */}
          <div className="bg-gradient-to-b from-secondary/10 to-tertiary/30 border hover:border-secondary/30 focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty, transparency, and ethical behavior in all our
              actions and decisions.
            </p>
          </div>

          {/* Service Card */}
          <div className="bg-gradient-to-b from-secondary/10 to-tertiary/30 border hover:border-secondary/30 focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Service</h3>
            <p className="text-gray-600">
              We are dedicated to serving society through technology and
              knowledge sharing.
            </p>
          </div>

          {/* Positivity Card */}
          <div className="bg-gradient-to-b from-secondary/10 to-tertiary/30 border hover:border-secondary/30 focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Positivity</h3>
            <p className="text-gray-600">
              We embrace an optimistic mindset to overcome challenges and drive
              innovation.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="bg-gradient-to-b from-secondary/10 to-tertiary/30 border hover:border-secondary/30 focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Commitment & Passion
            </h3>
            <p className="text-gray-600">
              We are dedicated to excellence and driven by our passion for
              technological advancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
