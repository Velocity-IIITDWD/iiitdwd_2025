"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blankImg from "@/assets/academics/blank-img.jpg";
import { ArrowRight } from "lucide-react";

// Define types
interface Program {
  title: string;
  description: string;
  imageSrc?: string; // Optional string path
  link: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => {
  return (
    <Link
      href={link}
      className="relative block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
    >
      {/* Underline effect on hover */}
      <div className="absolute bottom-0 left-1/2 w-0 h-[4px] bg-[#3B4D61] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>

      <div className="relative h-50 w-full">
        <Image
          src={imageSrc || blankImg}
          alt={`${title} image`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div
          className="inline-flex items-center bg-[#041E3F] text-[#d3bc8d] px-4 py-2 rounded font-medium transition-all duration-300 group-hover:bg-[#d3bc8d] group-hover:text-[#041E3F]"
          style={{
            fontFamily:
              '"United Sans Condensed", Impact, "Arial Narrow", Arial, sans-serif',
            fontWeight: "400",
            letterSpacing: "0.05em",
          }}
        >
          EXPLORE
          <ArrowRight className="ml-2 w-6 h-6 stroke-[3] transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

interface ProgramCardsProps {
  programs?: Program[]; // Make it optional with a default fallback
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ programs }) => {
  // Default programs if none are provided
  const defaultPrograms: Program[] = [
    {
      title: "Majors",
      description:
        "Choose from over 200 undergraduate programs that dive into your interests.",
      link: "/academics/majors",
    },
    {
      title: "Online Programs",
      description: "Find the rigorous training the university is known for online.",
      link: "/academics/online-programs",
    },
    {
      title: "Graduate Programs",
      description:
        "Explore top ranked master's, doctoral and professional degrees.",
      link: "/academics/graduate-programs",
    },
    {
      title: "Course Catalog",
      description:
        "Discover different classes, review degree requirements and more.",
      link: "/academics/course-catalog",
    },
  ];

  // Use provided programs or fall back to defaults
  const displayPrograms = programs || defaultPrograms;

  return (
    <div className="container mx-auto px-10 py-8"> {/* Increased px-10 for more side margin */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayPrograms.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
  
};

export default ProgramCards;
