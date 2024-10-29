import React from 'react';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    {
      name: 'Beamstart',
      logo: '/events-club/beamstart.webp',
      url: 'https://www.beamstart.com'
    },
    {
      name: 'eKagajpatra',
      logo: '/events-club/ekagajpatra.webp',
      url: 'https://www.ekagajpatra.com'
    },
    {
      name: 'Investiaa',
      logo: '/events-club/investia.webp',
      url: 'https://www.investiaa.com'
    },
    {
      name: 'Goldentechnosoft',
      logo: '/events-club/golden.webp',
      url: 'https://www.goldentechnosoft.com'
    },
    { name: 'Leo Club of Kathmandu', logo: '/events-club/leo-club.webp' } // No URL for this partner
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-20 text-center transition-all">
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
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#1f2937] rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105"
          >
            {/* Partner Logo */}
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className="w-20 h-20 object-contain mb-4"
            />

            {/* Learn More Button */}
            {partner.url && (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium text-sm py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mt-16 w-full h-1 bg-gradient-to-r from-[#2c3e50] via-[#3498db] to-[#2aa854] rounded-full"></div>
    </div>
  );
}
