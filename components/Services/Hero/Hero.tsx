"use client";

import Typewriter from "./minute/Typerwriter";

export default function Hero() {
  return (
    <section className="flex flex-col pt-0 pb-20 mt-10 lg:flex-row items-center gap-10 px-10 mx-auto container">
      <div className="left lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
        <div className=" text-6xl lg:text-7xl font-bold">
          Your Ecommerce Suite Partner
        </div>

        <div className="text-md font-md md:text-xl sm:w-full lg:w-4/5">
          <Typewriter
            text="Take the opportunity to elevate your business to new heights with our
          futuristic ecommerce platforms and AI-powered ecommerce solutions."
          />
        </div>
        <div className="flex gap-5 text-2xl justify-center lg:justify-start font-bold mt-5">
          <button
            aria-label="learn-more-hero"
            className="px-5 py-1 hover:scale-[105%] active:scale-95 transition duration-150 hover:bg-[#4a8b96] text-white bg-[#357D8A] text-[1rem] rounded-full"
          >
            Learn More
          </button>
          <button
            aria-label="conact-us-hero"
            className="hover:scale-[105%] active:scale-95 transition duration-150 px-5 py-1 border-2 hover:text-gray-500 border-gray-500 dark:border-zinc-200 dark:hover:text-[#e4e4e4] text-[1rem] rounded-full"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="right lg:w-1/2 h-[40vh] lg:h-[60vh] flex items-center justify-center">
        <img src="/home.png" alt="" />
      </div>
    </section>
  );
}
