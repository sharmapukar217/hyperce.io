import Link from 'next/link';
import Image from 'next/image';
import { Amaranth } from 'next/font/google';
import SharkTankLogo from '@/assets/SharkTank.png';
import HyperClickLogo from '@/assets/hyper-click/logo.png';
import HyperClickHeroImage from '@/assets/hyper-click/HyperClickHeroImage.png';

import FastIcon from '@/assets/hyper-click/fast.svg';
import ReliableIcon from '@/assets/hyper-click/reliable.svg';
import AffordableIcon from '@/assets/hyper-click/affordable.svg';
import EffortlessIcon from '@/assets/hyper-click/effortless.svg';

const amaranth = Amaranth({
  weight: ['400'],
  subsets: ['latin']
});

export function HyperClickHero() {
  return (
    <section className="bg-[#ebeeef] dark:bg-slate-900 overflow-hidden">
      <div className="flex flex-col container max-w-6xl mx-auto relative">
        <Image
          src={HyperClickHeroImage}
          alt=""
          className="hidden lg:flex absolute w-auto h-full object-fit"
        />

        <div className="grid place-items-center text-center lg:place-items-end lg:text-right">
          <div className="flex items-end gap-x-2">
            <div className="text-right md:mt-7">
              <h3 className="text-base md:text-xl font-serif max-lg:order-3">
                HyperClicks
              </h3>
              <span
                className={`${amaranth.className} text-[#357D8A] leading-tight text-base md:text-lg`}
              >
                for SMEs
              </span>
            </div>
            <Image
              src={HyperClickLogo}
              alt=""
              className="w-16 md:w-16 h-auto"
            />
          </div>
          <h1 className="font-semibold text-4xl md:text-5xl mt-4">
            Your One Click <br />
            E-Commerce Store
          </h1>

          <h2 className="text-xl mt-4 text-gray-600 dark:text-gray-300 tracking-wide">
            <b className="font-semibold text-black dark:text-white">25% OFF</b>
            &nbsp; to celebrate{' '}
            <span className="text-[#357D8A]">Hyperce&apos;s</span>
            &nbsp; Deal on&nbsp;
            <span className="text-[#3177ff]">Shark Tank Nepal</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
            <div className="flex flex-col items-center text-center justify-center">
              <FastIcon className="w-24 h-18 fill-[#357D8A]" />
              <span className="mt-2 font-medium text-sm lg:text-xl text-gray-500 dark:text-gray-300 ms-6">
                Fast
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <ReliableIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-sm lg:text-xl text-gray-500 dark:text-gray-300">
                Reliable
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <AffordableIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-sm lg:text-xl text-gray-500 dark:text-gray-300">
                Affordable
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <EffortlessIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-sm lg:text-xl text-gray-500 dark:text-gray-300">
                Effortless
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-y-8 lg:items-center justify-between mt-auto pb-12 bg-[#ebeeef] dark:bg-slate-900 w-full">
          <div className="inline-flex lg:flex-col lg:items-start items-end gap-x-2 lg:gap-x-4 text-base md:text-xl">
            <h1 className="font-semibold">Offer Till:</h1>
            <h2 className="text-gray-600 dark:text-gray-400 font-medium">
              31st Bhadra, 2082
            </h2>
          </div>

          <Image
            src={SharkTankLogo}
            alt=""
            className="w-24 h-auto rounded-full z-10 mx-auto md:me-4 me:mt-2 md:ms-auto"
          />

          <div className="space-y-2 z-10 bg-[#ebeeef] dark:bg-slate-900">
            <h1 className="text-base md:text-xl">For further information</h1>
            <Link
              target="_blank"
              href="https://hyperclicks.net"
              className="flex w-full sm:w-fit lg:w-full h-12 gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-[#357D8A] px-12 py-1 rounded-full justify-center text-center font-semibold text-base md:text-xl items-center shadow shadow-[#357D8A]"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
