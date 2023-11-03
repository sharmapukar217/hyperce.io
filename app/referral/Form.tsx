import React from "react";

import Image from "next/image";
import Demo from "./demo.svg";

export default function Form() {
  return (
    <section className="flex flex-col md:flex-row mx-10 my-10 border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl bg-[#ebeeef] py-10 justify-between">
      {/* Left Section with Image */}
      <div className="md:flex-1 flex items-center justify-center p-4">
        <Image
          src={Demo}
          alt="Demo"
          width={700}
          height={800}
          objectFit="cover"
          className="rounded-t-xl  md:rounded-tl-xl md:rounded-bl-xl"
        />
      </div>

      {/* Right Section with Form */}

      <div className="md:w-1/2 dark:text-gray-300 flex flex-col px-10">
        <h2 className="font-bold text-4xl mb-5 dark:text-white text-left">
          Join as a Referral Partner
        </h2>
        <form className="w-full md:w-[80%] needs-validation flex-end">
          <input type="checkbox" className="hidden" name="botcheck" />
          <div className="mb-5">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="name"
            />
          </div>
          <div className="mb-5">
            <label className="sr-only">Email Address</label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Any Remarks?"
              className="text-black w-full px-4 py-3 placeholder:text-gray-800 rounded-md outline-none h-36 focus:outline-gray-400 bg-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#357D8A] text-white w-2/4 h-fit py-3"
          >
            Join Now
          </button>

          <div id="result" className="mt-3 text-center"></div>
        </form>
      </div>
    </section>
  );
}
