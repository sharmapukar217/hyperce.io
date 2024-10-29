import React from 'react';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'Beamstart', logo: '/events-club/beamstart.webp' },
    // { name: 'Hyperce', logo: '/events-club/leo-club.webp' },
    { name: 'eKagajpatra', logo: '/events-club/ekagajpatra.webp' },
    { name: 'Investiaa', logo: '/events-club/investia.webp' },
    { name: 'Goldentechnosoft', logo: '/events-club/golden.webp' },
    { name: 'Leo Club of Kathmandu', logo: '/events-club/leo-club.webp' }
  ];

  return (
    <div className="py-16 px-6 lg:px-20 text-center">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Our Partners
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          We Grew Together with These Amazing Organizations
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white dark:bg-[#1f2937] rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mt-16 w-full h-1 bg-gradient-to-r from-[#2c3e50] via-[#3498db] to-[#2aa854] rounded-full"></div>
    </div>
  );
}
