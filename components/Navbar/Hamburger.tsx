'use client';

import './Hamburger.css';
import React, { useState } from 'react';
import {
  showcaseNonTechSolutions,
  showcaseTechSolutions
} from '@/data/Solutions';
import { usePathname } from 'next/navigation';
import { navMenuItems } from '@/data/Navdata';
import { useProposal } from '@/lib/useDocumentLinks';

export default function Hamburger(props: any) {
  const pathname = usePathname();

  const menu = navMenuItems;
  const [proposalLink] = useProposal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  function openMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
    setSolutionsOpen(false); // Reset solution dropdown when menu closes
  }

  function toggleSolutions() {
    setSolutionsOpen(!solutionsOpen);
  }

  return (
    <div className="xl:hidden">
      {/* Hamburger Icon */}
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

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-transform duration-500 ease-in-out flex flex-col w-full h-full`}
      >
        <div className="menu flex flex-col w-full p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-200 text-3xl"
            >
              &times;
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-10">
            {menu.map((eachMenu) => (
              <li
                key={eachMenu.name}
                onClick={closeMenu}
                className="text-lg text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-200 font-semibold"
              >
                <a href={eachMenu.href}>{eachMenu.name}</a>
              </li>
            ))}

            {/* Solutions Button */}
            <li className="text-lg text-black dark:text-white font-semibold">
              <button
                onClick={toggleSolutions}
                className="flex items-center gap-2 focus:outline-none hover:text-gray-500 dark:hover:text-gray-200"
              >
                Solutions
                <svg
                  className={`transition-transform transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Solutions Dropdown */}
              {solutionsOpen && (
                <div className="-mt-24 -translate-y-48  flex flex-col gap-4 text-base text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 max-h-[90vh] overflow-y-auto">
                  <h2 className="text-lg font-semibold">Tech Solutions</h2>
                  {showcaseTechSolutions.map((each, index) => (
                    <a
                      key={index}
                      className="flex gap-4 items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-3 transition-transform transform hover:scale-105 shadow-md dark:shadow-none"
                      href={each.href}
                    >
                      {/* Icon */}
                      <img
                        className="h-10 w-10 rounded-lg object-contain bg-white"
                        src={each.whiteIcon}
                        alt={each.name}
                      />
                      {/* Solution Name and Description */}
                      <div>
                        <p className="font-medium">{each.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          {each.des}
                        </p>
                      </div>
                    </a>
                  ))}

                  <h2 className="text-lg font-semibold mt-6">
                    Non-Tech Solutions
                  </h2>
                  {showcaseNonTechSolutions.map((each, index) => (
                    <a
                      key={index}
                      className="flex gap-4 items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-3 transition-transform transform hover:scale-105 shadow-md dark:shadow-none"
                      href={each.href}
                    >
                      {/* Icon */}
                      <img
                        className="h-10 w-10 rounded-lg object-contain"
                        src={each.whiteIcon}
                        alt={each.name}
                      />
                      {/* Solution Name and Description */}
                      <div>
                        <p className="font-medium">{each.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          {each.des}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Event and Proposal Links */}
          <div className="mt-10 space-y-4">
            {/*<a target="_blank" href="/events-club" className="w-full">
              <button
                aria-label="join-events-club"
                className="w-full flex justify-center gap-2 py-2 px-4 text-white bg-purple-700 rounded-full hover:scale-105 transition-transform font-semibold"
              >
                Join Our Events Club
              </button>
            </a>*/}

            <a
              href="#exclusive-offers"
              className="w-full flex justify-center gap-2 py-2 my-5 px-4 text-white bg-[#357D8A] rounded-full hover:scale-105 transition-transform font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
              </svg>
              <span className="text-base font-bold">Get Offer</span>
            </a>

            <a target="_blank" href={proposalLink} className="w-full">
              <button
                aria-label="proposal-download"
                className="w-full flex justify-center gap-2 py-2 my-5 px-4 text-white bg-[#357D8A] rounded-full hover:scale-105 transition-transform font-semibold"
              >
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
                <span className="text-base font-bold">Proposal</span>
              </button>
            </a>

            <a href="/#contact" className="w-full">
              <button
                aria-label="quotation"
                className="w-full border-2 border-black dark:border-zinc-200 py-2 px-4 transition-transform hover:scale-105 rounded-full font-semibold text-black dark:text-white bg-transparent dark:bg-transparent"
              >
                Quotation
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
