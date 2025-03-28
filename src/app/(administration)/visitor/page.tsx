import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Printer } from 'lucide-react';
import Image from 'next/image';

export default function PresidentialVisitor() {
  return (
    <div className="bg-gray-50 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Distinguished Visitor
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <Card className="overflow-hidden border-none shadow-xl bg-white p-0 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-primary/90 p-6 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 md:w-full md:h-64 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="https://iiitdwd.ac.in/images/droupadi_murmu.jpeg"
                    alt="President Droupadi Murmu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <Badge className="bg-white text-primary hover:bg-gray-100 px-4 py-1 text-sm">
                Honorable Visitor
              </Badge>
            </div>

            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  Smt. Droupadi Murmu
                </h2>
                <p className="text-lg md:text-xl text-blue-800 font-medium">
                  The Hon&apos;ble President of India
                </p>
                <p className="text-base text-gray-600 mt-4 italic">
                  We are honored to announce that the Hon&apos;ble President of
                  India, Smt. Droupadi Murmu is the Visitor of our Institute.
                </p>
              </div>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Rashtrapati Bhavan, New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telephone: 91-11-23015321</span>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-primary" />
                  <span>Fax: 91-11-23017290 / 91-11-23017824 (O)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
