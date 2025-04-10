'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  Twitter
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { data as teamMembers } from '@/data/website-team';

const MotionLink = motion(Link);

export default function TeamPage() {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>(
    {}
  );
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleSkills = (id: string) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Particle animation setup
  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        id="particles"
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
      />

      <div className="container relative z-10 py-12 px-4 md:px-6 md:py-16 lg:py-24 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
            Meet Our Team
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90 max-w-xl mx-auto">
            A dedicated group of students driven by passion and innovation,
            crafting digital experiences that resonate and inspire.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-xl h-full">
                {/* Decorative elements */}
                {/* Removed top gradient bar */}
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-[--main]/20 -translate-y-1/2 translate-x-1/2 blur-xl" />

                <div className="aspect-square relative overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 4}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full">
                        <p className="text-white text-sm line-clamp-3 mb-3">
                          {member.bio}
                        </p>
                        <div className="flex gap-3 justify-end">
                          {member.social.github && (
                            <MotionLink
                              href={member.social.github}
                              className="text-white/90 hover:text-white transition-colors bg-black/30 rounded-full p-1.5"
                              aria-label={`${member.name}'s GitHub profile`}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                            </MotionLink>
                          )}
                          {member.social.twitter && (
                            <MotionLink
                              href={member.social.twitter}
                              className="text-white/90 hover:text-white transition-colors bg-black/30 rounded-full p-1.5"
                              aria-label={`${member.name}'s Twitter profile`}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Twitter className="h-4 w-4" />
                            </MotionLink>
                          )}
                          {member.social.linkedin && (
                            <MotionLink
                              href={member.social.linkedin}
                              className="text-white/90 hover:text-white transition-colors bg-black/30 rounded-full p-1.5"
                              aria-label={`${member.name}'s LinkedIn profile`}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-4 w-4" />
                            </MotionLink>
                          )}
                          {member.social.email && (
                            <MotionLink
                              href={`mailto:${member.social.email}`}
                              className="text-white/90 hover:text-white transition-colors bg-black/30 rounded-full p-1.5"
                              aria-label={`Email ${member.name}`}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Mail className="h-4 w-4" />
                            </MotionLink>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-4 relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-base font-bold leading-tight">
                        {member.name}
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => toggleSkills(member.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors bg-muted/50 rounded-full p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={
                        expandedSkills[member.id]
                          ? 'Collapse skills'
                          : 'Expand skills'
                      }
                    >
                      {expandedSkills[member.id] ? (
                        <ChevronUp className="h-3 w-3" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                    </motion.button>
                  </div>

                  <div className="relative mt-2">
                    {/* Always visible skills */}
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 font-normal bg-secondary/50 hover:bg-secondary/70 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {!expandedSkills[member.id] &&
                        member.skills.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-[10px] px-1.5 py-0 font-normal cursor-pointer hover:bg-muted/80"
                            onClick={() => toggleSkills(member.id)}
                          >
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                    </div>

                    {/* Expandable skills */}
                    <AnimatePresence>
                      {expandedSkills[member.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-1">
                            {member.skills.slice(3).map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 font-normal bg-secondary/50 hover:bg-secondary/70 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
