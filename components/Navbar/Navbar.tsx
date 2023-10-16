"use client";
import { DarkModeProvider } from "@/contexts/theme_context";
import DarkModeToggle from "../ThemeSwitch/DarkModeToggle";
import HamburgerComponent from "./Hamburger";
import Logo from "@/utils/assets/Logo";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/data/Navdata";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { solutions } from "@/data/Solutions";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const showDropdown = () => {
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    if (!isDropdownHovered) {
      setTimeout(() => {
        setIsDropdownVisible(false);
      }, 200);
    }
  };

  useEffect(() => {
    if (!isDropdownHovered) {
      setIsDropdownVisible(false);
    }
  }, [isDropdownHovered]);

  const pathname = usePathname();

  return (
    <DarkModeProvider>
      <header className="flex items-center justify-between mx-auto gap-5 md:gap-0 container py-8 px-10 md:px-20">
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
            <a href="#solutions">
              <div
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="relative"
              >
                <li
                  className={`hover:scale-[105%] flex inline-flex items-center justify-center text-base font-bold transition-all duration-200 cursor-pointer ${
                    isDropdownVisible ? "text-[#337684]" : ""
                  }`}
                >
                  <span className="flex inline-flex items-center justify-center">
                    Solutions <BsFillCaretDownFill />
                  </span>
                </li>
                {isDropdownVisible && (
                  <div
                    onMouseEnter={() => setIsDropdownHovered(true)}
                    onMouseLeave={() => setIsDropdownHovered(false)}
                    className={`absolute border-[1px] z-50 bg-white dark:bg-[#0F1023] border-gray-300 dark:border-black px-1 py-1 transition-all duration-500 animate ease-linear p-4 ${
                      isDropdownVisible ? "dropdown-visible" : "dropdown-hidden"
                    }`}
                  >
                    {solutions.map((each) => (
                      <>
                        <a
                          className="inline-flex gap-x-5 min-w-max py-2 w-full items-center px-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          {each.name}
                        </a>
                      </>
                    ))}
                  </div>
                )}
              </div>
            </a>
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
            <a href="#contact">
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
      </header>
    </DarkModeProvider>
  );
}
