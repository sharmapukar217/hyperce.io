import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaAward,
  FaBrain
} from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

export default function Educate() {
  return (
    <section
      className="container mx-auto px-10 py-20 text-black dark:text-white"
      id="learnmore"
    >
      <div className="flex flex-col items-center text-center md:text-center gap-5 md:items-center text-black dark:text-[#CECFDF] mb-20">
        <p className="leading-wide text-2xl font-extrabold ">
          Hyperce Educate: Empowering Minds, Shaping Futures
        </p>
        <p className="w-2/3 text-xl sm:text-base text-center">
          At Hyperce Educate, we are committed to providing top-tier educational
          programs and resources that foster growth and development. Our
          comprehensive training solutions are designed to meet the unique needs
          of individuals and organizations alike.
        </p>
      </div>

      <div className="flex gap-20 flex-col lg:flex-row">
        <div className="lg:w-3/5 flex flex-col gap-10 text-lg">
          <p className="text-4xl font-bold">What is Hyperce Educate?</p>
          <p className="text-justify">
            Hyperce Educate is dedicated to delivering exceptional educational
            services, ensuring every learner has access to quality training and
            resources. Our team of expert educators works closely with you to
            understand your learning objectives and create customized solutions
            to achieve them.
          </p>
          <p className="text-justify">
            <span className="font-bold text-center inline-block mb-6">
              Our Mission
            </span>
            <br />
            Our mission is to empower individuals and organizations through
            innovative educational programs that drive success and personal
            growth. We offer a wide range of services, including online courses,
            in-person workshops, and personalized coaching, all tailored to your
            specific needs.
            <br />
            <br />
            We pride ourselves on our ability to provide education that is
            accessible, engaging, and impactful. With Hyperce Educate, you can
            unlock your full potential and achieve your learning goals.
          </p>
        </div>
        <div className="lg:w-2/5 grid md:grid-cols-2 gap-5 h-fit">
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaChalkboardTeacher
              className="text-[#854b8a] dark:text-[#D8AEF2]"
              size={45}
            />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Expert-led courses and workshops designed to provide in-depth
              knowledge and practical skills.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaBookOpen
              className="text-[#477e68] dark:text-[#AEF2D7]"
              size={45}
            />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Comprehensive learning materials and resources to support your
              educational journey.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaAward className="text-[#c7b36b] dark:text-[#FFD747]" size={45} />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Recognized certifications and awards to validate your skills and
              achievements.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaBrain className="text-[#854b8a] dark:text-[#D8AEF2]" size={45} />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Innovative learning techniques and strategies to enhance your
              educational experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
