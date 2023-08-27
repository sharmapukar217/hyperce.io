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
              <button className="hover:text-gray-600 dark:hover:text-[#e4e4e4] transition-all duration-200 hover:scale-[102%] text-xl font-bold flex gap-10 border-2 px-7 py-3 rounded-xl">
                See all our Services <div>&gt;</div>
              </button>
            </a>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
