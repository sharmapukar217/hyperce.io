import React from 'react';

export default function PastEvents() {
  const events = [
    { name: 'LinkedIn Masterclass (2-day event)', attendees: '100+ Attendees' },
    {
      name: 'Zero-Capital Startup Bootcamp (3-day event)',
      attendees: '125+ Attendees'
    },
    { name: 'Resume Building with AI', attendees: '100+ Attendees' },
    {
      name: 'Hyperce Innovates: Celebrating World Entrepreneurs Day 2024',
      attendees: '50+ Attendees'
    },
    { name: 'Entrepreneurs Gathering Nepal', attendees: '150+ Attendees' }
  ];

  return (
    <div className="mt-16 px-6 lg:px-20 text-center">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Past Events
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Highlights from our previous successful events
        </p>
      </div>

      {/* Events List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-[#1f2937] rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {event.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.attendees}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mt-16 w-full h-1 bg-gradient-to-r from-[#2c3e50] via-[#3498db] to-[#2aa854] rounded-full"></div>
    </div>
  );
}
