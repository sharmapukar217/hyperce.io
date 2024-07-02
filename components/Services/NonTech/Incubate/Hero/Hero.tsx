import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-20 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-10 rounded-3xl">
          <div className="flex flex-col items-center text-black dark:text-white gap-2 justify-center">
            <Image
              className="h-[100px] mb-5 w-auto dark:hidden"
              src="/incubate.png"
              alt="Hyperce Incubate Logo"
              width={400}
            />
            <Image
              className="h-[70px] mb-5 w-auto hidden dark:block"
              src="/incubate-dark.svg"
              alt="Hyperce Incubate Logo"
              width={400}
            />
            <span className="text-4xl md:text-7xl font-bold">
              Hyperce Incubate
            </span>
            <br />
            <span className="text-base font-bold">
              Your Strategic Partner for Digital Business Success
            </span>
            <p className="text-base mt-5">
              Hyperce Incubate provides end-to-end solutions for small and
              startup businesses, including expert mentorship, strategic
              networking, funding opportunities, and comprehensive business
              support.
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
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-purple-800 to-[#7D357D] shadow-lg shadow-transparent hover:shadow-purple-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="#apply"
              >
                Apply Now
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 8H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 2L14 8L8 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
