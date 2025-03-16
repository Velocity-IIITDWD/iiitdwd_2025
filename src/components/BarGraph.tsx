'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarGraphProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ labels, datasets }) => {
  const [dimensions, setDimensions] = useState<{
    width: string | number;
    height: string | number;
  }>({
    width: '100%',
    height: 'auto'
  });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const barGraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      let width, height;

      if (window.innerWidth < 400) {
        width = 330;
        height = 200;
      } else if (window.innerWidth < 1000) {
        width = 370;
        height = 200;
      } else {
        width = '100%';
        height = 'auto';
      }

      setDimensions({ width, height });
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!barGraphRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = barGraphRef.current;
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [barGraphRef]);

  const data = {
    labels: labels,
    datasets: datasets
  };

  const options = {
    indexAxis: 'y' as const, // Ensure the type is 'y' or 'x' explicitly
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <div
      ref={barGraphRef}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {isIntersecting && <Bar data={data} options={options} />}
    </div>
  );
};

export default BarGraph;
