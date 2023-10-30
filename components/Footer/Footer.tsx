import Logo from "@/utils/assets/Logo";
import { navMenuItems } from "@/data/Navdata";

export default function Footer() {
  return (
    <footer className="mx-auto container flex items-center flex-col py-10">
      <div className="top flex justify-center flex-col items-center gap-5">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <nav className="justify-center items-center">
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
        </div>
        <div className="text-sm md:text-base flex items-center justify-center gap-x-2">
          Connect with us
          <span className="inline-flex items-center gap-x-2">
            <a
              href="https://www.facebook.com/hyperce"
              target="_blank"
              className="hover:scale-125 hover:text-blue-800"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hyperce/"
              target="_blank"
              className="hover:scale-125 hover:text-blue-800"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="border-[1px] w-[60%] dark:border-zinc-600 border-zinc-300 my-5"></div>
      <div>
        <span className="text-sm dark:text-zinc-400 text-zinc-600">
          © Copyright 2023 Hyperce | All rights reserved.{" "}
        </span>
      </div>
    </footer>
  );
}
