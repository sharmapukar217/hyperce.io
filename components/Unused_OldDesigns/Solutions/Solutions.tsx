"use client";

import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";

export default function Solutions() {
  return (
    <AnimatePresence>
      <motion.section
        id="solutions"
        initial={{ y: 80 }}
        animate={{ y: -20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto container px-10"
      >
        <div className="bg-[#fbfbfb] dark:bg-[#0E1625] w-full -mt-[6%] rounded-3xl py-14">
          <h1 className="text-3xl text-black dark:text-white md:text-5xl font-bold text-center pb-10">
            Our Solutions and Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center my-10">
            <a href="/get-starte">
              <button className="hover:text-gray-600 dark:text-white  dark:hover:text-[#e4e4e4] border-[#c7c5c5] dark:border-zinc-200 transition-all duration-200 hover:scale-[102%] text-xl font-bold flex gap-2 items-center border-2 px-7 py-3 rounded-xl">
                <span>See all our Services </span>
                <span>
                  <svg width="30px" height="30px" viewBox="-3 0 32 32">
                    <g id="icomoon-ignore"></g>
                    <path
                      d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
