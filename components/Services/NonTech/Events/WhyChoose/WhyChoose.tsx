import Card from './Card';
import {
  FaRegCalendarAlt,
  FaUsers,
  FaMagic,
  FaHandshake
} from 'react-icons/fa';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Events?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Elevate your corporate events with Hyperce Events, your go-to
            provider for exceptional event management services. From seamless
            planning to flawless execution, we ensure every detail is perfect,
            creating memorable experiences that resonate with your audience.
            Trust in our expertise to deliver outstanding events that align with
            your business goals.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: <FaRegCalendarAlt size={40} />, des: 'Expert Planning' },
              { num: <FaUsers size={40} />, des: 'Engaging Experiences' },
              { num: <FaMagic size={40} />, des: 'Innovative Solutions' },
              { num: <FaHandshake size={40} />, des: 'Seamless Coordination' }
            ].map((each, index) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
