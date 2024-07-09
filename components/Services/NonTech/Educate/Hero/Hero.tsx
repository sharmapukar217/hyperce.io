import { FaBook, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

export default function HeroEducate() {
  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-20 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-20 rounded-3xl">
          <div className="flex flex-col text-black dark:text-white items-center gap-2 justify-center">
            <img
              className="h-[120px] w-auto rounded-full hidden dark:block"
              src="/services_logos/educate/HyperceEducate.jpg"
              alt="Hyperce Educate Logo"
            />
            <img
              className="h-[120px] w-auto rounded-full dark:hidden"
              src="/services_logos/educate/HyperceEducate.jpg"
              alt="Hyperce Educate Logo"
            />
            <FaGraduationCap className="text-6xl md:text-8xl mt-5" />
            <span className="text-4xl md:text-7xl font-bold mt-5">
              Hyperce Educate
            </span>
            <br />
            <span className="text-base font-bold">
              Empowering Minds, Shaping Futures
            </span>
            <p className="text-base mt-5">
              Hyperce Educate provides world-class educational resources and
              training programs designed to help individuals and organizations
              achieve their learning goals and unlock their full potential.
            </p>
            <div className="flex gap-5 mt-10">
              <a
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="#learnmore"
              >
                Learn More
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-yellow-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-yellow-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="#programs"
              >
                Our Programs
                <FaBook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
