import React from 'react';

const EventsClubMembership = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-[#2c3e50]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#2c3e50] dark:text-white mb-4">
          Hyperce Events Club Membership
        </h1>
        <p className="text-lg text-[#7f8c8d] dark:text-gray-400">
          Fill out the form below to join our exclusive events club!
        </p>
      </div>

      {/* Iframe for Google Form */}
      <div className="w-full max-w-4xl h-screen bg-white dark:bg-[#1a1a1a] shadow-lg rounded-lg overflow-hidden p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScB8SmA_6r-yC_Y-v2KV0IjX7cAmkDn4EZPwVCfwMY2avdwlA/viewform?usp=sf_link"
          width="100%"
          height="100%"
          className="w-full h-full border-none"
          title="Events Club Membership Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default EventsClubMembership;
