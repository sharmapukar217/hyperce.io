import Contact from '@/components/Contact/Contact';
import Navbar from '@/components/Navbar/Navbar';
import FAQ from '@/components/Services/NonTech/Incubate/FAQ/FAQ';
import Hero from '@/components/Services/NonTech/Incubate/Hero/Hero';
import Mission from '@/components/Services/NonTech/Incubate/Mission/Mission';
import OurIncubatees from '@/components/Services/NonTech/Incubate/OurIncubatees/OurIncubatees';
import WhyChoose from '@/components/Services/NonTech/Incubate/WhyChoose/WhyChoose';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hyperce Incubate | Best Ecommerce Suite Solution',
  description:
    "Hyperce Ecommerce Solution helps to strategize, execute, and amplify your brand's reach. Transform Your Business with Expert Marketing Solutions Today! So Hurry up and give us a call."
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center min-h-screen flex items-center">
        {/* <div>
        <Image
          src={HeadlessBg}
          alt="HeadlessBg"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <Mission />
      <WhyChoose />
      <FAQ />
      <OurIncubatees />
      <Contact />
    </div>
  );
}
