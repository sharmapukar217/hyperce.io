const icon = {
  dark: "/services_logos/qa/qa-dark.png",
  light: "/services_logos/qa/qa-light.png",
};

import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-20 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-20 rounded-3xl">
          <div className="flex flex-col text-black dark:text-white items-center gap-2 justify-center">
            <div>
              <div className="hidden dark:block">
                <Image height={80} width={80} src={icon.dark} alt="" />
              </div>
              <div className="dark:hidden">
                <Image height={80} width={80} src={icon.light} alt="" />
              </div>
            </div>
            <span className="text-4xl md:text-7xl font-bold">Hyperce QA</span>
            <br />
            <span className="text-base font-bold">
              Supercharge your software success with Hyperce QA's advanced
              testing solutions.
            </span>
            <div className="flex gap-5">
              <a
                className="mt-10 w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
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
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
              {/* <FrontendDemo
                link="https://frontier-demo.hyperce.io/"
                name="Frontier Demo"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}