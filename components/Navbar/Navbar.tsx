"use client";
import { DarkModeProvider } from "@/contexts/theme_context";
import DarkModeToggle from "../ThemeSwitch/DarkModeToggle";
import HamburgerComponent from "./Hamburger";
import Logo from "@/utils/assets/Logo";

export default function Navbar() {
  const navMenuItems = [
    {
      name: "Solutions",
      href: "#solutions",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Blogs",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <DarkModeProvider>
      <header className="flex items-center justify-between mx-auto container py-10 px-10 z-20">
        <div className="logo">
          <Logo />
        </div>

        <nav className="justify-center items-center hidden lg:flex">
          <ul className="flex gap-10">
            {navMenuItems.map((menuItem) => (
              <li
                key={navMenuItems.indexOf(menuItem)}
                className="hover:scale-[105%] text-md transition-all duration-200  text-black dark:text-zinc-200 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]"
              >
                <a href={menuItem.href}>{menuItem.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-10 items-center">
          <div className="cta gap-5 hidden md:flex">
            <button
              aria-label="proposal-download"
              className="flex gap-1 hover:gap-[0.4rem] transition-all duration-300 text-white bg-[#357D8A] px-5 py-1 rounded-full items-center"
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="text-md">Proposal</span>
            </button>
            <button
              aria-label="quotation"
              className="border-2 border-black dark:border-zinc-200  px-5 py-1 transition duration-500 rounded-full font-extralight dark:bg-transparent bg-[#1f2937] text-[#fff] hover:scale-[105%]"
            >
              <span className="text-md">Quotation</span>
            </button>
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
