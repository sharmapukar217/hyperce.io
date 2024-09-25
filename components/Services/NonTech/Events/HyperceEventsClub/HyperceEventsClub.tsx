import Link from 'next/link';
import { FaUserFriends, FaTicketAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineBusinessCenter } from 'react-icons/md';

export default function HyperceEventsClub() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <h1 className="text-3xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Hyperce Events Club
        </h1>
        <p className="w-2/3 text-xl sm:text-base">
          Club for Hyperce organized and powered/supported business and skills
          events, bootcamps, workshops, trainings, and webinars. Whether you’re
          looking to upskill or build business connections, Hyperce Events Club
          offers various opportunities to grow your career and network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
        {/* Skills Events Club */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-pink-600">
          <GiSkills className="text-[#854b8a] dark:text-[#D8AEF2]" size={45} />
          <h3 className="text-xl font-bold mt-4">Hyperce Skills Events Club</h3>
          <p className="text-sm text-black dark:text-[#CBCBCB] mt-2">
            Join us for 1-3 virtual events per month and 1-2 physical events per
            month, totaling 12-36 events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Virtual Pass:
              $300/month, $3000/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Physical Pass:
              $500/month, $5000/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#854b8a] mr-2" /> Hybrid Pass:
              $600/month, $6000/year
            </li>
          </ul>
        </div>

        {/* Business Events Club */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-cyan-400 ">
          <MdOutlineBusinessCenter
            className="text-[#3498db] dark:text-[#AEDFF7]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">
            Hyperce Business Events Club
          </h3>
          <p className="text-sm text-black dark:text-[#CBCBCB] mt-2">
            Participate in 1-3 virtual events per month and 1-2 physical events,
            totaling 12-36 events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Virtual Pass:
              $750/month, $7500/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Physical Pass:
              $1000/month, $10000/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#3498db] mr-2" /> Hybrid Pass:
              $1500/month, $15000/year
            </li>
          </ul>
        </div>

        {/*Hyperce Super Events Club  */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-green-600">
          <FaUserFriends
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Hyperce Super Events Club</h3>
          <p className="text-sm text-black dark:text-[#CBCBCB] mt-2">
            A mixture of both skill and business events for a total of 12-36
            events annually.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Virtual Pass:
              $900/month, $9000/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Physical Pass:
              $1300/month, $13000/year
            </li>
            <li className="flex items-center">
              <FaTicketAlt className="text-[#27ae60] mr-2" /> Hybrid Pass:
              $1800/month, $18000/year
            </li>
          </ul>
        </div>
      </div>

      {/*Additional Details */}
      <div className="mt-12 text-center">
        <p className="text-xl font-bold text-[#e74c3c] dark:text-[#F4A7A7]">
          Initially: 30 seats limit for the entire club membership
        </p>
        <p className="text-lg mt-2">
          Festive Offer: <span className="font-extrabold">10% off</span> on all
          membership passes!
        </p>
        <p className="text-lg mt-2">
          One lucky winner will receive a{' '}
          <span className="font-extrabold">Combo Premium Pass Membership</span>.
        </p>
        <Link href="/events-club">
          <button className="mt-4 bg-[#3498db] text-white py-3 px-6 rounded-3xl shadow-lg hover:bg-[#2980b9] transition-colors">
            Join Our Events Club
          </button>
        </Link>
      </div>
    </div>
  );
}
