import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div className="bg-[#b4c5e4]/40 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center text-sm md:text-base">
            <Link href="/" className="text-gray-700">
              Home
            </Link>
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-gray-700">Institute</span>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-primary font-medium">About Us</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="w-full max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 md:my-12 font-bold">
          Contact Us
        </h1>

        <div className="">
          For directions, transportation options, and campus access details,
          visit our{' '}
          <Link
            className="text-[#d2820a] underline"
            href={'/institute/campus/how-to-reach/'}
          >
            How to Reach Us
          </Link>{' '}
          page. To check office timings and availability, refer to our{' '}
          <Link
            className="text-[#d2820a] underline"
            href={'/institute/campus/working-hours/'}
          >
            Working Hours
          </Link>{' '}
          section. For specific office locations, consult the campus map or
          departmental websites.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 md:my-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#d2820a]">
              Main University Address
            </h2>

            <ul className="list-none">
              <li>Indian Institute of Information Technology Dharwad,</li>
              <li>Ittigatti Rd, near Sattur Colony, Karnataka 580009</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#d2820a]">
              Main University Phone
            </h2>

            <ul className="list-none">
              <li>8362250879</li>
              <li>9449732959</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 md:my-16">
          {/* Working Hours */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Working Hours
            </h2>
            <ul className="list-none">
              <li>Monday – Friday: 9:00 AM – 5:30 PM</li>
              <li>Saturday – Sunday: Closed</li>
              <li>Holidays: As per the official institute calendar</li>
            </ul>
          </div>

          {/* Undergraduate Admissions */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Undergraduate Admissions
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Graduate (Ph.D.) Admissions */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Graduate (Ph.D.) Admissions
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Placements & Internships */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Placements & Internships
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:cgc@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  cgc@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Student Verification */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Student Verification
            </h2>
            <ul className="list-none">
              <li>
                Undergraduate (UG):
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
              <li>
                Ph.D.:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Career Guidance & Corporate Relations */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Career Guidance & Corporate Relations (CGC Office)
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:cgcoffice@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  cgcoffice@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* IT Support & Tech Assistance */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              IT Support & Tech Assistance
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Security */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Campus Security
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>Emergency: Call local emergency services (112)</li>
            </ul>
          </div>

          {/* Marketing & Public Relations */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Marketing & Public Relations
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Human Resources */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Human Resources
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Library Services */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
              Library Services
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-[#d2820a] underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
