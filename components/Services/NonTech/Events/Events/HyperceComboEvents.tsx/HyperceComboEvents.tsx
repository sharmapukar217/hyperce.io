import { FaRocket, FaSyncAlt, FaUsers, FaClipboardList } from 'react-icons/fa';
import { MdOutlineEventSeat } from 'react-icons/md';
import { GiTeamIdea } from 'react-icons/gi';

export default function HyperceComboEvents() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <p className="leading-wide text-2xl font-extrabold text-[#8e44ad] dark:text-[#CDA8F5]">
          Hyperce Combo Events
        </p>
        <p className="w-2/3 text-xl sm:text-base text-center">
          Hyperce Combo Events offers a combination of business, skills, and
          learning events designed to boost your career, personal growth, and
          professional connections all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaRocket className="text-[#8e44ad] dark:text-[#CDA8F5]" size={45} />
          <h3 className="text-xl font-bold mt-4">Innovation Summits</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Join our innovation summits to dive into the latest trends,
            disruptive technologies, and transformative ideas that are shaping
            the future.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaSyncAlt className="text-[#3498db] dark:text-[#AEDFF7]" size={45} />
          <h3 className="text-xl font-bold mt-4">Growth Sessions</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Participate in growth sessions focused on scaling your business,
            enhancing your personal skills, and learning sustainable strategies.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <GiTeamIdea
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Team Collaboration</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Collaborate with diverse teams in our combo events to share ideas,
            solve challenges, and achieve collective success.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaUsers className="text-[#f39c12] dark:text-[#F8E6A2]" size={45} />
          <h3 className="text-xl font-bold mt-4">Leadership Meetups</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Connect with leaders and aspiring leaders alike in our leadership
            meetups, fostering mentorship and growth.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <FaClipboardList
            className="text-[#e74c3c] dark:text-[#F4A7A7]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Workshops & Bootcamps</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Take part in hands-on workshops and immersive bootcamps that combine
            theoretical learning with practical application.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#3b3e55] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <MdOutlineEventSeat
            className="text-[#16a085] dark:text-[#A3F0DB]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Exclusive Events</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Enjoy access to exclusive events designed for top professionals,
            offering premium insights and networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
