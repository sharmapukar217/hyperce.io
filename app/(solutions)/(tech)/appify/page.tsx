import Newsletter from '@/components/Home/Newsletter/Newsletter';
import Navbar from '@/components/Navbar/Navbar';
import Appify from '@/components/Services/Tech/Appify/Appify/Appify';
import Hero from '@/components/Services/Tech/Appify/Hero/Hero';
import WhyChoose from '@/components/Services/Tech/Appify/WhyChoose/WhyChoose';
import Contact from '@/components/Contact/Contact';

import Image from 'next/image';
import QaBg from '../../../../public/hyperce-qa.png';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperce Appify | Best Ecommerce Solution',
  description:
    "Boost Your Platform's Presence with Unmatched Performance and Reliable Support."
};

export default function FrontierPage() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
        <main className="min-h-screen flex items-center">
          <Image
            className="opacity-[80%] dark:opacity-30 bg-white"
            src={QaBg}
            alt="FrontierBg"
            layout="fill"
            objectFit="cover"
          />

          <div className="h-fit absolute top-0 w-full">
            <Navbar />
          </div>
          <div className="h-max w-[100vw]">
            <Hero />
          </div>
        </main>
        <Appify />
        <WhyChoose />
        <Newsletter />
        <Contact />
      </div>
    </>
  );
}
