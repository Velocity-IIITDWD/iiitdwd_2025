'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { IconCalendarEvent } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function AppointmentDialog() {
  const [isMounted, setIsMounted] = useState(false);

  // Only render the iframe on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="my-4 flex items-center justify-center w-full gap-2 py-2 rounded-md bg-main text-white text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
          <IconCalendarEvent size={18} />
          Book an appointment for Admissions Q&A
        </button>
      </DialogTrigger>
      <DialogContent className=" min-w-5/6 max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
        </DialogHeader>
        <div className="h-[70vh] w-full">
          {isMounted && (
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1K-pFrxKezeQpaUfa2DqGE-iBTx58KOBM4eRdrFVIHxwEiL94j5hPQDC8ki8p-TPF9eCYYc-hz"
              frameBorder="0"
              scrolling="auto"
              className="w-full h-full"
              title="Book an appointment"
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
