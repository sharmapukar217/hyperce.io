import Newsletter from '@/components/Home/Newsletter/Newsletter';
import Navbar from '@/components/Navbar/Navbar';

import Promoter from '@/components/Services/Tech/Promoter/Promoter/Promoter';
import Hero from '@/components/Services/Tech/Promoter/Hero/Hero';
import WhyChoose from '@/components/Services/Tech/Promoter/WhyChoose/WhyChoose';
import Contact from '@/components/Contact/Contact';

import Image from 'next/image';
import PromoterBg from '../../../../public/promoter.png';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperce Promoter | Best Ecommerce Suite Solution',
  description:
    "Strategize, Execute, and Amplify Your Brand's Reach. Transform Your Ecommerce Business Platform with Expert Marketing Solutions Today! So hurry up and visit Hyperce Ecommerce Business Solution."
};

export default function PromoterPage() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className="min-h-screen flex items-center">
        <Image
          src={PromoterBg}
          alt="PromoterBg"
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
      <Promoter />
      <WhyChoose />
      <Newsletter />
      <Contact />
    </div>
  );
}
