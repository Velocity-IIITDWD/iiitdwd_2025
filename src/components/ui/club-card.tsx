'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer';
import { Calendar, Instagram, Linkedin, Twitter, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ClubCardProps {
  name: string;
  logo: string;
  imageUrl: string;
  href: string;
  description: string;
  memberCount: number;
  meetingSchedule: string;
  location: string;
  president: string;
  vision: string;
  mission: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function ClubCard({
  name,
  logo,
  imageUrl,
  description,
  memberCount,
  meetingSchedule,
  location,
  president,
  vision,
  mission,
  socials
}: ClubCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState<'bottom' | 'right'>(
    'bottom'
  );

  useEffect(() => {
    const updateSize = () => {
      setDrawerDirection(window.innerWidth >= 1024 ? 'right' : 'bottom'); // Adjust breakpoint as needed
    };

    updateSize(); // Set initial direction
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(true);
          }
        }}
      >
        <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl bg-white">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 pointer-events-none">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white p-1">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-[#001B3D]">
                <Users className="h-5 w-5" />
                <span className="font-medium">{memberCount} members</span>
              </div>
              <div className="flex items-center gap-2 text-[#001B3D]">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">{meetingSchedule}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction={drawerDirection}
      >
        <DrawerContent
          className={`mx-auto transition-all ${
            drawerDirection === 'right'
              ? 'h-screen w-[400px] md:w-500px]'
              : 'max-h-[85vh] max-w-xl'
          }`}
        >
          <div className="p-6 overflow-y-auto">
            <DrawerHeader className="px-0 pb-2">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <DrawerTitle className="text-2xl font-bold">{name}</DrawerTitle>
              </div>
              <DrawerDescription className="text-gray-600 mt-2">
                {description}
              </DrawerDescription>
            </DrawerHeader>

            <div className="py-2 space-y-4 text-gray-800">
              <div>
                <h4 className="font-semibold">📌 President:</h4>
                <p className="text-gray-600">{president}</p>
              </div>

              <div>
                <h4 className="font-semibold">🎯 Vision:</h4>
                <p className="text-gray-600">{vision}</p>
              </div>

              <div>
                <h4 className="font-semibold">🚀 Mission:</h4>
                <p className="text-gray-600">{mission}</p>
              </div>

              <div>
                <h4 className="font-semibold">📍 Meeting Details:</h4>
                <p className="text-gray-600">
                  {meetingSchedule} at {location}
                </p>
              </div>

              <div>
                <h4 className="font-semibold">🔗 Connect with us:</h4>
                <div className="flex gap-3 mt-2">
                  {socials.instagram && (
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-6 w-6 text-[#E1306C] hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6 text-[#0077b5] hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-6 w-6 text-[#1DA1F2] hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <DrawerFooter className="px-0 pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
