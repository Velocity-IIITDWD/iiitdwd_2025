import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const HigherStudiesContact = () => {
  return (
    <>
      {/* Higher Studies Section */}
      <div id="higher-studies" className="mb-12">
        <Card className="shadow-lg border-main border overflow-hidden">
          <CardHeader className="bg-main text-white py-2 gap-0">
            <CardTitle className="text-white font-bold">
              Higher Studies
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4 text-gray-500">
            <p className="text-title-3">
              The institute helps students create a strong base that helps them
              accelerate their academic development, enabling them to pursue
              higher studies in top institutes in the country and abroad.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h2 className="text-large-title font-bold text-main mb-6">Contact</h2>
        <p className="mb-8 text-title-3">
          For any inquiries or if you would like to participate in recruitment
          activities at IIIT Dharwad, please contact the Career Guidance Cell
          (CGC) via email at{' '}
          <Link href="mailto:cgc@iiitdwd.ac.in" className="text-main underline">
            cgc@iiitdwd.ac.in
          </Link>{' '}
          marking cc to{' '}
          <Link
            href="mailto:cgcoffice@iiitdwd.ac.in"
            className="text-main underline"
          >
            cgcoffice@iiitdwd.ac.in
          </Link>
          .
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-main ">
                CGC, Faculty-In-Charge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-main ">
                  <AvatarFallback className="bg-main/10 text-main ">
                    MV
                  </AvatarFallback>
                </Avatar>
                <div className="text-title-3">
                  <h3 className="font-semibold text-main text-title-2">
                    Dr. Manjunath K Vanahalli
                  </h3>
                  <p className="text-gray-600">Asst. Professor</p>
                  <div className="flex items-center mt-2 text-main">
                    <Mail className="h-4 w-4 mr-2" />
                    <Link href="mailto:cgc@iiitdwd.ac.in" className="text-body">
                      cgc@iiitdwd.ac.in
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-main ">
                CGC, Member Secretary (Placement Lead)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-main ">
                  <AvatarFallback className="bg-main/10 text-main ">
                    UD
                  </AvatarFallback>
                </Avatar>
                <div className="text-title-3">
                  <h3 className="font-semibold text-main text-title-2">
                    Mr. Ujwal Doddamani
                  </h3>
                  <div className="flex items-center mt-2 text-main">
                    <Mail className="h-4 w-4 mr-2" />
                    <Link
                      href="mailto:cgcoffice@iiitdwd.ac.in"
                      className="text-body"
                    >
                      cgcoffice@iiitdwd.ac.in
                    </Link>
                  </div>
                  <div className="flex items-center mt-1 text-main">
                    <Mail className="h-4 w-4 mr-2" />
                    <Link
                      href="mailto:ujwal@iiitdwd.ac.in"
                      className="text-body"
                    >
                      ujwal@iiitdwd.ac.in
                    </Link>
                  </div>
                  <div className="flex items-center mt-1 text-main">
                    <Phone className="h-4 w-4 mr-2" />
                    <Link href="tel:+919886376600" className="text-body">
                      +91 9886376600
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 !text-subheadline text-gray-600">
              Feel free to reach out to Mr. Ujwal Doddamani for further
              assistance.
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HigherStudiesContact;
