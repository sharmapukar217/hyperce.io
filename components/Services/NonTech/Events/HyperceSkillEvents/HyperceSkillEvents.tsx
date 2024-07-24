import { FaRegCalendarAlt, FaUsers, FaHandshake } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { GiSkills, GiTeacher, GiNotebook } from 'react-icons/gi';
import { MdOutlineEventNote } from 'react-icons/md';

export default function HyperceSkillEvents() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <p className="leading-wide text-2xl font-extrabold text-[#854b8a] dark:text-[#D8AEF2]">
          Hyperce Skill Events
        </p>
        <p className="w-2/3 text-xl sm:text-base text-center">
          At Hyperce Skill Events, we offer specialized events focused on
          enhancing your skills and knowledge. From intensive bootcamps to
          interactive workshops, our events are designed to equip you with the
          tools you need to succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-gray-100 dark:bg-[#172D41] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <GiSkills className="text-[#854b8a] dark:text-[#D8AEF2]" size={45} />
          <h3 className="text-xl font-bold mt-4">Skill Events</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Join our skill events to learn from industry experts and gain
            practical knowledge.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-[#172D41] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <MdOutlineEventNote
            className="text-[#477e68] dark:text-[#AEF2D7]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Bootcamps</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Participate in our intensive bootcamps to accelerate your learning
            and skill development.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-[#172D41] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <GiTeacher className="text-[#c7b36b] dark:text-[#FFD747]" size={45} />
          <h3 className="text-xl font-bold mt-4">Workshops</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Engage in hands-on workshops to apply new concepts and enhance your
            skills.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-[#172D41] p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <GiNotebook
            className="text-[#854b8a] dark:text-[#D8AEF2]"
            size={45}
          />
          <h3 className="text-xl font-bold mt-4">Trainings</h3>
          <p className="text-black dark:text-[#CBCBCB] text-sm mt-2">
            Attend our training sessions to gain deep insights and master new
            skills.
          </p>
        </div>
      </div>
    </div>
  );
}
