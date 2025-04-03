import { IconBrandYoutube } from '@tabler/icons-react';
import { Mail } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface ProfilePageProps {
  image?: StaticImageData | string;
  email?: string;
  youtubeLink?: string;
  youtubeName?: string;
  name?: string;
  position?: string;
  quote?: string;
  about?: string[];
  signatureText?: string;
  signaturePosition?: string;
}

export default function Profile({
  image,
  email,
  youtubeLink,
  youtubeName,
  name,
  position,
  quote,
  about = [],
  signatureText,
  signaturePosition
}: ProfilePageProps) {
  return (
    <div className="w-full py-10 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          {image && (
            <div className="border border-primary w-full max-w-[400px]">
              <Image
                src={image}
                alt="Profile portrait"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="space-y-2">
            {email && (
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            )}
            {youtubeLink && (
              <div className="flex items-center space-x-2">
                <IconBrandYoutube className="h-4 w-4 text-red-600" />
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {youtubeName}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {(name || position) && (
            <div>
              {name && (
                <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
              )}
              {position && <p className="text-xl text-gray-600">{position}</p>}
            </div>
          )}

          {quote && <p className="text-primary text-lg">{quote}</p>}

          <div className="h-1 bg-primary w-full my-6"></div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
            {about.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            {(signatureText || signaturePosition) && (
              <p className="text-primary text-lg">
                {signatureText && (
                  <span className="text-lg font-semibold block">
                    {signatureText}
                  </span>
                )}
                {signaturePosition}
              </p>
            )}
          </div>

          <div className="h-1 bg-primary w-full my-6"></div>
        </div>
      </div>
    </div>
  );
}
