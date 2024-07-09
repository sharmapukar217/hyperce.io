import React from 'react';
import Card from './Card';
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaAward,
  FaBrain
} from 'react-icons/fa';

export default function WhyChooseEducate() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-[#101525] dark:via-[#212642] dark:to-[#2A2D3E] md:px-10 rounded-3xl pt-16 shadow-lg">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Educate?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Unlock your full potential with Hyperce Educate. We provide
            top-notch educational programs and resources tailored to meet your
            unique learning needs. With our expert guidance and innovative
            solutions, you can achieve your educational goals and excel in your
            personal and professional development.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              {
                num: <FaChalkboardTeacher size={40} />,
                des: 'Expert Instruction'
              },
              { num: <FaBookOpen size={40} />, des: 'Comprehensive Resources' },
              { num: <FaAward size={40} />, des: 'Recognized Certifications' },
              { num: <FaBrain size={40} />, des: 'Innovative Techniques' }
            ].map((each, index) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
