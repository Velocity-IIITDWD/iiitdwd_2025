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
import React from 'react';
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
    <div className="w-full bg-white rounded-lg p-2 md:p-4 lg:p-6 h-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
