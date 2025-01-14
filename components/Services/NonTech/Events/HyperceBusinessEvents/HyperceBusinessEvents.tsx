import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaBusinessTime,
  FaHandshake
} from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';

export default function HyperceBusinessEvents() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <p className="leading-wide text-2xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Hyperce Business Events
        </p>
        <p className="w-2/3 text-xl sm:text-base text-center">
          At Hyperce Business Events, we bring together industry leaders,
          entrepreneurs, and professionals to share knowledge, network, and
          grow. Our business events are designed to help you stay ahead in
          today’s fast-evolving market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaBriefcase
            className="text-[#3498db] dark:text-[#AEDFF7]"
            size={45}
            aria-label="Business Forums Icon"
          />
          <h3 className="text-xl font-bold mt-4">Business Forums</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Engage with key stakeholders and decision-makers at our business
            forums, where strategies and innovations are discussed.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaBusinessTime
            className="text-[#f39c12] dark:text-[#F8E6A2]"
            size={45}
            aria-label="Executive Summits Icon"
          />
          <h3 className="text-xl font-bold mt-4">Executive Summits</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Participate in our executive summits to gain insights into
            leadership, management, and future business trends.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <IoIosPeople
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={45}
            aria-label="Networking Events Icon"
          />
          <h3 className="text-xl font-bold mt-4">Networking Events</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Expand your professional network by meeting like-minded
            professionals at our networking events.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaHandshake
            className="text-[#e74c3c] dark:text-[#F4A7A7]"
            size={45}
            aria-label="Partnership Meetings Icon"
          />
          <h3 className="text-xl font-bold mt-4">Partnership Meetings</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Discover collaboration opportunities and form strategic partnerships
            in our business meetings.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaChalkboardTeacher
            className="text-[#9b59b6] dark:text-[#D8AEF2]"
            size={45}
            aria-label="Business Workshops Icon"
          />
          <h3 className="text-xl font-bold mt-4">Business Workshops</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Join hands-on workshops that provide practical business skills for
            entrepreneurs and professionals alike.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#2c3e50] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <MdOutlineEventAvailable
            className="text-[#16a085] dark:text-[#A3F0DB]"
            size={45}
            aria-label="Corporate Conferences Icon"
          />
          <h3 className="text-xl font-bold mt-4">Corporate Conferences</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Stay updated with the latest corporate trends and insights by
            attending our annual corporate conferences.
          </p>
        </div>
      </div>
    </div>
  );
}
