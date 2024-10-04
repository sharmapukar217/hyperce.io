'use client'; // Ensure that the component runs only on the client-side

import Link from 'next/link';
import { FaUserFriends, FaTicketAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { AiOutlineStar, AiFillFire } from 'react-icons/ai';

export default function HyperceEventsClubHome() {
  return (
    <section className="py-16 px-5 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-12 gap-5">
        <AiOutlineStar
          className="text-purple-700 dark:text-yellow-400"
          size={50}
        />
        <h1 className="text-4xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Hyperce Events Club
        </h1>
        <p className="w-full md:w-2/3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Elevate your personal and professional growth by joining
          Hyperce&apos;s exclusive events, workshops, bootcamps, and webinars.
          Whether you&apos;re looking to upskill or expand your business
          network, Hyperce Events Club offers unparalleled opportunities to
          grow.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Skills Events */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-pink-500">
          <GiSkills className="text-[#854b8a] dark:text-[#D8AEF2]" size={45} />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Skills Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Stay ahead in your field with skill-based events that cater to
            professionals and learners alike.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Virtual & Physical
              Events Available
            </li>
          </ul>
        </div>

        {/* Business Events */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-blue-500">
          <MdOutlineBusinessCenter
            className="text-[#3498db] dark:text-[#AEDFF7]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Business Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Gain valuable insights and connect with industry leaders through our
            business-oriented events.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Networking
              Opportunities
            </li>
          </ul>
        </div>

        {/* Super Events */}
        <div className="bg-white dark:bg-[#2c3e50] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <FaUserFriends
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Hyperce Super Events Club
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            The perfect blend of skill and business events for those who want it
            all.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Exclusive
              Multi-event Packages
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 text-center">
        {/* <p className="text-2xl font-bold text-gray-800 dark:text-gray-300">
          Limited-Time Offer: Only 30 seats available!
        </p>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
          Seize your chance to become a part of Hyperce&apos;s exclusive events
          club and enjoy <span className="font-extrabold text-red-500">special
          perks</span>.
        </p> */}
        <div className="mt-6 flex flex-row gap-4 items-center justify-center">
          <AiFillFire
            className=" text-red-600 dark:text-yellow-400"
            size={50}
          />
          <Link href="/events-club" target="_blank">
            <button className="bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Join Our Events Club
            </button>
          </Link>
          <AiFillFire
            className=" text-red-600 dark:text-yellow-400"
            size={50}
          />
        </div>
      </div>
    </section>
  );
}
