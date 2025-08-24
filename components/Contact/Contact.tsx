'use client';

import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import {
  Domain,
  type OfficeDetails,
  contactDetailsMapping
} from '@/data/ContactDetailsData/OfficeMapping';

export default function Contact() {
  const [infoMap, setInfoMap] = useState(contactDetailsMapping);

  useEffect(() => {
    const domain = window.location.hostname as Domain;
    if (domain !== Domain.HyperceIo && contactDetailsMapping[domain]) {
      const info = { [domain]: contactDetailsMapping[domain] };
      setInfoMap(info as Record<Domain, OfficeDetails>);
    }
  }, [setInfoMap]);

  return (
    <section
      id="contact"
      className="mx-auto container px-10 lg:px-20 pb-20 text-black dark:text-white text-center lg:text-left"
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-between mx-auto mt-16">
        <ContactForm />
        <div className="flex flex-col">
          <span className="mb-5 lg:mb-10 text-4xl font-bold">Contact Info</span>
          <div className="flex flex-col gap-7">
            {Object.keys(infoMap).map((domain) => (
              <EachOffice
                key={domain}
                contactAddressDetails={contactDetailsMapping[domain as Domain]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type EachOfficeProps = {
  contactAddressDetails: OfficeDetails;
};
function EachOffice({ contactAddressDetails }: EachOfficeProps) {
  return (
    <div className="flex flex-col gap-7 ">
      <span className="country text-base flex justify-start font-semibold">
        {contactAddressDetails.country}
      </span>
      <div className="flex gap-1 flex-col -mt-4">
        <div className="registrar flex gap-3">
          <div className="icon justify-center w-5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="36"
              height="36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <span className="place dark:text-[#9CA3AF] text-left text-base">
            {contactAddressDetails.officeName}
          </span>
        </div>
        <div className="location flex gap-3">
          <div className="icon justify-center w-5 flex items-center">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 1.78125C6.5498 1.78125 4.15625 4.05939 4.15625 6.86523C4.15625 10.0938 7.71875 15.21 9.02686 16.9772C9.08115 17.0518 9.15232 17.1125 9.23455 17.1543C9.31678 17.1962 9.40773 17.218 9.5 17.218C9.59227 17.218 9.68322 17.1962 9.76545 17.1543C9.84768 17.1125 9.91885 17.0518 9.97314 16.9772C11.2812 15.2108 14.8438 10.0963 14.8438 6.86523C14.8438 4.05939 12.4502 1.78125 9.5 1.78125Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 8.90625C10.4838 8.90625 11.2812 8.10876 11.2812 7.125C11.2812 6.14124 10.4838 5.34375 9.5 5.34375C8.51624 5.34375 7.71875 6.14124 7.71875 7.125C7.71875 8.10876 8.51624 8.90625 9.5 8.90625Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="place dark:text-[#9CA3AF] text-left text-base">
            {contactAddressDetails.address}
          </span>
        </div>
        <a href={`mailto:${contactAddressDetails.email}`}>
          <div className="email flex gap-3">
            <div className="icon justify-center w-5 flex items-center">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.625 1.375V0.9375C0.508968 0.9375 0.397688 0.983594 0.315641 1.06564C0.233594 1.14769 0.1875 1.25897 0.1875 1.375H0.625ZM16.375 1.375H16.8125C16.8125 1.25897 16.7664 1.14769 16.6844 1.06564C16.6023 0.983594 16.491 0.9375 16.375 0.9375V1.375ZM0.625 1.8125H16.375V0.9375H0.625V1.8125ZM15.9375 1.375V11.875H16.8125V1.375H15.9375ZM14.625 13.1875H2.375V14.0625H14.625V13.1875ZM1.0625 11.875V1.375H0.1875V11.875H1.0625ZM2.375 13.1875C2.0269 13.1875 1.69306 13.0492 1.44692 12.8031C1.20078 12.5569 1.0625 12.2231 1.0625 11.875H0.1875C0.1875 12.4552 0.417968 13.0116 0.828204 13.4218C1.23844 13.832 1.79484 14.0625 2.375 14.0625V13.1875ZM15.9375 11.875C15.9375 12.2231 15.7992 12.5569 15.5531 12.8031C15.3069 13.0492 14.9731 13.1875 14.625 13.1875V14.0625C15.2052 14.0625 15.7616 13.832 16.1718 13.4218C16.582 13.0116 16.8125 12.4552 16.8125 11.875H15.9375Z"
                  fill="currentColor"
                />
                <path
                  d="M0.625 1.375L8.5 9.25L16.375 1.375"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="place dark:text-[#9CA3AF] text-babase">
              {contactAddressDetails.email}
            </span>
          </div>
        </a>
        {contactAddressDetails.phoneNumber
          ? contactAddressDetails.phoneNumber.map((num) => {
              return (
                <a
                  key={num}
                  target="_blank"
                  href={`tel://${num}`}
                  className="flex items-center gap-2 mt-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-auto"
                  >
                    <path
                      d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="place dark:text-[#9CA3AF] text-base">
                    {num}
                  </span>
                </a>
              );
            })
          : null}

        {contactAddressDetails.workplace && (
          <div>
            <div className="phone flex gap-3">
              <div className="icon justify-center w-5 flex items-center mt-1 scale-[115%]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m14 5-3 3 2 7 8-8-7-2Z" />
                  <path d="m14 5-3 3-3-3 3-3 3 3Z" />
                  <path d="M9.5 6.5 4 12l3 6" />
                  <path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
                </svg>
              </div>
              <div className="place dark:text-[#9CA3AF] text-base space-x-1">
                <span>Workplace:</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: contactAddressDetails.workplace
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <hr className="mt-6 text-blue-950" />
      </div>
    </div>
  );
}
