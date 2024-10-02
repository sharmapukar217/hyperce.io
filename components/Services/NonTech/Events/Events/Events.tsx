import { FaRegCalendarAlt, FaUsers, FaHandshake } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';

export default function Events() {
  return (
    <section
      className="container mx-auto px-10 pt-4 pb-20 text-black dark:text-white"
      id="learnmore"
    >
      <div className="flex flex-col items-center text-center md:text-center gap-5 md:items-center text-black dark:text-[#CECFDF] mb-20">
        <p className="leading-wide text-2xl font-extrabold ">
          Hyperce Events: Your Premier Corporate Event Provider
        </p>
        <p className="w-2/3  text-xl sm:text-base text-center">
          At Hyperce Events, we specialize in creating extraordinary corporate
          events tailored to meet your business objectives. From meticulous
          planning to flawless execution, we ensure your events are memorable
          and impactful.
        </p>
      </div>

      <div className="flex gap-20 flex-col lg:flex-row">
        <div className="lg:w-3/5 flex flex-col gap-10 text-lg">
          <p className="text-4xl font-bold">What is Hyperce Events?</p>
          <p className="text-justify">
            Hyperce Events is dedicated to delivering top-notch event management
            services, ensuring every detail is handled with precision and
            creativity. Our team of experienced professionals works closely with
            you to understand your vision and bring it to life.
          </p>
          <p className=" text-justify">
            <span className="font-bold text-center inline-block mb-6">
              Our Mission
            </span>
            <br />
            Our mission is to provide comprehensive event management solutions
            that drive engagement and deliver measurable results. We offer a
            wide range of services, including venue selection, catering,
            entertainment, and logistics management, all tailored to your
            specific needs.
            <br />
            <br />
            We pride ourselves on our ability to manage events of all sizes,
            from intimate gatherings to large-scale conferences and trade shows.
            With Hyperce Events, your corporate event will be a resounding
            success, leaving a lasting impression on all attendees.
          </p>
        </div>
        <div className="lg:w-2/5 grid md:grid-cols-2 gap-5 h-fit">
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaRegCalendarAlt
              className="text-[#854b8a] dark:text-[#D8AEF2]"
              size={45}
            />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Comprehensive event planning and management to ensure every detail
              is covered, from start to finish.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaUsers className="text-[#477e68] dark:text-[#AEF2D7]" size={45} />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Engaging and impactful experiences designed to foster
              collaboration and strengthen relationships.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <BsFillLightbulbFill
              className="text-[#c7b36b] dark:text-[#FFD747]"
              size={45}
            />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Innovative event solutions that inspire and captivate your
              audience, leaving a lasting impact.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col rounded-xl">
            <FaHandshake
              className="text-[#854b8a] dark:text-[#D8AEF2]"
              size={45}
            />
            <p className="text-black dark:text-[#CBCBCB] text-sm">
              Seamless coordination and collaboration to ensure your event runs
              smoothly and exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
