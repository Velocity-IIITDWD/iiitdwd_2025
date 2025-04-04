// pages/how-to-reach.js
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bus, Car, MapPin, Plane, Train } from 'lucide-react';

export default function HowToReach() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            How to Reach IIIT Dharwad
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Find directions to reach Indian Institute of Information Technology,
            Dharwad from various locations
          </p>
        </div>

        {/* Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Campus Location
            </CardTitle>
            <CardDescription>
              IIIT Dharwad is located in North Karnataka, approximately 430 km
              from Bangalore.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-main mb-2">Address</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Indian Institute of Information Technology Dharwad,
                  <br />
                  Ittigatti Rd, near Sattur Colony, Karnataka 580009
                </p>
                <div className="mt-4">
                  <h3 className="font-medium text-main mb-2">Contact</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Phone: +91-836-2250879
                    <br />
                    Email: office@iiitdwd.ac.in
                  </p>
                </div>
              </div>
              <div className="rounded-lg h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation Options */}
        <Tabs defaultValue="air" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="air" className="flex items-center gap-1">
              <Plane className="h-4 w-4" /> By Air
            </TabsTrigger>
            <TabsTrigger value="rail" className="flex items-center gap-1">
              <Train className="h-4 w-4" /> By Rail
            </TabsTrigger>
            <TabsTrigger value="road" className="flex items-center gap-1">
              <Bus className="h-4 w-4" /> By Bus
            </TabsTrigger>
            <TabsTrigger value="car" className="flex items-center gap-1">
              <Car className="h-4 w-4" /> By Car
            </TabsTrigger>
          </TabsList>

          <TabsContent value="air" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>By Air</CardTitle>
                <CardDescription>
                  The nearest airports to IIIT Dharwad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    Hubballi Airport
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The nearest airport is Hubballi Airport, approximately 30 km
                    from IIIT Dharwad campus. Direct flights are available from
                    Bangalore, Mumbai, and Hyderabad. From the airport, you can
                    take a taxi to reach the institute (approximately 45
                    minutes).
                  </p>
                  <div className="mt-3 bg-secondary/70 p-4 rounded-lg">
                    <h4 className="font-medium text-main mb-2">
                      From Hubli Airport to IIITDWD campus:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>
                        Take an auto rickshaw directly to the campus or take the
                        bus shuttle from Airport to Hosur Cross
                      </li>
                      <li>
                        From Hosur Cross take the BRTS (Bus Rapid Transit
                        System) to Sattur Cross
                      </li>
                      <li>
                        After reaching Sattur Cross take an auto rickshaw
                        directly to the campus
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rail" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>By Rail</CardTitle>
                <CardDescription>
                  Rail connectivity to IIIT Dharwad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    Dharwad Railway Station
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dharwad has its own railway station with good connectivity
                    to major cities like Bangalore, Mumbai, Pune, and Hyderabad.
                    From the railway station, you can take an auto-rickshaw or
                    taxi to reach the campus (approximately 15-20 minutes).
                  </p>
                  <div className="bg-secondary/70 p-4 rounded-lg mt-2">
                    <h4 className="font-medium text-main mb-2">
                      From Dharwad Railway Station to IIITD campus:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                      <li>You can directly take an auto rickshaw to campus</li>
                      <li>
                        Or you can take an auto rickshaw to Court Circle BRTS
                        Station
                      </li>
                      <li>
                        After that you can take BRTS from Court Circle to Sattur
                        Cross BRTS Station
                      </li>
                      <li>
                        After that you can take an auto rickshaw directly to the
                        campus
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    Hubballi Railway Station
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hubballi (earlier known as Hubli) is a major railway
                    junction approximately 20 km from Dharwad with better
                    connectivity to various parts of the country. Regular buses
                    and taxis are available from Hubballi to Dharwad.
                  </p>
                  <div className="bg-secondary/70 p-4 rounded-lg mt-2">
                    <h4 className="font-medium text-main mb-2">
                      From Hubli Railway Station to IIITD campus:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                      <li>
                        If you are reaching campus after midnight you have to
                        take an Auto Rickshaw directly to campus
                      </li>
                      <li>Or you can take BRTS to Sattur Cross</li>
                      <li>
                        After reaching Sattur Cross you can take an auto
                        rickshaw directly to the campus
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary/70 p-4 rounded-lg">
                  <h3 className="font-medium text-main mb-2">Major Trains</h3>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>
                      Rani Chennamma Express (Bangalore to Dharwad/Hubballi)
                    </li>
                    <li>Siddhaganga Express (Bangalore to Dharwad/Hubballi)</li>
                    <li>Hubballi Express (Mumbai to Hubballi)</li>
                    <li>
                      Goa Express (Delhi to Vasco-Da-Gama via Dharwad/Hubballi)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="road" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>By Bus</CardTitle>
                <CardDescription>
                  Bus connectivity to IIIT Dharwad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    State Transport Buses
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Karnataka State Road Transport Corporation (KSRTC) operates
                    regular bus services to Dharwad from Bangalore, Mysore,
                    Mangalore, and other major cities in Karnataka. The journey
                    from Bangalore to Dharwad takes approximately 8-9 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    Private Buses
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Several private operators run comfortable AC and non-AC
                    sleeper and seater buses to Dharwad from major cities. These
                    can be booked online through various platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    Local Transport
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    From Dharwad bus stand, you can take an auto-rickshaw or
                    city bus to reach the IIIT Dharwad campus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="car" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>By Car</CardTitle>
                <CardDescription>
                  Driving directions to IIIT Dharwad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    From Bangalore
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dharwad is well-connected to Bangalore via NH-48 (earlier
                    NH-4). The distance is approximately 430 km and takes around
                    7-8 hours by car. Take the Pune-Bengaluru Highway and drive
                    towards Hubballi-Dharwad. IIIT Dharwad is located on the
                    Pune-Bengaluru Highway (NH-4) in the WALMI Campus.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-main text-lg">
                    From Mumbai
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The distance from Mumbai to Dharwad is approximately 550 km
                    via NH-48. The journey takes around 10-11 hours by car.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-main text-lg">From Goa</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dharwad is about 150 km from Goa via NH-748. The journey
                    takes approximately 3-4 hours by car.
                  </p>
                </div>
                {/*<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-400">Landmark</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    IIIT Dharwad is located in the WALMI Campus on the Pune-Bengaluru Highway. Look for the
                    campus entrance on the highway. It's approximately 7 km from Dharwad city center.
                  </p>
                </div>*/}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Nearby Accommodations */}
        <Card>
          <CardHeader>
            <CardTitle>Nearby Accommodations</CardTitle>
            <CardDescription>Places to stay near IIIT Dharwad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-main text-lg">
                  Dharwad City
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Various hotels and guest houses are available in Dharwad city
                  center, approximately 7 km from the campus.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-main text-lg">
                  Hubballi City
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  More accommodation options are available in Hubballi city,
                  approximately 20 km from the campus, including 3-star and
                  4-star hotels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
