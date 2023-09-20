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
        <div className="socials"></div>
      </div>
      <div className="border-[1px] w-[60%] dark:border-zinc-600 border-zinc-300 my-5"></div>
      <div>
        <span className="text-sm dark:text-zinc-400 text-zinc-600">
          © Copyright 2023 Hyerce LLC. | All rights reserved.{" "}
        </span>
      </div>
    </footer>
  );
}
