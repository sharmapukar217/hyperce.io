'use client';

import HyperClickLogo from '@/assets/hyper-click/logo.png';
import AnimateWrapper from '@/components/AnimateWrapper/AnimateWrapper';
import {
  showcaseNonTechSolutions,
  showcaseTechSolutions,
  viewAllSolutions
} from '@/data/Solutions';
import { useSuiteLink } from '@/lib/useDocumentLinks';
import { Button } from '@mui/material';
import { MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Card from './Card';

const solutions = [
  {
    title: 'Hyperce Headless',
    description:
      "Hyperce Ecommerce Solution helps to strategize, execute, and amplify your brand's reach.",
    icon: {
      dark: '/headless-dark.svg',
      light: '/headless.png'
    },
    href: '/headless'
  },
  {
    title: 'Hyperce Business and Legal',
    href: '/bl',
    icon: {
      dark: '/services_logos/bl/bl_logo.jpeg',
      light: '/services_logos/bl/bl_transparent.png'
    },
    description:
      "Hyperce Business and Legal Solutions help to strategize, execute, and amplify your brand's reach."
  },
  {
    title: 'Hyperce Appify',
    description:
      "Empower your digital presence with Hyperce Appify's cutting-edgemobile app solutions.",
    icon: {
      dark: '/services_logos/appify/appify_light_jpeg.jpeg',
      light: '/services_logos/appify/appify_light.png'
    },
    href: '/appify'
  },
  {
    title: 'Hyperce Promoter',
    description:
      'Transform Your Ecommerce Business Platform with Expert Marketing Solutions Today!',
    icon: {
      dark: '/promoter-logo.png',
      light: '/promoter-logo.png'
    },
    href: '/promoter'
  },
  {
    title: 'HyperClicks (SaaS)',
    description: 'Build Your E-commerce Store with just One Click',
    icon: {
      dark: HyperClickLogo.src,
      light: HyperClickLogo.src
    },
    href: '/promoter'
  }
];

export default function Solutions() {
  const [suiteLink] = useSuiteLink();
  return (
    <AnimateWrapper>
      <section
        id="solutions"
        data-aos="fade-up"
        className="container  dark:bg-[#0F1023] text-black dark:text-white bg-[#F3F4F6] mx-auto lg:px-20 py-10 md:py-16 rounded-2xl"
      >
        <h1 className="hyperce-head-xl text-4xl text-black dark:text-white text-center my-8">
          Hyperce Solutions
        </h1>
        <div className="flex justify-center">
          <div className="flex gap-12 flex-col md:flex-row">
            <Link
              href={suiteLink}
              target="_blank"
              className="flex justify-center md:mt-7 md:mb-10"
            >
              <button className="px-5 w-full bg-gradient-to-tr to-[#1f525c] from-[#516f75] font-bold text-sm transition duration-400 py-2 rounded flex justify-center">
                <div className="text-white flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                  <span>Hyperce Suite Book</span>
                  <MoveUpRightIcon className="w-4 h-4" />
                </div>
              </button>
            </Link>
            <Link
              target="_blank"
              href="/solutions"
              className="flex justify-center md:mt-7 md:mb-10"
            >
              <button className="px-5 w-full border-2 border-black dark:border-white font-bold text-sm transition duration-400 py-2 rounded flex justify-center">
                <div className=" flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                  <span>View all Solutions by Hyperce</span>
                  <MoveUpRightIcon className="w-4 h-4" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-fit mt-8">
          {/* TODO: Implement bg move on hover effect */}
          <div className="flex items-center justify-center flex-wrap gap-10">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="basis-full w-full max-w-sm border-[2.5px] dark:border-gray-800 rounded-[30px] p-0.5 shadow-sm flex flex-col text-center items-center justify-center"
                style={{
                  background:
                    'radial-gradient(200px 200px at var(--x) var(--y), #1f525c, transparent 100%)'
                }}
              >
                <div className="lg:p-6 p-4 rounded-[30px] dark:bg-[#0F1023] bg-[#F3F4F6] flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      className="dark:hidden object-contain h-[80px] w-[80px]"
                      src={solution.icon.light}
                      alt={solution.title}
                    />
                    <img
                      className="hidden dark:block object-contain h-[80px] w-[80px]"
                      src={solution.icon.dark}
                      alt={solution.title}
                    />
                  </div>

                  <h1 className="font-semibold text-xl">{solution.title}</h1>
                  <p className="text-base mt-2">{solution.description}</p>

                  <div className="mt-auto pt-4">
                    <button className="px-5 w-fit h-fit bg-gradient-to-tr to-[#1f525c] from-[#516f75] font-bold text-sm transition duration-400 py-2.5 rounded flex justify-center">
                      <div className="text-white flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                        Learn More
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/*{showcaseTechSolutions.slice(0, 3).map((solution, index) => (
              <Card
                key={index}
                href={solution.href}
                whiteIcon={solution.whiteIcon}
                darkIcon={solution.darkIcon}
                name={solution.name}
                des={solution.des}
                altText={solution.altText}
              />
            ))}
            {showcaseNonTechSolutions.slice(0, 2).map((solution, index) => (
              <Card
                key={index}
                href={solution.href}
                whiteIcon={solution.whiteIcon}
                darkIcon={solution.darkIcon}
                name={solution.name}
                des={solution.des}
                altText={solution.altText}
              />
            ))}
            <Card
              href={viewAllSolutions.href}
              whiteIcon={viewAllSolutions.whiteIcon}
              darkIcon={viewAllSolutions.darkIcon}
              name={viewAllSolutions.name}
              des={viewAllSolutions.des}
              altText={viewAllSolutions.altText}
            />*/}
          </div>
        </div>
      </section>
    </AnimateWrapper>
  );
}
