'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight / 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="to-top"
      className={`fixed bottom-5 border border-white md:bottom-20 right-5 md:right-20 p-5 text-white rounded-full bg-main z-[999] transition-transform duration-200 translate-y-[300%] ${
        isVisible ? '!translate-y-0' : ''
      }`}
      aria-label="Back to Top Button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </button>
  );
}
