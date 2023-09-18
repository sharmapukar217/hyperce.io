"use client";
import { DarkModeProvider } from "@/contexts/theme_context";
import DarkModeToggle from "../ThemeSwitch/DarkModeToggle";
import HamburgerComponent from "./Hamburger";
import Logo from "@/utils/assets/Logo";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/data/Navdata";

export default function Navbar() {
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
                key={navMenuItems.indexOf(menuItem)}
                className={`hover:scale-[105%] text-base font-bold transition-all duration-200  ${
                  pathname === menuItem.href
                    ? `text-[#337684]`
                    : "text-black dark:text-zinc-200 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]"
                }`}
              >
                <a className="font-semibold" href={menuItem.href}>
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-10 items-center">
          <div className="cta gap-5 hidden md:flex">
            <a href="https://docs.hyperce.io/">
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
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
