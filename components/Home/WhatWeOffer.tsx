import {
  LuBarChart3,
  LuCreditCard,
  LuMousePointerClick,
  LuPalette,
  LuShoppingBag,
  LuStore,
  LuTruck
} from 'react-icons/lu';
import AnimateWrapper from '../AnimateWrapper/AnimateWrapper';
import { TypingEffect } from '../ui/typing-effect';

const offerings = [
  {
    icon: LuShoppingBag,
    title: 'Customized E-commerce Solutions',
    description:
      'We design and build tailor-made online stores that fit your brand identity, business goals and customer experience. From seamless UI/UX to backend integration, everything is customized for performance and growth.'
  },
  {
    icon: LuMousePointerClick,
    title: 'One-Click E-commerce Store: HyperClicks',
    description:
      'Create your e-commerce store in just one click with Hyperclick and launch it within minutes.'
  },
  {
    icon: LuPalette,
    title: 'Digital Marketing Support',
    description:
      'With integrated plans and smart marketing strategies, we help your business reach more people through creative ads, social media campaigns, and effective online promotions.'
  },
  {
    icon: LuStore,
    title: 'Inventory Management',
    description:
      'Use smart tools to track your product quantities across online and offline sales channels while keeping your stock organized.'
  },
  {
    icon: LuCreditCard,
    title: 'POS System',
    description:
      'With the unified system, manage your store from one dashboard, track orders, payments, and performance in real time.'
  },
  {
    icon: LuBarChart3,
    title: 'Business Insights',
    description:
      'Understand your sales and customers better with data-backed insights that help you make decisions faster and smarter.'
  },
  {
    icon: LuTruck,
    title: 'Delivery Solutions',
    description:
      'With our integrated system, we make deliveries faster, smoother, and more reliable.'
  }
];

export function WhatWeOffer() {
  return (
    <AnimateWrapper>
      <section className="container mx-auto lg:px-20 pt-16 md:pt-24 rounded-2xl space-y-8">
        <div className="grid text-center">
          <h1 className="hyperce-head-xl text-4xl text-black dark:text-white text-center">
            What We <span className="text-[#1f525c]">Offer</span>
          </h1>
          <p>
            Complete solutions to build, grow, and scale your digital commerce
            business.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className="hover:scale-105 duration-500 lg:p-6 p-4 basis-full w-full max-w-sm border-[2.5px] border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-[24px] gap-8 flex flex-col hover:shadow-sm transition-all"
            >
              <offering.icon className="h-10 w-10 text-[#1f525c]" />
              <div className="grid gap-1">
                <h1 className="text-lg font-semibold">{offering.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <TypingEffect loop className="text-lg text-[#1f525c] font-medium">
            and many more...
          </TypingEffect>
        </div>
      </section>
    </AnimateWrapper>
  );
}
