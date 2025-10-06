'use client';

import Link from 'next/link';
import Image from 'next/image';
import HyperceLogo from '@/utils/assets/Logo';
import SharkTankLogo from '@/assets/SharkTank.png';
import HyperClickLogo from '@/assets/hyper-click/logo.png';
import { ContactFormDialog } from '@/components/ContactFormDialog';

export function ExclusiveOffers() {
  return null;

  return (
    <section id="exclusive-offers">
      <div className="mx-auto container px-10 lg:px-20 py-8 md:py-12 flex flex-col">
        <div className="flex flex-col items-center mx-auto gap-4 justify-center max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Hyperce Exclusive Offers 🚀
          </h2>
          <div className="inline-flex flex-col md:flex-row items-center gap-4">
            <Image
              alt=""
              src={SharkTankLogo}
              className="w-12 md:w-24 h-auto md:order-1 shadow-lg rounded-full"
            />
            <p className="hyperce-sub-head text-gray-700 dark:text-gray-400">
              As recognized on&nbsp;
              <b className="text-[#3177ff]">Shark Tank Nepal</b>, both Hyperce
              and HyperClicks bring you exclusive discounts across different
              platforms.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20 pt-20">
          {/* Hyperce */}
          <ContactFormDialog>
            <button className="text-left flex flex-col w-full relative gap-4 border border-[#facc15] rounded-[10px] p-5 md:p-8 pt-16 md:pt-16 shadow-lg bg-[#ebeeef] dark:bg-slate-900">
              <div className="absolute shadow-md shadow-[#facc15]/40 flex items-center justify-center -top-12 -translate-x-1/2 left-[50%] w-24 h-24 bg-[#ebeeef] dark:bg-slate-900 rounded-full border-[3px] border-[#facc15] text-5xl font-serif font-black text-[#357D8A]">
                01
              </div>
              <div className="inline-flex items-center gap-4">
                <HyperceLogo
                  className="bg-[#357D8A]/10 shrink-0 rounded-[10px] flex items-center justify-center h-12 w-12 [&_svg]:w-8 [&_svg]:h-8"
                  showText={false}
                />
                <h1 className="text-[#357D8A] text-base tracking-tight md:text-lg font-bold">
                  Hyperce Solutions Special Offer
                </h1>
              </div>

              <h2 className="font-semibold md:text-xl max-w-md">
                Boost your Business with our Limited-Time Solutions Package:
              </h2>

              <ul className="grid gap-2.5">
                <li className="inline-flex items-center gap-2">
                  <div className="w-5 h-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-[#357D8A] bg-[#357D8A]/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                      <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    15% OFF on all Hyperce solutions.
                  </span>
                </li>

                <li className="inline-flex items-center gap-2">
                  <div className="w-5 h-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-[#357D8A] bg-[#357D8A]/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    6 months free Cloud Support.
                  </span>
                </li>

                <li className="inline-flex items-center gap-2">
                  <div className="w-5 h-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-[#357D8A] bg-[#357D8A]/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    Free domain for the first year.
                  </span>
                </li>
              </ul>
            </button>
          </ContactFormDialog>

          {/* HyperClicks */}
          <Link
            target="_blank"
            href="https://hyperclicks.net"
            onClick={(ev) => {
              ev.preventDefault();
              const linkId = 'hyper_clicks_offer_link';
              const prevCount = parseInt(
                localStorage.getItem(linkId) || '0',
                10
              );

              const newCount = prevCount + 1;
              localStorage.setItem(linkId, newCount.toString());

              (window as any).gtag('event', 'link_click', {
                link_id: linkId,
                click_count: newCount
              });
              window.open('https://hyperclicks.net', '_blank');
            }}
            className="flex flex-col w-full relative gap-4 border border-[#facc15] rounded-[10px] p-5 md:p-8 pt-16 md:pt-16 shadow-lg bg-[#ebeeef] dark:bg-slate-900"
          >
            <div className="absolute shadow-md shadow-[#facc15]/40 flex items-center justify-center -top-12 -translate-x-1/2 left-[50%] w-24 h-24 bg-[#ebeeef] dark:bg-slate-900 rounded-full border-[3px] border-[#facc15] text-5xl font-serif font-black text-[#357D8A]">
              02
            </div>
            <div className="inline-flex items-center gap-4">
              <div className="bg-[#facc15]/20 shrink-0 rounded-[10px] flex items-center justify-center h-12 w-12 [&_svg]:w-8 [&_svg]:h-8">
                <Image src={HyperClickLogo} alt="" className="w-8 h-auto" />
              </div>
              <h1 className="text-[#357D8A] text-base tracking-tight md:text-lg font-bold">
                HyperClicks Subscription Deal
              </h1>
            </div>

            <h2 className="font-semibold md:text-xl max-w-md">
              Take your digital growth to the next level with our exclusive
              subscription discount.
            </h2>

            <ul className="grid gap-2.5">
              <li className="inline-flex items-center gap-2">
                <div className="w-5 h-5 md:h-6 md:w-6 rounded-full flex items-center justify-center text-[#357D8A] bg-[#357D8A]/20 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 md:w-4 md:h-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">
                  25% OFF on all HyperClicks Annual Subscription
                </span>
              </li>
            </ul>
          </Link>
        </div>

        <div className="text-center py-4">
          <h3 className="font-medium md:text-xl">
            <span className="text-red-500 dark:text-red-600">*</span>These
            exclusive deals are valid only until&nbsp;
            <span className="text-[#357D8A] font-semibold">October 4</span>
            —Don&apos;t miss out!
          </h3>
        </div>
      </div>
    </section>
  );
}
