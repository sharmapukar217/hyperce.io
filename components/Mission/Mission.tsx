"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="mx-auto container px-10 flex flex-col gap-20 py-20 ">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-[100vw] overflow-hidden">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="left text-center md:text-left md:w-1/2 flex flex-col gap-5 justify-between py-[5%]"
        >
          <h2 className="text-5xl font-bold">Our Mission </h2>
          <span className="text-xl text-gray-200">
            Take the opportunity to elevate your business to new heights with
            our futuristic ecommerce platforms and AI-powered ecommerce
            solutions. Take the opportunity to elevate your business to new
            heights with our futuristic ecommerce platforms and AI-powered
            ecommerce solutions.
          </span>
          <a href="/get-started">
            <span className="underline font-semibold text-2xl underline-offset-8">
              Learn More
            </span>
          </a>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="right md:w-1/2 flex justify-end items-center"
        >
          <img width="100%" height="100%" src="/mission.png" className="h-fit" alt="" />
        </motion.div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 max-w-[100vw] overflow-hidden">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="left md:w-1/2 flex justify-start items-center"
        >
          <img width="100%" height="100%" src="/mission.png" className="h-fit" alt="" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="right text-center md:text-left md:w-1/2 flex flex-col gap-5 justify-between py-[5%]"
        >
          <h2 className="text-5xl font-bold">Our Vision</h2>
          <span className="text-xl text-gray-200">
            Take the opportunity to elevate your business to new heights with
            our futuristic ecommerce platforms and AI-powered ecommerce
            solutions. Take the opportunity to elevate your business to new
            heights with our futuristic ecommerce platforms and AI-powered
            ecommerce solutions.
          </span>
          <a href="/get-started">
            <span className="underline font-semibold text-2xl underline-offset-8">
              Learn More
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
