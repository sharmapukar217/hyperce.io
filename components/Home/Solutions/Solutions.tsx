'use client';

import HyperClickLogo from '@/assets/hyper-click/logo.png';
import AnimateWrapper from '@/components/AnimateWrapper/AnimateWrapper';
import { useSuiteLink } from '@/lib/useDocumentLinks';
import { MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';

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
    href: 'https://hyperclicks.net'
  }
];

export default function Solutions() {
  const [suiteLink] = useSuiteLink();
  return (
    <AnimateWrapper>
      <section
        id="solutions"
        data-aos="fade-up"
        className="container dark:bg-[#0F1023] text-black dark:text-white bg-[#F3F4F6] mx-auto lg:px-20 py-10 md:py-16 rounded-2xl"
      >
        <div className="w-full grid justify-items-center gap-y-8">
          <h1 className="hyperce-head-xl text-4xl text-black dark:text-white text-center">
            Hyperce Solutions
          </h1>

          <div className="flex md:flex-row gap-x-10 gap-y-4 flex-col md:ms-[5.5rem]">
            <Link
              href={suiteLink}
              target="_blank"
              className="flex justify-center"
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
              className="flex justify-center"
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
          <div className="flex justify-center flex-wrap gap-10">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="hover:scale-110 hover:cursor-grab duration-500 basis-full w-full max-w-sm border-[2.5px] dark:border-gray-800 rounded-[30px] p-0.5 shadow-sm flex flex-col text-center items-center justify-center"
                style={{
                  background:
                    'radial-gradient(200px 200px at var(--x) var(--y), #1f525c, transparent 100%)'
                }}
              >
                <div className="lg:p-6 p-4 rounded-[30px] dark:bg-[#0F1023] bg-[#F3F4F6] grid place-items-center flex-1">
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
                    <Link
                      href={solution.href || '#'}
                      target="_blank"
                      className="px-5 w-fit h-fit bg-gradient-to-tr to-[#1f525c] from-[#516f75] font-bold text-sm transition duration-400 py-2.5 rounded flex justify-center"
                    >
                      <div className="text-white flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateWrapper>
  );
}
