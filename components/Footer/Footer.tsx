'use client';
import Link from 'next/link';
import Logo from '@/utils/assets/Logo';
import { navMenuItems } from '@/data/Navdata';
import { useLinkedInUrl } from '@/lib/useDocumentLinks';

export default function Footer() {
  const [linkedinUrl] = useLinkedInUrl();
  return (
    <footer className="mx-auto container flex items-center flex-col py-10">
      <div className="top flex justify-center flex-col items-center gap-5">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <nav className="justify-center items-center">
            <ul className="flex gap-5 md:gap-10">
              {navMenuItems.map((menuItem) => (
                <li
                  key={navMenuItems.indexOf(menuItem)}
                  className="text-sm md:text-base font-medium text-md transition-all duration-200 text-gray-500 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]"
                >
                  <Link href={menuItem.href}>{menuItem.name}</Link>
                </li>
              ))}

              <li className="text-sm md:text-base font-medium text-md transition-all duration-200 text-gray-500 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-[1px] w-full md:w-[60%] dark:border-zinc-600 border-zinc-300 my-5"></div>
      <div>
        <span className="text-sm dark:text-zinc-400 text-zinc-600">
          © Copyright {new Date().getFullYear()} Hyperce | All rights reserved.{' '}
        </span>
      </div>
      <div className="mt-3 space-x-2 flex items-center">
        Follow us:
        <a
          className="ms-2 inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href={linkedinUrl}
          target="_blank"
        >
          <svg className="w-3.5 h-3.5 ms-1" viewBox="0 0 20 20" version="1.1">
            <g strokeWidth="1">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-180.000000, -7479.000000)"
                fill="currentColor"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                    id="linkedin-[#161]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
}
