"use client";

import Typewriter from "./minute/Typewriter";

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
        <div className="flex gap-5 text-xl justify-center lg:justify-start font-light">
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
        {/* <motion.svg
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          width="100%"
          height="100%"
          viewBox="0 0 520 557"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0,
            }}
            y="93"
            width="237"
            height="260"
            rx="40"
            fill="#0E1625"
          />
          <motion.rect
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            x="190"
            width="183"
            height="156"
            rx="40"
            fill="white"
          />
          <motion.rect
            initial={{
              scale: 0.24,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            x="305"
            y="30"
            width="215"
            height="386"
            rx="40"
            fill="#0E1625"
          />
          <motion.rect
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            x="117"
            y="255"
            width="301"
            height="302"
            rx="40"
            fill="white"
          />
        </motion.svg> */}
        {/* <svg
          className="animate-scaleAnimation"
          width="100%"
          height="100%"
          viewBox="0 0 520 557"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="93" width="237" height="260" rx="40" fill="#0E1625" />
          <rect x="190" width="183" height="156" rx="40" fill="white" />
          <rect
            x="305"
            y="30"
            width="215"
            height="386"
            rx="40"
            fill="#0E1625"
          />
          <rect x="117" y="255" width="301" height="302" rx="40" fill="white" />
        </svg> */}
        <img src="/home.png" alt="" />
      </div>
      <style jsx>{`
        @keyframes scaleAnimation {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
