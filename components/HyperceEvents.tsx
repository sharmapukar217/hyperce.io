import Link from 'next/link';
import Image from 'next/image';

import { ContactFormDialog } from './ContactFormDialog';

import SharkTankLogo from '@/assets/SharkTank.png';
import HyperceBanner from '@/assets/hyperce/Banner.png';
import CheckMarkIcon from '@/assets/hyperce/check-mark.svg';
import HyperceBannerDark from '@/assets/hyperce/BannerDark.png';

export function HyperceEvents() {
  return (
    <section className="bg-[#ebeeef] dark:bg-slate-900 overflow-hidden h-full">
      <div className="grid lg:grid-cols-2 lg:place-items-center gap-16 container max-w-7xl h-full mx-auto relative flex-1">
        <div className="hidden lg:flex items-center justify-center py-16">
          <Image
            src={HyperceBanner}
            alt=""
            className="dark:hidden w-auto h-full object-fit"
          />

          <Image
            src={HyperceBannerDark}
            alt=""
            className="hidden dark:flex w-auto h-full object-fit"
          />
        </div>

        <div className="flex flex-col items-end">
          <div className="max-lg:ms-auto me-auto lg:w-full text-center lg:text-left max-w-[30rem]">
            <div className="flex flex-col lg:flex-row gap-y-4">
              <h1 className="font-black text-4xl md:text-4xl mt-4">
                BIG <span className="text-[#ffbf00]">OFFER</span>&nbsp;TO
                <br />
                <span className="text-[#357c8a]">CELEBRATE</span>&nbsp;OUR
                <br />
              </h1>
              <Image
                src={SharkTankLogo}
                alt=""
                className="w-24 h-auto rounded-full z-10 mx-auto lg:me-auto"
              />
            </div>
            <span
              className="mt-2 block text-[#ffc107] font-semibold text-3xl xl:text-4xl tracking-tight"
              style={{
                textShadow:
                  '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000;'
              }}
            >
              <span className="text-[#3fc4dc]">Shark Tank Nepal</span>
              &nbsp;Success
            </span>
          </div>

          <p className="mx-auto lg:w-full text-center lg:text-left text-xl mt-6 font-medium tracking-wide">
            All-in-One Solutions to Build, Secure & Grow Your Business
            with&nbsp;
            <span className="text-[#357c8a] font-semibold">Our Services!</span>
          </p>

          <div className="mx-auto lg:me-auto grid md:grid-cols-2 gap-4 mt-4">
            <dl>
              <dt className="font-bold text-lg md:text-xl inline-flex items-start gap-2">
                <CheckMarkIcon className="h-8 w-8" />
                <span>Hyperce Headless:</span>
              </dt>
              <dd className="ms-10 text-base md:text-lg text-gray-500 font-medium dark:text-gray-400">
                Ecommerce Development Solution
              </dd>
            </dl>

            <dl>
              <dt className="font-bold text-lg md:text-xl inline-flex items-start gap-2">
                <CheckMarkIcon className="h-8 w-8" />
                <span>Hyperce Promoter:</span>
              </dt>
              <dd className="ms-10 text-base md:text-lg text-gray-500 font-medium dark:text-gray-400">
                Ecommerce Marketing Solution
              </dd>
            </dl>

            <dl>
              <dt className="font-bold text-lg md:text-xl inline-flex items-start gap-2">
                <CheckMarkIcon className="h-8 w-8" />
                <span>Hyperce Appify:</span>
              </dt>
              <dd className="ms-10 text-base md:text-lg text-gray-500 font-medium dark:text-gray-400">
                Ecommerce App Development Solution
              </dd>
            </dl>

            <dl>
              <dt className="font-bold text-lg md:text-xl inline-flex items-start gap-2">
                <CheckMarkIcon className="h-8 w-8" />
                <span>Hyperce Business & Legal:</span>
              </dt>
              <dd className="ms-10 text-base md:text-lg text-gray-500 font-medium dark:text-gray-400">
                Legal & Compliance&nbsp;
                <br />
                Solution
              </dd>
            </dl>
          </div>

          <div className="max-lg:mx-auto lg:me-auto py-8 md:py-4 inline-flex items-center gap-x-2">
            <ContactFormDialog />
          </div>
        </div>
      </div>
    </section>
  );
}
