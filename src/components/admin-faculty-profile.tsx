'use client';

import { motion, useInView } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface AdminFacultyProfileProps {
  name: string;
  position: string;
  department: string | string[];
  email: string;
  imageUrl: string;
  highlightPosition?: boolean;
  index?: number;
}

export function AdminFacultyProfile({
  name,
  department,
  position,
  email,
  imageUrl,
  highlightPosition = true,
  index = 0
}: AdminFacultyProfileProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const departments = Array.isArray(department) ? department : [department];

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="relative overflow-hidden hover:scale-[1.02] group rounded-xl bg-card border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-xl h-full">
        {/* Decorative gradient */}
        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-[--main]/20 -translate-y-full translate-x-1/2 blur-xl" />

        {/* Image */}
        <div className="aspect-square relative overflow-hidden">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={
                imageUrl?.startsWith('/images')
                  ? `https://iiitdwd.ac.in${imageUrl}`
                  : imageUrl || '/placeholder-person.svg'
              }
              alt={`Photo of ${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={index < 4}
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="p-4 relative">
          <div className="flex flex-col gap-1">
            <h2 className="text-title-1 font-bold leading-tight text-main">
              {name}
            </h2>
            <p className="text-title-3 text-muted-foreground">{position}</p>
            {departments.map((dept, i) => (
              <p key={i} className="text-body text-gray-500">
                {dept}
              </p>
            ))}
            {email && (
              <div className="mt-2 text-gray-600 text-callout inline-flex items-center gap-2">
                <MailIcon size={16} /> {email}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AdminFacultyProfileGrid({
  list,
  gridCols = 1,
  highlightPosition = true
}: {
  list: AdminFacultyProfileProps[];
  gridCols?: number;
  highlightPosition?: boolean;
}) {
  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-10">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${
          gridCols > 1 ? 'lg:grid-cols-2 gap-6' : ''
        }`}
      >
        {list.map((faculty, index) => (
          <AdminFacultyProfile
            {...faculty}
            index={index} // 👈 Add this
            key={index}
            highlightPosition={highlightPosition}
          />
        ))}
      </div>
    </div>
  );
}
