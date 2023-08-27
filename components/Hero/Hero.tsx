"use client";

import { motion } from "framer-motion";
import Typewriter from "./minute/Typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col pt-0 pb-20 mt-10 lg:py-20 lg:flex-row items-center gap-10 px-10 mx-auto container">
      <div className="left lg:w-1/2 flex flex-col gap-5 text-left md:text-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl lg:text-7xl font-semibold"
        >
          Your Ecommerce Suite Partner
        </motion.div>

        <div className="text-md font-light md:text-xl sm:w-full lg:w-4/5">
          <Typewriter
            text="Take the opportunity to elevate your business to new heights with our
          futuristic ecommerce platforms and AI-powered ecommerce solutions."
          />
        </div>
        <div className="flex gap-5 text-xl font-light">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-1 hover:bg-[#4a8b96] text-white bg-[#357D8A] text-[1rem] rounded-full"
          >
            Learn More
          </motion.button>
          <motion.button className="px-5 py-1 border-2 hover:text-gray-500 border-gray-500 dark:border-zinc-200 dark:hover:text-[#e4e4e4] text-[1rem] rounded-full">
            Contact Us
          </motion.button>
        </div>
      </div>
      <div className="right lg:w-1/2 h-[40vh] lg:h-[60vh] flex items-center justify-center">
        <motion.svg
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
        </motion.svg>
      </div>
    </section>
  );
}
