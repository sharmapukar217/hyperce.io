import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-6 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-20 rounded-3xl">
          <div className="flex flex-col text-black dark:text-white items-center gap-2 justify-center">
            <Image
              className="w-auto rounded-full hidden dark:block"
              src="/services_logos/events/HyperceEvents.jpg"
              alt="Hyperce Events Logo"
              width={120}
              height={120}
            />
            <Image
              className="w-auto rounded-full dark:hidden"
              src="/services_logos/events/HyperceEvents.jpg"
              alt="Hyperce Events Logo"
              width={120}
              height={120}
            />
            <span className="text-4xl md:text-7xl font-bold mt-10">
              Hyperce Events
            </span>
            <br />
            <span className="text-base font-bold">
              Your Premier Corporate Event Provider
            </span>
            <p className="text-base mt-5">
              Hyperce Events specializes in organizing top-tier corporate
              events, offering comprehensive event planning, execution, and
              management services to ensure your event&apos;s success.
            </p>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
              <a
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
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
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-blue-400 shadow-lg shadow-transparent hover:shadow-blue-500/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="https://docs.hyperce.io/hyperce-events-community-proposal.pdf"
                target="_blank"
              >
                Community Proposal
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
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-purple-600 to-purple-400 shadow-lg shadow-transparent hover:shadow-purple-500/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="https://docs.hyperce.io/hyperce-events-corporate-proposal.pdf"
                target="_blank"
              >
                Corporate Proposal
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
