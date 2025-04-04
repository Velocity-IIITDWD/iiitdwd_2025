// pages/amenities.js
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IconFirstAidKit } from '@tabler/icons-react';
import {
  BookOpen,
  Coffee,
  CreditCard,
  Dumbbell,
  Home,
  Laptop,
  Library,
  Utensils,
  Wifi
} from 'lucide-react';

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Campus Amenities
          </h1>
          <p className="text-secondary/700  max-w-2xl mx-auto">
            IIIT Dharwad provides various facilities and amenities to ensure a
            comfortable and conducive environment for academic excellence
          </p>
        </div>

        {/* Amenities Tabs */}
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="academic" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> Academic
            </TabsTrigger>
            <TabsTrigger
              value="residential"
              className="flex items-center gap-1"
            >
              <Home className="h-4 w-4" /> Residential
            </TabsTrigger>
            <TabsTrigger value="dining" className="flex items-center gap-1">
              <Utensils className="h-4 w-4" /> Dining
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" /> Other Facilities
            </TabsTrigger>
          </TabsList>

          {/* Academic Facilities Tab */}
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Library className="w-4 text-primary" />
                  Library
                </CardTitle>
                <CardDescription>
                  Central Library and Digital Resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Central Library at IIIT Dharwad serves as a knowledge hub
                  for students and faculty. It houses a comprehensive collection
                  of books, journals, and digital resources to support academic
                  and research activities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Resources Available
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>
                        Extensive collection of technical books and reference
                        materials
                      </li>
                      <li>Print journals and magazines</li>
                      <li>
                        E-journals and online databases (IEEE, ACM, Springer,
                        etc.)
                      </li>
                      <li>Digital repository of institutional research</li>
                      <li>Previous year question papers and thesis reports</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">Facilities</h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Reading hall with ample seating capacity</li>
                      <li>Digital section with computer terminals</li>
                      <li>Wi-Fi enabled premises</li>
                      <li>Photocopying and printing services</li>
                      <li>Online Public Access Catalog (OPAC)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Computing Facilities
                </CardTitle>
                <CardDescription>
                  State-of-the-art computing infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  IIIT Dharwad is equipped with modern computing facilities to
                  support academic and research activities. The institute
                  provides high-performance computing resources, specialized
                  labs, and campus-wide internet connectivity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Computer Labs
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>
                        General purpose computing labs with latest hardware
                      </li>
                      <li>
                        Specialized labs for AI/ML, IoT, and Cyber Security
                      </li>
                      <li>Software development and programming environments</li>
                      <li>Graphics and multimedia lab</li>
                      <li>Project and research labs</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Network Infrastructure
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>
                        High-speed campus-wide internet (1 Gbps NKN
                        connectivity)
                      </li>
                      <li>
                        Wi-Fi coverage throughout the academic buildings and
                        hostels
                      </li>
                      <li>Virtual Private Network (VPN) for remote access</li>
                      <li>Learning Management System (LMS)</li>
                      <li>Institute email and cloud storage services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Laboratories
                </CardTitle>
                <CardDescription>
                  Specialized labs for hands-on learning and research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Electronics Lab
                    </h3>
                    <p className="text-gray-700">
                      Equipped with oscilloscopes, function generators, digital
                      systems, and microcontroller kits for practical
                      experiments in electronics and embedded systems.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Networking Lab
                    </h3>
                    <p className="text-gray-700">
                      Industry-standard networking equipment including routers,
                      switches, and network analyzers for hands-on networking
                      experience.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Research Labs
                    </h3>
                    <p className="text-gray-700 ">
                      Specialized research laboratories focused on emerging
                      areas like AI, Machine Learning, IoT, and Cybersecurity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Residential Facilities Tab */}
          <TabsContent value="residential" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Hostel Facilities
                </CardTitle>
                <CardDescription>
                  Comfortable accommodation for students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 ">
                  IIIT Dharwad provides separate hostel facilities for boys and
                  girls. The hostels are designed to provide a comfortable and
                  conducive environment for students to focus on their studies
                  while enjoying a vibrant campus life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Hostel Features
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Well-furnished rooms with essential furniture</li>
                      <li>24/7 high-speed Wi-Fi connectivity</li>
                      <li>Purified drinking water facilities</li>
                      <li>Laundry services</li>
                      <li>Common rooms with TV and recreational facilities</li>
                      <li>Solar water heaters for hot water supply</li>
                      <li>24-hour security with CCTV surveillance</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">Room Types</h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Double occupancy rooms (standard allocation)</li>
                      <li>Single occupancy rooms (limited availability)</li>
                      <li>Special rooms for differently-abled students</li>
                    </ul>

                    <h3 className="font-semibold text-main mt-4 mb-2">
                      Common Areas
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>
                        Study rooms for group discussions and private study
                      </li>
                      <li>
                        Indoor games area with table tennis, carrom, chess
                      </li>
                      <li>Visitor's lounge</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary/70 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-main">
                    Note on Accommodation
                  </h3>
                  <p className="text-gray-700 ">
                    Hostel accommodation is mandatory for all undergraduate
                    students unless specifically exempted. Room allocation is
                    done by the Hostel Administration based on availability and
                    seniority.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  Internet and Communication
                </CardTitle>
                <CardDescription>Keeping students connected</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 ">
                  The entire campus including hostels is equipped with
                  high-speed internet connectivity. The institute provides a
                  robust network infrastructure to ensure that students have
                  seamless access to online resources for academic and research
                  purposes.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Wi-Fi Coverage
                    </h3>
                    <p className="text-gray-700 ">
                      All academic buildings, hostels, and common areas are
                      covered with high-speed Wi-Fi networks. Students can
                      access the internet using their institute credentials.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Internet Bandwidth
                    </h3>
                    <p className="text-gray-700 ">
                      The institute is connected to the National Knowledge
                      Network (NKN) with a 1 Gbps link, providing ample
                      bandwidth for academic and research activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dining Facilities Tab */}
          <TabsContent value="dining" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Mess and Dining Facilities
                </CardTitle>
                <CardDescription>
                  Nutritious and diverse meal options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 ">
                  IIIT Dharwad provides well-managed mess facilities that serve
                  nutritious and balanced meals to students. The mess operations
                  are overseen by a student-faculty committee to ensure quality
                  and hygiene.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Mess Features
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>
                        Spacious dining halls with adequate seating capacity
                      </li>
                      <li>Separate vegetarian and non-vegetarian counters</li>
                      <li>Hygienic food preparation and serving areas</li>
                      <li>Regular menu changes to provide variety</li>
                      <li>Special meals on festivals and occasions</li>
                      <li>Dietitian-approved menu planning</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Meal Schedule
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Breakfast: 7:30 AM to 9:30 AM</li>
                      <li>Lunch: 12:00 PM to 2:00 PM</li>
                      <li>Evening Snacks: 5:00 PM to 6:00 PM</li>
                      <li>Dinner: 7:30 PM to 9:30 PM</li>
                    </ul>

                    <h3 className="font-semibold text-main mt-4 mb-2">
                      Special Provisions
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Sick diet on doctor's recommendation</li>
                      <li>
                        Packed meals for students during events/competitions
                      </li>
                      <li>Feedback system for continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Cafeteria and Food Court
                </CardTitle>
                <CardDescription>
                  Additional dining options on campus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 ">
                  In addition to the regular mess, the campus has cafeterias and
                  food stalls that offer a variety of refreshments and snacks.
                  These facilities provide a casual environment for students to
                  relax and socialize.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Main Cafeteria
                    </h3>
                    <p className="text-gray-700 ">
                      Located near the academic complex, the cafeteria serves a
                      variety of snacks, beverages, and quick meals. It's a
                      popular spot for informal discussions and short breaks
                      between classes.
                    </p>
                    <p className="text-gray-700  mt-2">
                      <span className="font-medium">Timings:</span> 8:00 AM to
                      9:00 PM (Monday to Saturday)
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Night Canteen
                    </h3>
                    <p className="text-gray-700 ">
                      A small canteen operates in the hostel area during evening
                      hours to cater to students who need refreshments or light
                      meals during late study hours.
                    </p>
                    <p className="text-gray-700  mt-2">
                      <span className="font-medium">Timings:</span> 7:00 PM to
                      12:00 AM (Daily)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other Facilities Tab */}
          <TabsContent value="other" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  Sports and Recreation
                </CardTitle>
                <CardDescription>
                  Facilities for physical fitness and leisure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 ">
                  IIIT Dharwad provides excellent sports and recreational
                  facilities to encourage students to maintain physical fitness
                  and engage in extracurricular activities. The institute
                  believes in the holistic development of students and promotes
                  a healthy balance between academics and sports.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Outdoor Sports Facilities
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Cricket field</li>
                      <li>Football ground</li>
                      <li>Basketball court</li>
                      <li>Volleyball court</li>
                      <li>Badminton courts</li>
                      <li>Athletics track</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/70  p-4 rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Indoor Sports Facilities
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Fully equipped gymnasium</li>
                      <li>Table tennis</li>
                      <li>Chess</li>
                      <li>Carrom</li>
                      <li>Yoga and meditation hall</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-main mb-2">
                    Recreation Areas
                  </h3>
                  <p className="text-gray-700 ">
                    The campus has designated recreation areas where students
                    can relax and engage in various activities. These include
                    student lounges, open green spaces, and common rooms
                    equipped with indoor games and TVs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconFirstAidKit className="h-5 w-5 text-primary" />
                  Health Care Facilities
                </CardTitle>
                <CardDescription>
                  Medical services for students and staff
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 ">
                  The institute maintains a health center to address the medical
                  needs of students and staff. The center provides primary
                  healthcare services and coordinates with local hospitals for
                  specialized care.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Health Center Services
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>OPD services with qualified medical staff</li>
                      <li>First aid and emergency medical care</li>
                      <li>Basic medications and dispensary</li>
                      <li>Regular health check-ups and camps</li>
                      <li>Ambulance service for emergencies</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-main mb-2">
                      Insurance and Tie-ups
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 ">
                      <li>Student health insurance coverage</li>
                      <li>
                        Tie-ups with specialized hospitals in Dharwad and
                        Hubballi
                      </li>
                      <li>Referral system for specialized medical care</li>
                    </ul>
                    <p className="text-gray-700  mt-2">
                      <span className="font-medium">Timings:</span> 9:00 AM to
                      5:30 PM (Monday to Saturday)
                    </p>
                    <p className="text-gray-700 ">
                      <span className="font-medium">Emergency Contact:</span>{' '}
                      +91-836-XXXXXXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
