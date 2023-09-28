export default function Hero() {
  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-20 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-20 rounded-3xl">
        <div className="flex flex-col items-center  text-black dark:text-white gap-2 justify-center">
          <img
            className="h-[100px] mb-5 w-auto dark:hidden"
            src="/headless.png"
            alt=""
          />
          <img
            className="h-[70px] mb-5 w-auto hidden dark:block"
            src="/headless-dark.svg"
            alt=""
          />
          <span className="text-4xl md:text-7xl font-bold">Hyperce Headless</span>
          <br />
          <span className="text-base font-bold ">
            Hyperce Ecommerce Solution helps to strategize, execute, and amplify
            your brand's reach.
          </span>
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
        </div>
      </div>
      </div>
    </section>
  );
}
