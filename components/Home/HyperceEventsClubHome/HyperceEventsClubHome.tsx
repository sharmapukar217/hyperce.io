'use client'; // Ensure that the component runs only on the client-side

import Link from 'next/link';
import { FaUserFriends, FaTicketAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineBusinessCenter } from 'react-icons/md';

export default function HyperceEventsClubHome() {
  return (
    <section className="bg-[#f0f4f8] dark:bg-gray-900 py-14 px-5 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-12 gap-5 ">
        <h1 className="text-4xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Hyperce Events Club
        </h1>
        <p className="w-full md:w-2/3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Join Hyperce&apos;s exclusive events, workshops, bootcamps, and
          webinars. Whether you&apos;re looking to upskill or expand your
          business network, the Hyperce Events Club provides unique
          opportunities to grow.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Skills Events Club */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-pink-500 shadow-pink-300">
          <GiSkills className="text-[#854b8a] dark:text-[#D8AEF2]" size={45} />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Skills Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            1-3 virtual events/month and 1-2 physical events/month, totaling
            12-36 events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Virtual Pass:
              $300/month, $3000/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Physical Pass:
              $500/month, $5000/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Hybrid Pass:
              $600/month, $6000/year
            </li>
          </ul>
        </div>

        {/* Business Events Club */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-blue-500 shadow-blue-300">
          <MdOutlineBusinessCenter
            className="text-[#3498db] dark:text-[#AEDFF7]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Business Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            1-3 virtual events/month and 1-2 physical events, totaling 12-36
            events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Virtual Pass:
              $750/month, $7500/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Physical Pass:
              $1000/month, $10000/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Hybrid Pass:
              $1500/month, $15000/year
            </li>
          </ul>
        </div>

        {/* Super Events Club */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-green-500 shadow-green-300">
          <FaUserFriends
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Super Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            A mixture of both skill and business events for a total of 12-36
            events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Virtual Pass:
              $900/month, $9000/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Physical Pass:
              $1300/month, $13000/year
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Hybrid Pass:
              $1800/month, $18000/year
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <p className="text-xl font-bold text-yellow-500 dark:text-yellow-700">
          Limited Time Offer: Only 30 seats available for the entire club!
        </p>
        <p className="text-lg mt-2 text-gray-800 dark:text-gray-300">
          Get <span className="font-extrabold text-[#e74c3c]">10% off</span> on
          all membership passes!
        </p>
        <p className="text-lg mt-2 text-gray-800 dark:text-gray-300">
          One lucky winner will receive a{' '}
          <span className="font-extrabold">Combo Premium Pass Membership</span>
        </p>
        <div>
          <Link href="https://forms.gle/gzn4Qf5mYgy4zEfz6" target="_blank">
            <button className="mt-6 bg-[#357d8A] hover:bg-[#357d8A] text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Join Our Events Club
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
