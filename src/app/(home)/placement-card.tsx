'use client';
import { IconArrowUpRight } from '@tabler/icons-react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PlacementCard() {
  return (
    <div className="[grid-area:10/2] md:[grid-area:7/2/span_1/span_2] lg:[grid-area:7/3/span_1/span_2] shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-title-1 font-semibold">Placement Highlights</h3>
          <p className="text-title-2 text-gray-600 mt-1">
            Our 2025 placement season has shown remarkable growth with
            record-breaking packages
          </p>
        </div>
        <Link
          href="/placements"
          className="flex items-center text-main hover:text-main/80 transition-colors"
        >
          <span className="text-sm font-medium">View all</span>
          <IconArrowUpRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Companies</p>
          <p className="text-lg font-bold">77</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Offers</p>
          <p className="text-lg font-bold">130</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Placement</p>
          <p className="text-lg font-bold">66%</p>
          <p className="text-xs text-gray-500">ongoing</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Highest CTC</p>
          <p className="text-lg font-bold">61 LPA</p>
        </div>
      </div>

      {/* CTC Chart */}
      <div className="h-64 mt-6">
        <div className="text-sm font-medium mb-2">CTC Comparison (in LPA)</div>
        <Bar
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                align: 'end',
                labels: {
                  boxWidth: 12,
                  usePointStyle: true
                }
              },
              title: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: true
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }}
          data={{
            labels: ['Average CTC', 'Median CTC', 'Highest CTC'],
            datasets: [
              {
                label: '2023',
                data: [10.31, 7.85, 35],
                backgroundColor: 'rgba(136, 132, 216, 0.8)'
              },
              {
                label: '2024',
                data: [9.57, 8, 46],
                backgroundColor: 'rgba(130, 202, 157, 0.8)'
              },
              {
                label: '2025',
                data: [10, 8, 61],
                backgroundColor: 'rgba(255, 198, 88, 0.8)'
              }
            ]
          }}
        />
      </div>
    </div>
  );
}
