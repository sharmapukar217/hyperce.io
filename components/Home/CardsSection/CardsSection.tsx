const servicesOffered = [
  // Keep user at 0 index, other can be changed
  // id are used for svg type from assets/icons/Feature.astro
  {
    id: 'user',
    title: 'Ecommerce Suite Solutions',
    description:
      'Customized tools and technologies required for your ecommerce business powered by modern and headless techologies.',
    image: '/images/xp.webp'
  },
  {
    id: 'speed',
    title: 'Seemingly Fast Speed',
    description:
      'Seamless browsing speed and high conversion rates for all your tools built using user centric approaches.'
  },
  {
    id: 'secure',
    title: 'Secured Solutions',
    description:
      'Highly secured protection for your ecommerce customers, products and finance data highly safe from breaches.'
  },
  {
    id: 'payment',
    title: 'Financial Solutions',
    description:
      'Reliable, secure and convenient financial solutions for your ecommerce including payment gateways handling, invoice management and so on.'
  },
  {
    id: 'seo',
    title: 'Conversion Friendly',
    description:
      'Improved visibility and higher search engine ranking solutions for your ecommerce tools, social media profiles and related tools.'
  }
];
export default function CardsSection() {
  return (
    <section className="container mx-auto px-10 py-10 md:py-20 text-black dark:text-white">
      <div className="mx-auto md:w-3/5">
        <h2 className="text-center text-gray-900 dark:text-white text-3xl md:text-4xl hyperce-head-xl">
          Shaped to meet your <br /> ecommerce needs
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Crafting ecommerce suite solutions that drive success
        </p>
      </div>
      <div className="mt-16">
        <div className="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
          <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
            <div
              aria-hidden="true"
              className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
            >
              <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"></div>
              <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
            </div>
          </div>
          <div>
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
              <img
                className="w-16"
                src="https://hyperce-io.vercel.app/images/xp.webp"
                alt="xp icon illustration"
                width="512"
                height="512"
                loading="lazy"
              />
              <div className="mx-auto text-center sm:w-3/5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {servicesOffered[0].title}
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {servicesOffered[0].description}
                </p>
              </div>
            </div>
          </div>
          <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2">
            {servicesOffered.map((service, index) => {
              if (index === 0) return null;
              return (
                <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                  <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                    <Feature type={`${service.id}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

interface FeatureProps {
  type: string;
}

const Feature: React.FC<FeatureProps> = ({ type }) => {
  const icons: Record<string, JSX.Element> = {
    speed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="m-auto h-6 w-6 text-gray-700 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    secure: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="m-auto h-6 w-6 text-gray-700 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    payment: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="m-auto h-6 w-6 text-gray-700 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
    seo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="m-auto h-6 w-6 text-gray-700 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    )
  };

  return <>{icons[type]}</>;
};
