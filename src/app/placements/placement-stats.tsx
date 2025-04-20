import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import { Briefcase, Building, DollarSign, Users } from 'lucide-react';
import { useState } from 'react';
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

// Define types
type Year = '2023' | '2024' | '2025';
type TabType = Year | 'compare';

interface YearData {
  companies: number;
  offers: number;
  highestCTC: number;
  averageCTC: number;
  medianCTC: number;
  placementPercentage: number;
}

interface PlacementDataType {
  '2023': YearData;
  '2024': YearData;
  '2025': YearData;
}

export default function PlacementStatistics() {
  const [activeTab, setActiveTab] = useState<TabType>('2025');

  const placementData: PlacementDataType = {
    '2023': {
      companies: 96,
      offers: 126,
      highestCTC: 35,
      averageCTC: 10.31,
      medianCTC: 7.85,
      placementPercentage: 86
    },
    '2024': {
      companies: 87,
      offers: 128,
      highestCTC: 46,
      averageCTC: 9.57,
      medianCTC: 8,
      placementPercentage: 62
    },
    '2025': {
      companies: 77,
      offers: 130, // Estimated based on trend
      highestCTC: 61,
      averageCTC: 10,
      medianCTC: 8,
      placementPercentage: 66
    }
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text:
          activeTab !== 'compare'
            ? `${activeTab} Statistics`
            : 'Year Comparison'
      }
    }
  };

  // Create year chart data
  const createYearChartData = (year: Year) => {
    return {
      labels: ['Companies', 'Offers', 'Highest CTC (LPA)'],
      datasets: [
        {
          label: year,
          data: [
            placementData[year].companies,
            placementData[year].offers,
            placementData[year].highestCTC
          ],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)', // blue
            'rgba(16, 185, 129, 0.8)', // green
            'rgba(245, 158, 11, 0.8)' // amber
          ]
        }
      ]
    };
  };

  // Comparison chart data
  const comparisonChartData = {
    labels: ['Companies', 'Offers', 'Highest CTC (LPA)', 'Placement %'],
    datasets: [
      {
        label: '2023',
        data: [
          placementData['2023'].companies,
          placementData['2023'].offers,
          placementData['2023'].highestCTC,
          placementData['2023'].placementPercentage
        ],
        backgroundColor: 'rgba(136, 132, 216, 0.8)'
      },
      {
        label: '2024',
        data: [
          placementData['2024'].companies,
          placementData['2024'].offers,
          placementData['2024'].highestCTC,
          placementData['2024'].placementPercentage
        ],
        backgroundColor: 'rgba(130, 202, 157, 0.8)'
      },
      {
        label: '2025',
        data: [
          placementData['2025'].companies,
          placementData['2025'].offers,
          placementData['2025'].highestCTC,
          placementData['2025'].placementPercentage
        ],
        backgroundColor: 'rgba(255, 198, 88, 0.8)'
      }
    ]
  };

  // CTC comparison chart data
  const ctcChartData = {
    labels: ['Average CTC', 'Median CTC', 'Highest CTC'],
    datasets: [
      {
        label: '2023',
        data: [
          placementData['2023'].averageCTC,
          placementData['2023'].medianCTC,
          placementData['2023'].highestCTC
        ],
        backgroundColor: 'rgba(136, 132, 216, 0.8)'
      },
      {
        label: '2024',
        data: [
          placementData['2024'].averageCTC,
          placementData['2024'].medianCTC,
          placementData['2024'].highestCTC
        ],
        backgroundColor: 'rgba(130, 202, 157, 0.8)'
      },
      {
        label: '2025',
        data: [
          placementData['2025'].averageCTC,
          placementData['2025'].medianCTC,
          placementData['2025'].highestCTC
        ],
        backgroundColor: 'rgba(255, 198, 88, 0.8)'
      }
    ]
  };

  // Get the right chart data based on active tab
  const getYearChartData = () => {
    if (activeTab === 'compare') {
      return comparisonChartData;
    }
    return createYearChartData(activeTab as Year);
  };

  return (
    <div className="w-full bg-gray-50 rounded-xl shadow-md p-6">
      {/* Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        {(Object.keys(placementData) as Year[]).map((year) => (
          <button
            key={year}
            className={`px-6 py-3 font-medium text-body focus:outline-none ${
              activeTab === year
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(year)}
          >
            {year}
          </button>
        ))}
        <button
          className={`px-6 py-3 font-medium text-body focus:outline-none ${
            activeTab === 'compare'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('compare')}
        >
          Year Comparison
        </button>
      </div>

      {/* Tab Content */}
      {activeTab !== 'compare' ? (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
              <div className="bg-main/10 border p-3 rounded-full">
                <Building className="h-6 w-6 text-main" />
              </div>
              <div>
                <p className="text-body text-gray-500">Companies Visited</p>
                <p className="text-title-1 font-bold">
                  {placementData[activeTab as Year].companies}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
              <div className="bg-main/10 border p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-main" />
              </div>
              <div>
                <p className="text-body text-gray-500">Total Offers</p>
                <p className="text-title-1 font-bold">
                  {placementData[activeTab as Year].offers}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
              <div className="bg-main/10 border p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-main" />
              </div>
              <div>
                <p className="text-body text-gray-500">Highest CTC</p>
                <p className="text-title-1 font-bold">
                  {placementData[activeTab as Year].highestCTC} LPA
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
              <div className="bg-main/10 border p-3 rounded-full">
                <Users className="h-6 w-6 text-main" />
              </div>
              <div>
                <p className="text-body text-gray-500">Placement %</p>
                <p className="text-title-1 font-bold">
                  {placementData[activeTab as Year].placementPercentage}%
                </p>
                {activeTab === '2025' && (
                  <p className="text-callout text-gray-500">ongoing</p>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-title-3 font-medium mb-4">
              Compensation Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-body text-gray-500">Average CTC</p>
                <p className="text-title-2 font-bold">
                  {placementData[activeTab as Year].averageCTC} LPA
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-body text-gray-500">Median CTC</p>
                <p className="text-title-2 font-bold">
                  {placementData[activeTab as Year].medianCTC} LPA
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-body text-gray-500">Highest CTC</p>
                <p className="text-title-2 font-bold">
                  {placementData[activeTab as Year].highestCTC} LPA
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-title-3 font-medium mb-4">
              {activeTab} Statistics
            </h3>
            <div className="h-64">
              <Bar
                options={chartOptions}
                data={createYearChartData(activeTab as Year)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-title-3 font-medium mb-4">
              Year-by-Year Comparison
            </h3>
            <div className="h-80">
              <Bar
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      display: true,
                      text: 'Placement Metrics Comparison'
                    }
                  }
                }}
                data={comparisonChartData}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-title-3 font-medium mb-4">CTC Comparison</h3>
            <div className="h-64">
              <Bar
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      display: true,
                      text: 'Compensation Package Comparison (LPA)'
                    }
                  }
                }}
                data={ctcChartData}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === '2025' && (
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-body text-amber-800">
          Note: Statistics for 2025 are ongoing, and final figures may change.
        </div>
      )}
    </div>
  );
}
