'use client';

import DarkModeToggle from '../ThemeSwitch/DarkModeToggle';
import HamburgerComponent from './Hamburger';
import Logo from '@/utils/assets/Logo';
import { navMenuItems } from '@/data/Navdata';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import './Navbar.css';

import {
  showcaseNonTechSolutions,
  showcaseSaasSolutions,
  showcaseTechSolutions
} from '@/data/Solutions';

import { ThemeProvider } from 'next-themes';

import { EachProduct } from '../Platforms/Platforms';
import { useProposal } from '@/lib/useDocumentLinks';
import Link from 'next/link';

const PlatformsData = [
  {
    platformName: 'Hyperce Tech',
    platformProducts: showcaseTechSolutions
  },
  {
    platformName: 'Hyperce Non-Tech',
    platformProducts: showcaseNonTechSolutions
  },
  {
    platformName: 'Hyperce SaaS',
    platformProducts: showcaseSaasSolutions
  },
  {
    platformName: 'View All Solutions',
    href: '/solutions'
  }
];

export default function Navbar(props: any) {
  const pathname = usePathname();
  const [proposalLink] = useProposal();

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <header className={cn('dark:bg-slate-900 w-full gap-5', props.className)}>
        <div className="flex items-center justify-between gap-5 md:gap-2 container py-8 px-10 md:px-20 z-50">
          <div className="logo">
            <Logo />
          </div>

          <nav className="justify-center items-center hidden lg1:flex gap-2">
            <ul className="flex gap-7">
              {navMenuItems.map((menuItem) => (
                <li
                  key={menuItem.href}
                  className={`hover:scale-[105%] text-base font-bold transition-all duration-200  ${
                    pathname === menuItem.href
                      ? `text-[#337684]`
                      : 'text-black dark:text-zinc-200 hover:text-[#1e1e1e] dark:hover:text-[#e4e4e4]'
                  }`}
                >
                  <Link
                    className="font-semibold hover:dark:text-[#357D8A]"
                    href={menuItem.href}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              ))}
              <SolutionsMegaMenu />
            </ul>
          </nav>
          <div className="flex gap-10 items-center">
            <div className="cta gap-5 hidden md:flex">
              {/* Join Events Club */}
              <Link href="https://forms.gle/gzn4Qf5mYgy4zEfz6" target="_blank">
                <button
                  aria-label="events-club-membership"
                  className="flex h-full gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-purple-700 px-5 py-1 rounded-full items-center"
                >
                  <span className="text-base font-bold">
                    Join Our Events Club
                  </span>
                </button>
              </Link>

              <Link href={proposalLink} target="_blank">
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
              </Link>

              <Link href="/#contact">
                <button
                  aria-label="quotation"
                  className="border-2 border-black dark:border-zinc-200  px-5 py-1 transition duration-300 rounded-full font-extralight dark:bg-transparent bg-[#1f2937] text-[#fff] hover:scale-[105%] active:scale-[95%]"
                >
                  <span className="text-base font-bold">Quotation</span>
                </button>
              </Link>
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
    </ThemeProvider>
  );
}

export function SolutionsMegaMenu() {
  const pathname = usePathname();

  return (
    <div className="relative md:flex md:items-center md:justify-between">
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="">
          <div className="hs-dropdown [--adaptive:none] font-bold">
            <button type="button" className="flex items-center w-full">
              <Link href="/solutions">Solutions</Link>
              <svg
                className="flex-shrink-0 ms-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className="group hs-dropdown-menu p-3 transition-[opacity,margin] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white sm:shadow-md rounded-lg dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
              {PlatformsData.map((platform, index) => (
                <div key={index}>
                  <div className="hs-dropdown relative [--strategy:absolute]">
                    <Link
                      href={platform.href || '#'}
                      className="flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-left w-[13vw]"
                    >
                      {platform.platformName}

                      <svg
                        className="sm:-rotate-90 flex-shrink-0 ms-2 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Link>

                    {platform.platformProducts?.length ? (
                      <div className="-mt-50 -ml-20 w-[20vw] hs-dropdown-menu transition-[opacity,margin] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full top-0 end-full !mx-[10px]">
                        {platform.platformProducts?.map((product, index) => (
                          <div key={index} className="p-2">
                            <EachProduct product={product} />
                            {/* <span>{product.name}</span> */}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
