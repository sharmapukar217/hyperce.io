import React from 'react'; // Ensure this is imported if using an older React version.
import Navbar from '@/components/Navbar/Navbar';

const EventsClubMembership = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-[#00172a]">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white dark:text-white mb-4">
            Hyperce Events Club Membership
          </h1>
          <p className="text-lg text-gray-200 dark:text-gray-400">
            Fill out the form below to join our exclusive events club!
          </p>
        </div>

        {/* Iframe for Google Form */}
        <div className="w-full max-w-4xl h-auto bg-[#00172a]  shadow-lg rounded-lg overflow-hidden p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScB8SmA_6r-yC_Y-v2KV0IjX7cAmkDn4EZPwVCfwMY2avdwlA/viewform?usp=sf_link"
            width="100%"
            height="1500px" // Adjust height as needed
            className="w-full border-none"
            title="Events Club Membership Form"
            style={{ overflow: 'hidden' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default EventsClubMembership;
