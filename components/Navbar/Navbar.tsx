'use client';

import { navMenuItems } from '@/data/Navdata';
import { cn } from '@/lib/utils';
import Logo from '@/utils/assets/Logo';
import { usePathname } from 'next/navigation';
import DarkModeToggle from '../ThemeSwitch/DarkModeToggle';
import HamburgerComponent from './Hamburger';

import './Navbar.css';

import {
  showcaseNonTechSolutions,
  showcaseSaasSolutions,
  showcaseTechSolutions
} from '@/data/Solutions';

import { ThemeProvider } from 'next-themes';

import { useProposal } from '@/lib/useDocumentLinks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EachProduct } from '../Platforms/Platforms';

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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      data-state={isScrolling ? 'scrolling' : undefined}
      className={cn(
        'w-full gap-5 sticky top-0 z-[50] bg-[#ebeeef] dark:bg-slate-900 background-opacity-80 backdrop-blur-md transition-[box-shadow,colors]',
        isScrolling && 'border-b  dark:border-gray-800 shadow-lg',
        props.className
      )}
    >
      <div className="flex items-center justify-between gap-5 md:gap-2 container py-8 md:px-20 z-50">
        <div className="logo">
          <Logo />
        </div>

        <nav className="justify-center items-center hidden xl:flex gap-2">
          <ul className="flex gap-6">
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
          <div className="cta gap-5 hidden xl:flex">
            {/* Join Events Club */}
            {/*<Link href="/events-club" target="_blank">
              <button
                aria-label="events-club-membership"
                className="flex h-full gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-purple-700 px-5 py-1 rounded-full items-center"
              >
                <span className="text-base font-bold">
                  Join Our Events Club
                </span>
              </button>
            </Link>*/}

            {/*<Link
              href="/#exclusive-offers"
              className="flex items-center justify-center h-full gap-2 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-[#357D8A] px-5 py-2 rounded-full"
            >
              <span className="text-base font-bold">Shark Tank Offer</span>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                </svg>
              </div>
            </Link>*/}

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
              Solutions
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
                  <div
                    className={`${
                      platform.platformProducts?.length ? 'hs-dropdown' : ''
                    } relative [--strategy:absolute]`}
                  >
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
