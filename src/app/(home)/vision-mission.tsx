'use client';
import { useState } from 'react';

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState('vision');

  type TabContent = {
    [key: string]: {
      title: string;
      content: string | string[];
    };
  };

  const tabContent: TabContent = {
    vision: {
      title: 'Our Vision',
      content:
        'To be a globally renowned academy of information technology for societal development.'
    },
    mission: {
      title: 'Our Mission',
      content: [
        'To produce globally competent information technology professionals with the right mix of professional skills and ethical, societal and environmental concerns.',
        'To solve local problems using global technologies and solve global problems using local technologies across disciplines.',
        'To project the nation to the forefront of information technology research and development.'
      ]
    },
    values: {
      title: 'Core Values',
      content: [
        'Integrity',
        'Service',
        'Positivity',
        'Commitment and Passion for Technology'
      ]
    }
  };

  return (
    <section className="flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Image section */}
      <div className="w-full md:w-2/5 relative bg-black">
        <div className="bg-gray-400 max-md:h-44 h-full w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-8 h-8 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full md:w-3/5">
        <div className="flex border-b">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-8 font-medium text-lg transition-colors ${
                activeTab === tab
                  ? 'bg-gray-100 text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {tabContent[tab].title.split(' ')[1]}
            </button>
          ))}
        </div>

        <div className="p-8 bg-gray-100 min-h-64">
          {activeTab === 'vision' && (
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              {tabContent.vision.content}
            </p>
          )}

          {activeTab === 'mission' && (
            <ul className="list-disc pl-5 space-y-4">
              {Array.isArray(tabContent.mission.content) &&
                tabContent.mission.content.map(
                  (item: string, index: number) => (
                    <li key={index} className="text-gray-800 leading-relaxed">
                      {item}
                    </li>
                  )
                )}
            </ul>
          )}

          {activeTab === 'values' && (
            <ul className="list-disc pl-5 space-y-4">
              {Array.isArray(tabContent.values.content) &&
                tabContent.values.content.map((item, index) => (
                  <li key={index} className="text-gray-800 leading-relaxed">
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
