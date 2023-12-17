import Newsletter from '@/components/Home/Newsletter/Newsletter';
import Navbar from '@/components/Navbar/Navbar';
import BL from '@/components/Services/BL/BL/BL';
import Hero from '@/components/Services/BL/Hero/Hero';
import WhyChoose from '@/components/Services/BL/WhyChoose/WhyChoose';
import Contact from '@/components/Contact/Contact';

import Image from 'next/image';
import QaBg from '../../public/hyperce-qa.png';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperce BL (Business & Legal)  | Best Ecommerce Solution',
  description:
    "Hyperce BL (Business & Legal) is a one-stop solution for all your business and legal needs. We provide a wide range of services, including business formation, trademark registration, and legal consultation. Our team of experts will help you with any questions or concerns you may have about your company's legal requirements."
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
        <BL />
        {/* <DemoCredentials
          demoLink="https://frontier.hyperce.io/admin"
          demoEmail="demo@hyperce.io"
          demoPassword="@Hyperce123"
          qrSource="/frontier.demo.qr.png"
          productName="Frontier Admin Panel"
        /> */}
        <WhyChoose />
        <Newsletter />
        <Contact />
      </div>
    </>
  );
}
