import Link from 'next/link';
import Image from 'next/image';
import HyperClickLogo from '@/assets/hyper-click/logo.png';
import HyperClickLogoDark from '@/assets/hyper-click/logo-dark.webp';
import HyperClickHeroImage from '@/assets/hyper-click/HyperClickHeroImage.png';

import FastIcon from '@/assets/hyper-click/fast.svg';
import ReliableIcon from '@/assets/hyper-click/reliable.svg';
import AffordableIcon from '@/assets/hyper-click/affordable.svg';
import EffortlessIcon from '@/assets/hyper-click/effortless.svg';

export function HyperClickHero() {
  return (
    <section className="flex bg-[#ebeeef] dark:bg-slate-900 overflow-hidden">
      <div className="flex flex-col container relative">
        <Image
          src={HyperClickHeroImage}
          alt=""
          className="hidden lg:flex absolute w-auto h-full object-fit"
        />

        <div className="grid place-items-center text-center lg:place-items-end lg:text-right">
          <div className="flex gap-2">
            <h3 className="mt-7 text-xl font-black max-lg:order-3">
              HyperClicks
            </h3>
            <Image
              src={HyperClickLogo}
              alt=""
              className="w-16 h-full dark:hidden"
            />
            <Image
              src={HyperClickLogoDark}
              alt=""
              className="w-16 h-full hidden dark:inline"
            />
          </div>
          <h1 className="font-semibold text-6xl mt-4">
            Your One Click <br />
            E-Commerce Store
          </h1>

          <h2 className="text-xl mt-2 text-muted-foreground leading-relaxed tracking-wide">
            <span className="font-semibold text-foreground">40% OFF</span> to
            celebrate <span className="text-[#357D8A]">Hyperce&apos;s</span>{' '}
            Deal on <span className="text-[#3177ff]">Shark Tank Nepal</span>
          </h2>

          <div className="flex gap-8 my-12">
            <div className="flex flex-col items-center text-center justify-center">
              <FastIcon className="w-24 h-18 fill-[#357D8A]" />
              <span className="mt-2 font-medium text-xl text-gray-500 dark:text-gray-300 ms-6">
                Fast
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <ReliableIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-xl text-gray-500 dark:text-gray-300">
                Reliable
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <AffordableIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-xl text-gray-500 dark:text-gray-300">
                Affordable
              </span>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2">
              <EffortlessIcon className="w-16 h-16 fill-[#357D8A]" />
              <span className="font-medium text-xl text-gray-500 dark:text-gray-300">
                Effortless
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-y-8 lg:items-center justify-between mt-auto pb-12 bg-[#ebeeef] dark:bg-slate-900 w-full">
          <div className="inline-flex lg:flex-col lg:items-start items-end gap-x-4 text-xl">
            <h1 className="font-semibold">Offer Till:</h1>
            <h2 className="text-gray-600 dark:text-gray-400 text-xl font-medium">
              31st Bhadra, 2082
            </h2>
          </div>

          <div className="space-y-2 z-10 bg-[#ebeeef] dark:bg-slate-900">
            <h1 className="text-xl">For further information</h1>
            <Link
              target="_blank"
              href="https://hyperclicks.net"
              className="flex w-full sm:w-fit lg:w-full h-12 gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-[#357D8A] px-12 py-1 rounded-full justify-center text-center font-semibold text-xl items-center shadow shadow-[#357D8A]"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
