import Contact from '@/components/Contact/Contact';

import Newsletter from '@/components/Home/Newsletter/Newsletter';
import Navbar from '@/components/Navbar/Navbar';

import Gallary from '@/components/Services/Tech/Headless/Gallary/Gallary';

import HeadlessEcom from '@/components/Services/Tech/Headless/HeadlessEcom/HeadlessEcom';
import Hero from '@/components/Services/Tech/Headless/Hero/Hero';
import WhyChoose from '@/components/Services/Tech/Headless/WhyChoose/WhyChoose';

import Image from 'next/image';
import HeadlessBg from '../../../../public/services-bg.png';

import { Metadata } from 'next';
import { HyperClickPromoPrompt } from '@/components/HyperClickPromoPrompt';
import DemoCredentials from '@/components/Services/Tech/Headless/Hero/minute/DemoCredentials';

export const metadata: Metadata = {
  title: 'Hyperce Headless | Best Ecommerce Suite Solution',
  description:
    "Hyperce Ecommerce Solution helps to strategize, execute, and amplify your brand's reach. Transform Your Business with Expert Marketing Solutions Today! So Hurry up and give us a call."
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center min-h-screen flex items-center">
        <div>
          <Image
            src={HeadlessBg}
            alt="HeadlessBg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-fit absolute top-0 w-full z-[100]">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <HeadlessEcom />
      <DemoCredentials
        demoLink="https://admin.hyperce.io"
        productName="Headless Panel"
        demoEmail="demouser@hyperce.io"
        demoPassword="Hyperce123#"
        qrSource="/admin.hyperce.qr.png"
      />
      <WhyChoose />
      <Gallary />
      {/* <Features /> */}
      <Newsletter />
      <Contact />
      <HyperClickPromoPrompt />
    </div>
  );
}
