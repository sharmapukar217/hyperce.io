"use client";

import "./Hamburger.css";
import React, { useState, useEffect } from "react";
import {
  showcaseNonTechSolutions,
  showcaseTechSolutions,
} from "@/data/Solutions";
import { BsFillCaretDownFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/data/Navdata";

export default function Hamburger(props: any) {
  const pathname = usePathname();

  const menu = navMenuItems;
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(!menuOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        aria-label="hamburger-menu"
        type="button"
        className="hamburger cursor-pointer flex items-center"
        onClick={openMenu}
      >
        <svg
          width="50px"
          height="50px"
          className="text-secondary"
          viewBox="0 -0.5 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className={`${
          menuOpen ? "transition-x-0 hyperce-no-scroll" : "translate-x-[100%]"
        } mobile-menu-content dark:backdrop-blur-md backdrop-blur-xl dark:backdrop-blur-full py-[10%] transition-all flex justify-center duration-500 h-[100vh] -top-10 overflow-hidden z-20 fixed scroll- bg-transparent text-primary w-[100vw] lg:max-w-[30vw] mt-10 right-0`}
      >
        <div className="close-btn flex flex-col justify-center text-black dark:text-white h-fit w-[80%] rounded-2xl py-[10%] dark:bg-opacity-10 bg-opacity-0 px-[10%]">
          <svg
            onClick={closeMenu}
            className="my-8 cursor-pointer hover:scale-105 text-secondary"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
              fill="currentColor"
            />
          </svg>

          <div className="menu">
            <div className="flex flex-col gap-5 px-4 mx-auto">
              <ul className="flex flex-col gap-8">
                {menu.map((eachMenu) => (
                  <li
                    onClick={closeMenu}
                    key={menu.indexOf(eachMenu)}
                    className="lg:hover:scale-[105%] text-md transition-all duration-200 text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-200"
                  >
                    <a
                      href={eachMenu.href}
                      className="font-bold hover:dark:text-[#357D8A]"
                    >
                      {eachMenu.name}
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
              <a
                target="_blank"
                href="https://docs.hyperce.io/proposal.pdf"
                className="mt-10"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
}
