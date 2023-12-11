"use client";
import { DarkModeProvider } from "@/contexts/theme_context";
import DarkModeToggle from "../ThemeSwitch/DarkModeToggle";
import HamburgerComponent from "./Hamburger";
import Logo from "@/utils/assets/Logo";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/data/Navdata";
import { useEffect, useState } from "react";
import "./Navbar.css";
import {
  showcaseNonTechSolutions,
  showcaseTechSolutions,
} from "@/data/Solutions";

import { ThemeProvider } from "next-themes";
import PrelineScript from "@/vendor/PrelineScript";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    require("preline");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <header className={`dark:bg-slate-900 w-full`}>
        <div className="flex items-center justify-between gap-5 md:gap-0 container py-8 px-10 md:px-20 z-50">
          <div className="logo">
            <Logo />
          </div>

          <nav className="justify-center items-center hidden lg:flex">
            <ul className="flex gap-10">
              {navMenuItems.map((menuItem) => (
                <li
                  key={menuItem.href}
                  className={`hover:scale-[105%] text-base font-bold transition-all duration-200  ${
                    pathname === menuItem.href
                      ? `text-[#337684]`
                      : "text-black dark:text-zinc-200 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]"
                  }`}
                >
                  <a
                    className="font-semibold hover:dark:text-[#357D8A]"
                    href={menuItem.href}
                  >
                    {menuItem.name}
                  </a>
                </li>
              ))}
              <div className="relative md:flex md:items-center md:justify-between z-50">
                <div
                  id="navbar-collapse-with-animation"
                  className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                >
                  <div className="overflow-hidden overflow-y-auto max-h-[75vh]">
                    <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:mt-0 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <a href="/solutions">
                          <button
                            type="button"
                            className={`hover:scale-[105%] text-base font-bold transition-all duration-200  flex items-center ${
                              pathname === "/solutions"
                                ? `text-[#337684]`
                                : "text-black dark:text-zinc-200 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]"
                            }`}
                          >
                            Solutions
                            <svg
                              className="flex-shrink-0 ms-2 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                        </a>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full start-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5 w-[50vw]">
                          <div className="md:grid md:grid-cols-2 gap-4">
                            <div className="flex flex-col mx-1 md:mx-0">
                              <span className="mb-5">Tech Solutions</span>
                              {showcaseTechSolutions.map((each, index) => (
                                <a
                                  className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href={each.href}
                                >
                                  <img
                                    className="h-10 w-10 hidden dark:block"
                                    src={each.darkIcon}
                                    alt=""
                                  />
                                  <img
                                    className="h-10 w-10 dark:hidden"
                                    src={each.whiteIcon}
                                    alt=""
                                  />

                                  <div className="grow">
                                    <p className="font-medium text-gray-800 dark:text-gray-200">
                                      {each.name}
                                    </p>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 line-clamp-2">
                                      {each.des}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>

                            <div className="flex flex-col mx-1 md:mx-0">
                              <span className="mb-5">Non-Tech Solutions</span>
                              {showcaseNonTechSolutions.map((each, index) => (
                                <a
                                  className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href={each.href}
                                >
                                  <img
                                    className="h-10 w-10 hidden dark:block"
                                    src={each.darkIcon}
                                    alt=""
                                  />
                                  <img
                                    className="h-10 w-10 dark:hidden"
                                    src={each.whiteIcon}
                                    alt=""
                                  />

                                  <div className="grow">
                                    <p className="font-medium text-gray-800 dark:text-gray-200">
                                      {each.name}
                                    </p>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 line-clamp-2">
                                      {each.des}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
          <div className="flex gap-10 items-center">
            <div className="cta gap-5 hidden md:flex">
              <a target="_blank" href="https://docs.hyperce.io/proposal.pdf">
                <button
                  aria-label="proposal-download"
                  className="flex h-full gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-[#357D8A] px-5 py-1 rounded-full items-center"
                >
                  <div className="svg">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-base font-bold">Proposal</span>
                </button>
              </a>
              <a href="/#contact">
                <button
                  aria-label="quotation"
                  className="border-2 border-black dark:border-zinc-200  px-5 py-1 transition duration-300 rounded-full font-extralight dark:bg-transparent bg-[#1f2937] text-[#fff] hover:scale-[105%] active:scale-[95%]"
                >
                  <span className="text-base font-bold">Quotation</span>
                </button>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-fit px-1 py-1 cursor-pointer transition-all duration-100 rounded-full">
                <DarkModeToggle />
              </div>
              <div className="hamburger flex items-center">
                <HamburgerComponent />
              </div>
            </div>
          </div>
        </div>
      </header>
      <PrelineScript />
    </ThemeProvider>
  );
}
